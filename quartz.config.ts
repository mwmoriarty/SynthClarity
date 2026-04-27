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
    baseUrl: "www.ttdclarity.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: "Merriweather",
        body: "Open Sans",
        code: "Krypton",
      },
      colors: {
        lightMode: {
          light: "#fefffe",      // Off-white "Paper" background
          lightgray: "#d5ddd5",  // Borders
          gray: "#9e9e9e",       // Graph Lines
          darkgray: "#272d27",   // Body Text (Logo Green)
          dark: "#738a6e",       // H1/Titles (Near-black Green)
          secondary: "#D8CDD8",  // Links (Logo Plum)
          tertiary: "#C2B2C2",   // Hover (Lighter Plum)
          highlight: "rgba(100, 86, 100, 0.05)",
        },
        darkMode: {
          light: "#0d0f0d",     // Forest Green
          lightgray: "#888888", // Borders
          gray: "#a9a99a",      // Graph Lines
          darkgray: "#c7c5c7",  // Body Text (Soft Sage)
          dark: "#f5fff5",      // H1/Titles (Mint White)
          secondary: "#C2B2C2", // Plum (Lavender)
          tertiary: "#D8CDD8",  // Hover Plum
          highlight: "rgba(194, 178, 194, 0.05)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
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
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
