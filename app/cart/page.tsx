"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { Quantity, StoreShell, useStore } from "../components/store";
import { getProduct, rupiah } from "../lib/catalog";

export default function CartPage() {
 const store = useStore();
 if (!store.hydrated) return <StoreShell cart={[]} favorites={[]} onAdd={store.add} onFavorite={store.favorite}><main className="page-shell"><nav className="breadcrumbs"><Link href="/">Beranda</Link><span>/</span><span>Keranjang</span></nav><h1 className="page-title">Keranjang Anda</h1><div className="empty-state"><h2>Memuat keranjang Anda</h2><p>Menyiapkan barang yang telah Anda simpan di perangkat ini.</p></div></main></StoreShell>;
 const lines = store.cart.map((line) => ({ ...line, product: getProduct(line.id) })).filter((line): line is { id: string; quantity: number; product: NonNullable<ReturnType<typeof getProduct>> } => Boolean(line.product)); const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
 return <StoreShell cart={store.cart} favorites={store.favorites} onAdd={store.add} onFavorite={store.favorite}><main className="page-shell"><nav className="breadcrumbs"><Link href="/">Beranda</Link><span>/</span><span>Keranjang</span></nav><h1 className="page-title">Keranjang Anda</h1>{lines.length === 0 ? <div className="empty-state"><h2>Keranjang Anda masih kosong</h2><p>Mulai dari koleksi yang sesuai dengan ruang Anda.</p><Link href="/collection/living">Lihat koleksi ruang tamu</Link></div> : <div className="cart-layout"><section className="cart-lines">{lines.map((line) => <article className="cart-line" key={line.id}><Image src={line.product.image} alt={line.product.name} width={160} height={160}/><div><p>{line.product.category}</p><h2><Link href={`/products/${line.product.id}`}>{line.product.name}</Link></h2><strong>{rupiah(line.product.price)}</strong><Quantity quantity={line.quantity} onChange={(value) => store.changeQuantity(line.id, value)}/></div><button type="button" onClick={() => store.changeQuantity(line.id, 0)} aria-label={`Hapus ${line.product.name}`}><Trash2 size={19}/></button></article>)}</section><aside className="cart-summary"><h2>Ringkasan pesanan</h2><div><span>Subtotal</span><strong>{rupiah(subtotal)}</strong></div><p>Pengiriman akan dikonfirmasi setelah alamat dan jadwal diterima.</p><Link href="/contact">Lanjutkan dengan konsultasi pesanan</Link></aside></div>}</main></StoreShell>;
}
