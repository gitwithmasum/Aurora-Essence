import { useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  Gift,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import TriangleLedFront from "@/components/ui/triangle-led-front";

type Product = {
  brand: string;
  name: string;
  mood: string;
  notes: string;
  category: string;
  tone: string;
  badge?: string;
};

const categories = [
  { label: "Men’s Perfume", href: "#mens-perfume" },
  { label: "Women’s Perfume", href: "#womens-perfume" },
  { label: "Unisex Fragrance", href: "#unisex-fragrance" },
  { label: "Attar & Perfume Oil", href: "#attar-oil" },
  { label: "Gift Sets", href: "#gift-sets" },
];

const discover = [
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Arabian Bestsellers", href: "#bestsellers" },
  { label: "Find Your Scent", href: "#finder" },
  { label: "About Aurora Essence", href: "#story" },
  { label: "Order Assistance", href: "#order-assistance" },
];

const products: Product[] = [
  {
    brand: "LATTAFA",
    name: "Asad",
    mood: "Bold · Amber Spicy",
    notes: "Pepper · Coffee · Vanilla",
    category: "mens",
    tone: "from-zinc-500/60 to-black",
    badge: "BESTSELLER",
  },
  {
    brand: "AFNAN",
    name: "9PM",
    mood: "Fresh · Woody",
    notes: "Apple · Lavender · Vanilla",
    category: "mens",
    tone: "from-sky-700/60 to-slate-950",
  },
  {
    brand: "ARMAF",
    name: "Club de Nuit Intense",
    mood: "Citrus · Smoky",
    notes: "Lemon · Birch · Musk",
    category: "mens",
    tone: "from-neutral-500/60 to-neutral-950",
  },
  {
    brand: "LATTAFA",
    name: "Yara",
    mood: "Soft · Creamy",
    notes: "Orchid · Tropical Fruit · Vanilla",
    category: "womens",
    tone: "from-rose-300/70 to-rose-950",
    badge: "POPULAR",
  },
  {
    brand: "LATTAFA",
    name: "Fakhar Rose",
    mood: "Floral · Elegant",
    notes: "Fruit · Jasmine · Vanilla",
    category: "womens",
    tone: "from-fuchsia-300/60 to-fuchsia-950",
  },
  {
    brand: "AFNAN",
    name: "Modest Deux",
    mood: "Sweet · Luxurious",
    notes: "Cherry · Chocolate · Patchouli",
    category: "womens",
    tone: "from-pink-400/60 to-red-950",
  },
  {
    brand: "LATTAFA",
    name: "Khamrah",
    mood: "Warm · Gourmand",
    notes: "Cinnamon · Praline · Vanilla",
    category: "unisex",
    tone: "from-amber-500/60 to-amber-950",
    badge: "BESTSELLER",
  },
  {
    brand: "LATTAFA",
    name: "Khamrah Qahwa",
    mood: "Coffee · Gourmand",
    notes: "Coffee · Cinnamon · Tonka",
    category: "unisex",
    tone: "from-yellow-700/60 to-stone-950",
    badge: "NEW",
  },
  {
    brand: "MAISON ALHAMBRA",
    name: "Tobacco Touch",
    mood: "Warm · Tobacco",
    notes: "Tobacco · Spice · Cacao",
    category: "unisex",
    tone: "from-orange-700/60 to-stone-950",
  },
  {
    brand: "AL REHAB",
    name: "Soft Oil",
    mood: "Citrus · Vanilla",
    notes: "Lemon · Caramel · Musk",
    category: "attar",
    tone: "from-yellow-200/60 to-amber-800",
  },
  {
    brand: "AL REHAB",
    name: "Choco Musk",
    mood: "Chocolate · Musk",
    notes: "Cacao · Vanilla · White Musk",
    category: "attar",
    tone: "from-amber-700/60 to-stone-950",
    badge: "POPULAR",
  },
  {
    brand: "SWISS ARABIAN",
    name: "Musk Tahara",
    mood: "Clean · Musky",
    notes: "White Musk · Powder · Florals",
    category: "attar",
    tone: "from-slate-200/60 to-slate-700",
  },
  {
    brand: "AURORA CURATION",
    name: "His Discovery Set",
    mood: "Bold scent selection",
    notes: "Three curated masculine profiles",
    category: "gifts",
    tone: "from-zinc-500/60 to-black",
  },
  {
    brand: "AURORA CURATION",
    name: "Her Discovery Set",
    mood: "Elegant scent selection",
    notes: "Three curated feminine profiles",
    category: "gifts",
    tone: "from-rose-300/60 to-rose-950",
  },
  {
    brand: "AURORA CURATION",
    name: "Arabian Duo",
    mood: "A shared fragrance story",
    notes: "Two complementary scent profiles",
    category: "gifts",
    tone: "from-amber-400/60 to-neutral-950",
  },
];

const sections = [
  {
    id: "mens-perfume",
    eyebrow: "FOR HIM",
    title: "Men’s Perfume",
    copy: "Powerful Arabian compositions for office evenings, celebrations and unmistakable presence.",
    category: "mens",
  },
  {
    id: "womens-perfume",
    eyebrow: "FOR HER",
    title: "Women’s Perfume",
    copy: "Floral, creamy and radiant fragrances selected for elegant everyday and occasion wear.",
    category: "womens",
  },
  {
    id: "unisex-fragrance",
    eyebrow: "FOR EVERY AURA",
    title: "Unisex Fragrance",
    copy: "Versatile scent stories that move beyond labels—from gourmand warmth to deep woods.",
    category: "unisex",
  },
  {
    id: "attar-oil",
    eyebrow: "CONCENTRATED RITUAL",
    title: "Attar & Perfume Oil",
    copy: "Alcohol-free concentrated perfume oils designed for precise pulse-point application.",
    category: "attar",
  },
  {
    id: "gift-sets",
    eyebrow: "GIFT WITH INTENTION",
    title: "Gift Sets",
    copy: "Curated fragrance combinations for birthdays, celebrations and memorable gestures.",
    category: "gifts",
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="group relative h-[450px] overflow-hidden border border-white/10 bg-[#0d0c0a] p-7 transition hover:border-gold/40">
      <span className="text-[10px] text-stone-600">
        {String(index + 1).padStart(2, "0")}
      </span>
      {product.badge && (
        <span className="absolute right-5 top-5 border border-gold/30 bg-gold/10 px-2 py-1 text-[8px] tracking-[.15em] text-gold-light">
          {product.badge}
        </span>
      )}
      <div
        className={`absolute left-1/2 top-20 h-56 w-32 -translate-x-1/2 rounded-3xl border border-gold/40 bg-gradient-to-br ${product.tone} shadow-2xl transition duration-500 group-hover:-translate-y-2 group-hover:scale-105`}
      >
        <div className="absolute -top-9 left-1/2 h-11 w-[72px] -translate-x-1/2 rounded-t-md bg-gradient-to-r from-[#241c10] via-gold to-[#33250f]" />
        <span className="grid h-full place-items-center px-3 text-center font-display text-xl tracking-wider text-gold-light">
          {product.name.toUpperCase()}
        </span>
      </div>
      <div className="absolute bottom-7 left-7 right-7">
        <p className="text-[9px] tracking-[.22em] text-gold">{product.brand}</p>
        <h3 className="font-display text-3xl">{product.name}</h3>
        <p className="mt-1 text-xs text-stone-400">{product.mood}</p>
        <p className="mt-2 text-[11px] text-stone-600">{product.notes}</p>
      </div>
    </article>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const closeMenus = () => {
    setShopOpen(false);
    setMobileOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#f4eddf]">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-gold/50 bg-[radial-gradient(circle_at_18%_0%,rgba(30,190,139,.18),transparent_35%),radial-gradient(circle_at_82%_0%,rgba(132,69,176,.20),transparent_38%),rgba(3,3,3,.84)] shadow-[0_1px_22px_rgba(213,173,85,.12)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 lg:px-10">
          <a
            href="#home"
            className="flex items-center gap-3 font-display text-lg tracking-[.16em]"
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/aurora-essence-logo.png`}
              className="h-12 w-12 rounded-full object-cover"
              alt="Aurora Essence"
            />
            <span>AURORA ESSENCE</span>
          </a>
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
          <nav
            className={`${mobileOpen ? "flex" : "hidden"} absolute left-0 right-0 top-20 flex-col gap-1 border-b border-gold/20 bg-black p-5 lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0`}
          >
            <div className="group relative">
              <button
                onClick={() => setShopOpen((v) => !v)}
                className="w-full py-3 text-left text-xs uppercase tracking-[.15em] hover:text-gold-light lg:w-auto"
              >
                Shop
              </button>
              <div
                className={`${shopOpen ? "grid" : "hidden"} left-1/2 top-[52px] w-full gap-8 border border-gold/30 border-t-2 border-t-gold bg-gradient-to-br from-black to-[#171208] p-7 shadow-2xl lg:fixed lg:w-[90vw] lg:-translate-x-1/2 lg:grid-cols-[1fr_1fr_1.15fr] group-hover:lg:grid`}
              >
                <div>
                  <p className="mb-4 text-[10px] tracking-[.2em] text-gold">
                    SHOP BY CATEGORY
                  </p>
                  {categories.map((item) => (
                    <a
                      onClick={closeMenus}
                      key={item.label}
                      href={item.href}
                      className="flex items-center justify-between border-b border-gold/10 py-2.5 text-xs text-stone-200 hover:bg-gold/5 hover:pl-2 hover:text-gold-light"
                    >
                      {item.label}
                      <ChevronRight size={14} className="text-gold" />
                    </a>
                  ))}
                </div>
                <div>
                  <p className="mb-4 text-[10px] tracking-[.2em] text-gold">
                    DISCOVER
                  </p>
                  {discover.map((item) => (
                    <a
                      onClick={closeMenus}
                      key={item.label}
                      href={item.href}
                      className="block border-b border-gold/10 py-2.5 text-xs text-stone-200 hover:bg-gold/5 hover:pl-2 hover:text-gold-light"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="flex min-h-48 flex-col justify-end bg-[radial-gradient(circle_at_75%_20%,rgba(44,160,122,.22),transparent_38%),radial-gradient(circle_at_15%_80%,rgba(121,57,159,.24),transparent_44%),#0b0a08] p-7">
                  <span className="text-[9px] tracking-[.2em] text-gold">
                    THE SIGNATURE EDIT
                  </span>
                  <strong className="my-3 font-display text-4xl leading-none">
                    Discover your
                    <br />
                    next aura.
                  </strong>
                  <a
                    onClick={closeMenus}
                    href="#finder"
                    className="text-[10px] uppercase tracking-widest text-gold-light"
                  >
                    Explore now →
                  </a>
                </div>
              </div>
            </div>
            <a
              onClick={closeMenus}
              href="#collection"
              className="py-3 text-xs uppercase tracking-[.15em] hover:text-gold-light"
            >
              Collection
            </a>
            <a
              onClick={closeMenus}
              href="#story"
              className="py-3 text-xs uppercase tracking-[.15em] hover:text-gold-light"
            >
              Our Story
            </a>
            <a
              onClick={closeMenus}
              href="#finder"
              className="py-3 text-xs uppercase tracking-[.15em] hover:text-gold-light"
            >
              Scent Finder
            </a>
            <a
              href="#order-assistance"
              className="border border-gold px-5 py-3 text-center text-xs uppercase tracking-[.15em] text-gold-light"
            >
              Order Now
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-24"
      >
        <div className="absolute inset-0">
          <TriangleLedFront />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/15" />
        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 py-28 lg:px-20">
          <p className="text-[11px] font-semibold tracking-[.3em] text-gold">
            CURATED ARABIAN FRAGRANCES
          </p>
          <h1 className="mt-7 max-w-4xl font-display text-6xl font-semibold leading-[.82] tracking-tight sm:text-8xl lg:text-[112px]">
            Wear the aura.
            <br />
            <em className="font-medium text-gold-light">Own the moment.</em>
          </h1>
          <p className="mt-9 max-w-xl text-sm leading-7 text-stone-400">
            A modern destination for bold Middle Eastern scents—selected for
            every mood, every memory, and every signature.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#collection"
              className="inline-flex items-center gap-8 bg-gradient-to-r from-gold-dark to-gold-light px-6 py-4 text-[11px] font-semibold uppercase tracking-[.16em] text-black"
            >
              Explore Collection <ArrowUpRight size={15} />
            </a>
            <a
              href="#finder"
              className="inline-flex items-center gap-3 px-4 py-4 text-[11px] uppercase tracking-[.16em]"
            >
              Find your scent <ChevronRight size={15} className="text-gold" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="collection"
        className="mx-auto my-10 max-w-[1500px] scroll-mt-24 rounded-[28px] border border-gold/35 bg-[linear-gradient(145deg,rgba(213,173,85,.05),rgba(5,5,5,.98)_45%)] px-6 pb-12 pt-20 shadow-[inset_0_0_45px_rgba(213,173,85,.03),0_16px_50px_rgba(0,0,0,.35)] transition hover:border-gold/55 lg:px-20"
      >
        <p className="text-[11px] tracking-[.28em] text-gold">
          EXPLORE THE COLLECTION
        </p>
        <h2 className="mt-5 max-w-4xl font-display text-6xl leading-none">
          A fragrance for <em className="text-gold-light">every expression.</em>
        </h2>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((item, i) => (
            <a
              href={item.href}
              key={item.label}
              className="group border border-white/10 bg-[#0c0b09] p-5 transition hover:border-gold/40 hover:bg-gold/5"
            >
              <span className="text-[9px] text-gold">0{i + 1}</span>
              <h3 className="mt-7 font-display text-2xl">{item.label}</h3>
              <ChevronRight
                className="mt-4 text-gold transition group-hover:translate-x-2"
                size={17}
              />
            </a>
          ))}
        </div>
      </section>

      <section
        id="new-arrivals"
        className="mx-auto my-10 max-w-[1500px] scroll-mt-24 rounded-[28px] border border-gold/35 bg-[linear-gradient(145deg,rgba(213,173,85,.05),rgba(5,5,5,.98)_45%)] px-6 py-20 shadow-[inset_0_0_45px_rgba(213,173,85,.03),0_16px_50px_rgba(0,0,0,.35)] transition hover:border-gold/55 lg:px-20"
      >
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-[11px] tracking-[.28em] text-gold">
              JUST LANDED
            </p>
            <h2 className="mt-4 font-display text-5xl">New Arrivals</h2>
          </div>
          <Sparkles className="text-gold" />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {products
            .filter(
              (p) => p.badge === "NEW" || p.name === "Yara" || p.name === "9PM",
            )
            .map((p, i) => (
              <ProductCard key={p.name} product={p} index={i} />
            ))}
        </div>
      </section>

      <section
        id="bestsellers"
        className="mx-auto my-10 max-w-[1500px] scroll-mt-24 rounded-[28px] border border-gold/35 bg-[linear-gradient(145deg,rgba(213,173,85,.05),rgba(5,5,5,.98)_45%)] shadow-[inset_0_0_45px_rgba(213,173,85,.03),0_16px_50px_rgba(0,0,0,.35)] transition hover:border-gold/55"
      >
        <div className="px-6 py-20 lg:px-20">
          <p className="text-[11px] tracking-[.28em] text-gold">MOST LOVED</p>
          <h2 className="mt-4 font-display text-5xl">Arabian Bestsellers</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-500">
            Popular fragrance profiles frequently explored by Arabian perfume
            lovers. Availability can vary—please inbox before ordering.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {products
              .filter((p) => p.badge === "BESTSELLER" || p.badge === "POPULAR")
              .slice(0, 3)
              .map((p, i) => (
                <ProductCard key={p.name} product={p} index={i} />
              ))}
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section
          id={section.id}
          key={section.id}
          className="mx-auto my-10 max-w-[1500px] scroll-mt-24 rounded-[28px] border border-gold/35 bg-[linear-gradient(145deg,rgba(213,173,85,.05),rgba(5,5,5,.98)_45%)] shadow-[inset_0_0_45px_rgba(213,173,85,.03),0_16px_50px_rgba(0,0,0,.35)] transition hover:border-gold/55"
        >
          <div className="px-6 py-20 lg:px-20">
            <div className="grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end">
              <div>
                <p className="text-[11px] tracking-[.28em] text-gold">
                  {section.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-5xl sm:text-6xl">
                  {section.title}
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-stone-500">
                {section.copy}
              </p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {products
                .filter((p) => p.category === section.category)
                .map((p, i) => (
                  <ProductCard key={p.name} product={p} index={i} />
                ))}
            </div>
            <a
              href="#order-assistance"
              className="mt-10 inline-flex items-center gap-4 text-[10px] uppercase tracking-[.18em] text-gold-light"
            >
              Ask about this collection <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      ))}

      <section
        id="finder"
        className="mx-auto my-10 max-w-[1500px] scroll-mt-24 rounded-[28px] border border-gold/35 bg-[linear-gradient(145deg,rgba(213,173,85,.07),rgba(5,5,5,.98)_45%)] px-6 py-24 text-center shadow-[inset_0_0_45px_rgba(213,173,85,.03),0_16px_50px_rgba(0,0,0,.35)] transition hover:border-gold/55"
      >
        <p className="text-[11px] tracking-[.28em] text-gold">SCENT FINDER</p>
        <h2 className="mx-auto mt-5 max-w-4xl font-display text-6xl">
          What does your <em className="text-gold-light">aura feel like?</em>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-stone-400">
          আপনার পছন্দের notes, occasion, season এবং budget range আমাদের
          জানান—আমরা উপযুক্ত fragrance shortlist করতে সাহায্য করব।
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-3 md:grid-cols-3">
          {["Warm & Magnetic", "Bold & Mysterious", "Fresh & Limitless"].map(
            (mood, i) => (
              <a
                href={`https://m.me/auroraessenceofficial?ref=scent-${i + 1}`}
                target="_blank"
                rel="noreferrer"
                key={mood}
                className="border border-gold/25 bg-black/40 p-6 font-display text-2xl hover:border-gold hover:text-gold-light"
              >
                {mood}
              </a>
            ),
          )}
        </div>
      </section>

      <section
        id="story"
        className="mx-auto my-10 grid max-w-[1500px] scroll-mt-24 gap-12 rounded-[28px] border border-gold/35 bg-[linear-gradient(145deg,rgba(213,173,85,.05),rgba(5,5,5,.98)_45%)] px-6 py-20 shadow-[inset_0_0_45px_rgba(213,173,85,.03),0_16px_50px_rgba(0,0,0,.35)] transition hover:border-gold/55 lg:grid-cols-2 lg:items-center lg:px-20"
      >
        <div className="relative grid min-h-[420px] place-items-center bg-[radial-gradient(circle,rgba(213,173,85,.18),transparent_58%)]">
          <div className="absolute h-72 w-72 rounded-full border border-gold/20" />
          <img
            src={`${import.meta.env.BASE_URL}assets/aurora-essence-logo.png`}
            className="relative w-64 mix-blend-screen"
            alt="Aurora Essence logo"
          />
        </div>
        <div>
          <p className="text-[11px] tracking-[.28em] text-gold">
            ABOUT AURORA ESSENCE
          </p>
          <h2 className="mt-5 font-display text-6xl leading-none">
            Luxury is a feeling,{" "}
            <em className="text-gold-light">not a price tag.</em>
          </h2>
          <p className="mt-8 leading-8 text-stone-400">
            সঠিক fragrance আপনার ব্যক্তিত্বকে প্রকাশ করে। Aurora Essence
            বাংলাদেশে নিয়ে আসে carefully curated Middle Eastern perfume
            selections, যাতে আপনি নিজের signature scent খুঁজে নিতে পারেন।
          </p>
          <p className="mt-4 text-sm leading-7 text-stone-600">
            আমাদের লক্ষ্য হলো fragrance notes, usage এবং occasion বুঝিয়ে
            informed selection-এ সাহায্য করা।
          </p>
        </div>
      </section>

      <section
        id="order-assistance"
        className="mx-auto my-10 max-w-[1500px] scroll-mt-24 rounded-[28px] border border-gold/35 bg-[linear-gradient(145deg,rgba(213,173,85,.07),rgba(5,5,5,.98)_45%)] px-6 py-24 text-center shadow-[inset_0_0_45px_rgba(213,173,85,.03),0_16px_50px_rgba(0,0,0,.35)] transition hover:border-gold/55"
      >
        <MessageCircle className="mx-auto text-gold" size={32} />
        <p className="mt-6 text-[11px] tracking-[.28em] text-gold">
          ORDER ASSISTANCE
        </p>
        <h2 className="mt-5 font-display text-6xl">Let us help you choose.</h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-stone-400">
          Product availability, current price এবং delivery information জানতে
          Aurora Essence Facebook page-এ inbox করুন।
        </p>
        <a
          href="https://m.me/auroraessenceofficial"
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex items-center gap-6 bg-gradient-to-r from-gold-dark to-gold-light px-7 py-4 text-xs font-semibold uppercase tracking-widest text-black"
        >
          Inbox to Order <ArrowUpRight size={16} />
        </a>
        <div className="mt-8 flex justify-center gap-2 text-xs text-stone-600">
          <Gift size={15} />
          <span>Personal guidance · Gift selection · Fragrance matching</span>
        </div>
      </section>
      <footer className="border-t border-white/10 px-6 py-10 text-center text-xs text-stone-600">
        © {new Date().getFullYear()} Aurora Essence · Discover Your Signature
        Aura.
      </footer>
    </main>
  );
}
