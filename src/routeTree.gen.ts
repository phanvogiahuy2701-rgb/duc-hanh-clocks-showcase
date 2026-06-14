/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AboutRouteImport } from './routes/about'
import { Route as ContactRouteImport } from './routes/contact'
import { Route as CollectionsRouteImport } from './routes/collections'
import { Route as CollectionsCollectionIdRouteImport } from './routes/collections/$collectionId'
import { Route as CollectionsCollectionIdProductsProductIdRouteImport } from './routes/collections/$collectionId/products/$productId'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)

const ContactRoute = ContactRouteImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRouteImport,
} as any)

const CollectionsRoute = CollectionsRouteImport.update({
  id: '/collections',
  path: '/collections',
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
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/collections': typeof CollectionsRoute
  '/collections/$collectionId': typeof CollectionsCollectionIdRoute
  '/collections/$collectionId/products/$productId': typeof CollectionsCollectionIdProductsProductIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/collections': typeof CollectionsRoute
  '/collections/$collectionId': typeof CollectionsCollectionIdRoute
  '/collections/$collectionId/products/$productId': typeof CollectionsCollectionIdProductsProductIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/collections': typeof CollectionsRoute
  '/collections/$collectionId': typeof CollectionsCollectionIdRoute
  '/collections/$collectionId/products/$productId': typeof CollectionsCollectionIdProductsProductIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/contact'
    | '/collections'
    | '/collections/$collectionId'
    | '/collections/$collectionId/products/$productId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/contact'
    | '/collections'
    | '/collections/$collectionId'
    | '/collections/$collectionId/products/$productId'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/contact'
    | '/collections'
    | '/collections/$collectionId'
    | '/collections/$collectionId/products/$productId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ContactRoute: typeof ContactRoute
  CollectionsRoute: typeof CollectionsRoute
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
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/collections': {
      id: '/collections'
      path: '/collections'
      fullPath: '/collections'
      preLoaderRoute: typeof CollectionsRouteImport
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
  AboutRoute: AboutRoute,
  ContactRoute: ContactRoute,
  CollectionsRoute: CollectionsRoute,
  CollectionsCollectionIdRoute: CollectionsCollectionIdRoute,
  CollectionsCollectionIdProductsProductIdRoute:
    CollectionsCollectionIdProductsProductIdRoute,
}

export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
