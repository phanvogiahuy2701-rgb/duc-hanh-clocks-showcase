import {
  collections as baseCollections,
  getLocalizedCollection,
  type CollectionSeed,
  type Product,
} from "@/data/collections";
import {
  grandfatherProducts,
  squareWallProducts,
  tableProducts,
} from "@/data/extraUploadedProducts";
import { pendulumProducts } from "@/data/pendulumProducts";
import { roundWallProducts } from "@/data/roundWallProducts";

export type {
  CollectionSeed,
  Language,
  LocalizedText,
  Product,
} from "@/data/collections";

export { getLocalizedCollection };

function withRealProductCover(
  collection: CollectionSeed,
  products: Product[],
): CollectionSeed {
  const firstProductImage = products[0]?.image;

  return {
    ...collection,
    image: firstProductImage ?? collection.image,
    products,
  };
}

export const collections: CollectionSeed[] = baseCollections.map((collection) => {
  if (collection.id === "pendulum") {
    return withRealProductCover(collection, pendulumProducts);
  }

  if (collection.id === "round") {
    return withRealProductCover(collection, roundWallProducts);
  }

  if (collection.id === "grandfather") {
    return withRealProductCover(collection, grandfatherProducts);
  }

  if (collection.id === "square") {
    return withRealProductCover(collection, squareWallProducts);
  }

  if (collection.id === "table") {
    return withRealProductCover(collection, tableProducts);
  }

  if (collection.id === "cuckoo") {
    return withRealProductCover(collection, collection.products);
  }

  return collection;
});

export function getCollectionBySlug(slug: string): CollectionSeed | undefined {
  return collections.find((collection) => collection.slug === slug);
}
