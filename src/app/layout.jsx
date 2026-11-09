import './globals.css'

export const metadata = {
    title: 'WFC Hunters Malang - Spot Nugas & Remote Work Ergonomis',
    description: 'Direktori tempat nugas dan remote work spesifik Kota Malang dengan standar meja kerja datar, kursi bersandar, colokan meja, dan WiFi kencang.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body className="bg-slate-950 text-slate-100 min-h-screen antialiased">
                {children}
            </body>
        </html>
    )
}