
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({ }),
}

const defaultComponents = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(), Component.Darkmode(),
    Component.Explorer({title: "Topics", folderClickBehavior: "link", folderDefaultState: "collapsed", useSavedState: true}),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.TagList(),
  ],
}

export const defaultContentPageLayout: PageLayout = defaultComponents
export const defaultListPageLayout: PageLayout = defaultComponents
