"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Brand } from "../components/store";

export default function ContactPage() { const [status, setStatus] = useState(""); const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); const form = event.currentTarget; setStatus(form.checkValidity() ? "Terima kasih. Pesan Anda sudah dicatat untuk ditindaklanjuti." : "Lengkapi nama, email, dan kebutuhan ruang Anda."); }; return <main className="editorial-page"><header><Brand /><Link href="/">Kembali berbelanja</Link></header><section className="contact-layout"><div><p className="eyebrow">HUBUNGI BETTER SPACE</p><h1>Ceritakan ruang yang ingin Anda susun.</h1><p>Gunakan form ini untuk pertanyaan produk, kebutuhan beberapa unit, atau bantuan memilih furniture yang sejalan dengan ruang Anda.</p></div><form className="contact-form" onSubmit={submit}><label>Nama<input required name="name" placeholder="Nama Anda"/></label><label>Email<input required type="email" name="email" placeholder="nama@email.com"/></label><label>Kebutuhan ruang<textarea required name="message" rows={5} placeholder="Contoh: saya sedang mencari set meja makan untuk apartemen."/></label><button type="submit">Kirim pesan</button>{status && <p role="status">{status}</p>}</form></section></main>; }
