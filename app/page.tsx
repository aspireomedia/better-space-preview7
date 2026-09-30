"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard, StoreShell, useStore } from "./components/store";
import { categories, products } from "./lib/catalog";

const heroImages = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=90",
];

export default function Home() {
  const store = useStore();
  const [hero, setHero] = useState(0);
  return <StoreShell cart={store.cart} favorites={store.favorites} onAdd={store.add} onFavorite={store.favorite}>
    <main id="top">
      <section className="hero"><Image src={heroImages[hero]} fill priority sizes="100vw" alt="Interior Better Space dengan furniture berwarna netral"/><div className="hero-shade"/><div className="shell hero-content"><p>Koleksi untuk ruang yang hidup bersama Anda</p><h1>Furniture modern<br/>untuk setiap ruang</h1><span>Pilihan sofa, meja, tempat tidur, dan penyimpanan untuk rumah yang terasa lebih personal.</span><Link href="/collection/living" className="primary-link">Lihat koleksi ruang tamu <ArrowRight size={18}/></Link></div><div className="hero-controls shell"><button type="button" aria-label="Slide sebelumnya" onClick={() => setHero((hero + heroImages.length - 1) % heroImages.length)}><ChevronLeft/></button><div>{heroImages.map((_, index) => <button type="button" aria-label={`Tampilkan slide ${index + 1}`} className={hero === index ? "on" : ""} onClick={() => setHero(index)} key={index}/>)}</div><button type="button" aria-label="Slide berikutnya" onClick={() => setHero((hero + 1) % heroImages.length)}><ChevronRight/></button></div></section>
      <section className="section shell offers" id="penawaran"><SectionTitle title="Penawaran terbaik minggu ini" href="/collection/living"/><div className="offers-layout"><div className="offer-intro"><p className="eyebrow">PILIHAN BETTER SPACE</p><h2>Ruang yang nyaman dimulai dari pilihan yang terasa tepat.</h2><p>Koleksi pilihan dengan material yang mudah dirawat dan bentuk yang tidak lekang oleh musim.</p><Link href="/collection/living">Lihat koleksi ruang tamu <ArrowRight size={16}/></Link></div><div className="product-grid">{products.slice(0, 5).map((product) => <ProductCard key={product.id} product={product} favorites={store.favorites} onFavorite={store.favorite} onAdd={store.add}/>)}</div></div></section>
      <section className="section muted-section"><div className="shell"><SectionTitle title="Mulai dari ruang Anda" href="/collection/living"/><div className="category-row">{categories.map((category) => <Link href={`/collection/${category.slug}`} key={category.slug} className="category"><span><Image src={category.image} alt={category.name} fill sizes="160px"/></span><b>{category.name}</b></Link>)}</div></div></section>
      <section className="section shell editorial-grid"><div className="editorial-image"><Image src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=88" fill sizes="(max-width: 760px) 100vw, 50vw" alt="Kamar tidur bernuansa netral"/></div><div className="editorial-copy"><p className="eyebrow">KAMAR UNTUK BERISTIRAHAT</p><h2>Tekstur lembut, proporsi yang tenang.</h2><p>Temukan tempat tidur, lemari, karpet, dan pencahayaan yang bekerja bersama untuk menciptakan ruang istirahat yang rapi.</p><Link href="/collection/bedroom" className="text-link">Susun kamar tidur Anda <ArrowRight size={16}/></Link></div></section>
      <section className="section daily"><div className="shell"><SectionTitle title="Detail kecil yang menyempurnakan ruang" href="/collection/lighting"/><div className="daily-grid">{products.slice(8).map((product) => <ProductCard key={product.id} product={product} favorites={store.favorites} onFavorite={store.favorite} onAdd={store.add}/>)}</div></div></section>
      <section className="business"><div className="shell business-grid"><div className="business-copy"><p className="eyebrow">BETTER SPACE FOR PROJECTS</p><h2>Butuh furniture untuk beberapa ruang sekaligus?</h2><p>Untuk kebutuhan kantor, hunian sewa, atau proyek interior, tim kami dapat membantu menyusun pilihan produk yang sejalan.</p><div><span><Check/> Pilihan produk dari katalog yang sama</span><span><Check/> Rekomendasi berdasarkan fungsi ruang</span></div></div><Link href="/contact" className="business-cta">Bicarakan kebutuhan proyek</Link></div></section>
    </main>
  </StoreShell>;
}

function SectionTitle({ title, href }: { title: string; href: string }) { return <div className="section-title"><h2>{title}</h2><Link href={href}>Lihat koleksi <ArrowRight size={16}/></Link></div>; }
