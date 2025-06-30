import { App, Modal, Setting } from "obsidian";

export class ColorPickerModal extends Modal {
	private initialColor: string;
	private onColorChange: (color: string) => void;

	constructor(app: App, initialColor: string, onColorChange?: (color: string) => void) {
		super(app);
		this.initialColor = initialColor || "#000000";
		this.onColorChange = onColorChange || (() => {});
	}

	onOpen() {
		const { contentEl } = this;

		contentEl.createEl("h3", { text: "Pick a border color" });

		// Color input
		const colorInput = contentEl.createEl("input", {
			type: "color",
			value: this.initialColor,
		});

		colorInput.style.width = "100%";
		colorInput.style.marginTop = "10px";

		colorInput.addEventListener("input", (e: Event) => {
			const target = e.target as HTMLInputElement;
			const selectedColor = target.value;

			this.onColorChange(selectedColor);
		});

		// Button row: Clear and Close
		new Setting(contentEl)
			.addButton((btn) =>
				btn
					.setButtonText("Clear")
					.setWarning()
					.onClick(() => {
						this.onColorChange("none"); // or "" if you prefer
						this.close();
					})
			)
			.addButton((btn) =>
				btn
					.setButtonText("Close")
					.setCta()
					.onClick(() => this.close())
			);
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
}
