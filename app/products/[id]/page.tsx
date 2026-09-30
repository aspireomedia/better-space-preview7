"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { notFound, useParams } from "next/navigation";
import { ProductCard, StoreShell, useStore } from "../../components/store";
import { getCategory, getProduct, relatedProducts, rupiah } from "../../lib/catalog";

export default function ProductPage() {
 const { id } = useParams<{ id: string }>(); const product = getProduct(id); const store = useStore();
 if (!product) notFound();
 const saved = store.favorites.includes(product.id); const related = relatedProducts(product);
 return <StoreShell cart={store.cart} favorites={store.favorites} onAdd={store.add} onFavorite={store.favorite}><main className="page-shell"><nav className="breadcrumbs"><Link href="/">Beranda</Link><span>/</span><Link href={`/collection/${product.room}`}>{getCategory(product.room)?.name}</Link><span>/</span><span>{product.name}</span></nav><section className="product-detail"><div className="detail-image"><Image src={product.image} alt={product.name} fill priority sizes="(max-width: 760px) 100vw, 54vw"/></div><div className="detail-copy"><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p className="detail-rating">★ {product.rating} <span>({product.reviews} ulasan)</span></p><div className="detail-price">{rupiah(product.price)} {product.oldPrice && <del>{rupiah(product.oldPrice)}</del>}</div><p className="detail-description">{product.description}</p><dl><div><dt>Material</dt><dd>{product.material}</dd></div><div><dt>Dimensi</dt><dd>{product.dimensions}</dd></div></dl><div className="product-actions"><button className="detail-add" type="button" onClick={() => store.add(product.id)}><ShoppingBag size={18}/> Tambahkan ke keranjang</button><button className="detail-save" type="button" aria-label="Simpan ke wishlist" onClick={() => store.favorite(product.id)}><Heart fill={saved ? "currentColor" : "none"}/></button></div><p className="shipping-note">Pengiriman dijadwalkan setelah konfirmasi pesanan. Untuk pertanyaan material dan penataan, <Link href="/contact">hubungi Better Space</Link>.</p></div></section>{related.length > 0 && <section className="related"><div className="section-title"><h2>Pasangkan dengan pilihan ini</h2><Link href={`/collection/${product.room}`}>Lihat koleksi</Link></div><div className="daily-grid">{related.map((item) => <ProductCard key={item.id} product={item} favorites={store.favorites} onFavorite={store.favorite} onAdd={store.add}/>)}</div></section>}</main></StoreShell>;
}
