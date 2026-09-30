"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Menu, Search, ShoppingBag, Truck, UserRound, X } from "lucide-react";
import { categories, Product, products, rupiah } from "../lib/catalog";

type CartLine = { id: string; quantity: number };

type HomeMarketShellProps = {
  children: ReactNode;
  cart: CartLine[];
  favorites: string[];
  onAdd: (id: string) => void;
  onFavorite: (id: string) => void;
};

const homepageCategories = [
  ...categories,
  { slug: "bedroom", name: "Kasur", image: "https://images.pexels.com/photos/8089076/pexels-photo-8089076.jpeg?auto=compress&cs=tinysrgb&h=500&w=500" },
  { slug: "storage", name: "Kamar Mandi", image: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&h=500&w=500" },
];

export function HomeMarketShell({ children, cart, favorites, onAdd, onFavorite }: HomeMarketShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0);
  const matches = useMemo(() => query.trim() ? products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5) : [], [query]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return <div className="market-home">
    <div className="market-utility"><div className="market-shell market-utility-inner"><span><Truck size={14}/> Gratis ongkir untuk pembelian di atas Rp 1.000.000</span><nav><Link href="/contact">Pusat Bantuan</Link><Link href="/cart">Lacak Pesanan</Link><Link href="/about">Lokasi Toko</Link><button type="button">Bahasa Indonesia</button></nav></div></div>
    <header className="market-header"><div className="market-shell market-header-inner"><HomeBrand/><div className="market-search-area"><form className="market-search" onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="market-search">Cari produk</label><select aria-label="Kategori pencarian" defaultValue="all"><option value="all">Semua Kategori</option>{homepageCategories.map((category) => <option key={category.name} value={category.name}>{category.name}</option>)}</select><input id="market-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari sofa, meja, kasur, lampu, atau lemari"/><button type="submit" aria-label="Cari"><Search size={18}/></button></form>{matches.length > 0 && <div className="market-search-results">{matches.map((product) => <Link key={product.id} href={`/products/${product.id}`} onClick={() => setQuery("")}><span>{product.name}</span><strong>{rupiah(product.price)}</strong></Link>)}</div>}</div><nav className="market-actions" aria-label="Akun dan keranjang"><button type="button" aria-label="Masuk" onClick={() => alert("Akun pelanggan tersedia pada versi toko penuh.")}><UserRound/><span>Masuk</span></button><Link href="/collection/living" aria-label="Wishlist"><Heart/><span>Wishlist</span>{favorites.length > 0 && <b>{favorites.length}</b>}</Link><Link href="/cart" aria-label="Keranjang"><ShoppingBag/><span>Keranjang</span>{cartCount > 0 && <b>{cartCount}</b>}</Link></nav><button className="market-menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Buka menu"><Menu/><span>Menu</span></button></div></header>
    <nav className="market-nav"><div className="market-shell"><Link className="market-nav-all" href="/collection/living">Semua Kategori</Link><Link href="/collection/living">Ruang Tamu</Link><Link href="/collection/bedroom">Kamar Tidur</Link><Link href="/collection/dining">Ruang Makan</Link><Link href="/collection/workspace">Ruang Kerja</Link><Link href="/collection/storage">Penyimpanan</Link><Link href="/collection/lighting">Pencahayaan</Link><Link href="/collection/bedroom">Dekorasi Rumah</Link><Link className="market-nav-promo" href="/#penawaran">Promo</Link></div></nav>
    {menuOpen && <div className="market-mobile-menu" role="dialog" aria-modal="true" aria-label="Menu utama"><div><button className="market-menu-close" type="button" onClick={() => setMenuOpen(false)} aria-label="Tutup menu"><X/></button><HomeBrand/><nav>{homepageCategories.map((category) => <Link href={`/collection/${category.slug}`} key={category.name} onClick={() => setMenuOpen(false)}>{category.name}</Link>)}<Link href="/about" onClick={() => setMenuOpen(false)}>Tentang Better Space</Link><Link href="/contact" onClick={() => setMenuOpen(false)}>Hubungi Kami</Link></nav></div></div>}
    {children}
    <HomeFooter />
  </div>;
}

export function HomeBrand() { return <Link href="/" className="market-brand" aria-label="Better Space, beranda"><span>Better Space</span><small>FURNITURE · INTERIOR · LIVING</small></Link>; }

export function MarketProductCard({ product, favorites, onFavorite, onAdd }: { product: Product; favorites: string[]; onFavorite: (id: string) => void; onAdd: (id: string) => void }) {
  const saved = favorites.includes(product.id);
  return <article className="market-product-card"><div className="market-product-image"><Link href={`/products/${product.id}`}><Image src={product.image} alt={product.name} width={520} height={520}/></Link>{product.discount && <span className="market-discount">-{product.discount}</span>}<button type="button" className={saved ? "saved" : ""} onClick={() => onFavorite(product.id)} aria-label={`Simpan ${product.name}`}><Heart size={17} fill={saved ? "currentColor" : "none"}/></button></div><div className="market-product-copy"><p>{product.category}</p><h3><Link href={`/products/${product.id}`}>{product.name}</Link></h3><div className="market-price"><strong>{rupiah(product.price)}</strong>{product.oldPrice && <del>{rupiah(product.oldPrice)}</del>}</div><div className="market-rating"><span>★ {product.rating} <small>({product.reviews})</small></span><button type="button" onClick={() => onAdd(product.id)} aria-label={`Tambah ${product.name} ke keranjang`}><ShoppingBag size={16}/></button></div></div></article>;
}

export function ProductRail({ products: railProducts, favorites, onFavorite, onAdd, auto = false }: { products: Product[]; favorites: string[]; onFavorite: (id: string) => void; onAdd: (id: string) => void; auto?: boolean }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const move = (direction: number) => railRef.current?.scrollBy({ left: direction * Math.min(railRef.current.clientWidth * .78, 520), behavior: "smooth" });
  useEffect(() => { if (!auto || paused) return; const id = window.setInterval(() => { const rail = railRef.current; if (!rail) return; const atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 6; rail.scrollTo({ left: atEnd ? 0 : rail.scrollLeft + 260, behavior: "smooth" }); }, 3500); return () => window.clearInterval(id); }, [auto, paused]);
  return <div className="market-rail-wrap" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}><button className="market-rail-arrow market-rail-prev" type="button" onClick={() => move(-1)} aria-label="Produk sebelumnya"><ChevronLeft/></button><div className="market-product-rail" ref={railRef}>{railProducts.map((product) => <MarketProductCard key={product.id} product={product} favorites={favorites} onFavorite={onFavorite} onAdd={onAdd}/>)}</div><button className="market-rail-arrow market-rail-next" type="button" onClick={() => move(1)} aria-label="Produk berikutnya"><ChevronRight/></button></div>;
}

function HomeFooter() {
  const [email, setEmail] = useState(""); const [status, setStatus] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setStatus(/^\S+@\S+\.\S+$/.test(email) ? "Terima kasih. Update Better Space akan kami kirim ke email Anda." : "Masukkan alamat email yang valid."); };
  return <footer className="market-footer"><div className="market-shell market-footer-grid"><section><HomeBrand/><p>Furniture untuk ruang yang ditempati setiap hari — dipilih untuk proporsi, material, dan kenyamanan yang terasa tepat.</p><ul><li>021 5550 8818</li><li>hello@betterspace.id</li><li>Senin–Sabtu, 09.00–18.00 WIB</li></ul><span className="market-footer-label">Download aplikasi</span><div className="market-apps"><button type="button">Google Play</button><button type="button">App Store</button></div><div className="market-social" aria-label="Media sosial"><a href="https://instagram.com" aria-label="Instagram">ig</a><a href="https://facebook.com" aria-label="Facebook">f</a><a href="https://youtube.com" aria-label="YouTube">yt</a></div></section><section><h2>Kategori Produk</h2><Link href="/collection/living">Sofa & Kursi Santai</Link><Link href="/collection/bedroom">Tempat Tidur & Kasur</Link><Link href="/collection/dining">Meja Makan & Kursi</Link><Link href="/collection/storage">Lemari & Penyimpanan</Link><Link href="/collection/workspace">Meja Kerja & Kursi Kantor</Link><Link href="/collection/lighting">Rak, Aksesoris & Pencahayaan</Link></section><section><h2>Layanan Pelanggan</h2><Link href="/contact">Pusat Bantuan</Link><Link href="/cart">Lacak Pesanan</Link><Link href="/contact">Informasi Pengiriman</Link><Link href="/contact">Pengembalian & Penukaran</Link><Link href="/about">Garansi Produk</Link><Link href="/about">Syarat & Ketentuan</Link><Link href="/about">Kebijakan Privasi</Link></section><section className="market-footer-newsletter"><h2>Dapatkan Update Terbaru</h2><p>Produk baru, ide ruang, dan penawaran pilihan langsung ke email Anda.</p><form onSubmit={submit}><label className="sr-only" htmlFor="market-footer-email">Email</label><input id="market-footer-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Alamat email Anda"/><button type="submit" aria-label="Daftar newsletter">→</button></form>{status && <p role="status">{status}</p>}</section></div><div className="market-shell market-payments"><span>© 2026 Better Space. Semua hak dilindungi.</span><div><b>BCA</b><b>BNI</b><b>BRI</b><b>VISA</b><b>mastercard</b><b>OVO</b><b>DANA</b></div></div></footer>;
}
