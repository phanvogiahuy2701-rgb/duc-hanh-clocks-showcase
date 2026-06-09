import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
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

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Contact", href: "#contact" },
];

type Collection = {
  id: string;
  name: string;
  short: string;
  description: string;
  image: string;
  features: string[];
};

const collections: Collection[] = [
  {
    id: "cuckoo",
    name: "Cuckoo Clocks",
    short:
      "Charming and artistic clocks inspired by classic European design. Perfect for homes that value tradition and storytelling.",
    description:
      "Our cuckoo clocks bring charm and character into every home. With detailed design and traditional inspiration, they are perfect for customers who appreciate artistic decoration and classic movement.",
    image: cuckooImg,
    features: [
      "Decorative and charming design",
      "Inspired by traditional craftsmanship",
      "Suitable for cozy living spaces",
    ],
  },
  {
    id: "table",
    name: "Table Clocks",
    short:
      "Compact and elegant clocks designed for desks, shelves, and bedside tables. A refined accent for any interior.",
    description:
      "Table clocks are designed for small spaces while still adding elegance and personality. They are ideal for offices, bedrooms, shelves, and reception areas.",
    image: tableImg,
    features: [
      "Compact and practical",
      "Elegant decorative accent",
      "Suitable for desks and shelves",
    ],
  },
  {
    id: "pendulum",
    name: "Pendulum Clocks",
    short:
      "Classic clocks with graceful movement and timeless appeal. Ideal for creating a warm and traditional atmosphere.",
    description:
      "Pendulum clocks represent timeless beauty. Their gentle movement creates a calm feeling and adds a traditional touch to any room.",
    image: pendulumImg,
    features: [
      "Classic pendulum movement",
      "Warm and traditional appearance",
      "Suitable for living rooms and offices",
    ],
  },
  {
    id: "grandfather",
    name: "Grandfather Clocks",
    short:
      "Tall, impressive, and luxurious clocks that become the centerpiece of a room. Designed for elegance and long-lasting presence.",
    description:
      "Grandfather clocks are designed to make a strong impression. With their tall structure and elegant details, they create a luxurious focal point for large rooms and formal spaces.",
    image: grandfatherImg,
    features: [
      "Luxurious standing design",
      "Strong visual presence",
      "Ideal for large interiors",
    ],
  },
  {
    id: "rotating",
    name: "Rotating Clocks",
    short:
      "Unique clocks with creative rotating movement, combining functionality with decorative beauty.",
    description:
      "Rotating clocks combine creativity and function. Their unique movement makes them attractive decorative pieces for customers looking for something different.",
    image: rotatingImg,
    features: [
      "Creative rotating design",
      "Eye-catching movement",
      "Suitable as decorative highlights",
    ],
  },
  {
    id: "round",
    name: "Round Wall Clocks",
    short:
      "Simple, versatile, and elegant wall clocks suitable for homes, offices, and commercial spaces.",
    description:
      "Round wall clocks are simple, elegant, and easy to match with different interiors. They are suitable for both homes and business spaces.",
    image: roundImg,
    features: [
      "Minimal and versatile",
      "Easy to match with interiors",
      "Suitable for homes and offices",
    ],
  },
  {
    id: "square",
    name: "Square Wall Clocks",
    short:
      "Modern and balanced wall clocks with clean lines, suitable for contemporary interiors.",
    description:
      "Square wall clocks offer a modern and balanced design. Their clean shape gives a contemporary look while keeping the warmth of traditional clockmaking.",
    image: squareImg,
    features: [
      "Modern square shape",
      "Clean and balanced layout",
      "Suitable for contemporary spaces",
    ],
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.animation =
              "fadeUp 0.9s ease-out forwards";
            io.unobserve(e.target);
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
  as: Tag = "div",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function Header() {
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
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-18 py-4">
        <a href="#home" className="flex items-center gap-2 group">
          <Clock className="h-5 w-5 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-serif text-xl tracking-tight text-foreground">
            Đức Hạnh <span className="text-muted-foreground">Clocks</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-foreground/75 hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary hidden md:inline-flex">
          Contact Us
        </a>
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <div className="container-page py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/80 hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-fit"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <img
        src={heroImg}
        alt="Handcrafted wooden pendulum clock in artisan workshop"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      <div className="container-page relative z-10 pt-32 pb-20">
        <div className="max-w-2xl reveal-in">
          <span className="eyebrow">Est. Ho Chi Minh City · Vietnam</span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] text-foreground">
            Timeless <em className="italic text-primary">Craftsmanship</em>
            <br /> for Every Home
          </h1>
          <p className="mt-7 text-lg text-foreground/75 max-w-xl leading-relaxed">
            Elegant clocks designed with precision, warmth, and lasting beauty —
            handcrafted by Đức Hạnh artisans for homes and businesses.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#collections" className="btn-primary">
              Explore Collections <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase text-foreground/40">
        Scroll
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="container-page grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <img
              src={aboutImg}
              alt="Craftsman assembling a clock movement"
              width={1280}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="hidden md:block absolute -bottom-8 -right-8 bg-card border border-border rounded-2xl p-6 max-w-[220px] shadow-[var(--shadow-soft)]">
            <p className="font-serif text-3xl text-primary">20+</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
              Years of crafting
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <span className="eyebrow">About</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            About Đức Hạnh Clocks
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu Đức Hạnh is a Vietnamese
            clock manufacturer and trading company based in Ho Chi Minh City.
            With years of experience in producing and distributing clocks, the
            company focuses on craftsmanship, durability, and elegant design.
          </p>
          <p className="mt-4 text-foreground/75 leading-relaxed">
            Each clock is created not only to tell time, but also to bring
            warmth, character, and beauty into living spaces.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <p className="font-serif text-2xl text-primary">7</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                Collections
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-primary">100%</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                Made in Vietnam
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-primary">∞</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                Attention to detail
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section id="collections" className="py-28 md:py-36 bg-secondary/50">
      <div className="container-page">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Collections</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Our Clock Collections
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            Seven distinct collections — each shaped by tradition, refined by
            craft, and made to live with you for years to come.
          </p>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {collections.map((c, i) => (
            <Reveal
              key={c.id}
              delay={i * 70}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={c.image}
                  alt={c.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl text-foreground">
                  {c.name}
                </h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                  {c.short}
                </p>
                <a
                  href={`#detail-${c.id}`}
                  className="btn-ghost mt-5 inline-flex"
                >
                  View Details <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionDetail({ c, index }: { c: Collection; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <section
      id={`detail-${c.id}`}
      className="py-24 md:py-28 scroll-mt-24 border-b border-border/60 last:border-b-0"
    >
      <div
        className={`container-page grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
          <img
            src={c.image}
            alt={c.name}
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full aspect-[5/4] object-cover hover:scale-105 transition-transform duration-700"
          />
        </Reveal>
        <Reveal delay={120}>
          <span className="eyebrow">Collection · 0{index + 1}</span>
          <h3 className="mt-4 font-serif text-4xl md:text-5xl">{c.name}</h3>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            {c.description}
          </p>
          <ul className="mt-8 space-y-3">
            {c.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 text-foreground/80"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary mt-10">
            Contact for Inquiry <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Craftsmanship() {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Quality Materials",
      text: "Selected materials for durability and refined appearance.",
    },
    {
      icon: Hammer,
      title: "Detailed Craftsmanship",
      text: "Careful production with attention to every detail.",
    },
    {
      icon: Sparkles,
      title: "Elegant Design",
      text: "Timeless styles suitable for different homes and interiors.",
    },
  ];
  return (
    <section
      id="craftsmanship"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      <img
        src={craftImg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="container-page relative">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Craftsmanship</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Crafted with Care and Precision
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            Every clock reflects attention to detail, material quality, and
            long-term durability. We combine manufacturing experience with
            elegant design to create products that are both functional and
            decorative.
          </p>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-7">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 100}
              className="bg-card/80 backdrop-blur border border-border rounded-2xl p-9 text-center hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                <c.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 font-serif text-2xl">{c.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                {c.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Experienced Vietnamese Manufacturer",
      text: "Years of expertise producing quality clocks for domestic and export markets.",
    },
    {
      icon: Boxes,
      title: "Wide Range of Collections",
      text: "Seven thoughtfully designed collections to suit any space and style.",
    },
    {
      icon: Sparkles,
      title: "Elegant Designs",
      text: "Timeless aesthetics that bring warmth to homes and businesses.",
    },
    {
      icon: Headphones,
      title: "Reliable Support",
      text: "Friendly, personal customer service from inquiry to delivery.",
    },
  ];
  return (
    <section className="py-28 md:py-36 bg-secondary/40">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Why Us</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Why Choose Đức Hạnh Clocks?
          </h2>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {items.map((it, i) => (
            <Reveal
              key={it.title}
              delay={i * 80}
              className="flex gap-5 border-t border-border pt-7"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                <it.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl">{it.title}</h3>
                <p className="mt-2 text-foreground/70 leading-relaxed">
                  {it.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 4000);
  };
  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Contact Us</h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            We'd love to hear from you — whether you have a question about a
            collection, need a custom inquiry, or want to visit our workshop.
          </p>
        </Reveal>
        <div className="mt-14 grid lg:grid-cols-5 gap-10 lg:gap-14">
          <Reveal className="lg:col-span-2 space-y-7">
            <div>
              <p className="eyebrow">Company</p>
              <p className="mt-2 text-foreground">
                Công Ty TNHH SX - TM - DV & Xuất Nhập Khẩu Đức Hạnh
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="eyebrow">Phone</p>
                <a
                  href="tel:0838975299"
                  className="mt-2 block text-foreground hover:text-primary transition-colors"
                >
                  0838 975 299
                </a>
                <p className="text-sm text-muted-foreground">
                  Mrs. Thanh Tuyen
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="eyebrow">Address</p>
                <p className="mt-2 text-foreground leading-relaxed">
                  1078 3/2 Street, Phu Tho Ward,
                  <br />
                  Ho Chi Minh City, Vietnam
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=1078+3%2F2+Street+Phu+Tho+Ward+Ho+Chi+Minh+City"
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl overflow-hidden border border-border group"
            >
              <div className="relative h-48 bg-gradient-to-br from-secondary to-beige flex items-center justify-center">
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="relative text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto" />
                  <p className="mt-2 font-serif text-lg">View on Google Maps</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Ho Chi Minh City, Vietnam
                  </p>
                </div>
              </div>
            </a>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-[var(--shadow-card)] space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" required />
                <Field label="Phone Number" name="phone" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div>
                <label className="eyebrow block mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition resize-none"
                  placeholder="Tell us about your inquiry…"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Inquiry <ArrowRight className="h-4 w-4" />
              </button>
              {submitted && (
                <p className="text-sm text-primary">
                  Thank you — we'll be in touch shortly.
                </p>
              )}
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
      <label className="eyebrow block mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-page py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="font-serif text-xl">Đức Hạnh Clocks</span>
          </div>
          <p className="mt-4 text-cream/70 max-w-sm leading-relaxed">
            Timeless clocks crafted with elegance — from our workshop in Ho Chi
            Minh City to homes around the world.
          </p>
        </div>
        <div>
          <p className="eyebrow text-cream/60">Navigate</p>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-cream/80 hover:text-cream transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-cream/60">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex gap-2 items-start">
              <Phone className="h-4 w-4 mt-0.5" />
              <a href="tel:0838975299" className="hover:text-cream">
                0838 975 299
              </a>
            </li>
            <li className="flex gap-2 items-start">
              <MapPin className="h-4 w-4 mt-0.5" />
              <span>
                1078 3/2 Street, Phu Tho Ward,
                <br />
                Ho Chi Minh City, Vietnam
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <Mail className="h-4 w-4 mt-0.5" />
              <span>Contact via inquiry form</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-page py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/50">
          <p>
            © {new Date().getFullYear()} Công Ty TNHH SX - TM - DV & Xuất Nhập
            Khẩu Đức Hạnh. All rights reserved.
          </p>
          <p>Crafted in Ho Chi Minh City, Vietnam.</p>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Collections />
      <div className="bg-background">
        {collections.map((c, i) => (
          <CollectionDetail key={c.id} c={c} index={i} />
        ))}
      </div>
      <Craftsmanship />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
