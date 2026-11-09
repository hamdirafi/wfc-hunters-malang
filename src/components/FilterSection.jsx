export default function FilterSection({
  selectedArea,
  setSelectedArea,
  filters,
  setFilters,
  areas
}) {
  const handleCheckbox = (key) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section className="bg-slate-900 p-5 rounded-2xl border border-slate-800 mb-8 shadow-xl">
      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
        Filter Spesifik WFC & Ergonomi
      </h2>

      {/* Filter Area Malang */}
      <div className="flex flex-wrap gap-2 mb-5">
        {areas.map((area) => (
          <button
            key={area}
            onClick={() => setSelectedArea(area)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
              selectedArea === area
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {area}
          </button>
        ))}
      </div>

      {/* Checklist Kriteria Ergonomi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t border-slate-800">
        <label className="flex items-center gap-2.5 text-xs font-medium text-slate-200 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={filters.officeDesk}
            onChange={() => handleCheckbox('officeDesk')}
            className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-amber-500 focus:ring-0"
          />
          Meja Kerja Datar (72-75cm)
        </label>

        <label className="flex items-center gap-2.5 text-xs font-medium text-slate-200 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={filters.cushionChair}
            onChange={() => handleCheckbox('cushionChair')}
            className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-amber-500 focus:ring-0"
          />
          Kursi Busa Bersandar
        </label>

        <label className="flex items-center gap-2.5 text-xs font-medium text-slate-200 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={filters.deskOutlet}
            onChange={() => handleCheckbox('deskOutlet')}
            className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-amber-500 focus:ring-0"
          />
          Colokan di Samping Meja
        </label>

        <select
          value={filters.noiseLevel}
          onChange={(e) => setFilters(prev => ({ ...prev, noiseLevel: e.target.value }))}
          className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-2 outline-none focus:border-amber-500"
        >
          <option value="Semua">Semua Tingkat Kebisingan</option>
          <option value="quiet">Quiet Zone (Ideal Zoom Call)</option>
          <option value="moderate">Moderate (Santai)</option>
          <option value="loud">Loud (Ramai/Musik Kencang)</option>
        </select>
      </div>
    </section>
  )
}