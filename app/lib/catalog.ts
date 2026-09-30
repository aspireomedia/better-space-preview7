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
  { id: "luna-sofa", name: "Luna Sofa 3 Seater", price: 7499000, oldPrice: 8799000, discount: "15%", rating: "4.8", reviews: "126", room: "living", category: "Sofa", material: "Linen & kayu solid", dimensions: "P 210 × L 88 × T 82 cm", description: "Sofa rendah berlapis linen yang memberi ruang tamu rasa tenang dan mudah dipadukan.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=88" },
  { id: "nara-armchair", name: "Nara Lounge Chair", price: 3299000, rating: "4.7", reviews: "48", room: "living", category: "Kursi Santai", material: "Bouclé & kayu ash", dimensions: "P 74 × L 78 × T 76 cm", description: "Kursi santai bertekstur lembut untuk sudut baca atau ruang keluarga.", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=88" },
  { id: "riko-coffee-table", name: "Riko Coffee Table Round", price: 2999000, rating: "4.9", reviews: "74", room: "living", category: "Meja Tamu", material: "Oak veneer", dimensions: "Ø 90 × T 38 cm", description: "Meja bundar berprofil ringan untuk menyatukan area duduk tanpa membuatnya terasa penuh.", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=88" },
  { id: "evora-bed", name: "Evora Bed Frame Queen", price: 6999000, oldPrice: 7799000, discount: "10%", rating: "4.7", reviews: "64", room: "bedroom", category: "Tempat Tidur", material: "Kayu oak & fabric", dimensions: "P 210 × L 170 × T 110 cm", description: "Rangka tempat tidur dengan headboard berlapis kain untuk kamar yang lebih hangat.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=88" },
  { id: "mori-wardrobe", name: "Mori Lemari Pakaian", price: 6499000, rating: "4.8", reviews: "63", room: "bedroom", category: "Lemari", material: "MDF oak veneer", dimensions: "P 160 × L 55 × T 200 cm", description: "Penyimpanan tinggi dengan garis bersih dan pembagian ruang yang praktis.", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=88" },
  { id: "sora-rug", name: "Sora Karpet 160 × 230 cm", price: 1299000, rating: "4.7", reviews: "38", room: "bedroom", category: "Dekorasi", material: "Wol sintetis", dimensions: "160 × 230 cm", description: "Karpet dengan tekstur padat untuk memberi lapisan hangat pada ruang tidur atau keluarga.", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1000&q=88" },
  { id: "arka-dining", name: "Arka Meja Makan Set 4 Kursi", price: 5999000, oldPrice: 6499000, discount: "8%", rating: "4.9", reviews: "89", room: "dining", category: "Meja Makan", material: "Kayu rubberwood", dimensions: "P 140 × L 80 × T 75 cm", description: "Set meja makan ringkas untuk empat orang dengan proporsi yang pas bagi rumah urban.", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=88" },
  { id: "cora-dining-chair", name: "Cora Dining Chair", price: 1199000, rating: "4.6", reviews: "35", room: "dining", category: "Kursi Makan", material: "Kayu beech & fabric", dimensions: "P 50 × L 56 × T 78 cm", description: "Kursi makan berlapis kain yang menjaga sesi makan panjang tetap nyaman.", image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1000&q=88" },
  { id: "nexis-chair", name: "Nexis Kursi Kerja Ergonomis", price: 2499000, oldPrice: 2899000, discount: "14%", rating: "4.8", reviews: "112", room: "workspace", category: "Kursi Kerja", material: "Mesh & aluminium", dimensions: "P 64 × L 64 × T 112 cm", description: "Kursi kerja dengan sandaran mesh dan pengaturan duduk untuk hari kerja yang panjang.", image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1000&q=88" },
  { id: "kana-cabinet", name: "Kana Lemari Penyimpanan", price: 3999000, rating: "4.7", reviews: "55", room: "storage", category: "Penyimpanan", material: "Kayu engineered", dimensions: "P 120 × L 40 × T 88 cm", description: "Kabinet serbaguna berfasad halus untuk menata ruang tanpa mengganggu suasana.", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=88" },
  { id: "hana-bookcase", name: "Hana Rak Buku 4 Tingkat", price: 2499000, rating: "4.6", reviews: "29", room: "storage", category: "Rak Buku", material: "Baja powder coat & oak", dimensions: "P 90 × L 34 × T 150 cm", description: "Rak terbuka untuk buku, benda kesayangan, dan tanaman kecil.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1000&q=88" },
  { id: "arli-lamp", name: "Arli Table Lamp", price: 899000, rating: "4.8", reviews: "42", room: "lighting", category: "Lampu Meja", material: "Metal & linen", dimensions: "Ø 32 × T 52 cm", description: "Lampu meja dengan cahaya lembut untuk memberi suasana pada meja samping dan sudut baca.", image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1000&q=88" },
];

export const rupiah = (value: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
export const getProduct = (id: string) => products.find((product) => product.id === id);
export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
export const relatedProducts = (product: Product) => products.filter((item) => item.room === product.room && item.id !== product.id).slice(0, 4);
