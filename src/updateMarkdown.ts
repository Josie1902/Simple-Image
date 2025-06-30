import { App, MarkdownPostProcessorContext, TFile } from "obsidian";

async function updateImageAttribute(
	app: App,
	el: HTMLElement,
	ctx: MarkdownPostProcessorContext,
	updates: Record<string, string>
) {
	const filePath = ctx.sourcePath;
	const startLine = ctx.getSectionInfo(el)?.lineStart;

	if (startLine === undefined) return;

	const vaultFile = app.vault.getAbstractFileByPath(filePath);
	if (!(vaultFile instanceof TFile)) return;

	const fileText = await app.vault.read(vaultFile);
	const fileLines = fileText.split('\n');

	let line = startLine;
	let foundKeys = new Set<string>();
	let insertBefore = line;

	// 1. Search block until ===
	while (line < fileLines.length) {
		const trimmed = fileLines[line].trim();

		if (trimmed.startsWith('===')) {
			insertBefore = line;
			break;
		}

		for (const key in updates) {
			if (trimmed.startsWith(`${key}:`)) {
				fileLines[line] = `${key}: ${updates[key]}`;
				foundKeys.add(key);
			}
		}

		line++;
	}

	// 2. Insert missing keys before ===
	for (const key in updates) {
		if (!foundKeys.has(key)) {
			fileLines.splice(insertBefore, 0, `${key}: ${updates[key]}`);
			insertBefore++; // push future inserts downward
		}
	}

	const updatedText = fileLines.join('\n');
	await app.vault.modify(vaultFile, updatedText);
}

export async function updateImageBlock(app: App, el: HTMLElement, ctx: MarkdownPostProcessorContext, newWidth: number, newHeight: number) {
	await updateImageAttribute(app, el, ctx, {
		width: `${Math.round(newWidth)}px`,
		height: `${Math.round(newHeight)}px`
	});
}

export async function updateImageAlignment(app: App, el: HTMLElement, ctx: MarkdownPostProcessorContext, alignment: string) {
	await updateImageAttribute(app, el, ctx, {
		align: alignment
	});
}

export async function updateMarkdownWidth(app: App, el: HTMLElement, ctx: MarkdownPostProcessorContext, width: string) {
	await updateImageAttribute(app, el, ctx, {
		markdownWidth: width
	});
}

export async function updateMarkdownHeight(app: App, el: HTMLElement, ctx: MarkdownPostProcessorContext, newheight: string) {
	await updateImageAttribute(app, el, ctx, {
		height: newheight
	});
}

export async function updateMarkdownBorderColor(app: App, el: HTMLElement, ctx: MarkdownPostProcessorContext, borderColor: string) {
	await updateImageAttribute(app, el, ctx, {
		borderColor: borderColor
	});
}

export async function updateMarkdownShape(app: App, el: HTMLElement, ctx: MarkdownPostProcessorContext, shape: string) {
	await updateImageAttribute(app, el, ctx, {
		applyShape: shape
	});
}

export async function updateMarkdownBorderRadius(app: App, el: HTMLElement, ctx: MarkdownPostProcessorContext, borderRadius: string) {
	await updateImageAttribute(app, el, ctx, {
		borderRadius: borderRadius
	});
}
