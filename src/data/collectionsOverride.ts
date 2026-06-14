import {
  collections as baseCollections,
  getLocalizedCollection,
  type CollectionSeed,
} from "@/data/collections";
import { pendulumProducts } from "@/data/pendulumProducts";

export type {
  CollectionSeed,
  Language,
  LocalizedText,
  Product,
} from "@/data/collections";

export { getLocalizedCollection };

export const collections: CollectionSeed[] = baseCollections.map((collection) => {
  if (collection.id !== "pendulum") {
    return collection;
  }

  return {
    ...collection,
    products: pendulumProducts,
  };
});

export function getCollectionBySlug(slug: string): CollectionSeed | undefined {
  return collections.find((collection) => collection.slug === slug);
}
