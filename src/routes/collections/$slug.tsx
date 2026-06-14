import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode, type FormEvent, useRef } from "react";
import {
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  Clock,
  Menu,
  X,
} from "lucide-react";
import {
  collections,
  getCollectionBySlug,
  getLocalizedCollection,
  type Language,
} from "@/data/collections";

import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/collections/$slug")({
  component: CollectionDetailPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-foreground">Collection not found</h1>
        <p className="mt-2 text-foreground/70">
          The collection you're looking for doesn't exist.
        </p>
        <a href="/#collections" className="btn-primary mt-6 inline-block">
          Back to Collections
        </a>
      </div>
    </div>
  ),
});

type LocalizedText = Record<Language, string>;

const copy = {
  vi: {
    metaTitle: "Đức Hạnh Clocks — Đồng hồ chế tác tinh tế từ Việt Nam",
    brandSuffix: "Đồng hồ",
    nav: [
      { label: "Trang chủ", href: "/#home" },
      { label: "Giới thiệu", href: "/#about" },
      { label: "Bộ sưu tập", href: "/#collections" },
      { label: "Chế tác", href: "/#craftsmanship" },
      { label: "Liên hệ", href: "/#contact" },
    ],
    common: {
      contactUs: "Liên hệ",
      backToCollections: "Quay lại Bộ sưu tập",
      contactForInquiry: "Liên hệ tư vấn",
      language: "Ngôn ngữ",
      navigate: "Điều hướng",
      contact: "Liên hệ",
      company: "Công ty",
      phone: "Điện thoại",
      address: "Địa chỉ",
      email: "Email",
      message: "Nội dung",
      fullName: "Họ và tên",
      phoneNumber: "Số điện thoại",
      scroll: "Cuộn xuống",
      rightsReserved: "Mọi quyền được bảo lưu.",
      contactViaForm: "Liên hệ qua biểu mẫu",
      viewOnGoogleMaps: "Xem trên Google Maps",
      sendInquiry: "Gửi yêu cầu",
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
    metaTitle: "Đức Hạnh Clocks — Refined Clock Craftsmanship from Vietnam",
    brandSuffix: "Clocks",
    nav: [
      { label: "Home", href: "/#home" },
      { label: "About", href: "/#about" },
      { label: "Collections", href: "/#collections" },
      { label: "Craftsmanship", href: "/#craftsmanship" },
      { label: "Contact", href: "/#contact" },
    ],
    common: {
      contactUs: "Contact Us",
      backToCollections: "Back to Collections",
      contactForInquiry: "Contact for Inquiry",
      language: "Language",
      navigate: "Navigate",
      contact: "Contact",
      company: "Company",
      phone: "Phone",
      address: "Address",
      email: "Email",
      message: "Message",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      scroll: "Scroll",
      rightsReserved: "All rights reserved.",
      contactViaForm: "Contact via inquiry form",
      viewOnGoogleMaps: "View on Google Maps",
      sendInquiry: "Send Inquiry",
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

function Header({
  language,
  setLanguage,
  nav,
  contactLabel,
  brandSuffix,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  nav: ReadonlyArray<{ label: string; href: string }>;
  contactLabel: string;
  brandSuffix: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-4">
        <a href="/" className="group flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-serif text-xl tracking-tight text-foreground">
            Đức Hạnh <span className="text-muted-foreground">{brandSuffix}</span>
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
          <a href="/#contact" className="btn-primary">
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
            <a href="/#contact" onClick={() => setOpen(false)} className="btn-primary w-fit">
              {contactLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Contact({ language }: { language: Language }) {
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
    <section id="contact" className="py-28 md:py-36">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">{contact.title}</h2>
          <p className="mt-5 leading-relaxed text-foreground/70">{contact.description}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="space-y-7 lg:col-span-2">
            <div>
              <p className="eyebrow">{common.company}</p>
              <p className="mt-2 text-foreground">
                Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu Đức Hạnh
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
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:24px_24px]" />
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
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground transition placeholder:text-muted-foreground/60 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20"
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
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground transition placeholder:text-muted-foreground/60 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function Footer({
  language,
  nav,
  brandSuffix,
}: {
  language: Language;
  nav: ReadonlyArray<{ label: string; href: string }>;
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
            <span className="font-serif text-xl">
              Đức Hạnh {brandSuffix}
            </span>
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
            © {new Date().getFullYear()} Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu Đức Hạnh. {common.rightsReserved}
          </p>
          <p>{footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}

function CollectionDetailPage() {
  const { slug } = Route.useParams();
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
  }, [language]);

  const collection = getCollectionBySlug(slug);
  if (!collection) {
    throw new Error("Collection not found");
  }

  const localized = getLocalizedCollection(collection, language);
  const nav = copy[language].nav;
  const brandSuffix = copy[language].brandSuffix;
  const common = copy[language].common;

  useEffect(() => {
    document.title = `${localized.name} — Đức Hạnh Clocks`;
  }, [localized.name]);

  return (
    <main className="bg-background text-foreground">
      <Header
        language={language}
        setLanguage={setLanguage}
        nav={nav}
        contactLabel={common.contactUs}
        brandSuffix={brandSuffix}
      />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-end pt-32">
        <img
          src={localized.image}
          alt={localized.name}
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        <div className="container-page relative z-10 pb-16">
          <Reveal>
            <h1 className="font-serif text-5xl leading-[1.05] text-foreground md:text-6xl">
              {localized.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75">
              {localized.shortIntro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Collection Details */}
      <section className="py-24 md:py-32">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <img
              src={localized.image}
              alt={localized.name}
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-serif text-4xl md:text-5xl">{localized.name}</h2>
            <p className="mt-6 leading-relaxed text-foreground/75">{localized.description}</p>
            <ul className="mt-8 space-y-3">
              {localized.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="/#contact" className="btn-primary">
                {common.contactForInquiry} <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/#collections" className="btn-outline">
                {common.backToCollections}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products Grid */}
      {localized.products && localized.products.length > 0 && (
        <section className="bg-secondary/50 py-24 md:py-32">
          <div className="container-page">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-4xl md:text-5xl">
                {language === "vi" ? "Sản phẩm trong bộ sưu tập" : "Products in this collection"}
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-7 sm:grid-cols-2">
              {localized.products.map((product, index) => (
                <Reveal
                  key={product.id}
                  delay={index * 70}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-2xl text-foreground">{product.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                      {product.shortDescription}
                    </p>
                    <p className="mt-4 font-serif text-lg text-primary">{product.price}</p>
                    <a href="/#contact" className="btn-ghost mt-5 inline-flex">
                      {common.contactForInquiry} <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <Contact language={language} />

      {/* Footer */}
      <Footer language={language} nav={nav} brandSuffix={brandSuffix} />
    </main>
  );
}
