/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as CollectionsSlugRouteImport } from './routes/collections/$slug'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

const CollectionsSlugRoute = CollectionsSlugRouteImport.update({
  id: '/collections/$slug',
  path: '/collections/$slug',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/collections/$slug': typeof CollectionsSlugRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/collections/$slug': typeof CollectionsSlugRoute
}

export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/collections/$slug': typeof CollectionsSlugRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/collections/$slug'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/collections/$slug'
  id: '__root__' | '/' | '/collections/$slug'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CollectionsSlugRoute: typeof CollectionsSlugRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/collections/$slug': {
      id: '/collections/$slug'
      path: '/collections/$slug'
      fullPath: '/collections/$slug'
      preLoaderRoute: typeof CollectionsSlugRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CollectionsSlugRoute: CollectionsSlugRoute,
}

export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
