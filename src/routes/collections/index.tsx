import { createFileRoute } from "@tanstack/react-router";

import { copy, SiteFooter, SiteHeader, useSiteLanguage } from "@/components/site";
import {
  collections,
  getLocalizedCollection,
  type Language,
} from "@/data/collectionsOverride";

export const Route = createFileRoute("/collections/")({
  component: CollectionsPage,
});

const collectionDisplayOrder = [
  "cuckoo",
  "pendulum",
  "grandfather",
  "table",
  "round",
  "square",
  "rotating",
];

function CollectionsPage() {
  const { language, setLanguage, nav, brandSuffix } = useSiteLanguage({
    vi: "Bộ sưu tập — Đức Hạnh Clocks",
    en: "Collections — Đức Hạnh Clocks",
  });

  return (
    <main className="bg-background text-foreground">
      <SiteHeader
        language={language}
        setLanguage={setLanguage}
        nav={nav}
        contactLabel={copy[language].common.contactUs}
        brandSuffix={brandSuffix}
        solid
      />
      <CompactCollectionsSection language={language} />
      <SiteFooter language={language} nav={nav} brandSuffix={brandSuffix} />
    </main>
  );
}

function CompactCollectionsSection({ language }: { language: Language }) {
  const collectionsCopy = copy[language].collections;
  const localizedCollections = [...collections]
    .sort(
      (a, b) =>
        collectionDisplayOrder.indexOf(a.id) - collectionDisplayOrder.indexOf(b.id),
    )
    .map((collection) => getLocalizedCollection(collection, language));

  return (
    <section className="bg-secondary/50 pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{collectionsCopy.eyebrow}</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl">
            {collectionsCopy.title}
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5 lg:mt-16 lg:gap-7">
          {localizedCollections.map((collection) => (
            <a
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] md:rounded-2xl"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted p-1.5 sm:p-2 md:p-3">
                <img
                  src={collection.image}
                  alt={collection.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="px-1.5 py-3 text-center sm:px-3 md:px-6 md:py-6">
                <h2 className="font-serif text-xs leading-snug text-foreground sm:text-base md:text-2xl">
                  {collection.name}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
