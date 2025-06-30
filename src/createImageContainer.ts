import { App, MarkdownView } from 'obsidian';

export function createMarkdownImage(app: App) {
    const view = app.workspace.getActiveViewOfType(MarkdownView);
	if (!view) return;

    let content = "```simple-image\n";
    content += "align: center\n";
    content += "width: auto\n";
    content += "height: auto\n";
    content += "borderRadius: 0\n";
    content += "borderColor: none\n";
    content += "applyShape: default\n";
    content += "markdownWidth: 100%\n";
    content += "redirectUrl: none\n";
    content += "caption:\n";
    content += "===\n";
    content += "![Image Description](https://example.com/image.jpg)\n";
    content += "```\n";
	view.editor.replaceSelection(content);
}