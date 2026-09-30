"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";
import { Heart, Menu, Minus, Plus, Search, ShoppingBag, Truck, UserRound, X } from "lucide-react";
import { categories, Product, products, rupiah } from "../lib/catalog";

type CartLine = { id: string; quantity: number };
type StoreShellProps = { children: ReactNode; cart: CartLine[]; onAdd: (id: string) => void; favorites: string[]; onFavorite: (id: string) => void };

export function useStore() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { queueMicrotask(() => { try { setCart(JSON.parse(localStorage.getItem("better-space-cart") || "[]")); setFavorites(JSON.parse(localStorage.getItem("better-space-favorites") || "[]")); } catch {} setHydrated(true); }); }, []);
  const updateCart = (next: CartLine[]) => { setCart(next); localStorage.setItem("better-space-cart", JSON.stringify(next)); };
  const add = (id: string) => updateCart(cart.some((line) => line.id === id) ? cart.map((line) => line.id === id ? { ...line, quantity: line.quantity + 1 } : line) : [...cart, { id, quantity: 1 }]);
  const changeQuantity = (id: string, quantity: number) => updateCart(quantity < 1 ? cart.filter((line) => line.id !== id) : cart.map((line) => line.id === id ? { ...line, quantity } : line));
  const favorite = (id: string) => { const next = favorites.includes(id) ? favorites.filter((item) => item !== id) : [...favorites, id]; setFavorites(next); localStorage.setItem("better-space-favorites", JSON.stringify(next)); };
  return { cart, favorites, add, changeQuantity, favorite, hydrated };
}

export function StoreShell({ children, cart, favorites, onAdd, onFavorite }: StoreShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0);
  const matches = useMemo(() => query.trim() ? products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())).slice(0, 4) : [], [query]);
  return <>
    <div className="utility"><div className="shell utility-inner"><span><Truck size={15} />Gratis ongkir untuk pembelian di atas Rp 1.000.000</span><nav><Link href="/contact">Pusat Bantuan</Link><Link href="/about">Tentang Better Space</Link></nav></div></div>
    <header className="header"><div className="shell header-inner"><Brand /><div className="search-area"><form className="search" onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="store-search">Cari produk</label><input id="store-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari sofa, meja, lampu, atau lemari"/><button type="submit" aria-label="Cari"><Search size={18}/></button></form>{matches.length > 0 && <div className="search-results">{matches.map((product) => <Link key={product.id} href={`/products/${product.id}`} onClick={() => setQuery("")}>{product.name}<span>{rupiah(product.price)}</span></Link>)}</div>}</div><nav className="account" aria-label="Akun dan keranjang"><Link href="/collection/living" aria-label="Wishlist"><Heart size={19}/><span>Wishlist</span>{favorites.length > 0 && <b>{favorites.length}</b>}</Link><button type="button" onClick={() => alert("Akun pelanggan tersedia pada versi toko penuh.")}><UserRound size={19}/><span>Masuk</span></button><Link href="/cart"><ShoppingBag size={19}/><span>Keranjang</span>{cartCount > 0 && <b>{cartCount}</b>}</Link></nav><button className="menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Buka menu"><Menu /></button></div></header>
    <nav className="main-nav"><div className="shell"><Link href="/collection/living">Ruang Tamu</Link><Link href="/collection/bedroom">Kamar Tidur</Link><Link href="/collection/dining">Ruang Makan</Link><Link href="/collection/workspace">Ruang Kerja</Link><Link href="/collection/storage">Penyimpanan</Link><Link href="/collection/lighting">Pencahayaan</Link><Link className="promo" href="/#penawaran">Penawaran Minggu Ini</Link></div></nav>
    {menuOpen && <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu"><div><button className="close" type="button" onClick={() => setMenuOpen(false)} aria-label="Tutup menu"><X /></button><Brand /><nav>{categories.map((category) => <Link href={`/collection/${category.slug}`} key={category.slug} onClick={() => setMenuOpen(false)}>{category.name}</Link>)}<Link href="/about" onClick={() => setMenuOpen(false)}>Tentang Kami</Link><Link href="/contact" onClick={() => setMenuOpen(false)}>Hubungi Kami</Link></nav></div></div>}
    {children}
    <Footer />
  </>;
}

export function Brand() { return <Link href="/" className="brand" aria-label="Better Space, beranda"><span>Better Space</span><small>FURNITURE FOR A BETTER LIVING.</small></Link>; }

export function ProductCard({ product, favorites, onFavorite, onAdd }: { product: Product; favorites: string[]; onFavorite: (id: string) => void; onAdd: (id: string) => void }) {
 const saved = favorites.includes(product.id);
 return <article className="product-card"><div className="product-image-wrap"><Link href={`/products/${product.id}`}><Image src={product.image} alt={product.name} width={520} height={520} className="product-image"/></Link>{product.discount && <span className="discount">Hemat {product.discount}</span>}<button type="button" className={`heart ${saved ? "saved" : ""}`} aria-label="Simpan ke wishlist" onClick={() => onFavorite(product.id)}><Heart size={18} fill={saved ? "currentColor" : "none"}/></button></div><div className="product-copy"><p className="product-category">{product.category}</p><h3><Link href={`/products/${product.id}`}>{product.name}</Link></h3><div className="price-row"><strong>{rupiah(product.price)}</strong>{product.oldPrice && <del>{rupiah(product.oldPrice)}</del>}</div><div className="rating"><span>★ {product.rating} <small>({product.reviews})</small></span><button type="button" onClick={() => onAdd(product.id)} aria-label={`Tambah ${product.name} ke keranjang`}><ShoppingBag size={17}/></button></div></div></article>;
}

export function Quantity({ quantity, onChange }: { quantity: number; onChange: (value: number) => void }) { return <div className="quantity"><button type="button" aria-label="Kurangi jumlah" onClick={() => onChange(quantity - 1)}><Minus size={15}/></button><span>{quantity}</span><button type="button" aria-label="Tambah jumlah" onClick={() => onChange(quantity + 1)}><Plus size={15}/></button></div>; }

function Footer() { const [email, setEmail] = useState(""); const [status, setStatus] = useState(""); const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setStatus(/^\S+@\S+\.\S+$/.test(email) ? "Terima kasih, Anda sudah terdaftar." : "Masukkan alamat email yang valid."); }; return <footer><div className="shell footer-grid"><div className="footer-brand"><Brand /><p>Furniture untuk ruang yang Anda tempati setiap hari, dipilih dengan proporsi, material, dan kenyamanan yang dipikirkan baik-baik.</p></div><div className="footer-column"><h3>Belanja</h3>{categories.slice(0, 5).map((category) => <Link href={`/collection/${category.slug}`} key={category.slug}>{category.name}</Link>)}</div><div className="footer-column"><h3>Better Space</h3><Link href="/about">Tentang kami</Link><Link href="/contact">Hubungi kami</Link><Link href="/cart">Keranjang belanja</Link></div><div className="newsletter"><h3>Catatan dari Better Space</h3><p>Koleksi baru dan penawaran yang relevan untuk rumah Anda.</p><form onSubmit={submit}><label className="sr-only" htmlFor="footer-email">Email</label><input id="footer-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Alamat email Anda"/><button type="submit">Daftar</button></form>{status && <p role="status">{status}</p>}</div></div><div className="shell footer-bottom"><span>© 2026 Better Space.</span><span>Furniture for a better living.</span></div></footer>; }
