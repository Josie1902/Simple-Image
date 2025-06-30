export function createOverlayButtonGroup<T extends string>(
  container: HTMLElement,
  overlayClass: string,
  options: [T, (container: HTMLElement) => HTMLElement][],
  onClick: (option: T) => void
) {
  const overlay = container.createEl("div", { cls: overlayClass });

  for (const [value, createBtn] of options) {
    const button = createBtn(overlay);
    button.addEventListener("click", () => onClick(value));
  }

  return container
}
