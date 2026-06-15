import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

import {
  AboutSection,
  copy,
  SiteFooter,
  SiteHeader,
  useSiteLanguage,
  WhyUs,
} from "@/components/site";
import type { Language } from "@/data/collectionsOverride";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const kanaAddress = "1078 Đường 3/2, Phường Phú Thọ, Thành phố Hồ Chí Minh, Việt Nam";
const kanaMapUrl =
  "https://maps.google.com/maps?width=100%25&height=600&hl=vi&q=1078%20%C4%90%C6%B0%E1%BB%9Dng%203%2F2%2C%20Ph%C6%B0%E1%BB%9Dng%20Ph%C3%BA%20Th%E1%BB%8D%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam&t=&z=16&ie=UTF8&iwloc=B&output=embed";

function KANALocationMap({ language }: { language: Language }) {
  const isVietnamese = language === "vi";

  return (
    <section className="bg-secondary/50 py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            {isVietnamese ? "Địa chỉ" : "Location"}
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            {isVietnamese ? "Tìm Đồng hồ KANA trên bản đồ" : "Find Đồng hồ KANA on the Map"}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-foreground/70">
            {isVietnamese
              ? "Bạn có thể phóng to, thu nhỏ và di chuyển bản đồ để xem vị trí chi tiết của Đồng hồ KANA tại Thành phố Hồ Chí Minh."
              : "You can zoom, pan, and explore the map to view Đồng hồ KANA’s location in Ho Chi Minh City."}
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
          <div className="flex items-start gap-3 border-b border-border bg-card px-6 py-5 md:px-8">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium text-foreground">
                {isVietnamese ? "Địa chỉ showroom" : "Showroom address"}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                {kanaAddress}
              </p>
            </div>
          </div>

          <iframe
            title="Đồng hồ KANA location map"
            src={kanaMapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full border-0 md:h-[520px]"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  const { language, setLanguage, nav, brandSuffix } = useSiteLanguage({
    vi: "Giới thiệu — Đồng hồ KANA",
    en: "About — Đồng hồ KANA",
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
      <KANALocationMap language={language} />
      <WhyUs language={language} />
      <SiteFooter language={language} nav={nav} brandSuffix={brandSuffix} />
    </main>
  );
}
