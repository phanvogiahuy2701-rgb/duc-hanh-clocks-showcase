import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Phone, MapPin } from "lucide-react";
import { collections, getCollectionBySlug, getLocalizedCollection, type Language } from "@/data/collections";
import { notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/collections/$slug")({
  component: CollectionPage,
  notFoundComponent: () => <div>Collection not found</div>,
});

const copy = {
  vi: {
    backToCollections: "Quay lại bộ sưu tập",
    contactForInquiry: "Liên hệ tư vấn",
    phone: "Điện thoại",
    address: "Địa chỉ",
    person: "Chị Thanh Tuyền",
    phoneNumber: "0838 975 299",
    address_text: "1078 Đường 3/2, Phường Phú Thọ,\nThành phố Hồ Chí Minh, Việt Nam",
  },
  en: {
    backToCollections: "Back to Collections",
    contactForInquiry: "Contact for Inquiry",
    phone: "Phone",
    address: "Address",
    person: "Mrs. Thanh Tuyen",
    phoneNumber: "0838 975 299",
    address_text: "1078 3/2 Street, Phu Tho Ward,\nHo Chi Minh City, Vietnam",
  },
} as const;

function CollectionPage() {
  const { slug } = Route.useParams();
  const [language, setLanguage] = useState<Language>("vi");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("duc-hanh-language");
    if (savedLanguage === "vi" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "vi" ? "vi" : "en";
  }, [language]);

  const collection = getCollectionBySlug(slug);
  if (!collection) {
    throw notFound();
  }

  const localized = getLocalizedCollection(collection, language);
  const currentCopy = copy[language];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="container-page flex h-18 items-center justify-between py-4">
          <a href="/#collections" className="group flex items-center gap-2 text-sm">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {currentCopy.backToCollections}
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage("vi")}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                language === "vi"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/65 hover:text-foreground"
              }`}
            >
              VI
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                language === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/65 hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mt-20 pt-12">
        <div className="container-page mb-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Hero Image */}
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <img
                src={localized.image}
                alt={localized.name}
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            {/* Hero Content */}
            <div className="flex flex-col justify-center">
              <h1 className="font-serif text-5xl leading-tight text-foreground md:text-6xl">
                {localized.name}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                {localized.shortIntro}
              </p>
              <p className="mt-6 leading-relaxed text-foreground/75">
                {localized.description}
              </p>

              {/* Features */}
              <ul className="mt-8 space-y-3">
                {localized.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-foreground/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/#contact" className="btn-primary inline-flex">
                  {currentCopy.contactForInquiry} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-secondary/50 py-24 md:py-32">
        <div className="container-page">
          <h2 className="font-serif text-4xl md:text-5xl mb-12">
            {language === "vi" ? "Sản phẩm" : "Products"}
          </h2>

          {/* Product Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {localized.products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                {/* Product Image */}
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-foreground">{product.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {product.shortDescription}
                  </p>
                  <p className="mt-4 font-serif text-xl text-primary">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="rounded-2xl border border-border bg-card p-10 md:p-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl">
                  {language === "vi" ? "Liên hệ tư vấn" : "Get in Touch"}
                </h2>
                <p className="mt-6 leading-relaxed text-foreground/70">
                  {language === "vi"
                    ? "Chúng tôi sẵn sàng trao đổi về bộ sưu tập này hoặc cần hỗ trợ theo nhu cầu riêng của bạn."
                    : "We're ready to discuss this collection or provide custom support for your needs."}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="eyebrow">{currentCopy.phone}</p>
                    <a
                      href="tel:0838975299"
                      className="mt-2 block text-foreground transition-colors hover:text-primary"
                    >
                      {currentCopy.phoneNumber}
                    </a>
                    <p className="text-sm text-muted-foreground">{currentCopy.person}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="eyebrow">{currentCopy.address}</p>
                    <p className="mt-2 whitespace-pre-line leading-relaxed text-foreground">
                      {currentCopy.address_text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream border-t border-border">
        <div className="container-page py-12">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <p className="text-sm text-cream/70">
              {language === "vi"
                ? "© 2024 Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu Đức Hạnh. Mọi quyền được bảo lưu."
                : "© 2024 Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu Đức Hạnh. All rights reserved."}
            </p>
            <a href="/" className="text-sm text-cream/70 hover:text-cream transition-colors">
              {language === "vi" ? "Về trang chủ" : "Back to Home"}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
