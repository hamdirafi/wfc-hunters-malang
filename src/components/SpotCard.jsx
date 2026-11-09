export default function SpotCard({ spot, onSelect }) {
  return (
    <article 
      onClick={() => onSelect(spot)}
      className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition cursor-pointer group flex flex-col justify-between"
    >
      <div>
        <div className="h-44 overflow-hidden bg-slate-800 relative">
          <img
            src={spot.image_url || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24'}
            alt={spot.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <span className="absolute top-3 right-3 bg-slate-950/80 text-amber-400 px-3 py-1 rounded-full text-[11px] font-bold backdrop-blur-md">
            {spot.area}
          </span>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition mb-1">
            {spot.name}
          </h3>
          <p className="text-xs text-slate-400 mb-4 line-clamp-1">{spot.address}</p>

          {/* Grid Rating Multi-Kriteria */}
          <div className="grid grid-cols-3 gap-2 bg-slate-950 p-3 rounded-xl mb-4 text-center border border-slate-800/80">
            <div>
              <span className="block text-[9px] text-slate-500 font-bold uppercase">Meja & Kursi</span>
              <span className="text-xs font-bold text-amber-400">★ {spot.avg_desk_comfort || '-'}</span>
            </div>
            <div>
              <span className="block text-[9px] text-slate-500 font-bold uppercase">WiFi</span>
              <span className="text-xs font-bold text-amber-400">★ {spot.avg_wifi_rating || '-'}</span>
            </div>
            <div>
              <span className="block text-[9px] text-slate-500 font-bold uppercase">Kecepatan</span>
              <span className="text-xs font-bold text-emerald-400">{spot.wifi_speed_mbps} Mbps</span>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 text-[10px] font-medium">
            <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded-md">
              {spot.desk_type === 'office_desk' ? 'Meja Datar (72cm)' : 'Meja Santai'}
            </span>
            <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded-md">
              {spot.outlet_position === 'desk_level' ? 'Colokan Meja' : 'Colokan Dinding'}
            </span>
            {spot.has_musholla && (
              <span className="px-2 py-0.5 bg-emerald-950 text-emerald-300 rounded-md border border-emerald-800/40">
                Musholla
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}