import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Gift,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
  Trash2,
  UserRound,
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

type CartItem = {
  product: Product;
  quantity: number;
};

type Profile = {
  top: string;
  middle: string;
  base: string;
  type: string;
  season: string;
  time: string;
  suitable: string;
  longevity: string;
  projection: string;
  usage: string;
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

const profiles: Record<string, Profile> = {
  Asad: {
    top: "Black Pepper, Pineapple, Tobacco",
    middle: "Coffee, Iris, Patchouli",
    base: "Vanilla, Amber, Dry Woods, Benzoin",
    type: "Men’s EDP",
    season: "Winter and cool monsoon evenings",
    time: "Evening and night",
    suitable: "Office evenings, formal events and parties",
    longevity: "Typically 7–10 hours*",
    projection: "Usually strong",
    usage:
      "Apply 3–5 sprays to the neck and pulse points. Start light in indoor or formal settings.",
  },
  "9PM": {
    top: "Apple, Cinnamon, Bergamot, Lavender",
    middle: "Orange Blossom, Lily-of-the-Valley",
    base: "Vanilla, Tonka Bean, Amber, Patchouli",
    type: "Men’s EDP",
    season: "Winter and cool evenings",
    time: "Evening and night",
    suitable: "Party, date and special occasion",
    longevity: "Typically 8–10 hours*",
    projection: "Usually strong",
    usage:
      "Apply 3–5 sprays to the neck and pulse points. Allow the sweet aromatic profile to develop before adding more.",
  },
  "Club de Nuit Intense": {
    top: "Lemon, Pineapple, Bergamot, Black Currant, Apple",
    middle: "Birch, Jasmine, Rose",
    base: "Musk, Ambergris, Patchouli, Vanilla",
    type: "Men’s EDT",
    season: "All year; use fewer sprays in heat",
    time: "Day and evening",
    suitable: "Office, formal event and party",
    longevity: "Typically 7–10 hours*",
    projection: "Usually strong",
    usage:
      "Apply 3–5 sprays to the neck and pulse points. Avoid overspraying in enclosed spaces.",
  },
  Yara: {
    top: "Tangerine, Heliotrope, Orchid",
    middle: "Tropical Fruits, Gourmand Accord",
    base: "Vanilla, Musk, Sandalwood",
    type: "Women’s EDP",
    season: "All year; use fewer sprays in hot weather",
    time: "Day and evening",
    suitable: "Daily wear, casual outings and gifting",
    longevity: "Typically 6–8 hours*",
    projection: "Usually moderate",
    usage:
      "Apply 3–5 sprays to pulse points and clothing from a safe distance. Start light during warm days.",
  },
  "Fakhar Rose": {
    top: "Fruits, Lily, Pomegranate",
    middle: "Tuberose, Jasmine, Gardenia, Ylang-Ylang",
    base: "Vanilla, Ambroxan, White Musk, Sandalwood",
    type: "Women’s EDP",
    season: "Spring, autumn and cool evenings",
    time: "Day and evening",
    suitable: "Celebration, dinner, party and special occasion",
    longevity: "Typically 6–8 hours*",
    projection: "Usually moderate to strong",
    usage:
      "Apply 3–5 sprays to the neck and pulse points. Use fewer sprays for daytime wear.",
  },
  "Modest Deux": {
    top: "Dark Chocolate, Strawberry, Raspberry, Cherry",
    middle: "Vanilla and Spices",
    base: "Patchouli, Musk, Gardenia",
    type: "Women’s EDP",
    season: "Winter and air-conditioned settings",
    time: "Evening and night",
    suitable: "Date, café outing, party and special occasion",
    longevity: "Typically 7–9 hours*",
    projection: "Usually strong",
    usage:
      "Apply 2–4 sprays to pulse points. Let the rich gourmand profile settle before reapplying.",
  },
  Khamrah: {
    top: "Cinnamon, Nutmeg, Bergamot",
    middle: "Dates, Praline, Tuberose",
    base: "Vanilla, Tonka Bean, Benzoin, Myrrh, Amberwood",
    type: "Unisex EDP",
    season: "Winter and cool evenings",
    time: "Evening and night",
    suitable: "Date, festival, party and special occasion",
    longevity: "Typically 8–12 hours*",
    projection: "Usually strong",
    usage:
      "Apply 3–5 sprays to the neck and pulse points. Start light and allow the fragrance to develop.",
  },
  "Khamrah Qahwa": {
    top: "Ginger, Cinnamon, Cardamom",
    middle: "Praline, Candied Fruits, White Florals",
    base: "Coffee, Vanilla, Tonka Bean, Benzoin, Musk",
    type: "Unisex EDP",
    season: "Winter and cold evenings",
    time: "Evening and night",
    suitable: "Date, café outing, party and special occasion",
    longevity: "Typically 8–12 hours*",
    projection: "Usually strong",
    usage:
      "Apply 3–5 sprays to the neck and pulse points. Start with fewer sprays and allow the fragrance to develop on the skin.",
  },
  "Tobacco Touch": {
    top: "Tobacco Leaf, Spices",
    middle: "Tobacco, Vanilla, Cacao, Tonka Bean",
    base: "Dried Fruits, Woody Notes",
    type: "Unisex EDP",
    season: "Winter",
    time: "Evening and night",
    suitable: "Formal event, date and evening occasion",
    longevity: "Typically 7–10 hours*",
    projection: "Usually strong",
    usage:
      "Apply 2–4 sprays to the neck and pulse points. The tobacco profile is rich, so start light.",
  },
  "Soft Oil": {
    top: "Citrus",
    middle: "Caramel, White Florals",
    base: "Vanilla, Musk, Woods",
    type: "Women’s/Unisex Perfume Oil",
    season: "All year",
    time: "Any time",
    suitable: "Daily wear, layering and gifting",
    longevity: "Typically 6–10 hours*",
    projection: "Usually close to moderate",
    usage:
      "Apply 1–2 small swipes to clean pulse points. Do not rub; allow the oil to settle naturally.",
  },
  "Choco Musk": {
    top: "Chocolate, Vanilla",
    middle: "Cinnamon, Rose",
    base: "Musk, Amber, Spicy Notes",
    type: "Unisex Perfume Oil",
    season: "All year; apply lightly in heat",
    time: "Any time",
    suitable: "Casual wear, layering and gifting",
    longevity: "Typically 6–10 hours*",
    projection: "Usually close to moderate",
    usage:
      "Apply 1–2 small swipes to pulse points. A small amount is enough for layering.",
  },
  "Musk Tahara": {
    top: "Clean White Musk",
    middle: "Soft Powder, Delicate Florals",
    base: "Creamy Musk, Subtle Woods",
    type: "Unisex Perfume Oil",
    season: "All year",
    time: "Any time",
    suitable: "Daily wear, after-shower use and layering",
    longevity: "Typically 6–10 hours*",
    projection: "Usually close to moderate",
    usage:
      "Apply a small swipe to clean pulse points. Keep application light for a soft, clean scent trail.",
  },
};

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

function ProductCard({
  product,
  index,
  onOpen,
}: {
  product: Product;
  index: number;
  onOpen: () => void;
}) {
  return (
    <article className="group relative h-[450px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0d0c0a] p-7 transition hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_20px_55px_rgba(0,0,0,.45)]">
      <button
        onClick={onOpen}
        className="absolute inset-0 z-10 cursor-pointer"
        aria-label={`Quick view ${product.name}`}
      />
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
        <span className="mt-4 inline-flex items-center gap-2 text-[9px] uppercase tracking-[.16em] text-gold-light">
          Quick view <ChevronRight size={13} />
        </span>
      </div>
    </article>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState<Product | null>(null);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const closeMenus = () => {
    setShopOpen(false);
    setMobileOpen(false);
  };
  const selectedIndex = selectedProduct
    ? products.findIndex((product) => product.name === selectedProduct.name)
    : -1;
  const selectedProfile = selectedProduct
    ? profiles[selectedProduct.name]
    : undefined;
  const moveProduct = (direction: number) => {
    if (selectedIndex < 0) return;
    setSelectedProduct(
      products[(selectedIndex + direction + products.length) % products.length],
    );
  };
  const addToCart = (product: Product) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.product.name === product.name);
      return existing
        ? items.map((item) =>
            item.product.name === product.name
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...items, { product, quantity: 1 }];
    });
    setAddedProduct(product);
    window.setTimeout(
      () =>
        setAddedProduct((current) =>
          current?.name === product.name ? null : current,
        ),
      3500,
    );
  };
  const changeQuantity = (productName: string, amount: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.product.name === productName
            ? { ...item, quantity: Math.max(0, item.quantity + amount) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  const orderSummary = cartItems
    .map((item) => `${item.product.name} × ${item.quantity}`)
    .join(", ");

  return (
    <main className="min-h-screen bg-[#050505] text-[#f4eddf]">
      <header className="absolute inset-x-0 top-0 z-50 pt-3">
        <div className="mx-auto flex h-16 w-[calc(100%-1.5rem)] max-w-[1500px] items-center justify-between rounded-full border border-gold/60 bg-[radial-gradient(circle_at_12%_0%,rgba(42,220,161,.30),transparent_34%),radial-gradient(circle_at_84%_10%,rgba(157,75,207,.32),transparent_38%),linear-gradient(100deg,rgba(5,12,10,.94),rgba(17,7,21,.94))] px-5 shadow-[0_0_28px_rgba(213,173,85,.18),inset_0_0_25px_rgba(255,255,255,.025)] backdrop-blur-xl lg:px-10">
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
            className={`${mobileOpen ? "flex" : "hidden"} absolute left-3 right-3 top-20 flex-col gap-1 rounded-[24px] border border-gold/45 bg-[radial-gradient(circle_at_15%_0%,rgba(42,220,161,.22),transparent_38%),radial-gradient(circle_at_85%_10%,rgba(157,75,207,.25),transparent_42%),rgba(4,4,4,.97)] p-5 shadow-2xl backdrop-blur-xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
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
            <div className="flex items-center gap-2 py-2 lg:py-0">
              <a
                href="https://www.facebook.com/auroraessenceofficial/"
                target="_blank"
                rel="noreferrer"
                aria-label="Aurora Essence profile"
                title="Profile"
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/70 bg-gold/5 text-gold-light transition hover:bg-gold hover:text-black hover:shadow-[0_0_22px_rgba(213,173,85,.28)]"
              >
                <UserRound size={17} strokeWidth={1.7} />
              </a>
              <button
                onClick={() => {
                  setCartOpen(true);
                  closeMenus();
                }}
                aria-label="View product cart"
                title="Cart"
                className="relative grid h-10 w-10 place-items-center rounded-full border border-gold/70 bg-gold/5 text-gold-light transition hover:bg-gold hover:text-black hover:shadow-[0_0_22px_rgba(213,173,85,.28)]"
              >
                <ShoppingBag size={17} strokeWidth={1.7} />
                <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full border border-black bg-gold px-1 text-[8px] font-bold text-black">
                  {cartCount}
                </span>
              </button>
              <a
                href="#order-assistance"
                className="rounded-full border border-gold bg-gold/5 px-5 py-3 text-center text-xs uppercase tracking-[.15em] text-gold-light transition hover:bg-gold hover:text-black hover:shadow-[0_0_22px_rgba(213,173,85,.28)]"
              >
                Order Now
              </a>
            </div>
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
              <ProductCard
                key={p.name}
                product={p}
                index={i}
                onOpen={() => setSelectedProduct(p)}
              />
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
                <ProductCard
                  key={p.name}
                  product={p}
                  index={i}
                  onOpen={() => setSelectedProduct(p)}
                />
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
                  <ProductCard
                    key={p.name}
                    product={p}
                    index={i}
                    onOpen={() => setSelectedProduct(p)}
                  />
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
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProduct.name} quick view`}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-h-[94vh] w-full overflow-y-auto rounded-t-[32px] border border-gold/45 bg-[radial-gradient(circle_at_15%_10%,rgba(42,220,161,.10),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(157,75,207,.12),transparent_32%),#090806] shadow-[0_0_80px_rgba(0,0,0,.75)] sm:max-w-5xl sm:rounded-[32px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-5 top-5 z-20 grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-black/70 text-gold-light hover:bg-gold hover:text-black"
              aria-label="Close quick view"
            >
              <X size={17} />
            </button>
            <div className="grid lg:grid-cols-[.85fr_1.15fr]">
              <div className="relative grid min-h-[400px] place-items-center overflow-hidden border-b border-gold/20 bg-[radial-gradient(circle,rgba(213,173,85,.16),transparent_60%)] lg:min-h-[680px] lg:border-b-0 lg:border-r">
                <span className="absolute left-7 top-7 text-[9px] tracking-[.22em] text-gold">
                  {selectedProduct.brand}
                </span>
                <div
                  className={`relative h-72 w-44 rounded-[36px] border border-gold/45 bg-gradient-to-br ${selectedProduct.tone} shadow-[0_35px_65px_rgba(0,0,0,.65)]`}
                >
                  <div className="absolute -top-12 left-1/2 h-14 w-24 -translate-x-1/2 rounded-t-lg bg-gradient-to-r from-[#241c10] via-gold to-[#33250f]" />
                  <span className="grid h-full place-items-center px-5 text-center font-display text-2xl tracking-wider text-gold-light">
                    {selectedProduct.name.toUpperCase()}
                  </span>
                </div>
                <div className="absolute bottom-6 flex gap-3">
                  <button
                    onClick={() => moveProduct(-1)}
                    className="rounded-full border border-gold/35 px-4 py-2 text-[9px] uppercase tracking-widest text-gold-light"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => moveProduct(1)}
                    className="rounded-full border border-gold/35 px-4 py-2 text-[9px] uppercase tracking-widest text-gold-light"
                  >
                    Next →
                  </button>
                </div>
              </div>
              <div className="p-6 pb-28 sm:p-10 sm:pb-28">
                <p className="text-[10px] uppercase tracking-[.24em] text-gold">
                  Fragrance Quick View
                </p>
                <h2 className="mt-3 pr-12 font-display text-5xl leading-none sm:text-6xl">
                  {selectedProduct.name}
                </h2>
                <p className="mt-3 text-sm text-stone-400">
                  {selectedProduct.mood}
                </p>
                {selectedProfile ? (
                  <>
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {[
                        ["Top Notes", selectedProfile.top],
                        ["Middle Notes", selectedProfile.middle],
                        ["Base Notes", selectedProfile.base],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-[20px] border border-gold/25 bg-gold/5 p-4"
                        >
                          <p className="text-[9px] uppercase tracking-[.18em] text-gold">
                            {label}
                          </p>
                          <p className="mt-2 text-xs leading-5 text-stone-300">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {[
                        ["Type", selectedProfile.type],
                        ["Best Season", selectedProfile.season],
                        ["Best Time", selectedProfile.time],
                        ["Suitable For", selectedProfile.suitable],
                        ["Longevity", selectedProfile.longevity],
                        ["Projection", selectedProfile.projection],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="border-b border-gold/15 p-3"
                        >
                          <p className="text-[8px] uppercase tracking-[.16em] text-gold">
                            {label}
                          </p>
                          <p className="mt-1 text-[11px] leading-5 text-stone-300">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-[20px] border border-gold/30 bg-black/35 p-5">
                      <p className="text-[9px] uppercase tracking-[.18em] text-gold">
                        How to use
                      </p>
                      <p className="mt-2 text-xs leading-6 text-stone-300">
                        {selectedProfile.usage}
                      </p>
                    </div>
                    <p className="mt-3 text-[9px] leading-4 text-stone-600">
                      *Longevity and projection may vary by skin, weather, batch
                      and application.
                    </p>
                  </>
                ) : (
                  <div className="mt-8 rounded-[20px] border border-gold/30 bg-gold/5 p-6 text-sm leading-7 text-stone-300">
                    <strong className="text-gold-light">
                      Curated gift set:
                    </strong>{" "}
                    {selectedProduct.notes}. Contact Aurora Essence to customize
                    the fragrance selection and presentation.
                  </div>
                )}
              </div>
            </div>
            <div className="sticky bottom-0 z-20 grid gap-3 border-t border-gold/25 bg-black/90 p-4 backdrop-blur-xl sm:grid-cols-2 sm:px-10">
              <button
                onClick={() => addToCart(selectedProduct)}
                className="rounded-full border border-gold bg-gold/5 px-6 py-4 text-[10px] font-semibold uppercase tracking-[.16em] text-gold-light transition hover:bg-gold hover:text-black"
              >
                Add to Cart
              </button>
              <a
                href={`https://m.me/auroraessenceofficial?ref=${encodeURIComponent(selectedProduct.name)}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-gold-dark to-gold-light px-6 py-4 text-center text-[10px] font-semibold uppercase tracking-[.16em] text-black"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      )}
      {addedProduct && (
        <div className="fixed right-4 top-24 z-[120] w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-[24px] border border-gold/55 bg-[radial-gradient(circle_at_0%_0%,rgba(42,220,161,.16),transparent_38%),radial-gradient(circle_at_100%_0%,rgba(157,75,207,.18),transparent_42%),rgba(7,7,6,.97)] shadow-[0_24px_70px_rgba(0,0,0,.7),0_0_30px_rgba(213,173,85,.12)] backdrop-blur-xl">
          <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-gold to-purple-500" />
          <div className="flex gap-4 p-5">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold-light">
              <CheckCircle2 size={21} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] uppercase tracking-[.2em] text-gold">
                Added to Cart
              </p>
              <h3 className="mt-1 truncate font-display text-2xl">
                {addedProduct.name}
              </h3>
              <p className="mt-1 text-[11px] text-stone-500">
                Your cart now has {cartCount}{" "}
                {cartCount === 1 ? "item" : "items"}.
              </p>
            </div>
            <button
              onClick={() => setAddedProduct(null)}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-stone-400 hover:border-gold/40 hover:text-gold-light"
              aria-label="Close notification"
            >
              <X size={14} />
            </button>
          </div>
          <div className="grid grid-cols-2 border-t border-gold/15">
            <button
              onClick={() => setAddedProduct(null)}
              className="px-4 py-3 text-[9px] uppercase tracking-[.16em] text-stone-400 hover:bg-white/5"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => {
                setAddedProduct(null);
                setSelectedProduct(null);
                setCartOpen(true);
              }}
              className="border-l border-gold/15 bg-gold/5 px-4 py-3 text-center text-[9px] uppercase tracking-[.16em] text-gold-light hover:bg-gold hover:text-black"
            >
              View Cart
            </button>
          </div>
        </div>
      )}
      {cartOpen && (
        <div
          className="fixed inset-0 z-[130]"
          role="dialog"
          aria-modal="true"
          aria-label="Shopping cart"
        >
          <button
            className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(42,220,161,.13),transparent_36%),radial-gradient(circle_at_68%_78%,rgba(157,75,207,.14),transparent_42%),rgba(0,0,0,.48)] backdrop-blur-[2px]"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          />
          <aside className="absolute inset-y-0 right-0 flex w-full max-w-lg flex-col overflow-hidden border-l border-gold/55 bg-[radial-gradient(circle_at_15%_0%,#0b211b_0%,#090b08_30%,transparent_48%),radial-gradient(circle_at_92%_10%,#201027_0%,#0a080c_32%,transparent_50%),#070706] shadow-[-30px_0_100px_rgba(0,0,0,.82)]">
            <div className="h-1 bg-gradient-to-r from-emerald-400 via-gold to-purple-500" />
            <div className="flex items-center justify-between border-b border-gold/20 px-6 py-6 sm:px-8">
              <div>
                <p className="text-[10px] uppercase tracking-[.24em] text-gold">
                  Your selection
                </p>
                <h2 className="mt-2 font-display text-4xl">The Aura Cart</h2>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-gold/35 text-stone-300 transition hover:border-gold hover:bg-gold hover:text-black"
                aria-label="Close cart"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
              {cartItems.length === 0 ? (
                <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
                  <div className="grid h-20 w-20 place-items-center rounded-full border border-gold/35 bg-gold/5 text-gold-light shadow-[0_0_45px_rgba(213,173,85,.12)]">
                    <ShoppingBag size={30} strokeWidth={1.3} />
                  </div>
                  <h3 className="mt-7 font-display text-3xl">
                    Your cart is waiting
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-stone-500">
                    Explore the collection and add a fragrance that matches your
                    aura.
                  </p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-7 rounded-full border border-gold px-6 py-3 text-[10px] uppercase tracking-[.18em] text-gold-light transition hover:bg-gold hover:text-black"
                  >
                    Continue shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(({ product, quantity }) => (
                    <article
                      key={product.name}
                      className="group relative overflow-hidden rounded-[24px] border border-gold/25 bg-white/[.025] p-4 transition hover:border-gold/50"
                    >
                      <div
                        className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${product.tone}`}
                      />
                      <div className="flex gap-4">
                        <div
                          className={`grid h-20 w-20 shrink-0 place-items-center rounded-[18px] border border-white/10 bg-gradient-to-br ${product.tone}`}
                        >
                          <span className="font-display text-2xl text-white/80">
                            {product.name.charAt(0)}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[9px] uppercase tracking-[.2em] text-gold">
                            {product.brand}
                          </p>
                          <h3 className="mt-1 truncate font-display text-2xl">
                            {product.name}
                          </h3>
                          <p className="mt-1 truncate text-xs text-stone-500">
                            {product.mood}
                          </p>
                          <div className="mt-4 flex items-center justify-between gap-3">
                            <div className="flex items-center rounded-full border border-gold/30 bg-black/35 p-1">
                              <button
                                onClick={() => changeQuantity(product.name, -1)}
                                className="grid h-8 w-8 place-items-center rounded-full text-stone-400 transition hover:bg-gold hover:text-black"
                                aria-label={`Decrease ${product.name} quantity`}
                              >
                                <Minus size={13} />
                              </button>
                              <span className="w-8 text-center text-sm text-gold-light">
                                {quantity}
                              </span>
                              <button
                                onClick={() => changeQuantity(product.name, 1)}
                                className="grid h-8 w-8 place-items-center rounded-full text-stone-400 transition hover:bg-gold hover:text-black"
                                aria-label={`Increase ${product.name} quantity`}
                              >
                                <Plus size={13} />
                              </button>
                            </div>
                            <button
                              onClick={() =>
                                changeQuantity(product.name, -quantity)
                              }
                              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-stone-500 transition hover:border-red-400/40 hover:text-red-300"
                              aria-label={`Remove ${product.name} from cart`}
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-gold/20 bg-[#080806] px-6 py-6 sm:px-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[.18em] text-stone-500">
                      Total items
                    </p>
                    <p className="mt-1 font-display text-3xl text-gold-light">
                      {cartCount}
                    </p>
                  </div>
                  <p className="max-w-[190px] text-right text-xs leading-5 text-stone-500">
                    Price and availability will be confirmed before your order.
                  </p>
                </div>
                <a
                  href={`https://m.me/auroraessenceofficial?ref=${encodeURIComponent(`Cart order: ${orderSummary}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light px-6 py-4 text-[11px] font-semibold uppercase tracking-[.16em] text-black shadow-[0_0_30px_rgba(213,173,85,.18)] transition hover:brightness-110"
                >
                  <MessageCircle size={17} /> Confirm order in inbox
                </a>
                <button
                  onClick={() => setCartOpen(false)}
                  className="mt-3 w-full py-2 text-[10px] uppercase tracking-[.16em] text-stone-500 hover:text-gold-light"
                >
                  Continue shopping
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-xs text-stone-600">
        © {new Date().getFullYear()} Aurora Essence · Discover Your Signature
        Aura.
      </footer>
    </main>
  );
}
