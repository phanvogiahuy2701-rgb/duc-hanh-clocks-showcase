import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  Clock,
  Sparkles,
  ShieldCheck,
  Boxes,
  Headphones,
  Menu,
  X,
} from "lucide-react";

import heroAsset from "@/assets/hero-new.jpg.asset.json";
const heroImg = heroAsset.url;
import { collections, getLocalizedCollection, type Language } from "@/data/collectionsOverride";

type Collection = ReturnType<typeof getLocalizedCollection>;

type NavItem = {
  label: string;
  href: string;
};

export const copy = {
  vi: {
    metaTitle: "Đồng hồ Kana — Đồng hồ tinh tế từ Việt Nam",
    brandSuffix: "Kana",
    nav: [
      { label: "Bộ sưu tập", href: "/collections" },
      { label: "Giới thiệu", href: "/about" },
      { label: "Liên hệ", href: "/contact" },
    ],
    common: {
      contactUs: "Liên hệ",
      viewDetails: "Xem chi tiết",
      contactForInquiry: "Liên hệ tư vấn",
      sendInquiry: "Gửi yêu cầu",
      viewOnGoogleMaps: "Xem trên Google Maps",
      collectionLabel: "Bộ sưu tập",
      navigate: "Điều hướng",
      contact: "Liên hệ",
      company: "Công ty",
      phone: "Điện thoại",
      address: "Địa chỉ",
      email: "Email",
      message: "Nội dung",
      fullName: "Họ và tên",
      phoneNumber: "Số điện thoại",
      rightsReserved: "Mọi quyền được bảo lưu.",
      contactViaForm: "Liên hệ qua biểu mẫu",
      language: "Ngôn ngữ",
    },
    hero: {
      eyebrow: "Thành phố Hồ Chí Minh · Việt Nam",
      titleLine1: "Tinh hoa chế tác",
      titleAccent: "vượt thời gian",
      titleLine2: "",
      description:
        "Những mẫu đồng hồ thanh lịch dành cho gia đình, cửa hàng và không gian đón tiếp.",
      primaryCta: "Khám phá bộ sưu tập",
      secondaryCta: "Liên hệ tư vấn",
      alt: "Đồng hồ quả lắc gỗ treo tường trong không gian sống ấm áp",
    },
    about: {
      eyebrow: "Giới thiệu",
      title: "Về Đồng hồ Kana",
      description1:
        "Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu Kana là doanh nghiệp Việt Nam chuyên sản xuất và kinh doanh đồng hồ tại Thành phố Hồ Chí Minh. Với kinh nghiệm lâu năm, chúng tôi tạo ra những chiếc đồng hồ không chỉ đơn thuần là công cụ xem giờ, mà còn là những tác phẩm thủ công mang dấu ấn cá nhân.",
      description2:
        "Mỗi chiếc đồng hồ không chỉ để xem giờ mà còn là điểm nhấn mang lại sự ấm cúng, cá tính và giá trị thẩm mỹ cho không gian sống.",
      statCard: "Năm kinh nghiệm chế tác",
      stats: ["Bộ sưu tập", "Sản xuất tại Việt Nam", "Tỉ mỉ trong từng chi tiết"],
      alt: "Nghệ nhân đang lắp ráp bộ máy đồng hồ",
    },
    collections: {
      eyebrow: "Bộ sưu tập",
      title: "Các bộ sưu tập đồng hồ",
      description:
        "Bảy dòng sản phẩm riêng biệt — giữ tinh thần truyền thống, hoàn thiện bằng tay nghề và phù hợp với nhiều không gian sống lẫn trưng bày.",
    },
    whyUs: {
      eyebrow: "Lý do chọn chúng tôi",
      title: "Vì sao chọn Đồng hồ Kana?",
      items: [
        {
          icon: ShieldCheck,
          title: "Nhà sản xuất Việt Nam giàu kinh nghiệm",
          text: "Nhiều năm kinh nghiệm sản xuất đồng hồ cho thị trường trong nước và xuất khẩu.",
        },
        {
          icon: Boxes,
          title: "Danh mục bộ sưu tập đa dạng",
          text: "Bảy bộ sưu tập được định hình rõ phong cách để phù hợp với nhiều không gian khác nhau.",
        },
        {
          icon: Sparkles,
          title: "Thiết kế thanh lịch",
          text: "Thẩm mỹ bền vững, ấm áp và dễ ứng dụng cho nhà ở lẫn không gian thương mại.",
        },
        {
          icon: Headphones,
          title: "Hỗ trợ đáng tin cậy",
          text: "Đồng hành thân thiện và rõ ràng từ lúc tư vấn đến khi giao hàng.",
        },
      ],
    },
    contact: {
      eyebrow: "Liên hệ",
      title: "Kết nối cùng chúng tôi",
      description:
        "Chúng tôi luôn sẵn sàng trao đổi nếu bạn muốn tìm hiểu thêm về bộ sưu tập, cần tư vấn theo nhu cầu riêng hoặc muốn ghé thăm xưởng.",
      person: "Chị Thanh Tuyền",
      address: "1078 Đường 3/2, Phường Phú Thọ,\nThành phố Hồ Chí Minh, Việt Nam",
      mapCaption: "Thành phố Hồ Chí Minh, Việt Nam",
      messagePlaceholder: "Hãy cho chúng tôi biết nhu cầu của bạn…",
      success: "Cảm ơn bạn — chúng tôi sẽ sớm liên hệ lại.",
    },
    footer: {
      description:
        "Những mẫu đồng hồ mang vẻ đẹp vượt thời gian — từ xưởng chế tác tại Thành phố Hồ Chí Minh đến nhiều không gian sống và trưng bày.",
      madeIn: "Được chế tác tại Thành phố Hồ Chí Minh, Việt Nam.",
    },
  },
  en: {
    metaTitle: "Đồng hồ Kana — Refined Clocks from Vietnam",
    brandSuffix: "Kana",
    nav: [
      { label: "Collections", href: "/collections" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    common: {
      contactUs: "Contact Us",
      viewDetails: "View Details",
      contactForInquiry: "Contact for Inquiry",
      sendInquiry: "Send Inquiry",
      viewOnGoogleMaps: "View on Google Maps",
      collectionLabel: "Collection",
      navigate: "Navigate",
      contact: "Contact",
      company: "Company",
      phone: "Phone",
      address: "Address",
      email: "Email",
      message: "Message",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      rightsReserved: "All rights reserved.",
      contactViaForm: "Contact via inquiry form",
      language: "Language",
    },
    hero: {
      eyebrow: "Ho Chi Minh City · Vietnam",
      titleLine1: "Timeless",
      titleAccent: "Clocks",
      titleLine2: "for Every Home",
      description:
        "Elegant clocks designed with precision, warmth, and lasting beauty — crafted for homes, retail spaces, and refined hospitality interiors.",
      primaryCta: "Explore Collections",
      secondaryCta: "Contact Us",
      alt: "Handcrafted wooden pendulum clock in an artisan workshop",
    },
    about: {
      eyebrow: "About",
      title: "About Đồng hồ Kana",
      description1:
        "Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu Kana is a Vietnamese manufacturer and trading company specializing in clocks in Ho Chi Minh City. With years of experience, the company creates clocks that are more than time-telling tools—they are handcrafted pieces bearing a distinctive mark.",
      description2:
        "Each clock is created not only to tell time, but also to bring warmth, character, and visual elegance into living and display spaces.",
      statCard: "Years of crafting",
      stats: ["Collections", "Made in Vietnam", "Attention to detail"],
      alt: "Craftsman assembling a clock movement",
    },
    collections: {
      eyebrow: "Collections",
      title: "Our Clock Collections",
      description:
        "Seven distinct collections — shaped by tradition, refined by skilled making, and designed to suit a range of interiors and display settings.",
    },
    whyUs: {
      eyebrow: "Why Us",
      title: "Why Choose Đồng hồ Kana?",
      items: [
        {
          icon: ShieldCheck,
          title: "Experienced Vietnamese Manufacturer",
          text: "Years of expertise producing quality clocks for domestic and export markets.",
        },
        {
          icon: Boxes,
          title: "Wide Range of Collections",
          text: "Seven thoughtfully defined collections created for different spaces and styles.",
        },
        {
          icon: Sparkles,
          title: "Elegant Designs",
          text: "Timeless aesthetics that bring warmth to homes, showrooms, and businesses.",
        },
        {
          icon: Headphones,
          title: "Reliable Support",
          text: "Friendly, attentive service from the first inquiry through delivery.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in Touch",
      description:
        "We'd love to hear from you — whether you have a question about a collection, need a custom inquiry, or want to visit our workshop.",
      person: "Mrs. Thanh Tuyen",
      address: "1078 3/2 Street, Phu Tho Ward,\nHo Chi Minh City, Vietnam",
      mapCaption: "Ho Chi Minh City, Vietnam",
      messagePlaceholder: "Tell us about your inquiry…",
      success: "Thank you — we'll be in touch shortly.",
    },
    footer: {
      description:
        "Timeless clocks crafted with elegance — from our workshop in Ho Chi Minh City to homes and display spaces around the world.",
      madeIn: "Crafted in Ho Chi Minh City, Vietnam.",
    },
  },
} as const;

export function useSiteLanguage(pageTitle?: Partial<Record<Language, string>>) {
  const [language, setLanguage] = useState<Language>("vi");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("duc-hanh-language");
    if (savedLanguage === "vi" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("duc-hanh-language", language);
    document.documentElement.lang = language === "vi" ? "vi" : "en";
    document.title = pageTitle?.[language] ?? copy[language].metaTitle;
  }, [language, pageTitle]);

  return {
    language,
    setLanguage,
    nav: copy[language].nav,
    brandSuffix: copy[language].brandSuffix,
  };
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animation =
              "fadeUp 0.9s ease-out forwards";
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    el.style.opacity = "0";
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={className} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function LanguageSwitcher({
  language,
  onChange,
}: {
  language: Language;
  onChange: (language: Language) => void;
}) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-card/80 p-1 backdrop-blur"
      role="group"
      aria-label="Language switcher"
    >
      {(["vi", "en"] as const).map((option) => {
        const active = language === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1.5 text-xs font-medium tracking-[0.2em] transition-all ${
              active
                ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                : "text-foreground/65 hover:text-foreground"
            }`}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export function SiteHeader({
  language,
  setLanguage,
  nav,
  contactLabel,
  brandSuffix,
  solid = false,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  nav: ReadonlyArray<NavItem>;
  contactLabel: string;
  brandSuffix: string;
  solid?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hasSolidBg = solid || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        hasSolidBg
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-4">
        <a href="/" className="group flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-serif text-xl tracking-tight text-foreground">
            Đồng hồ <span className="text-muted-foreground">{brandSuffix}</span>
          </span>
        </a>

        <div className="hidden items-center gap-5 md:flex">
          <nav className="flex items-center gap-9">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/75 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <LanguageSwitcher language={language} onChange={setLanguage} />
          <a href="/contact" className="btn-primary">
            {contactLabel}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher language={language} onChange={setLanguage} />
          <button
            aria-label="Toggle menu"
            className="p-2 text-foreground"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur md:hidden">
          <div className="container-page flex flex-col gap-4 py-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/80 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a href="/contact" onClick={() => setOpen(false)} className="btn-primary w-fit">
              {contactLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Hero({ language }: { language: Language }) {
  const hero = copy[language].hero;

  return (
    <section className="relative flex min-h-screen items-center">
      <img
        src={heroImg}
        alt={hero.alt}
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      <div className="container-page relative z-10 pb-20 pt-32">
        <div className="reveal-in max-w-2xl">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
            {hero.titleLine1} <em className="italic text-primary">{hero.titleAccent}</em>
            {hero.titleLine2 ? <><br /> {hero.titleLine2}</> : null}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/75">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/collections" className="btn-primary">
              {hero.primaryCta} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/contact" className="btn-outline">
              {hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection({
  language,
  standalone = false,
}: {
  language: Language;
  standalone?: boolean;
}) {
  const about = copy[language].about;

  return (
    <section className={standalone ? "pt-32 pb-28 md:pt-40 md:pb-36" : "py-28 md:py-36"}>
      <div className="container-page mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="eyebrow">{about.eyebrow}</span>
          <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{about.title}</h1>
          <p className="mt-6 leading-relaxed text-foreground/75">{about.description1}</p>
          <p className="mt-4 leading-relaxed text-foreground/75">{about.description2}</p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <p className="font-serif text-2xl text-primary">7</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {about.stats[0]}
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-primary">100%</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {about.stats[1]}
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-primary">∞</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {about.stats[2]}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CollectionsSection({
  language,
  standalone = false,
}: {
  language: Language;
  standalone?: boolean;
}) {
  const collectionsCopy = copy[language].collections;
  const common = copy[language].common;
  const localizedCollections = collections.map((collection) =>
    getLocalizedCollection(collection, language),
  );

  return (
    <section className={`bg-secondary/50 ${standalone ? "pt-32 pb-28 md:pt-40 md:pb-36" : "py-28 md:py-36"}`}>
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{collectionsCopy.eyebrow}</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl">{collectionsCopy.title}</h1>
          <p className="mt-5 leading-relaxed text-foreground/70">{collectionsCopy.description}</p>
        </Reveal>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {localizedCollections.map((collection: Collection, index: number) => (
            <Reveal
              key={collection.id}
              delay={index * 70}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={collection.image}
                  alt={collection.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h2 className="font-serif text-2xl text-foreground">{collection.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{collection.shortIntro}</p>
                <a href={`/collections/${collection.slug}`} className="btn-ghost mt-5 inline-flex">
                  {common.viewDetails} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs({ language }: { language: Language }) {
  const whyUs = copy[language].whyUs;

  return (
    <section className="bg-secondary/40 py-28 md:py-36">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{whyUs.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">{whyUs.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {whyUs.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="flex gap-5 border-t border-border pt-7"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-foreground/70">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection({
  language,
  standalone = false,
}: {
  language: Language;
  standalone?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const common = copy[language].common;
  const contact = copy[language].contact;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    (event.target as HTMLFormElement).reset();
    window.setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className={standalone ? "pt-32 pb-28 md:pt-40 md:pb-36" : "py-28 md:py-36"}>
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl">{contact.title}</h1>
          <p className="mt-5 leading-relaxed text-foreground/70">{contact.description}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="space-y-7 lg:col-span-2">
            <div>
              <p className="eyebrow">{common.company}</p>
              <p className="mt-2 text-foreground">
                Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu Kana
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="eyebrow">{common.phone}</p>
                <a
                  href="tel:0838975299"
                  className="mt-2 block text-foreground transition-colors hover:text-primary"
                >
                  0838 975 299
                </a>
                <p className="text-sm text-muted-foreground">{contact.person}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="eyebrow">{common.address}</p>
                <p className="mt-2 whitespace-pre-line leading-relaxed text-foreground">
                  {contact.address}
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=1078+3%2F2+Street+Phu+Tho+Ward+Ho+Chi+Minh+City"
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-2xl border border-border"
            >
              <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-secondary to-beige">
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="relative text-center">
                  <MapPin className="mx-auto h-8 w-8 text-primary" />
                  <p className="mt-2 font-serif text-lg">{common.viewOnGoogleMaps}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{contact.mapCaption}</p>
                </div>
              </div>
            </a>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={common.fullName} name="name" required />
                <Field label={common.phoneNumber} name="phone" required />
              </div>
              <Field label={common.email} name="email" type="email" required />
              <div>
                <label className="eyebrow mb-2 block">{common.message}</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground transition placeholder:text-muted-foreground/60 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-primary/30"
                  placeholder={contact.messagePlaceholder}
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                {common.sendInquiry} <ArrowRight className="h-4 w-4" />
              </button>
              {submitted && <p className="text-sm text-primary">{contact.success}</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow mb-2 block">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground transition placeholder:text-muted-foreground/60 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-primary/30"
      />
    </div>
  );
}

export function SiteFooter({
  language,
  nav,
  brandSuffix,
}: {
  language: Language;
  nav: ReadonlyArray<NavItem>;
  brandSuffix: string;
}) {
  const common = copy[language].common;
  const footer = copy[language].footer;
  const contact = copy[language].contact;

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="font-serif text-xl">Đồng hồ {brandSuffix}</span>
          </div>
          <p className="mt-4 max-w-sm leading-relaxed text-cream/70">{footer.description}</p>
        </div>
        <div>
          <p className="eyebrow text-cream/60">{common.navigate}</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-cream/60">{common.contact}</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4" />
              <a href="tel:0838975299" className="hover:text-cream">
                0838 975 299
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4" />
              <span className="whitespace-pre-line">{contact.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4" />
              <span>{common.contactViaForm}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col justify-between gap-3 py-6 text-xs text-cream/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu Kana. {common.rightsReserved}
          </p>
          <p>{footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
