export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating: string;
  reviews: string;
  image: string;
  category: string;
  room: string;
  material: string;
  description: string;
  dimensions: string;
};

export const categories = [
  { slug: "living", name: "Ruang Tamu", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=85" },
  { slug: "bedroom", name: "Kamar Tidur", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=85" },
  { slug: "dining", name: "Ruang Makan", image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=600&q=85" },
  { slug: "workspace", name: "Ruang Kerja", image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=600&q=85" },
  { slug: "storage", name: "Penyimpanan", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=85" },
  { slug: "lighting", name: "Pencahayaan", image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=600&q=85" },
];

export const products: Product[] = [
  // Ruang Tamu — Sofa
  { id: "luna-sofa", name: "Luna Sofa 3 Seater", price: 7499000, oldPrice: 8799000, discount: "15%", rating: "4.8", reviews: "126", room: "living", category: "Sofa", material: "Linen & kayu solid", dimensions: "P 210 × L 88 × T 82 cm", description: "Sofa rendah berlapis linen yang memberi ruang tamu rasa tenang dan mudah dipadukan.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=88" },
  { id: "dara-sofa", name: "Dara Sofa 2 Seater", price: 5799000, rating: "4.7", reviews: "58", room: "living", category: "Sofa", material: "Boucle & kayu ash", dimensions: "P 165 × L 85 × T 80 cm", description: "Sofa dua dudukan dengan tekstur lembut, pas untuk ruang tamu berukuran sedang.", image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1000&q=88" },
  // Ruang Tamu — Kursi Santai
  { id: "nara-armchair", name: "Nara Lounge Chair", price: 3299000, rating: "4.7", reviews: "48", room: "living", category: "Kursi Santai", material: "Bouclé & kayu ash", dimensions: "P 74 × L 78 × T 76 cm", description: "Kursi santai bertekstur lembut untuk sudut baca atau ruang keluarga.", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=88" },
  { id: "vela-armchair", name: "Vela Lounge Chair", price: 3599000, rating: "4.6", reviews: "31", room: "living", category: "Kursi Santai", material: "Velvet & kayu oak", dimensions: "P 70 × L 76 × T 78 cm", description: "Kursi santai berlapis velvet dengan siluet melengkung untuk sudut baca yang hangat.", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=88" },
  // Ruang Tamu — Meja Tamu
  { id: "riko-coffee-table", name: "Riko Coffee Table Round", price: 2999000, rating: "4.9", reviews: "74", room: "living", category: "Meja Tamu", material: "Oak veneer", dimensions: "Ø 90 × T 38 cm", description: "Meja bundar berprofil ringan untuk menyatukan area duduk tanpa membuatnya terasa penuh.", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=88" },
  { id: "teno-coffee-table", name: "Teno Coffee Table Oval", price: 3199000, rating: "4.7", reviews: "27", room: "living", category: "Meja Tamu", material: "Walnut veneer", dimensions: "P 110 × L 55 × T 36 cm", description: "Meja tamu berbentuk oval dengan permukaan walnut yang hangat untuk ruang tamu modern.", image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1000&q=88" },
  // Kamar Tidur — Tempat Tidur
  { id: "evora-bed", name: "Evora Bed Frame Queen", price: 6999000, oldPrice: 7799000, discount: "10%", rating: "4.7", reviews: "64", room: "bedroom", category: "Tempat Tidur", material: "Kayu oak & fabric", dimensions: "P 210 × L 170 × T 110 cm", description: "Rangka tempat tidur dengan headboard berlapis kain untuk kamar yang lebih hangat.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=88" },
  { id: "aris-bed", name: "Aris Bed Frame King", price: 8299000, rating: "4.8", reviews: "41", room: "bedroom", category: "Tempat Tidur", material: "Kayu jati & linen", dimensions: "P 210 × L 190 × T 105 cm", description: "Rangka tempat tidur ukuran king dengan headboard tinggi berlapis linen.", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=88" },
  // Kamar Tidur — Lemari
  { id: "mori-wardrobe", name: "Mori Lemari Pakaian", price: 6499000, rating: "4.8", reviews: "63", room: "bedroom", category: "Lemari", material: "MDF oak veneer", dimensions: "P 160 × L 55 × T 200 cm", description: "Penyimpanan tinggi dengan garis bersih dan pembagian ruang yang praktis.", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=88" },
  { id: "seno-wardrobe", name: "Seno Lemari 2 Pintu", price: 5299000, rating: "4.6", reviews: "22", room: "bedroom", category: "Lemari", material: "MDF walnut veneer", dimensions: "P 100 × L 55 × T 195 cm", description: "Lemari dua pintu berukuran ringkas untuk kamar tidur dengan ruang terbatas.", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1000&q=88" },
  // Kamar Tidur — Dekorasi
  { id: "sora-rug", name: "Sora Karpet 160 × 230 cm", price: 1299000, rating: "4.7", reviews: "38", room: "bedroom", category: "Dekorasi", material: "Wol sintetis", dimensions: "160 × 230 cm", description: "Karpet dengan tekstur padat untuk memberi lapisan hangat pada ruang tidur atau keluarga.", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1000&q=88" },
  { id: "mira-rug", name: "Mira Karpet 200 × 300 cm", price: 1599000, rating: "4.6", reviews: "19", room: "bedroom", category: "Dekorasi", material: "Wol rajut", dimensions: "200 × 300 cm", description: "Karpet berukuran besar dengan motif polos untuk melapisi lantai kamar secara menyeluruh.", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=88" },
  // Ruang Makan — Meja Makan
  { id: "arka-dining", name: "Arka Meja Makan Set 4 Kursi", price: 5999000, oldPrice: 6499000, discount: "8%", rating: "4.9", reviews: "89", room: "dining", category: "Meja Makan", material: "Kayu rubberwood", dimensions: "P 140 × L 80 × T 75 cm", description: "Set meja makan ringkas untuk empat orang dengan proporsi yang pas bagi rumah urban.", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=88" },
  { id: "vino-dining-table", name: "Vino Meja Makan Bulat", price: 4599000, rating: "4.7", reviews: "33", room: "dining", category: "Meja Makan", material: "Kayu jati solid", dimensions: "Ø 120 × T 75 cm", description: "Meja makan bundar untuk ruang makan kecil hingga menengah dengan kapasitas empat orang.", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1000&q=88" },
  // Ruang Makan — Kursi Makan
  { id: "cora-dining-chair", name: "Cora Dining Chair", price: 1199000, rating: "4.6", reviews: "35", room: "dining", category: "Kursi Makan", material: "Kayu beech & fabric", dimensions: "P 50 × L 56 × T 78 cm", description: "Kursi makan berlapis kain yang menjaga sesi makan panjang tetap nyaman.", image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1000&q=88" },
  { id: "dalo-dining-chair", name: "Dalo Dining Chair", price: 1099000, rating: "4.5", reviews: "24", room: "dining", category: "Kursi Makan", material: "Kayu beech & rotan", dimensions: "P 48 × L 54 × T 80 cm", description: "Kursi makan berbahan rotan dengan rangka kayu untuk tampilan ruang makan yang lebih natural.", image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1000&q=88" },
  // Ruang Kerja — Kursi Kerja
  { id: "nexis-chair", name: "Nexis Kursi Kerja Ergonomis", price: 2499000, oldPrice: 2899000, discount: "14%", rating: "4.8", reviews: "112", room: "workspace", category: "Kursi Kerja", material: "Mesh & aluminium", dimensions: "P 64 × L 64 × T 112 cm", description: "Kursi kerja dengan sandaran mesh dan pengaturan duduk untuk hari kerja yang panjang.", image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1000&q=88" },
  { id: "orin-chair", name: "Orin Kursi Kerja Kayu", price: 1899000, rating: "4.6", reviews: "40", room: "workspace", category: "Kursi Kerja", material: "Kayu ash & kain", dimensions: "P 58 × L 60 × T 84 cm", description: "Kursi kerja bergaya minimalis dengan sandaran kayu untuk ruang kerja di rumah.", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=88" },
  // Penyimpanan — Penyimpanan
  { id: "kana-cabinet", name: "Kana Lemari Penyimpanan", price: 3999000, rating: "4.7", reviews: "55", room: "storage", category: "Penyimpanan", material: "Kayu engineered", dimensions: "P 120 × L 40 × T 88 cm", description: "Kabinet serbaguna berfasad halus untuk menata ruang tanpa mengganggu suasana.", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=88" },
  { id: "tolu-cabinet", name: "Tolu Kabinet Laci", price: 3599000, rating: "4.6", reviews: "26", room: "storage", category: "Penyimpanan", material: "MDF oak veneer", dimensions: "P 90 × L 42 × T 76 cm", description: "Kabinet berlaci dengan pegangan minimal, cocok untuk ruang tamu maupun kamar tidur.", image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1000&q=88" },
  // Penyimpanan — Rak Buku
  { id: "hana-bookcase", name: "Hana Rak Buku 4 Tingkat", price: 2499000, rating: "4.6", reviews: "29", room: "storage", category: "Rak Buku", material: "Baja powder coat & oak", dimensions: "P 90 × L 34 × T 150 cm", description: "Rak terbuka untuk buku, benda kesayangan, dan tanaman kecil.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1000&q=88" },
  { id: "lino-bookcase", name: "Lino Rak Buku 3 Tingkat", price: 2099000, rating: "4.5", reviews: "18", room: "storage", category: "Rak Buku", material: "Kayu pinus", dimensions: "P 80 × L 30 × T 110 cm", description: "Rak buku ringkas dengan tiga tingkat, pas untuk ruang kerja atau sudut baca kecil.", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=88" },
  // Pencahayaan — Lampu Meja
  { id: "arli-lamp", name: "Arli Table Lamp", price: 899000, rating: "4.8", reviews: "42", room: "lighting", category: "Lampu Meja", material: "Metal & linen", dimensions: "Ø 32 × T 52 cm", description: "Lampu meja dengan cahaya lembut untuk memberi suasana pada meja samping dan sudut baca.", image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1000&q=88" },
  { id: "koa-lamp", name: "Koa Table Lamp", price: 749000, rating: "4.6", reviews: "20", room: "lighting", category: "Lampu Meja", material: "Keramik & katun", dimensions: "Ø 28 × T 46 cm", description: "Lampu meja berbahan keramik dengan kap katun untuk cahaya yang hangat dan lembut.", image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1000&q=88" },
];

export const rupiah = (value: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
export const getProduct = (id: string) => products.find((product) => product.id === id);
export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);

/**
 * Related products must stay within the SAME product category (e.g. Sofa -> Sofa,
 * Meja Kerja -> Meja Kerja), not merely the same room. A room like "Ruang Tamu" holds
 * multiple unrelated categories (Sofa, Kursi Santai, Meja Tamu), so filtering by room
 * alone surfaced unrelated items on the product detail page. Category match first;
 * fall back to same-room only if the category genuinely has no other members yet.
 */
export const relatedProducts = (product: Product) => {
  const sameCategory = products.filter((item) => item.category === product.category && item.id !== product.id);
  if (sameCategory.length > 0) return sameCategory.slice(0, 4);
  return products.filter((item) => item.room === product.room && item.id !== product.id).slice(0, 4);
};
