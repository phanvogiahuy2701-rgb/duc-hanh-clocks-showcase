import { createFileRoute } from "@tanstack/react-router";

import {
  copy,
  Hero,
  SiteFooter,
  SiteHeader,
  useSiteLanguage,
} from "@/components/site";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { language, setLanguage, nav, brandSuffix } = useSiteLanguage();

  return (
    <main className="bg-background text-foreground">
      <SiteHeader
        language={language}
        setLanguage={setLanguage}
        nav={nav}
        contactLabel={copy[language].common.contactUs}
        brandSuffix={brandSuffix}
      />
      <Hero language={language} />
      <SiteFooter language={language} nav={nav} brandSuffix={brandSuffix} />
    </main>
  );
}
