import { App, MarkdownPostProcessorContext } from "obsidian";
import { updateImageBlock, updateMarkdownBorderRadius } from "./updateMarkdown";

export function makeResizable(
	app: App,
	el: HTMLElement,
	ctx: MarkdownPostProcessorContext,
	container: HTMLElement,
	img: HTMLImageElement
) {
	const resizers = container.querySelectorAll(".resizer");
	let isResizing = false;
	let currentResizer: HTMLElement;
	let startX = 0, startY = 0;
	let startWidth = 0, startHeight = 0;
	let aspectRatio = 1;
    let newWidth = startWidth;
	let newHeight = startHeight;

	resizers.forEach(resizer => {
		resizer.addEventListener("mousedown", (e: MouseEvent) => {
			e.preventDefault();
			isResizing = true;
			currentResizer = resizer as HTMLElement;
			startX = e.clientX;
			startY = e.clientY;
			startWidth = img.offsetWidth;
			startHeight = img.offsetHeight;
            newWidth = startWidth;
	        newHeight = startHeight;
			aspectRatio = startWidth / startHeight;

			document.addEventListener("mousemove", onMouseMove);
			document.addEventListener("mouseup", onMouseUp);
		});
	});

	function onMouseMove(e: MouseEvent) {
		if (!isResizing) return;

		const dx = e.clientX - startX;
		const dy = e.clientY - startY;

		// Directional multipliers depending on corner
		let xMultiplier = 0;

		// Proportional resizing for corners
		if (currentResizer.classList.contains("top-left")) {
			xMultiplier = -1;
            // Use dominant delta to ensure uniform scale
		    const drag = Math.max(Math.abs(dx), Math.abs(dy));
		    const delta = Math.sign(dx + dy) * drag;

		    // Compute new width and height
		    newWidth = startWidth + delta * xMultiplier;
		    newHeight = newWidth / aspectRatio;
        } else if (currentResizer.classList.contains("bottom-right")) {
            xMultiplier = 1;    
		    const drag = Math.max(Math.abs(dx), Math.abs(dy));
		    const delta = Math.sign(dx + dy) * drag;
            
		    newWidth = startWidth + delta * xMultiplier;
		    newHeight = newWidth / aspectRatio;
		} 
		
		// Usual resizing for edges
		else if (currentResizer.classList.contains("left")) {
			newWidth = startWidth - dx;
		} else if (currentResizer.classList.contains("right")) {
			newWidth = startWidth + dx;
		} else if (currentResizer.classList.contains("top")) {
			newHeight = startHeight - dy;
		} else if (currentResizer.classList.contains("bottom")) {
			newHeight = startHeight + dy;
		}

		// Minimum size check
		if (newWidth >= 40 && newHeight >= 40) {
			img.style.width = `${newWidth}px`;
			img.style.height = `${newHeight}px`;
		}
	}

	function onMouseUp() {
		isResizing = false;
		document.removeEventListener("mousemove", onMouseMove);
		document.removeEventListener("mouseup", onMouseUp);

		const finalWidth = parseFloat(img.style.width);
		const finalHeight = parseFloat(img.style.height);
		updateImageBlock(app, el, ctx, finalWidth, finalHeight);
	}
}

export function makeBorderRadiusAdjustable(
	app: App,
	el: HTMLElement,
	ctx: MarkdownPostProcessorContext,
	img: HTMLImageElement
) {
	const radiusHandle = el.querySelector(".border-radius-handle") as HTMLElement;
	if (!radiusHandle) return;

	let isDragging = false;
	let startX = 0;
	let startRadius = 0;

	radiusHandle.addEventListener("mousedown", (e: MouseEvent) => {
		e.preventDefault();
		isDragging = true;
		startX = e.clientX;
		startRadius = parseFloat(getComputedStyle(img).borderRadius) || 0;

		document.addEventListener("mousemove", onDrag);
		document.addEventListener("mouseup", stopDrag);
	});

	function onDrag(e: MouseEvent) {
		if (!isDragging) return;
		const dx = e.clientX - startX;
		let newRadius = Math.max(0, startRadius + dx);

		img.style.borderRadius = `${newRadius}px`;
	}

	function stopDrag() {
		isDragging = false;
		document.removeEventListener("mousemove", onDrag);
		document.removeEventListener("mouseup", stopDrag);

		const finalRadius = parseFloat(img.style.borderRadius);
		updateMarkdownBorderRadius(app, el, ctx, `${finalRadius}px`);
	}
}