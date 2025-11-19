export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8 text-sm text-slate-600">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.svg" alt="Alwination" className="h-8 w-8" />
            <span className="text-lg font-bold text-slate-900">Alwination</span>
          </div>
          <p>Official store with curated lifestyle products. Quality you can trust, service you can rely on.</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-2">Shop</div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-slate-900">New Arrivals</a></li>
            <li><a href="#" className="hover:text-slate-900">Best Sellers</a></li>
            <li><a href="#" className="hover:text-slate-900">Collections</a></li>
            <li><a href="#" className="hover:text-slate-900">Gift Cards</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-2">Support</div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-slate-900">Help Center</a></li>
            <li><a href="#" className="hover:text-slate-900">Shipping</a></li>
            <li><a href="#" className="hover:text-slate-900">Returns</a></li>
            <li><a href="#" className="hover:text-slate-900">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-2">Get updates</div>
          <form className="flex gap-2">
            <input className="flex-1 border border-slate-300 rounded-lg px-3 py-2" placeholder="Your email" />
            <button className="bg-slate-900 text-white px-4 py-2 rounded-lg">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Alwination. All rights reserved.</div>
    </footer>
  );
}
