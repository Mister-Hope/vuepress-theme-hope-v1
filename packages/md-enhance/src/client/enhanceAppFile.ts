import ChartJS from "@ChartJS";
import CodeDemo from "@CodeDemo";
import CodeGroup from "@CodeGroup";
import CodeGroupItem from "@CodeGroupItem";
import FlowChart from "@FlowChart";
import Mermaid from "@Mermaid";
import Presentation from "@Presentation";
import type { EnhanceApp } from "@mr-hope/vuepress-types";

const enhanceApp: EnhanceApp = ({ Vue }) => {
  if (MARKDOWN_ENHANCE_ALIGN) void import("./styles/align.styl");

  if (MARKDOWN_ENHANCE_CONTAINER) void import("./styles/container.styl");

  if (ChartJS.name) Vue.component("ChartJS", ChartJS);
  if (CodeDemo.name) Vue.component("CodeDemo", CodeDemo);
  if (CodeGroup.name) Vue.component("CodeGroup", CodeGroup);
  if (CodeGroupItem.name) Vue.component("CodeGroupItem", CodeGroupItem);

  if (MARKDOWN_ENHANCE_FOOTNOTE) void import("./styles/footnote.styl");

  if (FlowChart.name) Vue.component("FlowChart", FlowChart);

  if (Mermaid.name) Vue.component("Mermaid", Mermaid);

  if (Presentation.name) Vue.component("Presentation", Presentation);

  if (MARKDOWN_ENHANCE_TASKLIST) void import("./styles/tasklist.styl");

  if (MARKDOWN_ENHANCE_TEX) {
    void import("./styles/tex.styl");
    void import("katex/dist/katex.min.css");
  }
};

export default enhanceApp;
