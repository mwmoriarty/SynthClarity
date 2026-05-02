import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
/**
 * Quartz 4 Configuration
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "TTD Clarity",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {provider: "plausible",},
    locale: "en-US",
    baseUrl: "https://www.ttdclarity.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: "Merriweather",
        body: "OpenSans",
        code: "Krypton",
      },
      colors: {
        lightMode: {
          light: "#ebefef",
          lightgray: "#4b5a4b",
          gray: "#2d402e",
          darkgray: "#1c2323",
          dark: "#090c0c",
          secondary: "#774b79",
          tertiary: "",
          highlight: "rgba(255, 241, 0, 0.05)",
          textHighlight: "#fff10040",
        },
        darkMode: {
          light: "#090c0c",
          lightgray: "#1c2323",
          gray: "#323d3",
          darkgray: "#49595a",
          dark: "#617677",
          secondary: "#a3575f",
          tertiary: "#6e0b24",
          highlight: "rgba(255, 241, 0, 0.05)",
          textHighlight: "#fef14540",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({priority: ["frontmatter", "git", "filesystem"],}),
      Plugin.SyntaxHighlighting({theme: {light: "github-light",dark: "github-dark",},keepBackground: false,}),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({enableSiteMap: true, enableRSS: true,}),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Plugin.CustomOgImages(),
    ],
  },
}
export default config
