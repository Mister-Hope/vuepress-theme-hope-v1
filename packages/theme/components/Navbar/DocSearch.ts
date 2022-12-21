import { createElement } from "preact";
import Vue from "vue";
import docsearch from "@docsearch/js";
import "@docsearch/css";

import type { AlgoliaOption } from "vuepress-typings";
import type { DocSearchProps } from "@docsearch/react";
import type { PropType } from "vue";

export default Vue.extend({
  name: "DocSearch",

  props: {
    options: { type: Object as PropType<AlgoliaOption>, required: true },
  },

  watch: {
    $lang(newValue: string): void {
      this.update(this.options, newValue);
    },

    options(newValue: AlgoliaOption): void {
      this.update(newValue, this.$lang);
    },
  },

  mounted(): void {
    this.initialize(this.options, this.$lang);
  },

  methods: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    initialize(userOptions: AlgoliaOption, _lang: string): void {
      (docsearch as (props: DocSearchProps & { container: string }) => void)({
        container: "#docsearch",
        placeholder: this.$themeConfig.searchPlaceholder || "",
        ...userOptions,
        searchParameters: userOptions.searchParameters || {},

        // transform full url to route path
        transformItems: (items) =>
          items.map((item) => ({
            ...item,
            // the `item.url` is full url with protocol and hostname
            // so we have to transform it to vue-router path
            url: this.resolveRoutePathFromUrl(item.url),
          })),

        // render the hit component with custom `onClick` handler
        // FIXME: Check this
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        hitComponent: ({ hit, children }) =>
          createElement(
            "a",
            {
              href: hit.url,
              onClick: (event: Event): void => {
                // We rely on the native link scrolling when user is
                // already on the right anchor because Vue Router doesn’t
                // support duplicated history entries.
                if (this.$route.fullPath === hit.url) return;

                const fullPath = `${window.location.origin}${hit.url}`;
                const { pathname: hitPathname } = new URL(fullPath);

                // If the hits goes to another page, we prevent the native link behavior
                // to leverage the Vue Router loading feature.
                if (this.$route.path !== hitPathname) event.preventDefault();

                if (
                  this.$router
                    .getRoutes()
                    .some(
                      (route) =>
                        route.path.replace(/index\.html$/, "") === hitPathname
                    )
                )
                  void this.$router.push(hit.url);
                else window.open(fullPath);
              },
            },
            children
          ),

        navigator: {
          navigate: ({ itemUrl }): void => {
            const fullPath = `${window.location.origin}${itemUrl}`;
            const { pathname: hitPathname } = new URL(fullPath);

            // Vue Router doesn’t handle same-page navigation so we use
            // the native browser location API for anchor navigation.
            if (this.$route.path === hitPathname)
              window.location.assign(fullPath);
            else if (
              this.$router
                .getRoutes()
                .some((route) => route.path === hitPathname)
            )
              void this.$router.push(itemUrl);
            else window.open(fullPath);
          },
          navigateNewTab({ itemUrl }): void {
            window.open(itemUrl);
          },
          navigateNewWindow({ itemUrl }): void {
            window.open(itemUrl);
          },
        },
      });
    },

    resolveRoutePathFromUrl(absoluteUrl: string): string {
      const { pathname, hash } = new URL(absoluteUrl);

      return `${pathname.replace(this.$site.base, "/")}${hash}`;
    },

    update(options: AlgoliaOption, lang: string): void {
      this.$el.innerHTML = '<div id="docsearch"></div>';
      this.initialize(options, lang);
    },
  },
});
