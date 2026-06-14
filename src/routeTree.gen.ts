/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as CollectionsCollectionIdRouteImport } from './routes/collections/$collectionId'
import { Route as CollectionsCollectionIdProductsProductIdRouteImport } from './routes/collections/$collectionId/products/$productId'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

const CollectionsCollectionIdRoute = CollectionsCollectionIdRouteImport.update({
  id: '/collections/$collectionId',
  path: '/collections/$collectionId',
  getParentRoute: () => rootRouteImport,
} as any)

const CollectionsCollectionIdProductsProductIdRoute =
  CollectionsCollectionIdProductsProductIdRouteImport.update({
    id: '/collections/$collectionId/products/$productId',
    path: '/collections/$collectionId/products/$productId',
    getParentRoute: () => rootRouteImport,
  } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/collections/$collectionId': typeof CollectionsCollectionIdRoute
  '/collections/$collectionId/products/$productId': typeof CollectionsCollectionIdProductsProductIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/collections/$collectionId': typeof CollectionsCollectionIdRoute
  '/collections/$collectionId/products/$productId': typeof CollectionsCollectionIdProductsProductIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/collections/$collectionId': typeof CollectionsCollectionIdRoute
  '/collections/$collectionId/products/$productId': typeof CollectionsCollectionIdProductsProductIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/collections/$collectionId'
    | '/collections/$collectionId/products/$productId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/collections/$collectionId'
    | '/collections/$collectionId/products/$productId'
  id:
    | '__root__'
    | '/'
    | '/collections/$collectionId'
    | '/collections/$collectionId/products/$productId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CollectionsCollectionIdRoute: typeof CollectionsCollectionIdRoute
  CollectionsCollectionIdProductsProductIdRoute: typeof CollectionsCollectionIdProductsProductIdRoute
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
    '/collections/$collectionId': {
      id: '/collections/$collectionId'
      path: '/collections/$collectionId'
      fullPath: '/collections/$collectionId'
      preLoaderRoute: typeof CollectionsCollectionIdRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/collections/$collectionId/products/$productId': {
      id: '/collections/$collectionId/products/$productId'
      path: '/collections/$collectionId/products/$productId'
      fullPath: '/collections/$collectionId/products/$productId'
      preLoaderRoute: typeof CollectionsCollectionIdProductsProductIdRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CollectionsCollectionIdRoute: CollectionsCollectionIdRoute,
  CollectionsCollectionIdProductsProductIdRoute:
    CollectionsCollectionIdProductsProductIdRoute,
}

export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
