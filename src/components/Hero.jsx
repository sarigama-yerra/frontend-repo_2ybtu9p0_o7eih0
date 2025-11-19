import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Official Store</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Premium Quality Products, Curated for You
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Discover our latest arrivals and best sellers. Shop confidently with fast shipping, secure checkout, and responsive support.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#products" className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-full hover:bg-slate-800 transition">
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#collections" className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 px-5 py-3 rounded-full hover:bg-slate-100 transition">
              Browse Collections
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-900">100% Original</span>
              <span>•</span>
              <span>Warranty</span>
            </div>
            <div>Fast Shipping</div>
            <div>Secure Payment</div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
            <img src="/hero-products.jpg" alt="Featured products" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-slate-200 p-4">
            <div className="text-sm font-semibold">Top Rated</div>
            <div className="text-xs text-slate-500">4.9/5 from 2,500+ reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
