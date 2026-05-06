import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({ links: {} }),
}

// 1. Define the reusable parts of the layout
const commonComponents: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.Logo(),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    // THE FIX: Re-adding the folder click logic here
    Component.Explorer({
      title: "Topics",
      folderClickBehavior: "link", 
      folderDefaultState: "collapsed",
      useSavedState: false, 
      sortFn: (a, b) => {
        // 1. Handle Folder vs File priority
        if (a.isFolder && !b.isFolder) return -1
        if (!a.isFolder && b.isFolder) return 1

        // 2. If they are the same type (both folders or both files), sort by name
        const nameA = a.name ?? ""
        const nameB = b.name ?? ""
        
        return nameA.localeCompare(nameB, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.TagList(),
  ],
}

// 2. Assign the common layout to both Page and List types
export const defaultContentPageLayout: PageLayout = commonComponents
export const defaultListPageLayout: PageLayout = commonComponents

