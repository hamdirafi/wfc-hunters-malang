export default function SpotDetailModal({ spot, onClose }) {
  if (!spot) return null

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div className="relative h-56 bg-slate-800">
          <img src={spot.image_url} alt={spot.name} className="w-full h-full object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-950/80 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
          >
            ✕
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{spot.area}</span>
            <h2 className="text-2xl font-bold text-slate-100">{spot.name}</h2>
            <p className="text-xs text-slate-400 mt-1">{spot.address}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
            <div>
              <span className="block text-[10px] text-slate-500 uppercase font-semibold">Skor Meja</span>
              <span className="text-sm font-bold text-amber-400">★ {spot.avg_desk_comfort || '-'}</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase font-semibold">Skor WiFi</span>
              <span className="text-sm font-bold text-amber-400">★ {spot.avg_wifi_rating || '-'}</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase font-semibold">Kebisingan</span>
              <span className="text-sm font-bold text-indigo-400 capitalize">{spot.noise_level}</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase font-semibold">Speedtest</span>
              <span className="text-sm font-bold text-emerald-400">{spot.wifi_speed_mbps} Mbps</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-200">Fasilitas Ergonomi & Kerja:</h4>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Tipe Meja: <strong className="text-slate-100">{spot.desk_type === 'office_desk' ? 'Meja Kerja Datar Standar Kantor' : 'Meja Kopi/Santai'}</strong></li>
              <li>Tipe Kursi: <strong className="text-slate-100">{spot.chair_type === 'ergonomic_cushion' ? 'Kursi Busa dengan Sandaran' : 'Kursi Kayu/Stool'}</strong></li>
              <li>Letak Stopkontak: <strong className="text-slate-100">{spot.outlet_position === 'desk_level' ? 'Di Atas/Samping Meja' : 'Di Dinding/Lantai'}</strong></li>
              <li>Musholla: <strong className="text-slate-100">{spot.has_musholla ? 'Tersedia' : 'Tidak Ada'}</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}