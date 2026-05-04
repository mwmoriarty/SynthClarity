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
          light: "#fcfbfb",
          lightgray: "#beb5b5",
          gray: "#837777",
          darkgray: "#4f3d3e",
          dark: "#22080b",
          secondary: "#358989",
          tertiary: "#216a6a",
          highlight: "rgba(201, 220, 219, 0.05)",
          textHighlight: "#fafaea26",
        },
        darkMode: {
          light: "#001718",
          lightgray: "#334746",
          gray: "#717d7d",
          darkgray: "#b0b9b9",
          dark: "#fbfcfc",
          secondary: "#a4666b",
          tertiary: "#804d51",
          highlight: "rgba(165, 147, 148, 0.05)",
          textHighlight: "#fafaea26",
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
