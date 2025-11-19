import { Menu, ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-slate-100">
            <Menu className="w-5 h-5 text-slate-700" />
          </button>
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Alwination" className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tight text-slate-900">Alwination</span>
          </a>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <div className="flex items-center w-full bg-slate-100 rounded-full px-4 py-2 border border-transparent focus-within:border-slate-300 transition">
            <Search className="w-4 h-4 text-slate-500" />
            <input
              className="bg-transparent outline-none flex-1 px-3 text-sm placeholder:text-slate-400"
              placeholder="Search products, categories..."
            />
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-sm text-slate-700">
          <a className="hover:text-slate-900" href="#products">Shop</a>
          <a className="hover:text-slate-900" href="#collections">Collections</a>
          <a className="hover:text-slate-900" href="#about">About</a>
          <a className="hover:text-slate-900" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="relative inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            <span className="absolute -top-2 -right-2 text-xs bg-blue-600 text-white rounded-full w-5 h-5 inline-flex items-center justify-center">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}
