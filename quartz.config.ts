import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
/**
 * Quartz 4 Configuration
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Synth Clarity",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {provider: "plausible",},
    locale: "en-US",
    baseUrl: "https://www.synthclarity.com",
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
          light: "#fcfaf6",       // Cream Ground Plane (Hue 60)
          lightgray: "#e8e1d5",   // Soft Tan (Borders)
          gray: "#8c7e6d",        // Muted Taupe (UI Elements)
          darkgray: "#3d342b",    // Deep Brown (Body Text)
          dark: "#2a241e",        // Almost Black-Brown (Headers)
          secondary: "#8a3c6b",   // Plum (Headers/Links) - Hue 330
          tertiary: "#5a7a7a",    // Teal (Secondary Accents) - Hue 195
          highlight: "rgba(138, 60, 107, 0.1)", // Subtle Plum wash
          textHighlight: "#fff2e0",
        },
        darkMode: {
          light: "#1a1612",       // Dark Brown Background (Hue 60)
          lightgray: "#2e2822",   // Deep Bronze (Borders)
          gray: "#6e6255",        // Muted Earth Tone
          darkgray: "#e3dacc",    // Off-White/Cream (Body Text)
          dark: "#fcfaf6",        // Stark Cream (Headers)
          secondary: "#6eb0b0",   // Glowing Teal (Headers/Links) - Hue 195
          tertiary: "#a6688d",    // Plum (Secondary Accents) - Hue 330
          highlight: "rgba(110, 176, 176, 0.15)", // Subtle Teal wash
          textHighlight: "#2a241e",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({priority: ["filesystem", "frontmatter"],}),
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
