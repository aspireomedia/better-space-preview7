import Link from "next/link";
import { Brand } from "../components/store";

export default function AboutPage() { return <main className="editorial-page"><header><Brand /><Link href="/">Kembali berbelanja</Link></header><section><p className="eyebrow">TENTANG BETTER SPACE</p><h1>Furniture untuk ruang yang menjalani hidup bersama Anda.</h1><p>Better Space menyusun koleksi furniture untuk rumah dan ruang kerja dengan fokus pada fungsi sehari-hari, proporsi yang mudah dipadukan, dan material yang terasa nyaman ditempati.</p><p>Setiap koleksi di katalog kami dihubungkan berdasarkan ruang, sehingga Anda dapat melihat pilihan yang bekerja bersama tanpa harus memulai dari awal.</p><Link className="primary-link" href="/collection/living">Mulai dari ruang tamu</Link></section></main>;
}
