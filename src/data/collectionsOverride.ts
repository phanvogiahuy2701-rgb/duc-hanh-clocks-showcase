import {
  collections as baseCollections,
  getLocalizedCollection,
  type CollectionSeed,
} from "@/data/collections";
import { pendulumProducts } from "@/data/pendulumProducts";
import { roundWallProducts } from "@/data/roundWallProducts";

export type {
  CollectionSeed,
  Language,
  LocalizedText,
  Product,
} from "@/data/collections";

export { getLocalizedCollection };

export const collections: CollectionSeed[] = baseCollections.map((collection) => {
  if (collection.id === "pendulum") {
    return {
      ...collection,
      products: pendulumProducts,
    };
  }

  if (collection.id === "round") {
    return {
      ...collection,
      products: roundWallProducts,
    };
  }

  return collection;
});

export function getCollectionBySlug(slug: string): CollectionSeed | undefined {
  return collections.find((collection) => collection.slug === slug);
}
