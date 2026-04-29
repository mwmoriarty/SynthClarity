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
          light: "#f8faf7",     // Ghost Lime
          lightgray: "#eef1ed", // Light Gray
          gray: "#90968e",      // Gray
          darkgray: "#4e564d",  // Dark Gray
          dark: "#404a32",      // Moss Munsell
          secondary: "#633355", // Plum Pantone
          tertiary: "#845376",  // Plum Light
          highlight: "rgba(99, 51, 85, 0.1)",
        },
        darkMode: {
          light: "#2a2a2a",     // Charcoal
          lightgray: "#3f3f3f",
          gray: "#808080",
          darkgray: "#d9d9d9",  // Soft Gray
          dark: "#f2f2f2",      // White Smoke
          secondary: "#a4719a", // Lavender Plum
          tertiary: "#c295b9",
          highlight: "rgba(164, 113, 154, 0.15)",
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
