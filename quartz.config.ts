import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
/*
** Quartz 4 Configuration | https://quartz.jzhao.xyz/configuration
*/
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Synth Clarity",
    pageTitleSuffix: "",
    contentDir: "content-synth",
    enableSPA: true,
    enablePopovers: true,
    analytics: {provider: "plausible",},
    locale: "en-US",
    baseUrl: "www.synthclarity.com",
    ignorePatterns: ["private", "templates", ".obsidian", "sources"],
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
          light: "#fcfaf6",
          lightgray: "#e8e1d5",
          gray: "#8c7e6d",
          darkgray: "#3d342b",
          dark: "#2a241e",
          secondary: "#8a3c6b",
          tertiary: "#5a7a7a",
          highlight: "rgba(138, 60, 107, 0.1)",
          textHighlight: "#fff2e0",
        },
        darkMode: {
          light: "#1a1612",
          lightgray: "#2e2822",
          gray: "#6e6255",
          darkgray: "#e3dacc",
          dark: "#fcfaf6",
          secondary: "#6eb0b0",
          tertiary: "#a6688d",
          highlight: "rgba(110, 176, 176, 0.15)",
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
