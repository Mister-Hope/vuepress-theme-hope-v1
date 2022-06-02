---
home: true
title: Home
icon: home
heroImage: /logo.svg
heroText: vuepress-plugin-md-enhance
tagline: Enhancement for Markdown in VuePress
action:
  - text: Get Started 💡
    link: /guide/
    type: primary

  - text: Config 🛠
    link: /config.html

features:
  - title: Superscript and subscript support
    details: Your Markdown now suppport superscript and subscript
    link: /guide/sup-sub/

  - title: Footnote support
    details: Your Markdown now suppport footnotes
    link: /guide/footnote/

  - title: Custom Align
    details: Let you decide to align paragraphs in the way you like
    link: /guide/align/

  - title: Mark Support
    details: Mark words and sentences in Markdown
    link: /guide/mark/

  - title: Tasklist Support
    details: Use tasklist in Markdown
    link: /guide/tasklist/

  - title: Flowchart Support
    details: Create your flowchart in Markdown
    link: /guide/flowchart/

  - title: Mermaid Support
    details: Add mermaid diagram in Markdown
    link: /guide/mermaid/

  - title: Tex Support
    details: Markdown now have Tex Support so you can write your formula
    link: /guide/tex/

  - title: Code Demo Support
    details: You can insert code demo easily
    link: /guide/demo/

  - title: Presentation Support
    details: You can insert presentation in Markdown files directly
    link: /guide/presentation/

footer: MIT Licensed | Copyright © 2019-present Mr.Hope
copyrightText: false
---

### Install

:::: code-group

::: code-group-item yarn

```bash
yarn add -D vuepress-plugin-md-enhance
```

:::

::: code-group-item npm

```bash
npm i -D vuepress-plugin-md-enhance
```

:::

::::

### Usage

:::: code-group

::: code-group-item ts

```ts
// .vuepress/config.ts
export default {
  plugins: [
    [
      "md-enhance",
      {
        // your options
      },
    ],
  ],
};
```

:::

::: code-group-item js

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      "md-enhance",
      {
        // your options
      },
    ],
  ],
};
```

:::

::::
