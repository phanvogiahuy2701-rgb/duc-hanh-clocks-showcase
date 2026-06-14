import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  Clock,
  Hammer,
  Sparkles,
  ShieldCheck,
  Boxes,
  Headphones,
  Menu,
  X,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import craftImg from "@/assets/craft.jpg";
import cuckooImg from "@/assets/cuckoo.jpg";
import tableImg from "@/assets/table.jpg";
import pendulumImg from "@/assets/pendulum.jpg";
import grandfatherImg from "@/assets/grandfather.jpg";
import rotatingImg from "@/assets/rotating.jpg";
import roundImg from "@/assets/round.jpg";
import squareImg from "@/assets/square.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

type Language = "vi" | "en";
type LocalizedText = Record<Language, string>;
type CollectionSeed = {
  id: string;
  image: string;
  name: LocalizedText;
  short: LocalizedText;
  description: LocalizedText;
  features: Record<Language, string[]>;
};

type Collection = {
  id: string;
  image: string;
  name: string;
  short: string;
  description: string;
  features: string[];
};

const copy = {
  vi: {
    metaTitle: "Đức Hạnh Clocks — Đồng hồ chế tác tinh tế từ Việt Nam",
    brandSuffix: "Đồng hồ",
    nav: [
      { label: "Trang chủ", href: "#home" },
      { label: "Giới thiệu", href: "#about" },
      { label: "Bộ sưu tập", href: "#collections" },
      { label: "Chế tác", href: "#craftsmanship" },
      { label: "Liên hệ", href: "#contact" },
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
      scroll: "Cuộn xuống",
      rightsReserved: "Mọi quyền được bảo lưu.",
      contactViaForm: "Liên hệ qua biểu mẫu",
      language: "Ngôn ngữ",
    },
    hero: {
      eyebrow: "Thành phố Hồ Chí Minh · Việt Nam",
      titleLine1: "Tinh hoa chế tác",
      titleAccent: "vượt thời gian",
      titleLine2: "cho mọi không gian sống",
      description:
        "Những mẫu đồng hồ thanh lịch được tạo nên với độ chính xác, sự ấm áp và vẻ đẹp bền lâu — dành cho gia đình, cửa hàng và không gian đón tiếp chuyên nghiệp.",
      primaryCta: "Khám phá bộ sưu tập",
      secondaryCta: "Liên hệ",
      alt: "Đồng hồ quả lắc thủ công bằng gỗ trong không gian xưởng chế tác",
    },
    about: {
      eyebrow: "Giới thiệu",
      title: "Về Đức Hạnh Clocks",
      description1:
        "Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu Đức Hạnh là doanh nghiệp Việt Nam chuyên sản xuất và kinh doanh đồng hồ tại Thành phố Hồ Chí Minh. Với kinh nghiệm nhiều năm, công ty theo đuổi sự chỉn chu trong chế tác, độ bền trong sử dụng và vẻ đẹp thanh lịch trong từng thiết kế.",
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
    craftsmanship: {
      eyebrow: "Chế tác",
      title: "Chăm chút trong từng chi tiết",
      description:
        "Mỗi chiếc đồng hồ đều phản ánh sự quan tâm đến chi tiết, chất lượng vật liệu và độ bền lâu dài. Chúng tôi kết hợp kinh nghiệm sản xuất với tư duy thẩm mỹ để tạo nên sản phẩm vừa hữu dụng vừa giàu giá trị trang trí.",
      cards: [
        {
          icon: ShieldCheck,
          title: "Vật liệu chọn lọc",
          text: "Lựa chọn vật liệu phù hợp để bảo đảm độ bền và vẻ ngoài tinh tế.",
        },
        {
          icon: Hammer,
          title: "Chế tác tỉ mỉ",
          text: "Hoàn thiện cẩn thận với sự chú ý đến từng chi tiết nhỏ.",
        },
        {
          icon: Sparkles,
          title: "Thiết kế thanh lịch",
          text: "Ngôn ngữ thiết kế bền vững, phù hợp với nhiều phong cách nội thất.",
        },
      ],
    },
    whyUs: {
      eyebrow: "Lý do chọn chúng tôi",
      title: "Vì sao chọn Đức Hạnh Clocks?",
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
    metaTitle: "Đức Hạnh Clocks — Refined Clock Craftsmanship from Vietnam",
    brandSuffix: "Clocks",
    nav: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Collections", href: "#collections" },
      { label: "Craftsmanship", href: "#craftsmanship" },
      { label: "Contact", href: "#contact" },
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
      scroll: "Scroll",
      rightsReserved: "All rights reserved.",
      contactViaForm: "Contact via inquiry form",
      language: "Language",
    },
    hero: {
      eyebrow: "Ho Chi Minh City · Vietnam",
      titleLine1: "Timeless",
      titleAccent: "Craftsmanship",
      titleLine2: "for Every Home",
      description:
        "Elegant clocks designed with precision, warmth, and lasting beauty — crafted for homes, retail spaces, and refined hospitality interiors.",
      primaryCta: "Explore Collections",
      secondaryCta: "Contact Us",
      alt: "Handcrafted wooden pendulum clock in an artisan workshop",
    },
    about: {
      eyebrow: "About",
      title: "About Đức Hạnh Clocks",
      description1:
        "Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu Đức Hạnh is a Vietnamese manufacturer and trading company specializing in clocks in Ho Chi Minh City. With years of experience, the company focuses on refined craftsmanship, dependable durability, and elegant design in every product line.",
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
    craftsmanship: {
      eyebrow: "Craftsmanship",
      title: "Crafted with Care and Precision",
      description:
        "Every clock reflects attention to detail, material quality, and long-term durability. We combine manufacturing experience with elegant design to create products that are both functional and decorative.",
      cards: [
        {
          icon: ShieldCheck,
          title: "Quality Materials",
          text: "Carefully selected materials for durability and a refined finish.",
        },
        {
          icon: Hammer,
          title: "Detailed Craftsmanship",
          text: "Careful production with close attention to every detail.",
        },
        {
          icon: Sparkles,
          title: "Elegant Design",
          text: "Timeless styling suited to a variety of homes and interiors.",
        },
      ],
    },
    whyUs: {
      eyebrow: "Why Us",
      title: "Why Choose Đức Hạnh Clocks?",
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

const collectionSeeds: CollectionSeed[] = [
  {
    id: "cuckoo",
    image: cuckooImg,
    name: {
      vi: "Đồng hồ Cuckoo",
      en: "Cuckoo Clocks",
    },
    short: {
      vi: "Những mẫu đồng hồ cuckoo mang cảm hứng cổ điển, giàu tính trang trí và tạo cảm giác ấm cúng cho không gian sống.",
      en: "Character-rich cuckoo clocks inspired by classical forms, bringing warmth and decorative charm to the interior.",
    },
    description: {
      vi: "Bộ sưu tập Đồng hồ Cuckoo nổi bật với tinh thần thủ công và vẻ đẹp gợi nhớ những mẫu đồng hồ truyền thống châu Âu. Kiểu dáng chạm khắc và bố cục giàu chi tiết giúp sản phẩm trở thành điểm nhấn trang trí đầy cảm xúc trong phòng khách, sảnh đón tiếp và không gian cổ điển.",
      en: "The Cuckoo Clocks collection reflects traditional clockmaking character with expressive detailing and artisan charm. Rich carved forms and classic proportions make these pieces strong decorative focal points for living rooms, reception spaces, and interiors with a warm traditional mood.",
    },
    features: {
      vi: [
        "Thiết kế giàu chi tiết và tính trang trí",
        "Tinh thần cổ điển, ấm cúng và nổi bật",
        "Phù hợp cho phòng khách và không gian trưng bày",
      ],
      en: [
        "Expressive decorative detailing",
        "Warm traditional character",
        "Ideal for living rooms and display settings",
      ],
    },
  },
  {
    id: "table",
    image: tableImg,
    name: {
      vi: "Đồng hồ để bàn",
      en: "Table Clocks",
    },
    short: {
      vi: "Thiết kế gọn gàng, thanh lịch dành cho bàn làm việc, kệ trưng bày và những góc nội thất cần điểm nhấn tinh tế.",
      en: "Compact, elegant clocks designed for desks, shelves, and refined interior corners that need a polished accent.",
    },
    description: {
      vi: "Bộ sưu tập Đồng hồ để bàn mang đến giải pháp trưng bày nhỏ gọn nhưng vẫn sang trọng. Tỷ lệ cân đối, đường nét chỉn chu và khả năng đặt linh hoạt giúp dòng sản phẩm này phù hợp với bàn làm việc, kệ sách, quầy tiếp khách và các không gian yêu thích vẻ đẹp tinh tế.",
      en: "The Table Clocks collection offers a compact yet refined decorative solution. Balanced proportions, careful detailing, and versatile placement make these clocks well suited to desks, shelves, reception counters, and interiors that value subtle sophistication.",
    },
    features: {
      vi: [
        "Kiểu dáng nhỏ gọn, dễ bố trí",
        "Tạo điểm nhấn thanh lịch cho mặt bàn",
        "Phù hợp cho phòng làm việc và khu vực tiếp khách",
      ],
      en: [
        "Compact format for flexible placement",
        "Refined accent for tabletop styling",
        "Well suited to offices and reception areas",
      ],
    },
  },
  {
    id: "pendulum",
    image: pendulumImg,
    name: {
      vi: "Đồng hồ quả lắc",
      en: "Pendulum Clocks",
    },
    short: {
      vi: "Chuyển động quả lắc nhịp nhàng gợi cảm giác an yên, kết hợp vẻ đẹp cổ điển với sự sang trọng bền lâu.",
      en: "Graceful pendulum movement brings calm rhythm and timeless elegance to classic interiors.",
    },
    description: {
      vi: "Đồng hồ quả lắc là lựa chọn dành cho những không gian yêu thích nhịp điệu truyền thống và vẻ đẹp bền vững. Chuyển động mềm mại của quả lắc cùng hình thức cổ điển tạo nên cảm giác trang nhã, phù hợp với phòng khách, phòng làm việc và khu vực sinh hoạt chính.",
      en: "Pendulum Clocks are ideal for interiors that value traditional rhythm and enduring elegance. The gentle movement of the pendulum and the classical visual language create a composed, distinguished presence for living rooms, studies, and main family spaces.",
    },
    features: {
      vi: [
        "Chuyển động quả lắc tạo cảm giác thư thái",
        "Phong cách cổ điển dễ tạo chiều sâu không gian",
        "Phù hợp cho phòng khách và phòng làm việc",
      ],
      en: [
        "Gentle pendulum movement",
        "Classic style with lasting appeal",
        "Suitable for living rooms and studies",
      ],
    },
  },
  {
    id: "grandfather",
    image: grandfatherImg,
    name: {
      vi: "Đồng hồ tủ đứng",
      en: "Grandfather Clocks",
    },
    short: {
      vi: "Dáng đứng bề thế, sang trọng và giàu hiện diện — lý tưởng cho sảnh lớn và những không gian cần điểm nhấn nổi bật.",
      en: "Tall, commanding clocks with a luxurious presence, ideal for grand interiors and statement placements.",
    },
    description: {
      vi: "Bộ sưu tập Đồng hồ tủ đứng được thiết kế để tạo ấn tượng mạnh mẽ ngay từ ánh nhìn đầu tiên. Cấu trúc cao, tỷ lệ chắc chắn và vẻ ngoài sang trọng giúp dòng sản phẩm này trở thành tâm điểm cho sảnh, phòng khách lớn và không gian mang tính tiếp đón trang trọng.",
      en: "The Grandfather Clocks collection is designed to make an immediate visual impression. With tall silhouettes, solid proportions, and a formal sense of elegance, these clocks become focal pieces for halls, large living spaces, and interiors meant to feel distinguished and welcoming.",
    },
    features: {
      vi: [
        "Thiết kế tủ đứng bề thế và sang trọng",
        "Tạo điểm nhấn mạnh cho không gian lớn",
        "Phù hợp với sảnh và phòng khách rộng",
      ],
      en: [
        "Luxurious standing form",
        "Strong focal presence",
        "Ideal for halls and larger interiors",
      ],
    },
  },
  {
    id: "rotating",
    image: rotatingImg,
    name: {
      vi: "Đồng hồ xoay",
      en: "Rotating Clocks",
    },
    short: {
      vi: "Thiết kế chuyển động xoay độc đáo, kết hợp công năng xem giờ với giá trị trưng bày ấn tượng.",
      en: "Distinctive rotating designs that blend timekeeping function with a memorable decorative statement.",
    },
    description: {
      vi: "Đồng hồ xoay mang tinh thần sáng tạo rõ nét, phù hợp với khách hàng yêu thích sự khác biệt trong thiết kế nội thất. Chuyển động xoay trở thành điểm nhấn thị giác thú vị, giúp sản phẩm vừa thực dụng vừa có sức hút như một vật phẩm trang trí độc đáo.",
      en: "Rotating Clocks bring a clear sense of creativity for customers who appreciate distinctive interior objects. Their rotating motion creates visual interest and turns each piece into both a useful timekeeper and a striking decorative feature.",
    },
    features: {
      vi: [
        "Cơ chế xoay tạo điểm nhấn khác biệt",
        "Tính thẩm mỹ cao và giàu sức hút thị giác",
        "Phù hợp cho không gian cần nét sáng tạo",
      ],
      en: [
        "Distinctive rotating mechanism",
        "High decorative impact",
        "Suited to interiors seeking a creative accent",
      ],
    },
  },
  {
    id: "round",
    image: roundImg,
    name: {
      vi: "Đồng hồ treo tường dạng tròn",
      en: "Round Wall Clocks",
    },
    short: {
      vi: "Kiểu dáng tròn cân đối, dễ phối với nhiều phong cách nội thất từ gia đình đến không gian thương mại.",
      en: "Balanced circular wall clocks that pair easily with a wide range of home and commercial interiors.",
    },
    description: {
      vi: "Đồng hồ treo tường dạng tròn sở hữu bố cục quen thuộc, hài hòa và dễ ứng dụng. Nhờ hình khối mềm mại và khả năng phối hợp tốt với nhiều bề mặt, dòng sản phẩm này phù hợp cho nhà ở, văn phòng, cửa hàng và không gian tiếp khách cần sự gọn gàng thanh lịch.",
      en: "Round Wall Clocks offer a familiar, harmonious form that is easy to integrate into many environments. Their soft geometry and versatile styling make them suitable for homes, offices, retail settings, and reception areas that call for understated elegance.",
    },
    features: {
      vi: [
        "Dáng tròn hài hòa, dễ ứng dụng",
        "Phối hợp tốt với nhiều phong cách nội thất",
        "Phù hợp cho nhà ở, văn phòng và cửa hàng",
      ],
      en: [
        "Balanced circular form",
        "Versatile across many interiors",
        "Suitable for homes, offices, and retail spaces",
      ],
    },
  },
  {
    id: "square",
    image: squareImg,
    name: {
      vi: "Đồng hồ treo tường dạng vuông",
      en: "Square Wall Clocks",
    },
    short: {
      vi: "Đường nét vuông vức hiện đại nhưng vẫn giữ được cảm giác ấm áp và chỉn chu của nghề làm đồng hồ.",
      en: "Clean square profiles with a modern feel while preserving the warmth and balance of traditional clockmaking.",
    },
    description: {
      vi: "Bộ sưu tập Đồng hồ treo tường dạng vuông hướng đến những không gian yêu thích sự gọn gàng, cân xứng và hiện đại. Hình khối rõ ràng giúp sản phẩm dễ trở thành điểm nhấn kiến tạo bố cục, đồng thời vẫn giữ vẻ ấm áp đặc trưng của vật phẩm thủ công chất lượng.",
      en: "Square Wall Clocks are designed for interiors that appreciate order, symmetry, and a more contemporary look. Their clear geometry helps structure the wall composition while still preserving the warmth and crafted quality associated with refined clockmaking.",
    },
    features: {
      vi: [
        "Hình khối vuông vức, hiện đại",
        "Bố cục cân đối và rõ ràng",
        "Phù hợp với không gian nội thất đương đại",
      ],
      en: [
        "Modern square silhouette",
        "Balanced and structured layout",
        "Well suited to contemporary interiors",
      ],
    },
  },
];

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
        <a href="#home" className="group flex items-center gap-2">
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
          <a href="#contact" className="btn-primary">
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
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-fit">
              {contactLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ language }: { language: Language }) {
  const hero = copy[language].hero;
  const common = copy[language].common;

  return (
    <section id="home" className="relative flex min-h-screen items-center">
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
            <br /> {hero.titleLine2}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/75">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#collections" className="btn-primary">
              {hero.primaryCta} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-outline">
              {hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/40">
        {common.scroll}
      </div>
    </section>
  );
}

function About({ language }: { language: Language }) {
  const about = copy[language].about;

  return (
    <section id="about" className="py-28 md:py-36">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <img
              src={aboutImg}
              alt={about.alt}
              width={1280}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden max-w-[220px] rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:block">
            <p className="font-serif text-3xl text-primary">20+</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              {about.statCard}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{about.title}</h2>
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

function Collections({
  language,
  collections,
}: {
  language: Language;
  collections: Collection[];
}) {
  const collectionsCopy = copy[language].collections;
  const common = copy[language].common;

  return (
    <section id="collections" className="bg-secondary/50 py-28 md:py-36">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{collectionsCopy.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">{collectionsCopy.title}</h2>
          <p className="mt-5 leading-relaxed text-foreground/70">{collectionsCopy.description}</p>
        </Reveal>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => (
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
                <h3 className="font-serif text-2xl text-foreground">{collection.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{collection.short}</p>
                <a href={`#detail-${collection.id}`} className="btn-ghost mt-5 inline-flex">
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

function CollectionDetail({
  collection,
  index,
  language,
}: {
  collection: Collection;
  index: number;
  language: Language;
}) {
  const reversed = index % 2 === 1;
  const common = copy[language].common;

  return (
    <section
      id={`detail-${collection.id}`}
      className="last:border-b-0 scroll-mt-24 border-b border-border/60 py-24 md:py-28"
    >
      <div
        className={`container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
          <img
            src={collection.image}
            alt={collection.name}
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>

        <Reveal delay={120}>
          <span className="eyebrow">
            {common.collectionLabel} · 0{index + 1}
          </span>
          <h3 className="mt-4 font-serif text-4xl md:text-5xl">{collection.name}</h3>
          <p className="mt-6 leading-relaxed text-foreground/75">{collection.description}</p>
          <ul className="mt-8 space-y-3">
            {collection.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-foreground/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary mt-10">
            {common.contactForInquiry} <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Craftsmanship({ language }: { language: Language }) {
  const craftsmanship = copy[language].craftsmanship;

  return (
    <section id="craftsmanship" className="relative overflow-hidden py-28 md:py-36">
      <img
        src={craftImg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{craftsmanship.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">{craftsmanship.title}</h2>
          <p className="mt-5 leading-relaxed text-foreground/70">{craftsmanship.description}</p>
        </Reveal>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {craftsmanship.cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 100}
              className="rounded-2xl border border-border bg-card/80 p-9 text-center backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                <card.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 font-serif text-2xl">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{card.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs({ language }: { language: Language }) {
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
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:32px_32px]" />
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
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground transition placeholder:text-muted-foreground/60 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring"
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
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground transition placeholder:text-muted-foreground/60 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring"
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

function HomePage() {
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
    document.title = copy[language].metaTitle;
  }, [language]);

  const nav = copy[language].nav;
  const brandSuffix = copy[language].brandSuffix;
  const collections = collectionSeeds.map((seed) => ({
    id: seed.id,
    image: seed.image,
    name: seed.name[language],
    short: seed.short[language],
    description: seed.description[language],
    features: seed.features[language],
  }));

  return (
    <main className="bg-background text-foreground">
      <Header
        language={language}
        setLanguage={setLanguage}
        nav={nav}
        contactLabel={copy[language].common.contactUs}
        brandSuffix={brandSuffix}
      />
      <Hero language={language} />
      <About language={language} />
      <Collections language={language} collections={collections} />
      <div className="bg-background">
        {collections.map((collection, index) => (
          <CollectionDetail
            key={collection.id}
            collection={collection}
            index={index}
            language={language}
          />
        ))}
      </div>
      <Craftsmanship language={language} />
      <WhyUs language={language} />
      <Contact language={language} />
      <Footer language={language} nav={nav} brandSuffix={brandSuffix} />
    </main>
  );
}
