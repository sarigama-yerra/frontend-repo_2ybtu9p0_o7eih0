export default function PromoStrips() {
  const promos = [
    { title: "Free Shipping", desc: "On orders over Rp250.000" },
    { title: "Official Warranty", desc: "Guaranteed authenticity" },
    { title: "Secure Payment", desc: "Multiple methods available" },
    { title: "Fast Support", desc: "We're here to help" },
  ];
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {promos.map((p, i) => (
          <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm text-slate-300">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
