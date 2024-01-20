---
slug: how-it-works
title: How it works
authors: [valrepsys, arijus]
  name: Gao Wei
  title: Docusaurus Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [dhub, hello, docusaurus, features]
---

## Framework

[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

## Page structure

Fuck me

## Images

You can upload like this[![A closeup shot of rocks](/img/rocks.jpg 'A photo by Nick Nice')](https://unsplash.com/photos/shallow-focus-photography-of-gravels-zwjSCTItiZU)Or like this[![A closeup shop of plants](./plants.jpg 'A photo by Nahil Naseer')](https://unsplash.com/photos/green-leaf-plants-xljtGZ2-P3Y)Truncate

Use a `<!--` `truncate` `-->` comment to limit blog post size in the list view.

```
<!--truncate-->
```

## React components

They work

```js
<button onClick={() => alert('button clicked!')}>Click me!</button>
```

```mdx-code-block
<button onClick={() => alert('button clicked!')}>Click me!</button>
```

## Tags

yep tags

## Authors

it supports multiple authors
