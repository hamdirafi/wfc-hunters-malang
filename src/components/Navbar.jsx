import Image from 'next/image'

export default function Navbar({ onOpenSubmitModal }) {
  return (
    <header className="bg-[#0b1329] border-b border-slate-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Brand / Logo Only */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/wfc-logo.jpeg"
            alt="WFC Hunters Malang Logo"
            width={240}
            height={80}
            className="h-14 sm:h-16 w-auto object-contain"
            priority
          />
          <span className="text-xs text-amber-500 font-semibold tracking-wider">
            EDISI MALANG
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={onOpenSubmitModal}
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition-all shadow-md shadow-amber-500/10 active:scale-95"
        >
          + Tambah Spot WFC
        </button>

      </div>
    </header>
  )
}