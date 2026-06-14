import { createFileRoute } from "@tanstack/react-router";

import {
  CollectionsSection,
  copy,
  SiteFooter,
  SiteHeader,
  useSiteLanguage,
} from "@/components/site";

export const Route = createFileRoute("/collections")({
  component: CollectionsPage,
});

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
      <CollectionsSection language={language} standalone />
      <SiteFooter language={language} nav={nav} brandSuffix={brandSuffix} />
    </main>
  );
}
