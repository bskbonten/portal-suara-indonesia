'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Clock3,
  ExternalLink,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

type Category = 'Semua' | 'Bencana' | 'Korupsi' | 'Perundungan' | 'MBG'

type Story = {
  id: number
  category: Exclude<Category, 'Semua'>
  label: string
  title: string
  summary: string
  date: string
  source: string
  readTime: string
  image: string
  status: string
}

const stories: Story[] = [
  {
    id: 1,
    category: 'Bencana',
    label: 'BENCANA INDONESIA',
    title: 'Cuaca ekstrem di sejumlah wilayah, warga diminta meningkatkan kewaspadaan',
    summary: 'Informasi kesiapsiagaan dan langkah evakuasi dari lembaga resmi untuk masyarakat di wilayah rawan.',
    date: '16 Okt 2026',
    source: 'BNPB',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1000&q=85',
    status: 'TERKONFIRMASI',
  },
  {
    id: 2,
    category: 'MBG',
    label: 'KASUS MBG',
    title: 'Pemeriksaan rantai distribusi menjadi fokus evaluasi layanan MBG',
    summary: 'Pemerintah daerah bersama dinas kesehatan menelusuri laporan gangguan kesehatan secara bertahap.',
    date: '15 Okt 2026',
    source: 'Dinkes',
    readTime: '5 menit',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=85',
    status: 'DALAM PENYELIDIKAN',
  },
  {
    id: 3,
    category: 'Korupsi',
    label: 'KORUPSI INDONESIA',
    title: 'Perkara pengadaan: memahami tahapan proses hukum dan status pihak terkait',
    summary: 'Penjelasan singkat mengenai perbedaan status terperiksa, tersangka, terdakwa, dan terpidana.',
    date: '14 Okt 2026',
    source: 'KPK',
    readTime: '6 menit',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85',
    status: 'DIPERBARUI',
  },
  {
    id: 4,
    category: 'Perundungan',
    label: 'DARURAT PERUNDUNGAN',
    title: 'Mengenali perundungan siber dan cara melaporkannya dengan aman',
    summary: 'Panduan edukatif untuk siswa, keluarga, dan sekolah dalam membangun ruang digital yang lebih aman.',
    date: '13 Okt 2026',
    source: 'KPAI',
    readTime: '3 menit',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85',
    status: 'TERKONFIRMASI',
  },
  {
    id: 5,
    category: 'Bencana',
    label: 'BENCANA INDONESIA',
    title: 'Posko informasi publik dibuka untuk memperbarui data penanganan',
    summary: 'Warga dapat mengikuti pembaruan melalui kanal resmi dan menghindari informasi yang belum terverifikasi.',
    date: '12 Okt 2026',
    source: 'BPBD',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85',
    status: 'LAPORAN AWAL',
  },
]

const categories: { name: Exclude<Category, 'Semua'>; description: string; count: string; tone: string }[] = [
  { name: 'Bencana', description: 'Fakta, dampak, dan respons bencana di Indonesia.', count: '12 isu', tone: 'from-[#e9f3ff] to-[#f5f9ff]' },
  { name: 'Korupsi', description: 'Mengikuti proses hukum secara netral dan berimbang.', count: '8 isu', tone: 'from-[#fff0f0] to-[#fff8f8]' },
  { name: 'Perundungan', description: 'Informasi aman untuk mencegah dan melindungi korban.', count: '6 isu', tone: 'from-[#f4f1ff] to-[#fbfaff]' },
  { name: 'MBG', description: 'Menelusuri laporan dan perkembangan investigasi MBG.', count: '5 isu', tone: 'from-[#fff7e8] to-[#fffdf6]' },
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('Semua')
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const filteredStories = useMemo(() => stories.filter((story) => {
    const matchesCategory = activeCategory === 'Semua' || story.category === activeCategory
    const matchesQuery = `${story.title} ${story.summary}`.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  }), [activeCategory, query])

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#111827]">
      <div className="bg-[#0d1b35] px-4 py-2 text-center text-[11px] font-medium tracking-[0.12em] text-white/75">
        DATA DEMO — BUKAN BERITA AKTUAL <span className="mx-2 text-[#ef4444]">•</span> Portal informasi publik untuk pembelajaran
      </div>
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="#beranda" className="flex items-center gap-3" aria-label="Suara Indonesia beranda">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e3343f] text-xl font-black text-white shadow-sm">S</div>
            <div><div className="text-[17px] font-black leading-none tracking-tight text-[#0d1b35]">SUARA<span className="text-[#e3343f]">.</span></div><div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">Indonesia</div></div>
          </Link>
          <nav className="hidden items-center gap-7 text-[13px] font-semibold text-slate-600 lg:flex">
            <a href="#beranda" className="text-[#e3343f]">Beranda</a>
            <a href="#terbaru" className="transition hover:text-[#e3343f]">Perkembangan terbaru</a>
            <a href="#kategori" className="transition hover:text-[#e3343f]">Kategori</a>
            <a href="#tentang" className="transition hover:text-[#e3343f]">Tentang kami</a>
          </nav>
          <div className="flex items-center gap-2"><button className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-[#e3343f] hover:text-[#e3343f] sm:flex" aria-label="Notifikasi"><Bell size={17} /></button><button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d1b35] text-white lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu">{menuOpen ? <X size={18} /> : <Menu size={18} />}</button></div>
        </div>
        {menuOpen && <nav className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden"><div className="flex flex-col gap-4 text-sm font-semibold text-slate-600"><a href="#beranda" onClick={() => setMenuOpen(false)}>Beranda</a><a href="#terbaru" onClick={() => setMenuOpen(false)}>Perkembangan terbaru</a><a href="#kategori" onClick={() => setMenuOpen(false)}>Kategori</a><a href="#tentang" onClick={() => setMenuOpen(false)}>Tentang kami</a></div></nav>}
      </header>

      <main id="beranda">
        <section className="mx-auto max-w-7xl px-5 pb-12 pt-12 lg:px-8 lg:pb-20 lg:pt-20"><div className="grid items-end gap-10 lg:grid-cols-[1fr_390px]"><div><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f4b7bb] bg-[#fff6f6] px-3 py-1.5 text-[11px] font-bold tracking-[0.14em] text-[#d42f3a]"><Sparkles size={13} /> INFORMASI PUBLIK TERPILIH</div><h1 className="max-w-3xl text-4xl font-black leading-[1.07] tracking-[-0.04em] text-[#0d1b35] sm:text-6xl">Mengungkap fakta.<br /><span className="text-[#e3343f]">Mengikuti perkembangan.</span></h1><p className="mt-6 max-w-xl text-base leading-7 text-slate-500">Portal informasi isu terkini Indonesia yang menyajikan fakta, kronologi, dan perkembangan dari sumber tepercaya secara jernih.</p></div><div className="relative"><div className="absolute -inset-3 rounded-[28px] bg-[#edf2f8]" /><div className="relative rounded-2xl bg-[#0d1b35] p-6 text-white shadow-xl shadow-slate-200"><div className="flex items-start justify-between"><div><div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#e3343f]"><ShieldCheck size={18} /></div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">Prinsip kami</p><p className="mt-2 text-xl font-bold leading-snug">Jernih dalam fakta,<br />peduli pada dampak.</p></div><div className="text-right text-[10px] leading-5 text-white/50">PEMBARUAN<br /><span className="font-bold text-white/80">16 OKT 2026</span></div></div><div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/55"><span>5 kategori terpantau</span><span className="flex items-center gap-1 text-white/80"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Sistem aktif</span></div></div></div></div></section>

        <section className="border-y border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div className="flex items-center gap-3 text-sm font-bold text-[#0d1b35]"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff0f0] text-[#e3343f]"><Search size={16} /></span>Cari informasi</div><div className="flex w-full max-w-2xl gap-3"><div className="relative flex-1"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari judul atau isu yang ingin kamu ikuti..." className="h-11 w-full rounded-xl border border-slate-200 bg-[#f8fafc] pl-11 pr-4 text-sm outline-none transition focus:border-[#e3343f] focus:ring-4 focus:ring-[#e3343f]/10" /></div><button className="hidden h-11 rounded-xl bg-[#e3343f] px-6 text-sm font-bold text-white shadow-sm transition hover:bg-[#c92d37] sm:block">Cari</button></div></div></section>

        <section id="terbaru" className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20"><div className="mb-8 flex items-end justify-between"><div><p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e3343f]">Pantauan redaksi</p><h2 className="text-3xl font-black tracking-tight text-[#0d1b35]">Perkembangan terbaru</h2></div><a href="#semua-berita" className="hidden items-center gap-2 text-sm font-bold text-[#0d1b35] transition hover:text-[#e3343f] sm:flex">Lihat semua <ArrowRight size={16} /></a></div><div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]"><article className="group relative min-h-[390px] overflow-hidden rounded-2xl bg-[#0d1b35] shadow-lg shadow-slate-200"><img src={stories[0].image} alt="Ilustrasi informasi bencana" className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#071224] via-[#071224]/45 to-transparent" /><div className="relative flex min-h-[390px] flex-col justify-end p-6 text-white sm:p-8"><div className="mb-3 flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] text-[#ffb0b4]"><span className="rounded bg-[#e3343f] px-2 py-1 text-white">{stories[0].status}</span>{stories[0].label}</div><h3 className="max-w-2xl text-2xl font-black leading-tight sm:text-3xl">{stories[0].title}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-white/70">{stories[0].summary}</p><div className="mt-5 flex items-center gap-4 text-xs text-white/60"><span>{stories[0].source}</span><span>•</span><span>{stories[0].date}</span><span>•</span><span>{stories[0].readTime}</span></div></div></article><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">{stories.slice(1, 3).map((story) => <StoryRow key={story.id} story={story} />)}</div></div></section>

        <section id="kategori" className="border-y border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16"><div className="mb-8 flex items-end justify-between"><div><p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e3343f]">Jelajahi isu</p><h2 className="text-3xl font-black tracking-tight text-[#0d1b35]">Pilih kategori</h2></div><p className="hidden max-w-xs text-right text-sm leading-6 text-slate-500 md:block">Ikuti topik yang penting untuk kamu, dengan konteks yang lebih lengkap.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{categories.map((category, index) => <button key={category.name} onClick={() => setActiveCategory(category.name)} className={`group rounded-2xl bg-gradient-to-br ${category.tone} p-5 text-left transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200 ${activeCategory === category.name ? 'ring-2 ring-[#e3343f]' : ''}`}><div className="mb-9 flex items-start justify-between"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-[#e3343f] shadow-sm">0{index + 1}</span><ArrowRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#e3343f]" size={18} /></div><h3 className="text-lg font-black text-[#0d1b35]">{category.name}</h3><p className="mt-2 min-h-12 text-sm leading-5 text-slate-500">{category.description}</p><p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">{category.count}</p></button>)}</div></div></section>

        <section id="semua-berita" className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20"><div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e3343f]">Arsip informasi</p><h2 className="text-3xl font-black tracking-tight text-[#0d1b35]">Berita pilihan</h2></div><div className="flex flex-wrap gap-2">{(['Semua', 'Bencana', 'Korupsi', 'Perundungan', 'MBG'] as Category[]).map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-full px-3.5 py-2 text-xs font-bold transition ${activeCategory === category ? 'bg-[#0d1b35] text-white' : 'bg-white text-slate-500 ring-1 ring-slate-200 hover:text-[#e3343f]'}`}>{category}</button>)}</div></div>{filteredStories.length > 0 ? <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{filteredStories.map((story) => <StoryCard key={story.id} story={story} />)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center"><p className="font-bold text-[#0d1b35]">Informasi belum ditemukan</p><p className="mt-2 text-sm text-slate-500">Coba gunakan kata kunci atau kategori lain.</p></div>}</section>

        <section id="tentang" className="bg-[#0d1b35] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8"><div><p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff9da3]">Tentang Suara Indonesia</p><h2 className="max-w-xl text-3xl font-black leading-tight">Menyuarakan kepedulian dengan informasi yang bisa ditelusuri.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-white/60">Kami percaya informasi publik yang baik harus faktual, kontekstual, dan tidak menghakimi. Data pada tampilan ini adalah mode demo untuk kebutuhan pembelajaran.</p></div><div className="flex flex-wrap gap-3"><button className="flex items-center gap-2 rounded-xl bg-[#e3343f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c92d37]">Pelajari metodologi <ArrowRight size={16} /></button><button className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">Sumber data <ExternalLink size={15} /></button></div></div></section>
      </main>

      <footer className="bg-[#091426] text-white/50"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div><div className="text-sm font-black tracking-tight text-white">SUARA<span className="text-[#e3343f]">.</span> INDONESIA</div><p className="mt-1 text-xs">Mengungkap Fakta, Mengikuti Perkembangan, Menyuarakan Kepedulian.</p></div><div className="flex items-center gap-4 text-xs font-semibold"><span>Facebook</span><span>Instagram</span><span>YouTube</span><span className="ml-2 text-[11px] font-normal">© 2026 Suara Indonesia</span></div></div></footer>
    </div>
  )
}

function StoryRow({ story }: { story: Story }) {
  return <article className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200"><img src={story.image} alt="" className="h-28 w-28 shrink-0 rounded-xl object-cover" /><div className="py-1"><div className="mb-2 flex items-center gap-2 text-[9px] font-bold tracking-[0.12em] text-[#e3343f]"><span className="truncate">{story.category}</span><span className="text-slate-300">•</span><span className="whitespace-nowrap text-slate-400">{story.date}</span></div><h3 className="line-clamp-3 text-sm font-bold leading-5 text-[#0d1b35] transition group-hover:text-[#e3343f]">{story.title}</h3><p className="mt-2 text-[11px] text-slate-400">{story.source} · {story.readTime}</p></div></article>
}

function StoryCard({ story }: { story: Story }) {
  return <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"><div className="relative h-48 overflow-hidden"><img src={story.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute left-3 top-3 rounded-md bg-white/95 px-2 py-1 text-[9px] font-bold tracking-[0.12em] text-[#e3343f]">{story.status}</div></div><div className="p-5"><div className="mb-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400"><span>{story.category}</span><span className="flex items-center gap-1"><Clock3 size={12} /> {story.readTime}</span></div><h3 className="line-clamp-2 text-lg font-black leading-6 text-[#0d1b35] transition group-hover:text-[#e3343f]">{story.title}</h3><p className="mt-3 line-clamp-2 text-sm leading-5 text-slate-500">{story.summary}</p><div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400"><span className="flex items-center gap-1.5"><CalendarDays size={13} /> {story.date}</span><span className="font-bold text-[#0d1b35]">{story.source}</span></div></div></article>
}
