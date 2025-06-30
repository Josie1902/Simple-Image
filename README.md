# 🖼️ Simple Image Plugin

A lightweight Obsidian plugin for inserting and customizing images with ease.

## ✨ Features

- ✅ **Resize** images (width, height, border radius)
- 🎯 **Align** images (left, center, right)
- 🎨 **Customize borders** with color and shape
- 💡 **Apply shapes** like `circle`, `square`, `heart`, and `star`
- 🔗 **Add redirect links** to make images clickable
- 📝 **Add image captions**: captions appear below the image and can be styled for better readability and presentation.
- 🔁 **Switch between inline and block modes** for layout flexibility


## 🧪 Usage

Insert a `simple-image` code block in your note by right clicking on the note and select "Add Image Container".

Default image container code markdown:
<pre>
```simple-image
align: center
width: auto
height: auto
borderRadius: 0
borderColor: none
applyShape: default
markdownWidth: 100%
redirectUrl: https://example.com
caption:
===
![Image Description](https://example.com/image.jpg)
```
</pre>

## 🛠️ Why Use This?

This plugin is perfect for Obsidian users who want:

1. Visual customization without HTML
2. Clean Markdown formatting
3. Control over layout and interactivity

## 📦 Installation
This plugin is currently in beta and can be installed via the BRAT plugin:

1. Make sure you have the BRAT plugin installed in Obsidian.
2. In BRAT settings, click "Add Beta Plugin".
3. Paste the GitHub repository URL for this plugin: https://github.com/Josie1902/Simple-Image
4. BRAT will install and track updates automatically.
5. Enable Simple Image Plugin from the Community Plugins tab in Obsidian.

## 💡 Tip

Use multiple images with inline layout for side-by-side galleries, and switch to block for full-width display.

## 🐞 Known Issues

When using multiple inline-block image containers side-by-side, new paragraphs entered immediately after may not render correctly. This issue does not occur with a single inline image block.

Workaround: use block layout mode or insert a manual break element after the inline group.

## 🚀 Future Development

- ✍️ Text wrapping around images — support for flowing text beside left- or right-aligned images (similar to traditional blog/article formatting).