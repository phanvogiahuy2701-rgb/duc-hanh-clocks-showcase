import { createFileRoute } from "@tanstack/react-router";

import {
  ContactSection,
  copy,
  SiteFooter,
  SiteHeader,
  useSiteLanguage,
} from "@/components/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const { language, setLanguage, nav, brandSuffix } = useSiteLanguage({
    vi: "Liên hệ — Đồng hồ KANA",
    en: "Contact — Đồng hồ KANA",
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
      <ContactSection language={language} standalone />
      <SiteFooter language={language} nav={nav} brandSuffix={brandSuffix} />
    </main>
  );
}
