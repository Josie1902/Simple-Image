export function alignButton(container: HTMLElement): HTMLElement {
	const customiseButton = container.createDiv({
		cls: "toolkit alignment-button",
	});

	const alignCenterIcon = customiseButton.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttr("xmlns", "http://www.w3.org/2000/svg");
		svg.setAttr("width", "24");
		svg.setAttr("height", "24");
		svg.setAttr("viewBox", "0 0 24 24");
		svg.setAttr("fill", "none");
		svg.setAttr("stroke", "currentColor");
		svg.setAttr("stroke-width", "2");
		svg.setAttr("stroke-linecap", "round");
		svg.setAttr("stroke-linejoin", "round");
	});

	alignCenterIcon.createSvg("path", "", (path) => {
		path.setAttr("d", "M3 12H18");
	});
	alignCenterIcon.createSvg("path", "", (path) => {
		path.setAttr("d", "M3 18H18");
	});
	alignCenterIcon.createSvg("path", "", (path) => {
		path.setAttr("d", "M3 6H18");
	});

	return customiseButton;
}

export function alignLeftButton(container: HTMLElement): HTMLElement {
	const customiseButton = container.createDiv({
		cls: "overlay-buttons align-left-button",
	});

	const alignLeftIcon = customiseButton.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttr("xmlns", "http://www.w3.org/2000/svg");
		svg.setAttr("width", "24");
		svg.setAttr("height", "24");
		svg.setAttr("viewBox", "0 0 24 24");
		svg.setAttr("fill", "none");
		svg.setAttr("stroke", "currentColor");
		svg.setAttr("stroke-width", "2");
		svg.setAttr("stroke-linecap", "round");
		svg.setAttr("stroke-linejoin", "round");
	});

	alignLeftIcon.createSvg("path", "", (path) => {
		path.setAttr("d", "M15 12H3");
	});
	alignLeftIcon.createSvg("path", "", (path) => {
		path.setAttr("d", "M17 18H3");
	});
	alignLeftIcon.createSvg("path", "", (path) => {
		path.setAttr("d", "M21 6H3");
	});

	return customiseButton;
}

export function alignCenterButton(container: HTMLElement): HTMLElement {
	const customiseButton = container.createDiv({
		cls: "overlay-buttons align-center-button",
	});

	const alignCenterIcon = customiseButton.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttr("xmlns", "http://www.w3.org/2000/svg");
		svg.setAttr("width", "24");
		svg.setAttr("height", "24");
		svg.setAttr("viewBox", "0 0 24 24");
		svg.setAttr("fill", "none");
		svg.setAttr("stroke", "currentColor");
		svg.setAttr("stroke-width", "2");
		svg.setAttr("stroke-linecap", "round");
		svg.setAttr("stroke-linejoin", "round");
	});

	alignCenterIcon.createSvg("path", "", (path) => {
		path.setAttr("d", "M17 12H7");
	});
	alignCenterIcon.createSvg("path", "", (path) => {
		path.setAttr("d", "M19 18H5");
	});
	alignCenterIcon.createSvg("path", "", (path) => {
		path.setAttr("d", "M21 6H3");
	});

	return customiseButton;
}

export function alignRightButton(container: HTMLElement): HTMLElement {
	const customiseButton = container.createDiv({
		cls: "overlay-buttons align-right-button",
	});

	const alignRightIcon = customiseButton.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttr("xmlns", "http://www.w3.org/2000/svg");
		svg.setAttr("width", "24");
		svg.setAttr("height", "24");
		svg.setAttr("viewBox", "0 0 24 24");
		svg.setAttr("fill", "none");
		svg.setAttr("stroke", "currentColor");
		svg.setAttr("stroke-width", "2");
		svg.setAttr("stroke-linecap", "round");
		svg.setAttr("stroke-linejoin", "round");
	});

	alignRightIcon.createSvg("path", "", (path) => {
		path.setAttr("d", "M21 12H9");
	});
	alignRightIcon.createSvg("path", "", (path) => {
		path.setAttr("d", "M21 18H7");
	});
	alignRightIcon.createSvg("path", "", (path) => {
		path.setAttr("d", "M21 6H3");
	});

	return customiseButton;
}

export function compressExpandButton(container: HTMLElement): HTMLElement {
	const customiseButton = container.createDiv({
		cls: "toolkit compress-expand-button",
	});

	const icon = customiseButton.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttr("xmlns", "http://www.w3.org/2000/svg");
		svg.setAttr("width", "24");
		svg.setAttr("height", "24");
		svg.setAttr("viewBox", "0 0 24 24");
		svg.setAttr("fill", "none");
		svg.setAttr("stroke", "currentColor");
		svg.setAttr("stroke-width", "2");
		svg.setAttr("stroke-linecap", "round");
		svg.setAttr("stroke-linejoin", "round");
	});

	icon.createSvg("path", "", (path) => {
		path.setAttr("d", "m20 17-5-5 5-5");
	});
	icon.createSvg("path", "", (path) => {
		path.setAttr("d", "m4 17 5-5-5-5");
	});

	return customiseButton;
}

export function compressButton(container: HTMLElement): HTMLElement {
	const customiseButton = container.createDiv({
		cls: "overlay-buttons compress-button",
	});

	const icon = customiseButton.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttr("xmlns", "http://www.w3.org/2000/svg");
		svg.setAttr("width", "24");
		svg.setAttr("height", "24");
		svg.setAttr("viewBox", "0 0 24 24");
		svg.setAttr("fill", "none");
		svg.setAttr("stroke", "currentColor");
		svg.setAttr("stroke-width", "2");
		svg.setAttr("stroke-linecap", "round");
		svg.setAttr("stroke-linejoin", "round");
	});

	icon.createSvg("path", "", (path) => {
		path.setAttr("d", "m20 17-5-5 5-5");
	});
	icon.createSvg("path", "", (path) => {
		path.setAttr("d", "m4 17 5-5-5-5");
	});

	return customiseButton;
}

export function expandButton(container: HTMLElement): HTMLElement {
	const expandBtn = container.createDiv({
		cls: "overlay-buttons expand-button",
	});

	const icon = expandBtn.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttr("xmlns", "http://www.w3.org/2000/svg");
		svg.setAttr("width", "24");
		svg.setAttr("height", "24");
		svg.setAttr("viewBox", "0 0 24 24");
		svg.setAttr("fill", "none");
		svg.setAttr("stroke", "currentColor");
		svg.setAttr("stroke-width", "2");
		svg.setAttr("stroke-linecap", "round");
		svg.setAttr("stroke-linejoin", "round");
	});

	icon.createSvg("path", "", (path) => {
		path.setAttr("d", "m9 7-5 5 5 5"); 
	});
	icon.createSvg("path", "", (path) => {
		path.setAttr("d", "m15 7 5 5-5 5"); 
	});

	return expandBtn;
}

export function colorPickerButton(container: HTMLElement): HTMLElement {
	const colorBtn = container.createDiv({
		cls: "toolkit color-picker-button",
	});

	// Add palette icon (Lucide)
	const icon = colorBtn.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttr("xmlns", "http://www.w3.org/2000/svg");
		svg.setAttr("width", "24");
		svg.setAttr("height", "24");
		svg.setAttr("viewBox", "0 0 24 24");
		svg.setAttr("fill", "none");
		svg.setAttr("stroke", "currentColor");
		svg.setAttr("stroke-width", "2");
		svg.setAttr("stroke-linecap", "round");
		svg.setAttr("stroke-linejoin", "round");
	});

	icon.createSvg("path", "", (path) => {
		path.setAttr("d", "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z");
	});
	icon.createSvg("circle", "", (c) => c.setAttrs({ cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor" }));
	icon.createSvg("circle", "", (c) => c.setAttrs({ cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor" }));
	icon.createSvg("circle", "", (c) => c.setAttrs({ cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor" }));
	icon.createSvg("circle", "", (c) => c.setAttrs({ cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor" }));

	return colorBtn;
}

export function applyShapeButton(container: HTMLElement): HTMLElement {
	const shapeBtn = container.createDiv({
		cls: "toolkit apply-shape-button",
	});

	// Add rectangle-horizontal icon (Lucide)
	const icon = shapeBtn.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttr("xmlns", "http://www.w3.org/2000/svg");
		svg.setAttr("width", "24");
		svg.setAttr("height", "24");
		svg.setAttr("viewBox", "0 0 24 24");
		svg.setAttr("fill", "none");
		svg.setAttr("stroke", "currentColor");
		svg.setAttr("stroke-width", "2");
		svg.setAttr("stroke-linecap", "round");
		svg.setAttr("stroke-linejoin", "round");
	});

	icon.createSvg("rect", "", (rect) => {
		rect.setAttrs({
			x: "2",
			y: "6",
			width: "20",
			height: "12",
			rx: "2"
		});
	});

	return shapeBtn;
}

export function rectangleShapeButton(container: HTMLElement): HTMLElement {
	const btn = container.createDiv({ cls: "overlay-buttons rectangle-shape-button" });

	const icon = btn.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttrs({
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
		});
	});

	icon.createSvg("rect", "", (rect) => {
		rect.setAttrs({ x: "2", y: "6", width: "20", height: "12", rx: "2" });
	});

	return btn;
}


export function circleShapeButton(container: HTMLElement): HTMLElement {
	const btn = container.createDiv({ cls: "overlay-buttons circle-shape-button" });

	const icon = btn.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttrs({
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
		});
	});

	icon.createSvg("circle", "", (circle) => {
		circle.setAttrs({ cx: "12", cy: "12", r: "10" });
	});

	return btn;
}

export function heartShapeButton(container: HTMLElement): HTMLElement {
	const btn = container.createDiv({ cls: "overlay-buttons heart-shape-button" });

	const icon = btn.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttrs({
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
		});
	});

	icon.createSvg("path", "", (path) => {
		path.setAttr("d", "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z");
	});

	return btn;
}

export function starShapeButton(container: HTMLElement): HTMLElement {
	const btn = container.createDiv({ cls: "overlay-buttons star-shape-button" });

	const icon = btn.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttrs({
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
		});
	});

	icon.createSvg("path", "", (path) => {
		path.setAttr("d", "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z");
	});

	return btn;
}

export function squareShapeButton(container: HTMLElement): HTMLElement {
	const btn = container.createDiv({ cls: "overlay-buttons square-shape-button" });

	const icon = btn.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttrs({
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
		});
	});

	icon.createSvg("rect", "", (rect) => {
		rect.setAttrs({ x: "4", y: "4", width: "16", height: "16", rx: "0" });
	});

	return btn;
}

// ToDo: textWrapButton should be used to wrap text around the image
export function textWrapButton(container: HTMLElement): HTMLElement {
	const btn = container.createDiv({ cls: "toolkit textwrap-button" });

	const icon = btn.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttrs({
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
		});
	});

	icon.createSvg("path", "", (path) => path.setAttr("d", "M15 12h6"));
	icon.createSvg("path", "", (path) => path.setAttr("d", "M15 6h6"));
	icon.createSvg("path", "", (path) => path.setAttr("d", "M3 13l3.553-7.724a.5.5 0 0 1 .894 0L11 13"));
	icon.createSvg("path", "", (path) => path.setAttr("d", "M3 18h18"));
	icon.createSvg("path", "", (path) => path.setAttr("d", "M3.92 11h6.16"));

	return btn;
}

export function leftArrowButton(container: HTMLElement): HTMLElement {
	const btn = container.createDiv({ cls: "overlay-buttons left-arrow-button" });

	const icon = btn.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttrs({
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
		});
	});

	icon.createSvg("path", "", (p) => p.setAttr("d", "m12 19-7-7 7-7"));
	icon.createSvg("path", "", (p) => p.setAttr("d", "M19 12H5"));

	return btn;
}

export function crossButton(container: HTMLElement): HTMLElement {
	const btn = container.createDiv({ cls: "overlay-buttons cross-button" });

	const icon = btn.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttrs({
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
		});
	});

	icon.createSvg("line", "", (l) => l.setAttrs({ x1: "18", y1: "6", x2: "6", y2: "18" }));
	icon.createSvg("line", "", (l) => l.setAttrs({ x1: "6", y1: "6", x2: "18", y2: "18" }));

	return btn;
}

export function rightArrowButton(container: HTMLElement): HTMLElement {
	const btn = container.createDiv({ cls: "overlay-buttons right-arrow-button" });

	const icon = btn.createSvg("svg", "svg-icon", (svg) => {
		svg.setAttrs({
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
		});
	});

	icon.createSvg("path", "", (p) => p.setAttr("d", "m12 5 7 7-7 7"));
	icon.createSvg("path", "", (p) => p.setAttr("d", "M5 12h14"));

	return btn;
}
