import { Star, Heart } from "lucide-react";

const products = [
  { id: 1, name: "Alwi Hoodie Premium", price: 349000, image: "https://images.unsplash.com/photo-1548883354-7622d3dfc356?q=80&w=1200&auto=format&fit=crop", rating: 4.9 },
  { id: 2, name: "T-Shirt Classic Logo", price: 149000, image: "https://images.unsplash.com/photo-1520975922284-9e0ce82759c5?q=80&w=1200&auto=format&fit=crop", rating: 4.8 },
  { id: 3, name: "Cap Limited Edition", price: 99000, image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=1200&auto=format&fit=crop", rating: 4.7 },
  { id: 4, name: "Tote Bag", price: 79000, image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop", rating: 4.8 },
  { id: 5, name: "Sticker Pack", price: 39000, image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1200&auto=format&fit=crop", rating: 4.9 },
  { id: 6, name: "Mug Ceramic", price: 89000, image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop", rating: 4.6 },
];

function formatIDR(value) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
}

export default function FeaturedGrid() {
  return (
    <section id="products" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Products</h2>
            <p className="text-slate-600 mt-1">Best picks just for you</p>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">See all</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((p) => (
            <article key={p.id} className="group border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition">
              <div className="relative aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <button className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-slate-200 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-slate-700" />
                </button>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 leading-snug">{p.name}</h3>
                <div className="mt-1 flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < Math.round(p.rating) ? "fill-amber-500" : ""}`} />
                  ))}
                  <span className="ml-1 text-xs text-slate-500">{p.rating}</span>
                </div>
                <div className="mt-2 font-bold text-slate-900">{formatIDR(p.price)}</div>
                <button className="mt-3 w-full inline-flex items-center justify-center text-sm bg-slate-900 text-white px-3 py-2 rounded-lg hover:bg-slate-800">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
