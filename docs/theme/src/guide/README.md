---
title: Guide
icon: creative
category: guide
tags:
  - intro
---

::: tip

If you met a bug while using, you can open an issue [here](https://github.com/vuepress-theme-hope/vuepress-theme-hope-v1/issues)

:::

## ✨Theme Features

The theme maintains the style of the `@vuepress/theme-default`, and adds a lot of features and optimizations:

<!-- more -->

### Markdown Enhance

Added more syntax to Markdown, enriching documentation and blog writing

- [Badge `<Badge />`](markdown/components.md#badge-mybadge): Added color support
- [CodeGroup `<CodeGroup />`](markdown/components.md#codegroup-codegroupitem)
- [Tex Support](markdown/tex.md)
- [Custom alignment](markdown/align.md)
- [FlowChart](markdown/flowchart.md)
- [Mermaid Diagram](markdown/mermaid.md)
- [Mark](markdown/mark.md)
- [Task list](markdown/tasklist.md)
- [Subscript and Supercript](markdown/sup-sub.md)
- [Code demo](markdown/demo.md)
- [Presentation](markdown/presentation.md)

### Layout

- Optimization of other built-in components:

  - Add `prefix` and `icon` for [Navbar](layout/navbar.md) [Sidebar](layout/sidebar.md)

- Added:

  - [Path navigation](layout/page.md#breadcrumb)

  - [Custom footer](layout/page.md#footer-support)

  - [Default homepage optimization](layout/home.md):

    - Features have new animations and support jump
    - Multiple action buttons
    - Widescreen layout optimization

### Interface

- [Theme colors](interface/theme-color.md): allowing you to switch dynamically during browsing

- [Dark mode](interface/darkmode.md): allowing you to switch manually or apply automatically according to device settings

- [Icon support](interface/icon.md)

- [Full Screen Button](interface/others.md#fullscreen-button)

- [Back to top button](interface/others.md#back-to-top-button)

### Page Enhance

- [One-click copy code](feature/copy-code.md)

- [Picture preview feature](feature/photo-swipe.md): supports zooming, dragging, sliding browsing, sharing and downloading

- [Copyright info](feature/copyright.md)

- [Comment System](feature/comment.md)

- [Article info](feature/page-info.md)

  - Reading Counts
  - Author and writing date
  - Automatically generated word count and estimated reading time
  - Tags and Categorys

- [Encryption of specific articles and paths](feature/encrypt.md)

### Features

- [PWA support](feature/pwa.md)

- [Feed generation](feature/feed.md)

- [SEO enhancement](feature/seo.md)

- [Sitemap generation](feature/sitemap.md)

- [Information from Git](feature/git.md)

- [TypeScript support](feature/typescript.md)

### Blog

- [Social follow button and page social sharing][add-this]

- [Article list with sticky support, and summary autogeneration](blog/intro.md)

- [Cateory and tag list](blog/category-and-tags.md)

- [Timeline](blog/timeline.md)

- [Star article](blog/article.md)

- [New blog homepage layout](blog/home.md)

## 🧩Build-in Plugins

The theme also includes the following plugins, you can use them in other themes or directly.

- [vuepress-plugin-comment1][comment]: Comment and page info feature

- [@mr-hope/vuepress-plugin-components][components]: Provide some out of box plugins

- [vuepress-plugin-copy-code1][copy-code]: Provide copy button for code blocks

- [vuepress-plugin-feed1][feed]: Feed support

- [@mr-hope/vuepress-plugin-git][git]: Info plugin based on git

- [@mr-hope/vuepress-plugin-pwa][pwa]: PWA support

- [vuepress-plugin-reading-time1][reading-time]: Expect reading time and words count

- [vuepress-plugin-seo1][seo]: SEO Enhancement Plugin

- [@mr-hope/vuepress-plugin-sitemap][sitemap]: Sitemap Generator for your site

- @mr-hope/vuepress-plugin-smooth-scroll: Smooth scrolling (Remove old browers polyfill)

- [vuepress-plugin-active-hash][active-hash]: update active hash in links automatically

- [vuepress-plugin-add-this][add-this]: Provide sociel share and follow function

- [vuepress-plugin-md-enhance][md-enhance]: Provide more Markdown syntax

- [vuepress-plugin-photo-swipe][photo-swipe]: Make the site’s picture support click zoom

[active-hash]: https://vuepress-theme-hope.github.io/v1/active-hash/
[add-this]: https://vuepress-theme-hope.github.io/v1/add-this/
[comment]: https://vuepress-theme-hope.github.io/v1/comment/
[components]: https://vuepress-theme-hope.github.io/v1/components/
[copy-code]: https://vuepress-theme-hope.github.io/v1/copy-code/
[feed]: https://vuepress-theme-hope.github.io/v1/feed/
[git]: https://vuepress-theme-hope.github.io/v1/git/
[md-enhance]: https://vuepress-theme-hope.github.io/v1/md-enhance/
[photo-swipe]: https://vuepress-theme-hope.github.io/v1/photo-swipe/
[pwa]: https://vuepress-theme-hope.github.io/v1/pwa/
[reading-time]: https://vuepress-theme-hope.github.io/v1/reading-time/
[seo]: https://vuepress-theme-hope.github.io/v1/seo/
[sitemap]: https://vuepress-theme-hope.github.io/v1/sitemap/
