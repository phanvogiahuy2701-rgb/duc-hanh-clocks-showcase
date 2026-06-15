import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";

import {
  getCollectionBySlug,
  getLocalizedCollection,
  type Language,
} from "@/data/collectionsOverride";

export const Route = createFileRoute("/collections/$collectionId")({
  component: CollectionDetailPage,
});

const copy = {
  vi: {
    backToCollections: "Quay lại bộ sưu tập",
    collection: "Bộ sưu tập",
    products: "Sản phẩm",
    features: "Đặc điểm nổi bật",
    price: "Giá",
    contactForInquiry: "Liên hệ tư vấn",
    backHome: "Quay lại trang chủ",
    notFoundTitle: "Bộ sưu tập không tìm thấy",
    notFoundText: "Bộ sưu tập bạn đang tìm không tồn tại.",
    aboutCollection: "Về bộ sưu tập này",
    exploreProducts: "Khám phá các sản phẩm trong bộ sưu tập này",
    interestedTitle: "Quan tâm đến bộ sưu tập này?",
    interestedText:
      "Liên hệ với chúng tôi để tư vấn chi tiết, xem mẫu sản phẩm hoặc đặt hàng.",
    footerText:
      "Những mẫu đồng hồ mang vẻ đẹp vượt thời gian — từ xưởng chế tác tại Thành phố Hồ Chí Minh đến nhiều không gian sống và trưng bày.",
    madeIn: "Được chế tác tại Thành phố Hồ Chí Minh, Việt Nam",
  },
  en: {
    backToCollections: "Back to Collections",
    collection: "Collection",
    products: "Products",
    features: "Features",
    price: "Price",
    contactForInquiry: "Contact for Inquiry",
    backHome: "Back to Home",
    notFoundTitle: "Collection not found",
    notFoundText: "The collection you're looking for doesn't exist.",
    aboutCollection: "About This Collection",
    exploreProducts: "Explore the products in this collection",
    interestedTitle: "Interested in this collection?",
    interestedText:
      "Contact us for detailed consultation, product samples, or to place an order.",
    footerText:
      "Timeless clocks crafted with elegance — from our workshop in Ho Chi Minh City to homes and display spaces around the world.",
    madeIn: "Crafted in Ho Chi Minh City, Vietnam",
  },
} as const;

function CollectionDetailPage() {
  const location = useLocation();
  const { collectionId } = Route.useParams();
  const [language, setLanguage] = useState<Language>("vi");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("duc-hanh-language");
    if (savedLanguage === "vi" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("duc-hanh-language", language);
    document.documentElement.lang = language;
  }, [language]);

  if (location.pathname.includes("/products/")) {
    return <Outlet />;
  }

  const collectionSeed = getCollectionBySlug(collectionId);
  const currentCopy = copy[language];

  if (!collectionSeed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">
            {currentCopy.notFoundTitle}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {currentCopy.notFoundText}
          </p>
          <div className="mt-6">
            <Link to="/" className="btn-primary">
              {currentCopy.backHome}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const collection = getLocalizedCollection(collectionSeed, language);

  return (
    <main className="bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="container-page flex h-18 items-center justify-between py-4">
          <Link to="/" className="group flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-serif text-xl tracking-tight text-foreground">
              Đồng hồ <span className="text-muted-foreground">Kana</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage("vi")}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                language === "vi"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/65 hover:text-foreground"
              }`}
            >
              VI
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                language === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/65 hover:text-foreground"
              }`}
            >
              EN
            </button>

            <a
              href="/collections"
              className="text-sm text-foreground/75 transition-colors hover:text-primary"
            >
              {currentCopy.backToCollections}
            </a>
          </div>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center pt-20">
        <img
          src={collection.image}
          alt={collection.name}
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />

        <div className="container-page relative z-10 pb-20 pt-32">
          <div className="max-w-2xl">
            <span className="eyebrow">{currentCopy.collection}</span>

            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
              {collection.name}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/75">
              {collection.shortIntro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl md:text-5xl">
              {currentCopy.aboutCollection}
            </h2>

            <p className="mt-6 leading-relaxed text-foreground/75">
              {collection.description}
            </p>

            <div className="mt-14">
              <h3 className="font-serif text-2xl">{currentCopy.features}</h3>

              <ul className="mt-8 space-y-3">
                {collection.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-28 md:py-36">
        <div className="container-page">
          <h2 className="font-serif text-4xl md:text-5xl">
            {currentCopy.products}
          </h2>

          <p className="mt-4 leading-relaxed text-foreground/70">
            {currentCopy.exploreProducts}
          </p>

          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {collection.products.map((product) => (
              <a
                key={product.id}
                href={`/collections/${collection.slug}/products/${product.id}`}
                className="group block text-center"
              >
                <div className="aspect-square overflow-hidden rounded-xl bg-card shadow-[var(--shadow-card)] transition duration-500 group-hover:-translate-y-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={720}
                    height={720}
                    loading="lazy"
                    className="h-full w-full scale-[1.04] object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="mx-auto mt-4 max-w-[15rem]">
                  <h3 className="font-serif text-lg leading-snug text-foreground transition-colors group-hover:text-primary md:text-xl">
                    {product.name}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-foreground/65 md:text-sm">
                    {product.shortDescription}
                  </p>

                  <p className="mt-3 text-sm font-semibold text-foreground md:text-base">
                    {product.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container-page text-center">
          <h2 className="font-serif text-4xl md:text-5xl">
            {currentCopy.interestedTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-foreground/75">
            {currentCopy.interestedText}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-primary">
              {currentCopy.contactForInquiry}
              <ArrowRight className="h-4 w-4" />
            </a>

            <a href="/collections" className="btn-outline">
              <ArrowLeft className="h-4 w-4" />
              {currentCopy.backToCollections}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-charcoal text-cream">
        <div className="container-page py-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="font-serif text-xl">Đồng hồ KANA</span>
              </div>

              <p className="mt-4 max-w-sm leading-relaxed text-cream/70">
                {currentCopy.footerText}
              </p>
            </div>

            <div className="text-sm text-cream/50">
              <p>
                © {new Date().getFullYear()} Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu Kana
              </p>
              <p className="mt-2">{currentCopy.madeIn}</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
