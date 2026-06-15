import { createFileRoute } from "@tanstack/react-router";

import {
  AboutSection,
  copy,
  SiteFooter,
  SiteHeader,
  useSiteLanguage,
  WhyUs,
} from "@/components/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const { language, setLanguage, nav, brandSuffix } = useSiteLanguage({
    vi: "Giới thiệu — Đồng hồ Kana",
    en: "About — Đồng hồ Kana",
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
      <AboutSection language={language} standalone />
      <WhyUs language={language} />
      <SiteFooter language={language} nav={nav} brandSuffix={brandSuffix} />
    </main>
  );
}
