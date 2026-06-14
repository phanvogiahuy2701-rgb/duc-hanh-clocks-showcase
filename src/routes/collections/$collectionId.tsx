import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";

import cuckooImg from "@/assets/cuckoo.jpg";
import tableImg from "@/assets/table.jpg";
import pendulumImg from "@/assets/pendulum.jpg";
import grandfatherImg from "@/assets/grandfather.jpg";
import rotatingImg from "@/assets/rotating.jpg";
import roundImg from "@/assets/round.jpg";
import squareImg from "@/assets/square.jpg";

export const Route = createFileRoute("/collections/$collectionId")({
  component: CollectionDetailPage,
});

type Language = "vi" | "en";

interface CollectionData {
  id: string;
  image: string;
  name: Record<Language, string>;
  short: Record<Language, string>;
  description: Record<Language, string>;
  features: Record<Language, string[]>;
  products: Array<{
    id: string;
    name: Record<Language, string>;
    description: Record<Language, string>;
    price: Record<Language, string>;
  }>;
}

const collectionsData: Record<string, CollectionData> = {
  "cuckoo-clocks": {
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
      vi: "Bộ sưu tập Đồng hồ Cuckoo nổi bật với tinh thần thủ công và vẻ đẹp gợi nhớ những mẫu đồng hồ truyền thống châu Âu. Kiểu dáng chạm khắc chi tiết, tỷ lệ cân đối và âm thanh đặc trưng tạo nên sự hấp dẫn vượt thời gian. Mỗi chiếc là sự kết hợp hoàn hảo giữa công năng xem giờ và giá trị trang trí cho không gian sống của bạn.",
      en: "The Cuckoo Clocks collection reflects traditional clockmaking character with expressive detailing and artisan charm. Rich carved forms and classic proportions make these pieces strong focal points in living rooms, studies, or reception areas. Each clock combines timekeeping function with remarkable decorative presence.",
    },
    features: {
      vi: [
        "Thiết kế giàu chi tiết và tính trang trí",
        "Tinh thần cổ điển, ấm cúng và nổi bật",
        "Phù hợp cho phòng khách và không gian trưng bày",
        "Âm thanh cuckoo đặc trưng",
        "Vật liệu cao cấp được chọn lọc",
      ],
      en: [
        "Expressive decorative detailing",
        "Warm traditional character",
        "Ideal for living rooms and display settings",
        "Distinctive cuckoo sound",
        "Premium selected materials",
      ],
    },
    products: [
      {
        id: "cuckoo-1",
        name: { vi: "Cuckoo Classic Walnut", en: "Cuckoo Classic Walnut" },
        description: {
          vi: "Thiết kế cực kỳ chi tiết với khắc gỗ tinh xảo, công nghiệp lâu đời",
          en: "Intricately detailed design with fine wood carving, timeless craftsmanship",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "cuckoo-2",
        name: { vi: "Cuckoo Modern Oak", en: "Cuckoo Modern Oak" },
        description: {
          vi: "Kết hợp thiết kế cổ điển với chất liệu gỗ sồi hiện đại",
          en: "Blends classic design with modern oak wood material",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "cuckoo-3",
        name: { vi: "Cuckoo Deluxe", en: "Cuckoo Deluxe" },
        description: {
          vi: "Phiên bản cao cấp với chi tiết đầy đủ và âm thanh hoàn hảo",
          en: "Premium version with complete details and perfect sound",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "cuckoo-4",
        name: { vi: "Cuckoo Compact", en: "Cuckoo Compact" },
        description: {
          vi: "Phiên bản nhỏ gọn, phù hợp cho không gian hạn chế",
          en: "Compact version suitable for limited spaces",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
    ],
  },
  "table-clocks": {
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
      vi: "Bộ sưu tập Đồng hồ để bàn mang đến giải pháp trưng bày nhỏ gọn nhưng vẫn sang trọng. Tỷ lệ cân đối, đường nét chỉn chu và khả năng đặt linh hoạt làm cho chúng hoàn hảo cho bàn làm việc, kệ sách hay các góc nội thất cần một điểm nhấn thanh lịch.",
      en: "The Table Clocks collection offers a compact yet refined decorative solution. Balanced proportions, careful detailing, and versatile placement make these clocks well suited to desks, shelves, and interior displays. Perfect for offices, homes, and retail spaces.",
    },
    features: {
      vi: [
        "Kiểu dáng nhỏ gọn, dễ bố trí",
        "Tạo điểm nhấn thanh lịch cho mặt bàn",
        "Phù hợp cho phòng làm việc và khu vực tiếp khách",
        "Tỷ lệ cân đối và dễ di chuyển",
        "Năng lượng pin hoặc dây cấp điện",
      ],
      en: [
        "Compact format for flexible placement",
        "Refined accent for tabletop styling",
        "Well suited to offices and reception areas",
        "Balanced proportions and easy to move",
        "Battery or electric powered options",
      ],
    },
    products: [
      {
        id: "table-1",
        name: { vi: "Table Classic", en: "Table Classic" },
        description: {
          vi: "Thiết kế tròn cổ điển, vật liệu gỗ cao cấp",
          en: "Classic round design, premium wood material",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "table-2",
        name: { vi: "Table Modern Square", en: "Table Modern Square" },
        description: {
          vi: "Thiết kế vuông hiện đại, phù hợp với nội thất đương đại",
          en: "Modern square design, suits contemporary interiors",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "table-3",
        name: { vi: "Table Minimalist", en: "Table Minimalist" },
        description: {
          vi: "Đơn giản nhưng thanh lịch, bề mặt sạch sẽ",
          en: "Simple yet elegant, clean surface design",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
    ],
  },
  "pendulum-clocks": {
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
      vi: "Đồng hồ quả lắc là lựa chọn dành cho những không gian yêu thích nhịp điệu truyền thống và vẻ đẹp bền vững. Chuyển động mềm mại của quả lắc kết hợp với thiết kế cổ điển tạo nên một khí không trầm lắng và đầy thu hút cho phòng khách hay phòng làm việc.",
      en: "Pendulum Clocks are ideal for interiors that value traditional rhythm and enduring elegance. The gentle movement of the pendulum and the classical visual language create a composed, distinctive presence in any room.",
    },
    features: {
      vi: [
        "Chuyển động quả lắc tạo cảm giác thư thái",
        "Phong cách cổ điển dễ tạo chiều sâu không gian",
        "Phù hợp cho phòng khách và phòng làm việc",
        "Chính xác và độ bền cao",
        "Chuyển động nhịp nhàng và thu hút",
      ],
      en: [
        "Gentle pendulum movement",
        "Classic style with lasting appeal",
        "Suitable for living rooms and studies",
        "Accurate and highly durable",
        "Rhythmic and captivating movement",
      ],
    },
    products: [
      {
        id: "pendulum-1",
        name: { vi: "Pendulum Heritage", en: "Pendulum Heritage" },
        description: {
          vi: "Thiết kế truyền thống với quả lắc brass, máy chuyển động cơ học chính xác",
          en: "Traditional design with brass pendulum, precise mechanical movement",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "pendulum-2",
        name: { vi: "Pendulum Elegant", en: "Pendulum Elegant" },
        description: {
          vi: "Thiết kế sang trọng, vỏ gỗ cứng chọn lọc, quả lắc chi tiết",
          en: "Elegant design, hardwood case, detailed pendulum",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "pendulum-3",
        name: { vi: "Pendulum Grand", en: "Pendulum Grand" },
        description: {
          vi: "Phiên bản lớn, quả lắc dài tạo chuyển động mềm mại rõ ràng",
          en: "Large version, long pendulum creates clear soft movement",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
    ],
  },
  "grandfather-clocks": {
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
      vi: "Bộ sưu tập Đồng hồ tủ đứng được thiết kế để tạo ấn tượng mạnh mẽ ngay từ ánh nhìn đầu tiên. Cấu trúc cao, tỷ lệ chắc chắn và vẻ ngoài chính thức tạo nên sự sang trọng bền lâu. Đây là lựa chọn hoàn hảo cho những sảnh, phòng khách rộng hay không gian thương mại cao cấp.",
      en: "The Grandfather Clocks collection is designed to make an immediate visual impression. With tall silhouettes, solid proportions, and a formal sense of elegance, these clocks become focal points in grand entrance halls, large living rooms, and upscale commercial spaces.",
    },
    features: {
      vi: [
        "Thiết kế tủ đứng bề thế và sang trọng",
        "Tạo điểm nhấn mạnh cho không gian lớn",
        "Phù hợp với sảnh và phòng khách rộng",
        "Quả lắc dài và chuyển động ấn tượng",
        "Cơ chế đáng tin cậy và tuổi thọ dài",
      ],
      en: [
        "Luxurious standing form",
        "Strong focal presence",
        "Ideal for halls and larger interiors",
        "Long pendulum and impressive movement",
        "Reliable mechanism and long lifespan",
      ],
    },
    products: [
      {
        id: "grandfather-1",
        name: { vi: "Grandfather Classic", en: "Grandfather Classic" },
        description: {
          vi: "Dáng cổ điển sang trọng, quả lắc dài và âm thanh bell",
          en: "Classic luxurious form, long pendulum and bell sound",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "grandfather-2",
        name: { vi: "Grandfather Grand Oak", en: "Grandfather Grand Oak" },
        description: {
          vi: "Gỗ sồi cao cấp, tủ chứa quả lắc và cơ chế cấp số đầy đủ",
          en: "Premium oak wood, complete pendulum housing and mechanism storage",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "grandfather-3",
        name: { vi: "Grandfather Heritage", en: "Grandfather Heritage" },
        description: {
          vi: "Thiết kế di sản với chi tiết chạm khắc tỉ mỉ",
          en: "Heritage design with meticulous carved details",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
    ],
  },
  "rotating-clocks": {
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
      vi: "Đồng hồ xoay mang tinh thần sáng tạo rõ nét, phù hợp với khách hàng yêu thích sự khác biệt trong thiết kế nội thất. Chuyển động xoay trở thành một tác phẩm nghệ thuật chuyển động, vừa cung cấp thời gian chính xác vừa mang lại sức hút thị giác liên tục cho không gian.",
      en: "Rotating Clocks bring a clear sense of creativity for customers who appreciate distinctive interior objects. Their rotating motion creates visual interest and turns each piece into both a functional timekeeper and a captivating kinetic art piece.",
    },
    features: {
      vi: [
        "Cơ chế xoay tạo điểm nhấn khác biệt",
        "Tính thẩm mỹ cao và giàu sức hút thị giác",
        "Phù hợp cho không gian cần nét sáng tạo",
        "Chuyển động mềm mại và yên tĩnh",
        "Thiết kế hiện đại và độc đáo",
      ],
      en: [
        "Distinctive rotating mechanism",
        "High decorative impact",
        "Suited to interiors seeking a creative accent",
        "Smooth and quiet movement",
        "Modern and unique design",
      ],
    },
    products: [
      {
        id: "rotating-1",
        name: { vi: "Rotating Sphere", en: "Rotating Sphere" },
        description: {
          vi: "Quả cầu xoay từ từ với mặt đồng hồ hiện đại",
          en: "Slowly rotating sphere with modern clock face",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "rotating-2",
        name: { vi: "Rotating Geometric", en: "Rotating Geometric" },
        description: {
          vi: "Hình học xoay tạo hiệu ứng thị giác độc đáo",
          en: "Geometric rotation creates unique visual effect",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "rotating-3",
        name: { vi: "Rotating Modern", en: "Rotating Modern" },
        description: {
          vi: "Thiết kế tối giản hiện đại với chuyển động mềm mại",
          en: "Minimalist modern design with smooth rotation",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
    ],
  },
  "round-wall-clocks": {
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
      vi: "Đồng hồ treo tường dạng tròn sở hữu bố cục quen thuộc, hài hòa và dễ ứng dụng. Nhờ hình khối mềm mại và khả năng phối hợp tốt với nhiều phong cách nội thất, chúng là lựa chọn an toàn và thanh lịch cho nhà ở, văn phòng hay cửa hàng.",
      en: "Round Wall Clocks offer a familiar, harmonious form that is easy to integrate into many environments. Their soft geometry and versatile styling make them suitable for homes, offices, retail spaces, and hospitality settings.",
    },
    features: {
      vi: [
        "Dáng tròn hài hòa, dễ ứng dụng",
        "Phối hợp tốt với nhiều phong cách nội thất",
        "Phù hợp cho nhà ở, văn phòng và cửa hàng",
        "Kích thước đa dạng có sẵn",
        "Dễ lắp đặt và bảo trì",
      ],
      en: [
        "Balanced circular form",
        "Versatile across many interiors",
        "Suitable for homes, offices, and retail spaces",
        "Various sizes available",
        "Easy to install and maintain",
      ],
    },
    products: [
      {
        id: "round-1",
        name: { vi: "Round Classic", en: "Round Classic" },
        description: {
          vi: "Thiết kế tròn cổ điển với kim đơn giản",
          en: "Classic round design with simple hands",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "round-2",
        name: { vi: "Round Minimalist", en: "Round Minimalist" },
        description: {
          vi: "Thiết kế tối giản, bề mặt sạch sẽ",
          en: "Minimalist design, clean surface",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "round-3",
        name: { vi: "Round Elegant", en: "Round Elegant" },
        description: {
          vi: "Thiết kế thanh lịch với chi tiết kinh lịch",
          en: "Elegant design with refined details",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "round-4",
        name: { vi: "Round Large", en: "Round Large" },
        description: {
          vi: "Kích thước lớn, phù hợp cho sảnh và không gian rộng",
          en: "Large size, suitable for halls and spacious areas",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
    ],
  },
  "square-wall-clocks": {
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
      vi: "Bộ sưu tập Đồng hồ treo tường dạng vuông hướng đến những không gian yêu thích sự gọn gàng, cân xứng và hiện đại. Hình khối rõ ràng giúp sắp xếp bố cục tường và tạo cảm giác trật tự, đồng thời vẫn giữ được ấm áp tinh tế của thiết kế thủ công.",
      en: "Square Wall Clocks are designed for interiors that appreciate order, symmetry, and a more contemporary look. Their clear geometry helps structure the wall composition while still preserving the subtle warmth of handcrafted design.",
    },
    features: {
      vi: [
        "Hình khối vuông vức, hiện đại",
        "Bố cục cân đối và rõ ràng",
        "Phù hợp với không gian nội thất đương đại",
        "Tích hợp dễ dàng vào thiết kế tường",
        "Chất liệu cao cấp và lâu bền",
      ],
      en: [
        "Modern square silhouette",
        "Balanced and structured layout",
        "Well suited to contemporary interiors",
        "Easily integrates into wall design",
        "Premium materials and durable construction",
      ],
    },
    products: [
      {
        id: "square-1",
        name: { vi: "Square Modern", en: "Square Modern" },
        description: {
          vi: "Thiết kế vuông hiện đại tinh tế",
          en: "Refined modern square design",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "square-2",
        name: { vi: "Square Minimalist", en: "Square Minimalist" },
        description: {
          vi: "Tối giản nhưng sang trọng, đường nét sạch sẽ",
          en: "Minimalist yet luxurious, clean lines",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "square-3",
        name: { vi: "Square Contemporary", en: "Square Contemporary" },
        description: {
          vi: "Thiết kế đương đại với màu sắc trung tính",
          en: "Contemporary design with neutral colors",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
      {
        id: "square-4",
        name: { vi: "Square Grand", en: "Square Grand" },
        description: {
          vi: "Phiên bản lớn cho không gian rộng",
          en: "Large version for spacious areas",
        },
        price: { vi: "Liên hệ tư vấn", en: "Contact for pricing" },
      },
    ],
  },
};

const copy = {
  vi: {
    backToCollections: "Quay lại bộ sưu tập",
    collection: "Bộ sưu tập",
    products: "Sản phẩm",
    productGrid: "Lưới sản phẩm",
    viewDetails: "Xem chi tiết",
    contactForInquiry: "Liên hệ tư vấn",
    price: "Giá",
    features: "Đặc điểm nổi bật",
    backHome: "Quay lại trang chủ",
    contactUs: "Liên hệ chúng tôi",
  },
  en: {
    backToCollections: "Back to Collections",
    collection: "Collection",
    products: "Products",
    productGrid: "Product Grid",
    viewDetails: "View Details",
    contactForInquiry: "Contact for Inquiry",
    price: "Price",
    features: "Features",
    backHome: "Back to Home",
    contactUs: "Contact Us",
  },
};

function CollectionDetailPage() {
  const { collectionId } = useParams({ from: "/collections/$collectionId" });
  const [language, setLanguage] = useState<Language>("vi");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("duc-hanh-language");
    if (savedLanguage === "vi" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const collection = collectionsData[collectionId];

  if (!collection) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">
            {language === "vi" ? "Bộ sưu tập không tìm thấy" : "Collection not found"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {language === "vi"
              ? "Bộ sưu tập bạn đang tìm không tồn tại."
              : "The collection you're looking for doesn't exist."}
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {copy[language].backHome}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const localizedCollection = {
    id: collection.id,
    image: collection.image,
    name: collection.name[language],
    short: collection.short[language],
    description: collection.description[language],
    features: collection.features[language],
    products: collection.products.map((p) => ({
      id: p.id,
      name: p.name[language],
      description: p.description[language],
      price: p.price[language],
    })),
  };

  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="container-page flex h-18 items-center justify-between py-4">
          <Link to="/" className="group flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-serif text-xl tracking-tight text-foreground">
              Đức Hạnh <span className="text-muted-foreground">Clocks</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-sm text-foreground/75 transition-colors hover:text-primary"
            >
              {copy[language].backToCollections}
            </Link>
          </div>
        </div>
      </header>

      {/* Collection Hero */}
      <section className="relative flex min-h-screen items-center pt-20">
        <img
          src={localizedCollection.image}
          alt={localizedCollection.name}
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        <div className="container-page relative z-10 pb-20 pt-32">
          <div className="max-w-2xl">
            <span className="eyebrow">{copy[language].collection}</span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
              {localizedCollection.name}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/75">
              {localizedCollection.short}
            </p>
          </div>
        </div>
      </section>

      {/* Collection Description */}
      <section className="py-28 md:py-36">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl md:text-5xl">
              {language === "vi" ? "Về bộ sưu tập này" : "About This Collection"}
            </h2>
            <p className="mt-6 leading-relaxed text-foreground/75">
              {localizedCollection.description}
            </p>

            {/* Features */}
            <div className="mt-14">
              <h3 className="font-serif text-2xl">{copy[language].features}</h3>
              <ul className="mt-8 space-y-3">
                {localizedCollection.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-foreground/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-secondary/50 py-28 md:py-36">
        <div className="container-page">
          <h2 className="font-serif text-4xl md:text-5xl">{copy[language].products}</h2>
          <p className="mt-4 leading-relaxed text-foreground/70">
            {language === "vi"
              ? "Khám phá các sản phẩm trong bộ sưu tập này"
              : "Explore the products in this collection"}
          </p>

          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {localizedCollection.products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <div className="h-full w-full bg-gradient-to-br from-secondary to-beige flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Clock className="mx-auto h-12 w-12 opacity-30" />
                      <p className="mt-2 text-sm">{product.name}</p>
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl text-foreground">{product.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {product.description}
                  </p>
                  <div className="mt-5 flex items-baseline justify-between">
                    <span className="eyebrow">{copy[language].price}</span>
                    <span className="text-lg font-semibold text-foreground">{product.price}</span>
                  </div>
                  <a href="#contact" className="btn-ghost mt-5 inline-flex">
                    {copy[language].contactForInquiry} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 md:py-36">
        <div className="container-page text-center">
          <h2 className="font-serif text-4xl md:text-5xl">
            {language === "vi"
              ? "Quan tâm đến bộ sưu tập này?"
              : "Interested in this collection?"}
          </h2>
          <p className="mt-6 mx-auto max-w-2xl leading-relaxed text-foreground/75">
            {language === "vi"
              ? "Liên hệ với chúng tôi để tư vấn chi tiết, xem mẫu sản phẩm hoặc đặt hàng."
              : "Contact us for detailed consultation, product samples, or to place an order."}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary">
              {copy[language].contactForInquiry} <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/" className="btn-outline">
              {copy[language].backToCollections}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream">
        <div className="container-page py-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="font-serif text-xl">Đức Hạnh Clocks</span>
              </div>
              <p className="mt-4 max-w-sm leading-relaxed text-cream/70">
                {language === "vi"
                  ? "Những mẫu đồng hồ mang vẻ đẹp vượt thời gian — từ xưởng chế tác tại Thành phố Hồ Chí Minh đến nhiều không gian sống và trưng bày."
                  : "Timeless clocks crafted with elegance — from our workshop in Ho Chi Minh City to homes and display spaces around the world."}
              </p>
            </div>
            <div className="text-sm text-cream/50">
              <p>
                © {new Date().getFullYear()} Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu Đức
                Hạnh
              </p>
              <p className="mt-2">
                {language === "vi"
                  ? "Được chế tác tại Thành phố Hồ Chí Minh, Việt Nam"
                  : "Crafted in Ho Chi Minh City, Vietnam"}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
