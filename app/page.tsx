"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { HomeMarketShell, MarketProductCard, ProductRail } from "./components/home-market";
import { useStore } from "./components/store";
import { getProduct } from "./lib/catalog";

const heroSlides = [
  { image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1800", title: "Furniture Modern Untuk Setiap Ruang", copy: "Pilih sofa, meja, kasur, dan penyimpanan untuk rumah yang terasa lebih nyaman.", href: "/collection/living" },
  { image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1800", title: "Ruang Baru, Rasa yang Lebih Personal", copy: "Koleksi terpilih untuk beristirahat, bekerja, makan, dan berkumpul.", href: "/collection/bedroom" },
];

const offerIds = ["sofa-luna-3s", "dining-table-arka-4seat", "bed-frame-evora-queen", "office-chair-giri-mesh-midback", "cabinet-kana-low"];
const dailyIds = ["table-lamp-arli-ceramic", "rug-rani-120x170", "coffee-table-riko-round", "bookshelf-hana-4tier", "wardrobe-ambar-3-door"];
const detailIds = ["office-chair-giri-mesh-midback", "cabinet-kana-low", "bookshelf-hana-4tier", "table-lamp-arli-ceramic", "side-table-nila-round", "mirror-vera-round", "rug-sora-160x230", "desk-aksara-120"];
const gridIds = [
  "sofa-arka-l", "armchair-sena-lounge", "dining-chair-elok-upholstered", "office-chair-swara-ergo-highback", "dining-table-gading-round-120",
  "coffee-table-maru-nesting", "side-table-kembang-drawer", "bed-frame-nadi-king", "mattress-cendana-160-foam", "wardrobe-kinari-4-door-sliding",
  "cabinet-biru-tall", "bookshelf-ria-5tier", "rug-aulia-200x290", "table-lamp-sore-dimmable-touch", "mirror-aluna-arch",
  "tv-rack-vera-160", "nightstand-nadi-oak", "desk-palapa-standing-140", "dining-chair-kencana-velvet", "mattress-sagara-160-latex",
  "sofa-sekar-daybed", "coffee-table-bening-glass", "cabinet-sekar-glass", "bookshelf-dewi-cube", "table-lamp-bulan-glass-globe",
];

const productList = (ids: string[]) => ids.map(getProduct).filter((product): product is NonNullable<typeof product> => Boolean(product));
const categoryCircles = [
  { name: "Ruang Tamu", slug: "living", image: "https://images.pexels.com/photos/1493663/pexels-photo-1493663.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Kamar Tidur", slug: "bedroom", image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Ruang Makan", slug: "dining", image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Ruang Kerja", slug: "workspace", image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Penyimpanan", slug: "storage", image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Pencahayaan", slug: "lighting", image: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Kasur", slug: "bedroom", image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Kamar Mandi", slug: "storage", image: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=500" },
];

const mattressBrands = [
  { name: "Lady Americana", discount: "50%", line: "Kasur premium dengan teknologi tidur terkini", image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { name: "TEMPUR", discount: "45%", line: "Dukungan adaptif untuk tidur yang lebih pulih", image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { name: "Serta", discount: "40%", line: "Kenyamanan berlapis untuk setiap malam", image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { name: "King Koil", discount: "60%", line: "Pilihan istirahat dengan rasa hotel di rumah", image: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=900" },
];

export default function Home() {
  const store = useStore();
  const [hero, setHero] = useState(0);
  const [brandPage, setBrandPage] = useState(0);
  const [supplierStatus, setSupplierStatus] = useState("");
  const currentHero = heroSlides[hero];
  const brandCards = mattressBrands.map((_, index) => mattressBrands[(index + brandPage) % mattressBrands.length]);
  const submitSupplier = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSupplierStatus("Terima kasih. Tim Better Space akan menghubungi Anda dalam 1 hari kerja."); };
  return <HomeMarketShell cart={store.cart} favorites={store.favorites} onAdd={store.add} onFavorite={store.favorite}>
    <main className="market-main" id="top">
      <section className="market-hero"><div className="market-shell market-hero-frame"><div className="market-hero-copy"><p>Koleksi Better Space</p><h1>{currentHero.title}</h1><span>{currentHero.copy}</span><Link href={currentHero.href}>Belanja Sekarang <b>→</b></Link></div><div className="market-hero-image"><Image src={currentHero.image} alt="Interior Better Space" fill priority sizes="(max-width: 760px) 100vw, 60vw"/></div><button className="market-hero-arrow market-hero-prev" type="button" aria-label="Slide sebelumnya" onClick={() => setHero((hero + heroSlides.length - 1) % heroSlides.length)}><ChevronLeft/></button><button className="market-hero-arrow market-hero-next" type="button" aria-label="Slide berikutnya" onClick={() => setHero((hero + 1) % heroSlides.length)}><ChevronRight/></button><div className="market-hero-dots">{heroSlides.map((_, index) => <button type="button" key={index} onClick={() => setHero(index)} className={index === hero ? "active" : ""} aria-label={`Tampilkan slide ${index + 1}`}/>)}</div></div></section>

      <MarketSection title="Penawaran Terbaik untuk Anda" linkLabel="Lihat Semua" href="/collection/living" className="market-offers" id="penawaran"><div className="market-five-grid">{productList(offerIds).map((product) => <MarketProductCard key={product.id} product={product} favorites={store.favorites} onFavorite={store.favorite} onAdd={store.add}/>)}</div></MarketSection>

      <section className="market-section market-categories"><div className="market-shell"><MarketSectionHeading title="Mulai dari ruang Anda" linkLabel="Lihat Semua" href="/collection/living"/><div className="market-category-grid">{categoryCircles.map((category) => <Link className="market-category-circle" href={`/collection/${category.slug}`} key={category.name}><span><Image src={category.image} alt="" fill sizes="150px"/></span><b>{category.name}</b></Link>)}</div></div></section>

      <MarketSection title="Brand Kasur Premium" linkLabel="Lihat Semua" href="/collection/bedroom" className="market-mattress-section"><div className="market-brand-controls"><button type="button" onClick={() => setBrandPage((brandPage + mattressBrands.length - 1) % mattressBrands.length)} aria-label="Brand sebelumnya"><ChevronLeft/></button><div>{mattressBrands.map((_, index) => <button key={index} aria-label={`Halaman brand ${index + 1}`} className={brandPage === index ? "active" : ""} onClick={() => setBrandPage(index)}/>)}</div><button type="button" onClick={() => setBrandPage((brandPage + 1) % mattressBrands.length)} aria-label="Brand berikutnya"><ChevronRight/></button></div><div className="market-brand-grid">{brandCards.map((brand) => <article key={brand.name} className="market-brand-card"><Image src={brand.image} alt={`Koleksi kasur ${brand.name}`} fill sizes="(max-width:760px) 78vw, 25vw"/><div><strong>{brand.name}</strong><p>{brand.line}</p><span>Diskon hingga <b>{brand.discount}</b></span><Link href="/collection/bedroom">Lihat koleksi</Link></div></article>)}</div></MarketSection>

      <MarketSection title="Kebutuhan Harian untuk Rumah Anda" linkLabel="Lihat Semua" href="/collection/storage"><div className="market-five-grid">{productList(dailyIds).map((product) => <MarketProductCard key={product.id} product={product} favorites={store.favorites} onFavorite={store.favorite} onAdd={store.add}/>)}</div></MarketSection>

      <MarketSection title="Detail kecil yang menyempurnakan ruang" linkLabel="Lihat koleksi" href="/collection/lighting" className="market-detail-rail"><ProductRail products={productList(detailIds)} favorites={store.favorites} onFavorite={store.favorite} onAdd={store.add} auto/></MarketSection>

      <MarketSection title="Jelajahi Produk Kami" linkLabel="Lihat Semua Produk" href="/collection/living" className="market-catalogue"><p className="market-catalogue-intro">Pilihan furniture dan kebutuhan rumah untuk setiap fungsi ruang.</p><div className="market-catalogue-grid">{productList(gridIds).map((product) => <MarketProductCard key={product.id} product={product} favorites={store.favorites} onFavorite={store.favorite} onAdd={store.add}/>)}</div></MarketSection>

      <section className="market-supplier"><div className="market-shell market-supplier-grid"><div className="market-supplier-copy"><Image src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Interior proyek Better Space" fill sizes="(max-width:760px) 100vw, 55vw"/><div><p>Better Space untuk bisnis</p><h2>Dapatkan Penawaran Khusus untuk Pembelian Dalam Jumlah Besar</h2><span>Untuk kantor, proyek, bisnis, atau kebutuhan furniture korporat, kami bantu susun penawaran yang sesuai.</span></div></div><form className="market-supplier-form" onSubmit={submitSupplier}><h2>Minta Penawaran untuk Supplier</h2><label>Nama Perusahaan<input name="company" required placeholder="Nama perusahaan Anda"/></label><label>Email<input name="email" type="email" required placeholder="email@perusahaan.com"/></label><label>Jenis Kebutuhan<select name="need" defaultValue=""><option value="" disabled>Pilih kebutuhan</option><option>Proyek kantor</option><option>Hunian sewa</option><option>Restoran dan hospitality</option><option>Pengadaan bisnis</option></select></label><label>Nomor Telepon<input name="phone" required inputMode="tel" placeholder="08xx xxxx xxxx"/></label><button type="submit">Kirim Penawaran →</button>{supplierStatus && <p role="status">{supplierStatus}</p>}</form></div></section>
    </main>
  </HomeMarketShell>;
}

function MarketSection({ title, href, linkLabel, children, className = "", id }: { title: string; href: string; linkLabel: string; children: React.ReactNode; className?: string; id?: string }) { return <section id={id} className={`market-section ${className}`}><div className="market-shell"><MarketSectionHeading title={title} href={href} linkLabel={linkLabel}/>{children}</div></section>; }
function MarketSectionHeading({ title, href, linkLabel }: { title: string; href: string; linkLabel: string }) { return <div className="market-section-heading"><h2>{title}</h2><Link href={href}>{linkLabel} →</Link></div>; }
