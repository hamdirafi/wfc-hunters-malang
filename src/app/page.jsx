'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Navbar from '@/components/Navbar'
import FilterSection from '@/components/FilterSection'
import SpotCard from '@/components/SpotCard'
import SpotDetailModal from '@/components/SpotDetailModal'
import SubmitSpotModal from '@/components/SubmitSpotModal'

export default function HomePage() {
    const [spots, setSpots] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedSpot, setSelectedSpot] = useState(null)
    const [isSubmitOpen, setIsSubmitOpen] = useState(false)

    const [selectedArea, setSelectedArea] = useState('Semua')
    const [filters, setFilters] = useState({
        officeDesk: false,
        cushionChair: false,
        deskOutlet: false,
        noiseLevel: 'Semua'
    })

    const areas = ['Semua', 'Suhat', 'Lowokwaru', 'Dinoyo', 'Ijen', 'Blimbing']

    useEffect(() => {
        fetchSpots()
    }, [selectedArea, filters])

    async function fetchSpots() {
        setLoading(true)
        let query = supabase.from('places_with_ratings').select('*')

        if (selectedArea !== 'Semua') {
            query = query.eq('area', selectedArea)
        }
        if (filters.officeDesk) {
            query = query.eq('desk_type', 'office_desk')
        }
        if (filters.cushionChair) {
            query = query.eq('has_chair_cushion', true)
        }
        if (filters.deskOutlet) {
            query = query.eq('outlet_position', 'desk_level')
        }
        if (filters.noiseLevel !== 'Semua') {
            query = query.eq('noise_level', filters.noiseLevel)
        }

        const { data, error } = await query

        if (error) {
            console.error('Error fetching spots:', error)
        } else {
            setSpots(data || [])
        }
        setLoading(false)
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
            <Navbar onOpenSubmitModal={() => setIsSubmitOpen(true)} />

            <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
                <FilterSection
                    selectedArea={selectedArea}
                    setSelectedArea={setSelectedArea}
                    filters={filters}
                    setFilters={setFilters}
                    areas={areas}
                />

                {loading ? (
                    <div className="text-center py-20 text-slate-500 font-medium">Memuat lokasi nugas Malang...</div>
                ) : spots.length === 0 ? (
                    <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800 text-slate-400">
                        Belum ada spot yang cocok dengan kombinasi filter ini.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {spots.map((spot) => (
                            <SpotCard key={spot.id} spot={spot} onSelect={setSelectedSpot} />
                        ))}
                    </div>
                )}
            </main>

            <SpotDetailModal spot={selectedSpot} onClose={() => setSelectedSpot(null)} />
            <SubmitSpotModal
                isOpen={isSubmitOpen}
                onClose={() => setIsSubmitOpen(false)}
                onRefresh={fetchSpots}
            />
        </div>
    )
}