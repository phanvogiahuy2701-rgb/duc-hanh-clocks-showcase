import cuckooImg from "@/assets/cuckoo.jpg";
import cuckooProduct1 from "@/assets/cuckoo-1.png";
import cuckooProduct2 from "@/assets/cuckoo-2.png";
import cuckooProduct3 from "@/assets/cuckoo-3.png";
import cuckooProduct4 from "@/assets/cuckoo-4.png";
import tableImg from "@/assets/table.jpg";
import pendulumImg from "@/assets/pendulum.jpg";
import grandfatherImg from "@/assets/grandfather.jpg";
import rotatingImg from "@/assets/rotating.jpg";
import roundImg from "@/assets/round.jpg";
import squareImg from "@/assets/square.jpg";

export type Language = "vi" | "en";

export type LocalizedText = Record<Language, string>;

export interface Product {
  id: string;
  image: string;
  name: LocalizedText;
  shortDescription: LocalizedText;
  price: LocalizedText;
}

export interface CollectionSeed {
  id: string;
  slug: string;
  image: string;
  name: LocalizedText;
  shortIntro: LocalizedText;
  description: LocalizedText;
  features: Record<Language, string[]>;
  products: Product[];
}

export const collections: CollectionSeed[] = [
  {
    id: "cuckoo",
    slug: "cuckoo-clocks",
    image: cuckooImg,
    name: {
      vi: "Đồng hồ Cuckoo",
      en: "Cuckoo Clocks",
    },
    shortIntro: {
      vi: "Những mẫu đồng hồ cuckoo mang cảm hứng cổ điển, giàu tính trang trí và tạo cảm giác ấm cúng cho không gian sống.",
      en: "Character-rich cuckoo clocks inspired by classical forms, bringing warmth and decorative charm to the interior.",
    },
    description: {
      vi: "Bộ sưu tập Đồng hồ Cuckoo nổi bật với tinh thần thủ công và vẻ đẹp gợi nhớ những mẫu đồng hồ truyền thống châu Âu. Kiểu dáng chạm khắc phong phú, tỷ lệ cân đối và chuyển động cuckoo nhịp nhàng tạo nên một bức tranh độc đáo. Bộ sưu tập này lý tưởng cho những không gian yêu thích sự ấm áp, tính truyền thống và hiệu ứng thị giác mạnh.",
      en: "The Cuckoo Clocks collection reflects traditional clockmaking character with expressive detailing and artisan charm. Rich carved forms and classic proportions make these pieces strong focal points. Ideal for spaces that value warmth, tradition, and visual presence.",
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
   products: [
  {
    id: "cuckoo-maple-bird",
    image: cuckooProduct1,
    name: {
      vi: "Đồng hồ Cuckoo Lá Phong Chim Gỗ",
      en: "Maple Leaf Bird Cuckoo Clock",
    },
    shortDescription: {
      vi: "Thiết kế lá phong và chim gỗ chạm khắc nổi bật, phù hợp với không gian cổ điển, ấm áp và sang trọng.",
      en: "A statement cuckoo clock with carved maple leaves and bird details, ideal for classic, warm, and elegant interiors.",
    },
    price: {
      vi: "Liên hệ báo giá",
      en: "Price on request",
    },
  },
  {
    id: "cuckoo-dark-roof-house",
    image: cuckooProduct2,
    name: {
      vi: "Đồng hồ Cuckoo Nhà Gỗ Mái Tối",
      en: "Dark Roof Wooden House Cuckoo Clock",
    },
    shortDescription: {
      vi: "Mẫu cuckoo tông gỗ trầm với mái tối màu, tạo cảm giác cổ điển, tinh tế và dễ phối nội thất.",
      en: "A deep wood-tone cuckoo clock with a dark roof, bringing a classic, refined, and easy-to-style interior accent.",
    },
    price: {
      vi: "Liên hệ báo giá",
      en: "Price on request",
    },
  },
  {
    id: "cuckoo-classic-house",
    image: cuckooProduct3,
    name: {
      vi: "Đồng hồ Cuckoo Nhà Gỗ Cổ Điển",
      en: "Classic Wooden House Cuckoo Clock",
    },
    shortDescription: {
      vi: "Dáng nhà gỗ truyền thống với chi tiết rừng núi, phù hợp cho phòng khách, phòng làm việc và không gian gia đình.",
      en: "A traditional wooden house-style cuckoo clock with forest-inspired details, suitable for living rooms, studies, and family spaces.",
    },
    price: {
      vi: "Liên hệ báo giá",
      en: "Price on request",
    },
  },
  {
    id: "cuckoo-carved-deer",
    image: cuckooProduct4,
    name: {
      vi: "Đồng hồ Cuckoo Hươu Rừng Chạm Khắc",
      en: "Carved Deer Forest Cuckoo Clock",
    },
    shortDescription: {
      vi: "Thiết kế chạm khắc hươu và họa tiết rừng, tạo điểm nhấn nghệ thuật mạnh cho không gian trưng bày.",
      en: "A carved deer and forest-themed cuckoo clock designed as a strong artistic focal point for display spaces.",
    },
    price: {
      vi: "Liên hệ báo giá",
      en: "Price on request",
    },
  },
],
  {
    id: "table",
    slug: "table-clocks",
    image: tableImg,
    name: {
      vi: "Đồng hồ để bàn",
      en: "Table Clocks",
    },
    shortIntro: {
      vi: "Thiết kế gọn gàng, thanh lịch dành cho bàn làm việc, kệ trưng bày và những góc nội thất cần điểm nhấn tinh tế.",
      en: "Compact, elegant clocks designed for desks, shelves, and refined interior corners that need a polished accent.",
    },
    description: {
      vi: "Bộ sưu tập Đồng hồ để bàn mang đến giải pháp trưng bày nhỏ gọn nhưng vẫn sang trọng. Tỷ lệ cân đối, đường nét chỉn chu và khả năng đặt linh hoạt làm cho những chiếc đồng hồ này phù hợp với bàn làm việc, kệ trưng bày và các khu vực tiếp khách. Bộ sưu tập này lý tưởng cho những khách hàng muốn thêm một điểm nhấn tinh tế và chuyên nghiệp vào không gian.",
      en: "The Table Clocks collection offers a compact yet refined decorative solution. Balanced proportions, careful detailing, and versatile placement make these clocks well suited to desks, shelves, and refined reception areas. Perfect for adding a polished accent to professional and personal spaces.",
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
    products: [
      {
        id: "table-1",
        image: tableImg,
        name: {
          vi: "Đồng hồ Bàn Kiểu Tối Giản",
          en: "Minimalist Table Clock",
        },
        shortDescription: {
          vi: "Thiết kế đơn giản, sang trọng, phù hợp với không gian hiện đại",
          en: "Simple yet luxurious design for contemporary spaces",
        },
        price: {
          vi: "Liên hệ báo giá",
          en: "Price on request",
        },
      },
      {
        id: "table-2",
        image: tableImg,
        name: {
          vi: "Đồng hồ Bàn Cổ Điển",
          en: "Classic Table Clock",
        },
        shortDescription: {
          vi: "Dáng cổ điển, phối hợp tốt với nội thất truyền thống",
          en: "Traditional styling that pairs well with classic interiors",
        },
        price: {
          vi: "Liên hệ báo giá",
          en: "Price on request",
        },
      },
    ],
  },
  {
    id: "pendulum",
    slug: "pendulum-clocks",
    image: pendulumImg,
    name: {
      vi: "Đồng hồ quả lắc",
      en: "Pendulum Clocks",
    },
    shortIntro: {
      vi: "Chuyển động quả lắc nhịp nhàng gợi cảm giác an yên, kết hợp vẻ đẹp cổ điển với sự sang trọng bền lâu.",
      en: "Graceful pendulum movement brings calm rhythm and timeless elegance to classic interiors.",
    },
    description: {
      vi: "Đồng hồ quả lắc là lựa chọn dành cho những không gian yêu thích nhịp điệu truyền thống và vẻ đẹp bền vững. Chuyển động mềm mại của quả lắc và ngôn ngữ hình ảnh cổ điển tạo nên một bầu không khí yên tĩnh và thanh lịch. Bộ sưu tập này phù hợp với phòng khách, phòng làm việc và những không gian cần sự bình tĩnh.",
      en: "Pendulum Clocks are ideal for interiors that value traditional rhythm and enduring elegance. The gentle movement of the pendulum and the classical visual language create a composed, distinctive presence. Perfect for living rooms, studies, and spaces seeking a sense of calm.",
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
    products: [
      {
        id: "pendulum-1",
        image: pendulumImg,
        name: {
          vi: "Đồng hồ Quả Lắc Công Phu",
          en: "Artisan Pendulum Clock",
        },
        shortDescription: {
          vi: "Chế tác tinh tế, chuyển động quả lắc trôi chảy tự nhiên",
          en: "Refined craftsmanship with smooth, natural pendulum movement",
        },
        price: {
          vi: "Liên hệ báo giá",
          en: "Price on request",
        },
      },
      {
        id: "pendulum-2",
        image: pendulumImg,
        name: {
          vi: "Đồng hồ Quả Lắc Kích Thước Lớn",
          en: "Large Pendulum Clock",
        },
        shortDescription: {
          vi: "Dáng đứng, tạo điểm nhấn quan trọng cho không gian rộng",
          en: "Standing form, makes an important focal point in spacious interiors",
        },
        price: {
          vi: "Liên hệ báo giá",
          en: "Price on request",
        },
      },
    ],
  },
  {
    id: "grandfather",
    slug: "grandfather-clocks",
    image: grandfatherImg,
    name: {
      vi: "Đồng hồ tủ đứng",
      en: "Grandfather Clocks",
    },
    shortIntro: {
      vi: "Dáng đứng bề thế, sang trọng và giàu hiện diện — lý tưởng cho sảnh lớn và những không gian cần điểm nhấn nổi bật.",
      en: "Tall, commanding clocks with a luxurious presence, ideal for grand interiors and statement placements.",
    },
    description: {
      vi: "Bộ sưu tập Đồng hồ tủ đứng được thiết kế để tạo ấn tượng mạnh mẽ ngay từ ánh nhìn đầu tiên. Cấu trúc cao, tỷ lệ chắc chắn và vẻ ngoài thanh lịch biến những chiếc đồng hồ này thành một điểm tập trung thị giác rõ ràng. Phù hợp với các sảnh lớn, phòng khách rộng và những không gian tìm kiếm sự hiện diện mạnh mẽ.",
      en: "The Grandfather Clocks collection is designed to make an immediate visual impression. With tall silhouettes, solid proportions, and a formal sense of elegance, these clocks become focal points in grand spaces. Ideal for halls, expansive living rooms, and settings seeking commanding presence.",
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
    products: [
      {
        id: "grandfather-1",
        image: grandfatherImg,
        name: {
          vi: "Đồng hồ Tủ Đứng Cải Tiến",
          en: "Modern Grandfather Clock",
        },
        shortDescription: {
          vi: "Dáng tủ đứng với thiết kế đương đại, vừa truyền thống vừa cá tính",
          en: "Standing form with contemporary design, balancing tradition with personal character",
        },
        price: {
          vi: "Liên hệ báo giá",
          en: "Price on request",
        },
      },
      {
        id: "grandfather-2",
        image: grandfatherImg,
        name: {
          vi: "Đồng hồ Tủ Đứng Cổ Điển",
          en: "Classic Grandfather Clock",
        },
        shortDescription: {
          vi: "Thiết kế truyền thống, sang trọng, phù hợp cho không gian bảo tồn",
          en: "Traditional design with luxury finish, suitable for heritage spaces",
        },
        price: {
          vi: "Liên hệ báo giá",
          en: "Price on request",
        },
      },
    ],
  },
  {
    id: "rotating",
    slug: "rotating-clocks",
    image: rotatingImg,
    name: {
      vi: "Đồng hồ xoay",
      en: "Rotating Clocks",
    },
    shortIntro: {
      vi: "Thiết kế chuyển động xoay độc đáo, kết hợp công năng xem giờ với giá trị trưng bày ấn tượng.",
      en: "Distinctive rotating designs that blend timekeeping function with a memorable decorative statement.",
    },
    description: {
      vi: "Đồng hồ xoay mang tinh thần sáng tạo rõ nét, phù hợp với khách hàng yêu thích sự khác biệt trong thiết kế nội thất. Chuyển động xoay trở thành một yếu tố trang trí vừa có tính năng xem giờ vừa tạo điểm nhấn thị giác. Bộ sưu tập này lý tưởng cho những không gian tìm kiếm một điểm nhấn sáng tạo và độc lập.",
      en: "Rotating Clocks bring a clear sense of creativity for customers who appreciate distinctive interior objects. Their rotating motion creates visual interest and turns each piece into both functional timekeeper and decorative statement. Perfect for spaces seeking creative, independent accents.",
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
    products: [
      {
        id: "rotating-1",
        image: rotatingImg,
        name: {
          vi: "Đồng hồ Xoay Thủ Công",
          en: "Handcrafted Rotating Clock",
        },
        shortDescription: {
          vi: "Cơ chế xoay trơn tru, chế tác tỉ mỉ, tạo hiệu ứng thị giác độc đáo",
          en: "Smooth rotating mechanism with careful craftsmanship, unique visual effect",
        },
        price: {
          vi: "Liên hệ báo giá",
          en: "Price on request",
        },
      },
      {
        id: "rotating-2",
        image: rotatingImg,
        name: {
          vi: "Đồng hồ Xoay Đương Đại",
          en: "Contemporary Rotating Clock",
        },
        shortDescription: {
          vi: "Thiết kế hiện đại, phối hợp tốt với nội thất quốc tế",
          en: "Contemporary design that pairs well with international interiors",
        },
        price: {
          vi: "Liên hệ báo giá",
          en: "Price on request",
        },
      },
    ],
  },
  {
    id: "round",
    slug: "round-wall-clocks",
    image: roundImg,
    name: {
      vi: "Đồng hồ treo tường dạng tròn",
      en: "Round Wall Clocks",
    },
    shortIntro: {
      vi: "Kiểu dáng tròn cân đối, dễ phối với nhiều phong cách nội thất từ gia đình đến không gian thương mại.",
      en: "Balanced circular wall clocks that pair easily with a wide range of home and commercial interiors.",
    },
    description: {
      vi: "Đồng hồ treo tường dạng tròn sở hữu bố cục quen thuộc, hài hòa và dễ ứng dụng. Nhờ hình khối mềm mại và khả năng phối hợp tốt với nhiều phong cách nội thất, bộ sưu tập này phù hợp với nhà ở, văn phòng, cửa hàng và không gian thương mại. Sự đơn giản và linh hoạt của bộ sưu tập này làm cho nó trở thành lựa chọn phổ biến cho nhiều loại không gian.",
      en: "Round Wall Clocks offer a familiar, harmonious form that is easy to integrate into many environments. Their soft geometry and versatile styling make them suitable for homes, offices, retail spaces, and commercial interiors. The simplicity and flexibility of this collection make it a popular choice across diverse settings.",
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
    products: [
      {
        id: "round-1",
        image: roundImg,
        name: {
          vi: "Đồng hồ Tròn Cơ Bản",
          en: "Essential Round Clock",
        },
        shortDescription: {
          vi: "Thiết kế dạng tròn chuẩn mực, dễ sử dụng trong nhiều không gian",
          en: "Standard circular design, versatile for any space",
        },
        price: {
          vi: "Liên hệ báo giá",
          en: "Price on request",
        },
      },
      {
        id: "round-2",
        image: roundImg,
        name: {
          vi: "Đồng hồ Tròn Đặc Biệt",
          en: "Premium Round Clock",
        },
        shortDescription: {
          vi: "Kích thước lớn, hoàn thiện cao cấp, thích hợp cho không gian sang trọng",
          en: "Larger size with premium finish, ideal for luxurious spaces",
        },
        price: {
          vi: "Liên hệ báo giá",
          en: "Price on request",
        },
      },
    ],
  },
  {
    id: "square",
    slug: "square-wall-clocks",
    image: squareImg,
    name: {
      vi: "Đồng hồ treo tường dạng vuông",
      en: "Square Wall Clocks",
    },
    shortIntro: {
      vi: "Đường nét vuông vức hiện đại nhưng vẫn giữ được cảm giác ấm áp và chỉn chu của nghề làm đồng hồ.",
      en: "Clean square profiles with a modern feel while preserving the warmth and balance of traditional clockmaking.",
    },
    description: {
      vi: "Bộ sưu tập Đồng hồ treo tường dạng vuông hướng đến những không gian yêu thích sự gọn gàng, cân xứng và hiện đại. Hình khối rõ ràng giúp cấu trúc lại thành phần tường, trong khi vẫn giữ được ấm áp và tính tinh tế của chế tác thủ công. Phù hợp với không gian nội thất đương đại, văn phòng hiện đại và những không gian tìm kiếm sự cân bằng giữa truyền thống và hiện đại.",
      en: "Square Wall Clocks are designed for interiors that appreciate order, symmetry, and a more contemporary look. Their clear geometry helps structure the wall composition while still preserving warmth and craft tradition. Ideal for contemporary interiors, modern offices, and spaces seeking balance between tradition and modernity.",
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
    products: [
      {
        id: "square-1",
        image: squareImg,
        name: {
          vi: "Đồng hồ Vuông Tối Giản",
          en: "Minimalist Square Clock",
        },
        shortDescription: {
          vi: "Thiết kế cực tiểu, đường nét sạch sẽ, thích hợp cho không gian Scandinavian",
          en: "Minimalist design with clean lines, perfect for Scandinavian interiors",
        },
        price: {
          vi: "Liên hệ báo giá",
          en: "Price on request",
        },
      },
      {
        id: "square-2",
        image: squareImg,
        name: {
          vi: "Đồng hồ Vuông Đầu Đơn",
          en: "Modern Square Clock",
        },
        shortDescription: {
          vi: "Dáng vuông với chi tiết tinh tế, kết hợp hiện đại và truyền thống",
          en: "Square form with refined details, blending modern and traditional",
        },
        price: {
          vi: "Liên hệ báo giá",
          en: "Price on request",
        },
      },
    ],
  },
];

export function getCollectionBySlug(slug: string): CollectionSeed | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getLocalizedCollection(
  collection: CollectionSeed,
  language: Language
) {
  return {
    id: collection.id,
    slug: collection.slug,
    image: collection.image,
    name: collection.name[language],
    shortIntro: collection.shortIntro[language],
    description: collection.description[language],
    features: collection.features[language],
    products: collection.products.map((p) => ({
      id: p.id,
      image: p.image,
      name: p.name[language],
      shortDescription: p.shortDescription[language],
      price: p.price[language],
    })),
  };
}
