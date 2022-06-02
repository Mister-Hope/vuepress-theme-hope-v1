---
home: true
title: 主页
icon: home
heroImage: /logo.svg
heroText: "@mr-hope/vuepress-plugin-reading-time"
tagline: 预计阅读时间与字数统计生成
footer: MIT Licensed | Copyright © 2019-present Mr.Hope
copyrightText: false
---

这个插件将会向 page 对象注入预计阅读时间与字数统计。

会自动向 page 对象注入 `readingTime`:

```ts
interface ReadingTime {
  /** 分钟数 */
  minutes: number;
  /** 字数 */
  words: number;
}
```

## 使用插件

### 安装

:::: code-group

::: code-group-item yarn

```bash
yarn add -D @mr-hope/vuepress-plugin-reading-time
```

:::

::: code-group-item npm

```bash
npm i -D @mr-hope/vuepress-plugin-reading-time
```

:::

::::

### 使用

:::: code-group

::: code-group-item ts

```ts
// .vuepress/config.ts
export default {
  plugins: [
    [
      "@mr-hope/reading-time",
      {
        // 配置选项
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
      "@mr-hope/reading-time",
      {
        // 你的选项
      },
    ],
  ],
};
```

:::

::::

## 插件选项

### wordPerminute

- 类型: `number`
- 默认值: `300`

每分钟阅读字数

### locales

```ts
interface ReadingTimeLocaleData {
  /**
   * 字数模板，模板中 `$word` 会被自动替换为字数
   */
  word: string;

  /**
   * 小于一分钟文字
   */
  less1Minute: string;

  /**
   * 时间模板
   */
  time: string;
}
```

国际化配置。
