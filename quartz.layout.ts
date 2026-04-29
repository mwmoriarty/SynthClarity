import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// all pages shared components
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({ }),
}

// single page components
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({ components: [ { Component: Component.Search(), grow: true,}, { Component: Component.Darkmode()},],}),
    Component.Explorer({ title: "Topics", folderClickBehavior: "link", folderDefaultState: "collapsed", useSavedState: true,})],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.TagList(),
  ],
}

// tags or folder page components
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({ components: [{Component: Component.Search(), grow: true,}, { Component: Component.Darkmode()},],}),
    Component.Explorer({ title: "Topics", folderClickBehavior: "link", folderDefaultState: "collapsed", useSavedState: true,})],
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.TagList(),
  ],
}
