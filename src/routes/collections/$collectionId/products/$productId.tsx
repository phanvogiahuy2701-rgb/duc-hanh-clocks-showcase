import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, Clock, MessageCircle, ShieldCheck } from "lucide-react";

import {
  getCollectionBySlug,
  type CollectionSeed,
  type Language,
  type LocalizedText,
  type Product,
} from "@/data/collectionsOverride";

export const Route = createFileRoute(
  "/collections/$collectionId/products/$productId"
)({
  component: ProductDetailPage,
});

type ProductSpecification = {
  label: LocalizedText;
  value: LocalizedText;
};

type ProductWithDetails = Product & {
  gallery?: string[];
  sku?: string;
  brand?: LocalizedText;
  longDescription?: LocalizedText;
  specifications?: ProductSpecification[];
};

const copy = {
  vi: {
    home: "Trang chủ",
    collections: "Bộ sưu tập",
    productCode: "Mã sản phẩm",
    specifications: "Thông số sản phẩm",
    description: "Mô tả sản phẩm",
    checkShowroom: "Xem showroom còn hàng",
    inquiry: "Gửi yêu cầu tư vấn",
    backToCollection: "Quay lại bộ sưu tập",
    benefitsTitle: "Ưu đãi & hỗ trợ",
    benefits: [
      "Tư vấn mẫu phù hợp với không gian của bạn.",
      "Hỗ trợ thông tin kích thước, chất liệu và cách lắp đặt.",
      "Có thể trao đổi trực tiếp với showroom trước khi đặt hàng.",
    ],
    notFoundTitle: "Sản phẩm không tìm thấy",
    notFoundText: "Sản phẩm bạn đang tìm không tồn tại hoặc đã được chuyển sang trang khác.",
    brand: "Thương hiệu",
    madeIn: "Được chế tác tại Thành phố Hồ Chí Minh, Việt Nam",
  },
  en: {
    home: "Home",
    collections: "Collections",
    productCode: "Product code",
    specifications: "Product Specifications",
    description: "Product Description",
    checkShowroom: "Check showroom availability",
    inquiry: "Send inquiry",
    backToCollection: "Back to collection",
    benefitsTitle: "Benefits & Support",
    benefits: [
      "Consultation on the model that best fits your space.",
      "Support with dimensions, materials, and placement details.",
      "You can contact the showroom directly before placing an order.",
    ],
    notFoundTitle: "Product not found",
    notFoundText: "The product you are looking for does not exist or has been moved.",
    brand: "Brand",
    madeIn: "Crafted in Ho Chi Minh City, Vietnam",
  },
} as const;

function getProductById(
  collectionSlug: string,
  productId: string
): { collection: CollectionSeed; product: ProductWithDetails } | undefined {
  const collection = getCollectionBySlug(collectionSlug);
  const product = collection?.products.find((item) => item.id === productId) as
    | ProductWithDetails
    | undefined;

  if (!collection || !product) {
    return undefined;
  }

  return { collection, product };
}

function getDefaultProductSpecifications(collection: CollectionSeed): ProductSpecification[] {
  const isWallClock = collection.id === "round" || collection.id === "square";
  const isStandingClock = collection.id === "grandfather";
  const isCuckooClock = collection.id === "cuckoo";

  return [
    {
      label: { vi: "Chiều cao", en: "Height" },
      value: { vi: "Liên hệ showroom", en: "Contact showroom" },
    },
    {
      label: { vi: "Chiều rộng", en: "Width" },
      value: { vi: "Liên hệ showroom", en: "Contact showroom" },
    },
    {
      label: { vi: "Độ sâu", en: "Depth" },
      value: { vi: "Liên hệ showroom", en: "Contact showroom" },
    },
    {
      label: { vi: "Màu sắc", en: "Color" },
      value: { vi: "Theo mẫu sản phẩm", en: "As shown" },
    },
    {
      label: { vi: "Chất liệu", en: "Material" },
      value: {
        vi: isCuckooClock || isStandingClock ? "Gỗ hoàn thiện cao cấp" : "Vật liệu hoàn thiện cao cấp",
        en: isCuckooClock || isStandingClock ? "Premium finished wood" : "Premium finished materials",
      },
    },
    {
      label: { vi: "Kiểu lắp đặt", en: "Placement" },
      value: {
        vi: isStandingClock ? "Đặt sàn" : isWallClock || isCuckooClock ? "Treo tường" : "Treo tường / trưng bày",
        en: isStandingClock ? "Floor standing" : isWallClock || isCuckooClock ? "Wall mounted" : "Wall mounted / display",
      },
    },
    {
      label: { vi: "Bộ máy", en: "Movement" },
      value: { vi: "Bộ máy đồng hồ chất lượng cao", en: "High-quality clock movement" },
    },
    {
      label: { vi: "Xuất xứ", en: "Origin" },
      value: { vi: "Thành phố Hồ Chí Minh, Việt Nam", en: "Ho Chi Minh City, Vietnam" },
    },
    {
      label: { vi: "Bảo hành", en: "Warranty" },
      value: { vi: "Liên hệ tư vấn", en: "Contact for details" },
    },
  ];
}

function getLocalizedProduct(
  collection: CollectionSeed,
  product: ProductWithDetails,
  language: Language
) {
  const specifications =
    product.specifications && product.specifications.length > 0
      ? product.specifications
      : getDefaultProductSpecifications(collection);

  return {
    id: product.id,
    image: product.image,
    gallery: product.gallery && product.gallery.length > 0 ? product.gallery : [product.image],
    sku: product.sku ?? product.id.toUpperCase(),
    brand: product.brand?.[language] ?? "Đồng hồ KANA",
    name: product.name[language],
    shortDescription: product.shortDescription[language],
    longDescription: product.longDescription?.[language] ?? product.shortDescription[language],
    price: product.price[language],
    specifications: specifications.map((item) => ({
      label: item.label[language],
      value: item.value[language],
    })),
  };
}

function ProductDetailPage() {
  const { collectionId, productId } = Route.useParams();
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

  const currentCopy = copy[language];
  const productMatch = getProductById(collectionId, productId);

  if (!productMatch) {
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
              {currentCopy.home}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { collection, product: productSeed } = productMatch;
  const product = getLocalizedProduct(collection, productSeed, language);
  const collectionName = collection.name[language];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="container-page flex h-18 items-center justify-between py-4">
          <Link to="/" className="group flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-serif text-xl tracking-tight text-foreground">
              Đồng hồ <span className="text-muted-foreground">KANA</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage("vi")}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                language === "vi" ? "bg-primary text-primary-foreground" : "text-foreground/65 hover:text-foreground"
              }`}
            >
              VI
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                language === "en" ? "bg-primary text-primary-foreground" : "text-foreground/65 hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section className="pt-28 md:pt-32">
        <div className="container-page">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-foreground/50 md:text-sm">
            <Link to="/" className="transition hover:text-primary">
              {currentCopy.home}
            </Link>
            <span>/</span>
            <a href="/collections" className="transition hover:text-primary">
              {currentCopy.collections}
            </a>
            <span>/</span>
            <Link
              to="/collections/$collectionId"
              params={{ collectionId: collection.slug }}
              className="transition hover:text-primary"
            >
              {collectionName}
            </Link>
            <span>/</span>
            <span className="text-foreground/70">{product.name}</span>
          </nav>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <div className="overflow-hidden rounded-3xl bg-card p-6 shadow-[var(--shadow-card)] md:p-10">
                <img
                  src={product.image}
                  alt={product.name}
                  width={900}
                  height={900}
                  className="mx-auto h-auto max-h-[680px] w-full object-contain"
                />
              </div>
            </div>

            <div className="lg:pt-6">
              <span className="eyebrow">{collectionName}</span>
              <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
                {product.name}
              </h1>

              <div className="mt-5 space-y-2 text-sm text-foreground/65 md:text-base">
                <p>
                  <span className="font-semibold text-foreground/80">{currentCopy.productCode}:</span>{" "}
                  {product.sku}
                </p>
                <p>
                  <span className="font-semibold text-foreground/80">{currentCopy.brand}:</span>{" "}
                  {product.brand}
                </p>
              </div>

              <p className="mt-7 text-3xl font-semibold tracking-wide text-primary md:text-4xl">
                {product.price}
              </p>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
                {product.longDescription}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href="/contact" className="btn-primary w-full">
                  <MessageCircle className="h-4 w-4" />
                  {currentCopy.inquiry}
                </a>
                <a href="/contact" className="btn-outline w-full">
                  {currentCopy.checkShowroom}
                </a>
              </div>

              <div className="mt-8 rounded-2xl bg-secondary p-6">
                <div className="flex items-center gap-2 text-foreground">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <h2 className="font-serif text-2xl">{currentCopy.benefitsTitle}</h2>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/70 md:text-base">
                  {currentCopy.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="eyebrow">{currentCopy.description}</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">{product.name}</h2>
              <p className="mt-6 leading-relaxed text-foreground/70">
                {product.longDescription}
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
              <h2 className="font-serif text-3xl">{currentCopy.specifications}</h2>
              <dl className="mt-6 divide-y divide-border">
                {product.specifications.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[0.9fr_1.1fr] gap-4 py-4 text-sm md:text-base"
                  >
                    <dt className="font-medium text-foreground/65">{item.label}</dt>
                    <dd className="text-foreground">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-14">
            <Link
              to="/collections/$collectionId"
              params={{ collectionId: collection.slug }}
              className="btn-outline"
            >
              <ArrowLeft className="h-4 w-4" />
              {currentCopy.backToCollection}
            </Link>
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
                {currentCopy.madeIn}
              </p>
            </div>
            <div className="text-sm text-cream/50">
              © {new Date().getFullYear()} Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu KANA
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
