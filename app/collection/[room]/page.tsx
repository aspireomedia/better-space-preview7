"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ProductCard, StoreShell, useStore } from "../../components/store";
import { getCategory, products } from "../../lib/catalog";

export default function CollectionPage() {
  const { room } = useParams<{ room: string }>();
  const category = getCategory(room);
  const store = useStore();
  if (!category) notFound();
  const items = products.filter((product) => product.room === room);
  return <StoreShell cart={store.cart} favorites={store.favorites} onAdd={store.add} onFavorite={store.favorite}><main className="page-shell"><nav className="breadcrumbs"><Link href="/">Beranda</Link><span>/</span><span>{category.name}</span></nav><header className="collection-heading"><p className="eyebrow">KOLEKSI BETTER SPACE</p><h1>{category.name}</h1><p>Furniture yang dipilih untuk fungsi dan suasana {category.name.toLowerCase()}.</p></header><div className="collection-layout"><aside className="collection-filter"><h2>Jelajahi ruang</h2>{["living","bedroom","dining","workspace","storage","lighting"].map((slug) => <Link className={slug === room ? "current" : ""} href={`/collection/${slug}`} key={slug}>{getCategory(slug)?.name}</Link>)}</aside><section><div className="listing-meta"><span>{items.length} produk dalam koleksi ini</span><span>Urutkan: Pilihan Better Space</span></div>{items.length ? <div className="listing-grid">{items.map((product) => <ProductCard product={product} key={product.id} favorites={store.favorites} onFavorite={store.favorite} onAdd={store.add}/>)}</div> : <div className="empty-state"><h2>Koleksi sedang disusun</h2><p>Produk untuk ruang ini akan segera hadir.</p><Link href="/">Kembali ke beranda</Link></div>}</section></div></main></StoreShell>;
}
