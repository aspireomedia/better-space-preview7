"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowLeft, ArrowRight, ChevronDown, Heart, Menu, Search, ShoppingBag,
  Truck, UserRound, X, Check, MapPin, Headphones,
} from "lucide-react";

type Product = { id: string; name: string; price: string; oldPrice?: string; discount?: string; rating: string; reviews: string; image: string; category: string };

const products: Product[] = [
  { id: "luna", name: "Luna Sofa 3 Seater", price: "Rp 7.499.000", oldPrice: "Rp 8.799.000", discount: "15%", rating: "4.8", reviews: "126", category: "Sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=85" },
  { id: "arka", name: "Arka Meja Makan Set 4 Kursi", price: "Rp 5.999.000", oldPrice: "Rp 6.499.000", discount: "8%", rating: "4.9", reviews: "89", category: "Ruang Makan", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=85" },
  { id: "evora", name: "Evora Bed Frame Queen Size", price: "Rp 6.999.000", oldPrice: "Rp 7.799.000", discount: "10%", rating: "4.7", reviews: "64", category: "Kamar Tidur", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=85" },
  { id: "nexis", name: "Nexis Kursi Kantor Ergonomis", price: "Rp 2.499.000", oldPrice: "Rp 2.899.000", discount: "14%", rating: "4.8", reviews: "112", category: "Ruang Kerja", image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=85" },
  { id: "kana", name: "Kana Lemari Penyimpanan", price: "Rp 3.999.000", rating: "4.7", reviews: "55", category: "Penyimpanan", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=85" },
];

const dailyProducts: Product[] = [
  { id: "arli", name: "Arli Table Lamp", price: "Rp 899.000", rating: "4.8", reviews: "42", category: "Pencahayaan", image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=85" },
  { id: "sora", name: "Sora Karpet 160 x 230 cm", price: "Rp 1.299.000", rating: "4.7", reviews: "38", category: "Dekorasi", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=85" },
  { id: "riko", name: "Riko Coffee Table Round", price: "Rp 2.999.000", rating: "4.9", reviews: "74", category: "Ruang Tamu", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=85" },
  { id: "hana", name: "Hana Rak Buku 4 Tingkat", price: "Rp 2.499.000", rating: "4.6", reviews: "29", category: "Penyimpanan", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=85" },
  { id: "mori", name: "Mori Lemari Pakaian", price: "Rp 6.499.000", rating: "4.8", reviews: "63", category: "Kamar Tidur", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85" },
];

const categories = [
  ["Sofa", "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=360&q=80"],
  ["Tempat Tidur", "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=360&q=80"],
  ["Meja Makan", "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=360&q=80"],
  ["Kursi Kantor", "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=360&q=80"],
  ["Lemari", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=360&q=80"],
  ["Pencahayaan", "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=360&q=80"],
  ["Dekorasi", "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=360&q=80"],
  ["Aksesoris", "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=360&q=80"],
];

const navItems = ["Semua Kategori", "Ruang Tamu", "Kamar Tidur", "Ruang Makan", "Ruang Kerja", "Penyimpanan", "Pencahayaan", "Dekorasi Rumah", "Promo"];
const heroImages = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=90",
];

function Brand() {
  return <a href="#top" className="brand" aria-label="Better Space, kembali ke atas"><span>Better&nbsp; Space</span><small>FURNITURE FOR A BETTER LIVING.</small></a>;
}

function ProductCard({ product, favorites, onFavorite, onAdd }: { product: Product; favorites: string[]; onFavorite: (id: string) => void; onAdd: (name: string) => void }) {
  const saved = favorites.includes(product.id);
  return <article className="product-card">
    <div className="product-image-wrap">
      <Image src={product.image} alt={product.name} width={500} height={500} className="product-image" />
      {product.discount && <span className="discount">Hemat {product.discount}</span>}
      <button aria-label={saved ? `Hapus ${product.name} dari wishlist` : `Simpan ${product.name} ke wishlist`} onClick={() => onFavorite(product.id)} className={`heart ${saved ? "saved" : ""}`}><Heart size={18} fill={saved ? "currentColor" : "none"} /></button>
    </div>
    <div className="product-copy"><p className="product-category">{product.category}</p><h3>{product.name}</h3><div className="price-row"><strong>{product.price}</strong>{product.oldPrice && <del>{product.oldPrice}</del>}</div><div className="rating"><span aria-label={`Rating ${product.rating} dari 5`}>★ {product.rating}</span><span>({product.reviews})</span><button onClick={() => onAdd(product.name)} aria-label={`Tambah ${product.name} ke keranjang`}><ShoppingBag size={17} /></button></div></div>
  </article>;
}

export default function Home() {
  const [cart, setCart] = useState(0); const [favorites, setFavorites] = useState<string[]>([]); const [hero, setHero] = useState(0); const [menuOpen, setMenuOpen] = useState(false); const [search, setSearch] = useState(""); const [notice, setNotice] = useState(""); const [newsletter, setNewsletter] = useState(""); const [newsletterStatus, setNewsletterStatus] = useState(""); const [quoteStatus, setQuoteStatus] = useState("");
  const foundProducts = useMemo(() => [...products, ...dailyProducts].filter((item) => item.name.toLowerCase().includes(search.toLowerCase())), [search]);
  const add = (name: string) => { setCart((count) => count + 1); setNotice(`${name} ditambahkan ke keranjang.`); window.setTimeout(() => setNotice(""), 2800); };
  const favorite = (id: string) => setFavorites((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]);
  const scrollOffers = () => document.getElementById("penawaran")?.scrollIntoView({ behavior: "smooth" });
  const submitNewsletter = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setNewsletterStatus(/^\S+@\S+\.\S+$/.test(newsletter) ? "Terima kasih. Update Better Space akan dikirim ke email Anda." : "Masukkan alamat email yang valid."); };
  const submitQuote = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); const form = event.currentTarget; setQuoteStatus(form.checkValidity() ? "Permintaan Anda telah dicatat. Tim supplier akan menghubungi Anda." : "Lengkapi nama perusahaan, email, dan jumlah kebutuhan terlebih dahulu."); };
  return <main id="top">
    <div className="utility"><div className="shell utility-inner"><span><Truck size={15} /> Gratis Ongkir untuk pembelian di atas Rp 1.000.000</span><nav aria-label="Tautan utilitas"><a href="#footer">Pusat Bantuan</a><a href="#footer">Lacak Pesanan</a><a href="#footer">Lokasi Toko</a><a href="#footer">Bahasa Indonesia</a></nav></div></div>
    <header className="header"><div className="shell header-inner"><Brand /><form className="search" onSubmit={(e) => { e.preventDefault(); document.getElementById("penawaran")?.scrollIntoView({ behavior: "smooth" }); }}><label className="sr-only" htmlFor="site-search">Cari produk Better Space</label><select aria-label="Pilih kategori"><option>Semua Kategori</option>{navItems.slice(1, -1).map((item) => <option key={item}>{item}</option>)}</select><input id="site-search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cari furniture, ruangan, atau gaya..."/><button type="submit" aria-label="Cari"><Search size={19}/></button></form><div className="account"><button onClick={() => setNotice("Fitur masuk tersedia pada versi toko penuh.")}><UserRound size={19}/><span>Masuk</span></button><button onClick={() => document.getElementById("penawaran")?.scrollIntoView({behavior:"smooth"})}><Heart size={19}/><span>Wishlist</span>{favorites.length > 0 && <b>{favorites.length}</b>}</button><button onClick={() => setNotice(cart ? `${cart} produk ada di keranjang Anda.` : "Keranjang Anda masih kosong.")}><ShoppingBag size={19}/><span>Keranjang</span>{cart > 0 && <b>{cart}</b>}</button></div><button onClick={() => setMenuOpen(true)} className="menu-button" aria-label="Buka menu"><Menu /></button></div></header>
    <nav className="main-nav"><div className="shell">{navItems.map((item, index) => <a href={index === 0 ? "#categories" : item === "Promo" ? "#penawaran" : "#categories"} className={index === 0 ? "active" : item === "Promo" ? "promo" : ""} key={item}>{item}{index === 0 && <ChevronDown size={14}/>}</a>)}</div></nav>
    {menuOpen && <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu utama"><div><button className="close" onClick={() => setMenuOpen(false)} aria-label="Tutup menu"><X/></button><Brand /><nav>{navItems.map(item => <a key={item} onClick={() => setMenuOpen(false)} href={item === "Promo" ? "#penawaran" : "#categories"}>{item}</a>)}</nav><a href="#footer" onClick={() => setMenuOpen(false)} className="help-link"><Headphones size={18}/> Pusat Bantuan</a></div></div>}
    <section className="hero"><Image src={heroImages[hero]} fill priority sizes="100vw" alt="Ruang tamu Better Space dengan sofa modern berwarna netral"/><div className="hero-shade"/><div className="shell hero-content"><p>Koleksi baru untuk hunian Anda</p><h1>Furniture Modern<br/>Untuk Setiap Ruang</h1><span>Nyaman, fungsional, dan tahan lama untuk rumah dan kantor Anda.</span><button onClick={scrollOffers}>Belanja Sekarang <ArrowRight size={18}/></button></div><div className="hero-controls shell"><button aria-label="Slide sebelumnya" onClick={() => setHero((hero + heroImages.length - 1) % heroImages.length)}><ArrowLeft/></button><div>{heroImages.map((_, index) => <button aria-label={`Tampilkan slide ${index + 1}`} className={hero === index ? "on" : ""} onClick={() => setHero(index)} key={index}/>)}</div><button aria-label="Slide berikutnya" onClick={() => setHero((hero + 1) % heroImages.length)}><ArrowRight/></button></div></section>
    {notice && <div className="toast" role="status"><Check size={18}/>{notice}</div>}
    <section className="section shell offers" id="penawaran"><SectionTitle title="Penawaran Terbaik untuk Anda"/><div className="offers-layout"><div className="offer-intro"><p className="eyebrow">PILIHAN MINGGU INI</p><h2>Furniture terbaik, untuk rumah yang terasa lebih Anda.</h2><p>Temukan koleksi favorit dengan harga spesial dan kualitas yang dibuat untuk menemani keseharian.</p><a href="#daily">Lihat semua koleksi <ArrowRight size={16}/></a></div><div className="product-grid">{(search ? foundProducts : products).slice(0, 5).map((product) => <ProductCard key={product.id} product={product} favorites={favorites} onFavorite={favorite} onAdd={add}/>)}</div></div>{search && !foundProducts.length && <p className="empty">Produk belum ditemukan. Coba kata kunci lain.</p>}</section>
    <section className="section muted-section" id="categories"><div className="shell"><SectionTitle title="Belanja Berdasarkan Kategori"/><div className="category-row">{categories.map(([name, image]) => <a href="#penawaran" key={name} className="category"><span><Image src={image} alt={name} fill sizes="150px"/></span><b>{name}</b></a>)}</div></div></section>
    <section className="section shell mattresses"><SectionTitle title="Brand Kasur Premium"/><div className="mattress-grid"><Mattress tone="ice" name="Lady Americana" offer="Hingga" percentage="50%" img="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=85"/><Mattress tone="silver" name="TEMPUR" offer="Hingga" percentage="60%" img="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=85"/><Mattress tone="dusty" name="Serta" offer="Hingga" percentage="50%" img="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=85"/><Mattress tone="slate" name="King Koil" offer="Hingga" percentage="40%" img="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85"/></div><p className="brand-note">Pilihan kategori kasur premium untuk preview koleksi Better Space.</p></section>
    <section className="section daily" id="daily"><div className="shell"><SectionTitle title="Kebutuhan Harian untuk Rumah Anda"/><div className="daily-grid">{dailyProducts.map((product) => <ProductCard key={product.id} product={product} favorites={favorites} onFavorite={favorite} onAdd={add}/>)}</div></div></section>
    <section className="business"><div className="shell business-grid"><div className="business-copy"><p className="eyebrow">BETTER SPACE FOR BUSINESS</p><h2>Dapatkan Penawaran Khusus untuk Pembelian Dalam Jumlah Besar</h2><p>Cocok untuk bisnis, proyek interior, atau kebutuhan perusahaan Anda. Ceritakan kebutuhan ruang Anda, kami bantu siapkan pilihannya.</p><div><span><Truck/> Pengiriman terkoordinasi</span><span><MapPin/> Pilihan untuk berbagai kota</span></div></div><form className="quote-form" onSubmit={submitQuote} noValidate><h3>Minta Penawaran untuk Supplier</h3><label>Nama Perusahaan<input required name="company" placeholder="Nama perusahaan Anda" /></label><label>Email<input required type="email" name="email" placeholder="nama@perusahaan.com" /></label><label>Jumlah Kebutuhan<select required defaultValue=""><option value="" disabled>Pilih jumlah kebutuhan</option><option>10 - 25 unit</option><option>26 - 50 unit</option><option>Lebih dari 50 unit</option></select></label><label>Pesan <em>(Opsional)</em><textarea name="message" placeholder="Ceritakan kebutuhan proyek Anda" rows={3}/></label><button type="submit">Kirim Penawaran <ArrowRight size={17}/></button>{quoteStatus && <p role="status" className="form-status">{quoteStatus}</p>}</form></div></section>
    <footer id="footer"><div className="shell footer-grid"><div className="footer-brand"><Brand/><p>Furniture modern yang dirancang untuk membantu Anda menjalani keseharian dengan lebih nyaman.</p><ul><li>+62 21 555 0199</li><li>halo@betterspace.id</li><li>Senin - Sabtu, 09.00 - 18.00</li></ul></div><FooterColumn title="Kategori Produk" links={["Ruang Tamu", "Kamar Tidur", "Ruang Makan", "Ruang Kerja", "Pencahayaan"]}/><FooterColumn title="Layanan Pelanggan" links={["Pusat Bantuan", "Lacak Pesanan", "Pengiriman", "Pengembalian", "Kebijakan Privasi"]}/><div className="newsletter"><h3>Dapatkan Update Terbaru</h3><p>Dapatkan informasi koleksi dan penawaran Better Space.</p><form onSubmit={submitNewsletter}><label className="sr-only" htmlFor="newsletter">Alamat email</label><input id="newsletter" value={newsletter} onChange={(e) => setNewsletter(e.target.value)} placeholder="Alamat email Anda" type="email"/><button type="submit" aria-label="Daftar newsletter"><ArrowRight/></button></form>{newsletterStatus && <p role="status">{newsletterStatus}</p>}<div className="apps"><span>Download aplikasi</span><button>App Store</button><button>Google Play</button></div></div></div><div className="shell footer-bottom"><span>© 2026 Better Space. Semua hak dilindungi.</span><div><b>Metode Pembayaran</b><i>BCA</i><i>mandiri</i><i>VISA</i><i>GoPay</i><i>DANA</i></div></div></footer>
  </main>;
}

function SectionTitle({ title }: { title: string }) { return <div className="section-title"><h2>{title}</h2><a href="#daily">Lihat Semua <ArrowRight size={16}/></a></div>; }
function Mattress({ tone, name, offer, percentage, img }: { tone: string; name: string; offer: string; percentage: string; img: string }) { return <article className={`mattress ${tone}`}><div><p>{name}</p><span>{offer}</span><strong>{percentage}</strong><small>untuk tidur yang lebih pulih</small><button onClick={() => document.getElementById("daily")?.scrollIntoView({behavior:"smooth"})}>Lihat koleksi</button></div><Image src={img} fill alt={`Pilihan kasur ${name}`} sizes="(max-width: 768px) 75vw, 25vw"/></article>; }
function FooterColumn({ title, links }: { title: string; links: string[] }) { return <div className="footer-column"><h3>{title}</h3>{links.map(link => <a href="#categories" key={link}>{link}</a>)}</div>; }
