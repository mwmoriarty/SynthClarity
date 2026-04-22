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
        header: "Xenon",
        body: "Neon",
        code: "Krypton",
      },
      colors: {
        lightMode: {
          light: "#FAF9F6",      // Off-white "Paper" background
          lightgray: "#E5E5E5",  // Borders
          gray: "#B8B8B8",       // Graph Lines
          darkgray: "#515944",   // Body Text (Logo Green)
          dark: "#20221E",       // H1/Titles (Near-black Green)
          secondary: "#645664",  // Links (Logo Plum)
          tertiary: "#847584",   // Hover (Lighter Plum)
          highlight: "rgba(100, 86, 100, 0.1)",
        },
        darkMode: {
          light: "#0A0C08",      // Forest Green
          lightgray: "#22261B",  // Borders
          gray: "#444B39",       // Graph Lines
          darkgray: "#CED4C5",   // Body Text (Soft Sage)
          dark: "#F4F7F0",       // H1/Titles (Mint White)
          secondary: "#C2B2C2",  // Plum (Lavender)
          tertiary: "#D8CDD8",   // Hover Plum
          highlight: "rgba(194, 178, 194, 0.15)",
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
