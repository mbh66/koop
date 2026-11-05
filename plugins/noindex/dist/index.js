// Adds <meta name="robots"> to the head of every page.
// Search engines that obey it leave the page out of their results.
// The site stays public: anyone with the address can still read it.
import { h } from "preact"

const NoIndex = (opts) => {
  const content = opts?.content ?? "noindex, nofollow, noarchive"
  return {
    name: "NoIndex",
    markdownPlugins() {
      return []
    },
    externalResources() {
      return {
        additionalHead: [h("meta", { name: "robots", content })],
      }
    },
  }
}

NoIndex.quartzCategory = "transformer"

export default NoIndex
