'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function SubmitSpotModal({ isOpen, onClose, onRefresh }) {
    const [formData, setFormData] = useState({
        name: '',
        area: 'Suhat',
        address: '',
        desk_type: 'office_desk',
        chair_type: 'ergonomic_cushion',
        has_chair_cushion: true,
        noise_level: 'moderate',
        outlet_position: 'desk_level',
        has_musholla: false,
        wifi_speed_mbps: 50,
        image_url: ''
    })
    const [submitting, setSubmitting] = useState(false)

    if (!isOpen) return null

    async function handleSubmit(e) {
        e.preventDefault()
        setSubmitting(true)

        const slug = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

        const { error } = await supabase.from('places').insert([{ ...formData, slug }])

        setSubmitting(false)
        if (error) {
            alert('Gagal menyimpannya: ' + error.message)
        } else {
            alert('Spot berhasil ditambahkan!')
            onRefresh()
            onClose()
        }
    }

    return (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-2xl p-6 overflow-y-auto max-h-[90vh]">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-slate-100">Tambah Spot WFC Malang</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                        <label className="block text-slate-400 mb-1">Nama Tempat</label>
                        <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-500"
                            placeholder="Contoh: Nakoa Cafe Suhat"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-slate-400 mb-1">Area Malang</label>
                            <select
                                value={formData.area}
                                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-500"
                            >
                                {['Suhat', 'Lowokwaru', 'Dinoyo', 'Ijen', 'Blimbing', 'Klojen', 'Dau'].map((a) => (
                                    <option key={a} value={a}>{a}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-slate-400 mb-1">Kecepatan WiFi (Mbps)</label>
                            <input
                                type="number"
                                value={formData.wifi_speed_mbps}
                                onChange={(e) => setFormData({ ...formData, wifi_speed_mbps: parseInt(e.target.value) || 0 })}
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-slate-400 mb-1">Alamat Lengkap</label>
                        <textarea
                            required
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 h-16 outline-none focus:border-amber-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-slate-400 mb-1">Tipe Meja</label>
                            <select
                                value={formData.desk_type}
                                onChange={(e) => setFormData({ ...formData, desk_type: e.target.value })}
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-500"
                            >
                                <option value="office_desk">Meja Datar Kantor</option>
                                <option value="long_table">Meja Panjang Sharing</option>
                                <option value="low_coffee_table">Meja Lesehan/Kopi</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-slate-400 mb-1">Posisi Colokan</label>
                            <select
                                value={formData.outlet_position}
                                onChange={(e) => setFormData({ ...formData, outlet_position: e.target.value })}
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-500"
                            >
                                <option value="desk_level">Di Samping/Atas Meja</option>
                                <option value="wall_floor">Di Dinding / Melantai</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-slate-400 mb-1">URL Gambar / Cover</label>
                        <input
                            type="url"
                            value={formData.image_url}
                            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-500"
                            placeholder="https://..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-lg transition mt-4"
                    >
                        {submitting ? 'Menyimpan...' : 'Submit Spot Baru'}
                    </button>
                </form>
            </div>
        </div>
    )
}