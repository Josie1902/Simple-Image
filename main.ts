
import { alignButton, alignCenterButton, alignLeftButton, alignRightButton, applyShapeButton, circleShapeButton, colorPickerButton, compressButton, compressExpandButton, crossButton, expandButton, heartShapeButton, leftArrowButton, rectangleShapeButton, rightArrowButton, squareShapeButton, starShapeButton, textWrapButton } from 'src/buttons';
import { createMarkdownImage } from 'src/createImageContainer';
import { makeBorderRadiusAdjustable, makeResizable } from 'src/imageResizer';
import { Plugin} from 'obsidian';
import { ColorPickerModal } from 'src/colorPickerModal';
import { updateImageAlignment, updateMarkdownBorderColor, updateMarkdownHeight, updateMarkdownShape, updateMarkdownWidth } from 'src/updateMarkdown';
import { createOverlayButtonGroup } from 'src/buttonHeper';

export default class MyPlugin extends Plugin {

	async onload() {
		this.addCommand({
    	  id: "image-plugin",
    	  name: "Add Image Container",
    	  callback: () => {
    	   createMarkdownImage(this.app);
    	  }
    	});

		this.registerEvent(
			this.app.workspace.on('editor-menu', (menu, editor, view) => {
				menu.addItem((item) => {
					item.setTitle('Add Image Container')
					item.setIcon('image')
					item.onClick(() => {
						createMarkdownImage(this.app);
					});
				});
			})
		);

		this.registerMarkdownCodeBlockProcessor('simple-image', (source, el, ctx) => {
			const parts = source.split(/^===$/m);
			
			const header = parts[0].trim();
			const lines = header.split('\n');
			const attributes: Record<string, string> = {};

			for (const line of lines) {
				const match = line.match(/(\w+):\s*(.*)/);
				if (match) {
					attributes[match[1]] = match[2];
				}
			}

			const imageMarkdown = parts[1].trim();
			const imageMatch = imageMarkdown.match(/!\[.*?\]\((.*?)\)/);
			const imageUrl = imageMatch ? imageMatch[1] : '';
			const imageDescription = imageMarkdown.match(/\[(.*?)\]/);
			const imageDescriptionText = imageDescription ? imageDescription[1] : '';

			const imageContainer = el.createEl('div', {
				attr: {
					class: 'image-container',
					style: `justify-content: ${attributes.align || 'center'};`
				}
			})


			let borderRadius = attributes['borderRadius'] || '0';
			if (attributes.applyShape == "circle") {
				borderRadius = '50%';
			}

			let width = attributes.width || 'auto';

			let height = attributes.height || 'auto';
			if (attributes.applyShape == "circle" || attributes.applyShape == "square") {
				if (width !== height) {
					height = width;
					attributes.height = width;
					updateMarkdownHeight(this.app, imageContainer, ctx, width);
				}
			}

			let wrapperStyle = '';
			if (attributes.borderColor) {
				if (attributes.applyShape == "circle" || attributes.applyShape == "square" || attributes.applyShape == "default") {
					wrapperStyle = `border-radius: ${borderRadius}; border: 2px solid ${attributes.borderColor};`;
				}
				else if (attributes.applyShape == "heart") {
					wrapperStyle = `filter: drop-shadow(2px 0 0 ${attributes.borderColor}) drop-shadow(-2px 0 0 ${attributes.borderColor}) drop-shadow(0 2px 0 ${attributes.borderColor}) drop-shadow(0 -2px 0 ${attributes.borderColor}); `;
				}
				else if (attributes.applyShape == "star") {
					wrapperStyle = `filter: drop-shadow(2px 0 0 ${attributes.borderColor}) drop-shadow(-2px 0 0 ${attributes.borderColor}) drop-shadow(0 2px 0 ${attributes.borderColor}) drop-shadow(0 -2px 0 ${attributes.borderColor}); `;
				}
			} else { wrapperStyle = 'none';}

			const wrapper = imageContainer.createEl('div',  { 
				attr: {
					class: `image-shape ${attributes.applyShape}-wrapper`,
					style: `${wrapperStyle}`
				},
			});

			if (attributes.caption !== "") {
				imageContainer.createEl('div', {
					cls: 'image-caption',
					text: attributes.caption
				});
			}

			const shouldLink = attributes.redirectUrl && attributes.redirectUrl !== 'none';

			const anchorContainer = shouldLink
			  ? wrapper.createEl('a', {
			      attr: {
			        href: attributes.redirectUrl,
			        target: '_blank',
			        rel: 'noopener noreferrer',
			      },
			    })
			  : wrapper;
			
			const image = anchorContainer.createEl('img', {
			  attr: {
			    class: attributes.applyShape || 'default',
			    alt: imageDescriptionText,
			    src: imageUrl,
			    style: `
			      width: ${width};
			      height: ${height};
			      text-align: ${attributes.align || 'center'};
			      border-radius: ${borderRadius};
			    `,
			  },
			});

			image.onerror = () => {
				image.classList.add('broken');
			};

			if  (attributes.applyShape == "circle" || attributes.applyShape == "square") {
				["top-left", "bottom-right"].forEach(corner => {
					imageContainer.createEl("div", { cls: `resizer ${corner}` });
				});
			} else {
				["top-left", "bottom-right", "left", "right", "top", "bottom"].forEach(corner => {
					imageContainer.createEl("div", { cls: `resizer ${corner}` });
				});
			}

			makeResizable(this.app, el, ctx, imageContainer, image);
			
			imageContainer.createDiv({
				cls: "resizer border-radius-handle",
			});

			makeBorderRadiusAdjustable(this.app, imageContainer, ctx, image);

			let parent = el.parentElement;

			if (parent) {
				if (attributes.markdownWidth == "100%") {
					parent.style.width = "100%";
					parent.addClass("markdown-block");
				} else {
					parent.style.width = image.style.width;
					parent.addClass("markdown-inline-block");
				}
			}
			
  			if (parent && 
				parent.className.includes("cm-preview-code-block")) {	

				// Align image within the container
				const alignToolKit = createOverlayButtonGroup(
				  alignButton(imageContainer),
				  "overlay",
				  [
				    ['left', alignLeftButton],
				    ['center', alignCenterButton],
				    ['right', alignRightButton]
				  ],
				  (alignment) => updateImageAlignment(this.app, imageContainer, ctx, alignment)
				);

				// Compress and expand code markdown width
				const compressToolKit = createOverlayButtonGroup(
				  compressExpandButton(imageContainer),
				  "overlay",
				  [
				    [image.style.width, compressButton],
				    ["100%", expandButton],
				  ],
				  (width) => {
				    parent.style.width = width;
				    updateMarkdownWidth(this.app, imageContainer, ctx, width);
				  }
				);

				// Apply shape to image
				const applyShapeToolKit = createOverlayButtonGroup(
				  applyShapeButton(imageContainer),
				  "overlay",
				  [
				    ["default", rectangleShapeButton],
				    ["square", squareShapeButton],
				    ["circle", circleShapeButton],
				    ["heart", heartShapeButton],
				    ["star", starShapeButton],
				  ],
				  (shape) => updateMarkdownShape(this.app, imageContainer, ctx, shape)
				);
				
				// Color picker for border color
				const colorToolKit = colorPickerButton(imageContainer);
				colorToolKit.addEventListener("click", () => {
					new ColorPickerModal(this.app, attributes.borderColor, (newColor) => {
						attributes.borderColor = newColor;
						updateMarkdownBorderColor(this.app, imageContainer, ctx, newColor);
					}).open();
				})
				
				// Create a wrapper for toolkit buttons
				const buttonWrapper = document.createElement("div");
				buttonWrapper.addClass("context-menu-wrapper");

				const toolkitButtons = [alignToolKit, compressToolKit, applyShapeToolKit, colorToolKit];
				toolkitButtons.forEach(button => {
				  buttonWrapper.appendChild(button);
				});
				document.body.appendChild(buttonWrapper);

				// Toolkit should only appear on right click of the image
				image.addEventListener("contextmenu", (e) => {
				  e.preventDefault();

				  // Position the wrapper near the mouse cursor
				  buttonWrapper.style.left = `${e.pageX}px`;
				  buttonWrapper.style.top = `${e.pageY}px`;
				  buttonWrapper.style.display = "flex";
				});

				document.addEventListener("click", (e) => {
				  if (!buttonWrapper.contains(e.target as Node)) {
				    buttonWrapper.style.display = "none";
				  }
				})
			}
		});
	}

	onunload() {

	}

}