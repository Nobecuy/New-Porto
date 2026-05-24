# MyPortofolio — Vite + React + Tailwind

Website portofolio personal yang isinya:
- Hero (tagline + status)
- Projects (daftar project)
- Learning log (yang sedang dipelajari + next goals)
- About (bio, what I do, skill levels)
- Contact (email/WhatsApp + social links)

Ada fitur **dark mode (toggle)** dan animasi UI yang **smooth & minimalis**.

---

## Catatan “vibe coding” + AI tools

Project ini dibuat dengan pendekatan **vibe coding**: fokus jalanin ide cepat, iterasi kecil, dan banyak trial-error sampai “feel”-nya pas.

Prosesnya juga dibantu beberapa **AI tools** (misalnya untuk brainstorming copywriting, nyusun struktur komponen, refactor styling, dan polishing detail UI/UX).  
Tujuannya bukan “autopilot”, tapi mempercepat iterasi dan tetap menjaga kualitas hasil akhir.

---

## Tech stack

- **Vite**
- **React**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)

---

## Cara jalanin project (local)

Pastikan Node.js sudah terinstall, lalu:

```bash
npm install
npm run dev
```

Perintah lain:

```bash
npm run build
npm run preview
```

---

## Struktur penting

Yang biasanya kamu edit:

```
src/
  components/        # Komponen UI (Header, Hero, Projects, About, Footer, dll)
  data/portfolioData.js  # Semua konten (biodata, projects, learning log, dll)
  index.css          # Theme (light/dark) + styling + animasi
public/              # Gambar/asset yang dipanggil via "/nama-file.png"
```

---

## Panduan isi web (ubah konten)

Semua konten utama ada di:

**`src/data/portfolioData.js`**

Di dalamnya ada beberapa bagian besar:

### 1) Ganti biodata diri (profile)
Edit bagian:

```js
profile: {
  name: "...",
  role: "...",
  tagline: "...",
  status: "...",
  email: "...",
  whatsapp: "...",
  socials: { github, linkedin, emailLink, whatsappLink }
}
```

Yang muncul di UI:
- `name`, `role`, `tagline`, `status` dipakai di bagian Hero
- `email`, `whatsapp`, `socials` dipakai di Footer/Contact

### 2) Edit “About Me”
Edit bagian:

```js
about: {
  bio: [...],
  focus: "...",
  philosophy: "...",
  whatIDo: [{ title, description }, ...],
  skills: [{ name, level, percent }, ...]
}
```

Tips:
- `bio` bentuknya array supaya gampang bikin beberapa paragraf
- `skills.percent` (0–100) ngatur panjang progress bar

### 3) Edit Learning log
Edit bagian:

```js
learning: {
  currentlyLearning: [{ topic, items: [...] }, ...],
  nextGoals: [...]
}
```

---

## Cara nambah project

Tambahkan item baru di array `projects`:

```js
projects: [
  {
    id: 1,
    slug: "nama-project",
    title: "Judul Project",
    description: "Deskripsi singkat project",
    tags: ["React", "Vite", "Tailwind"],
    image: "/nama-gambar.png",
    github: "https://github.com/username/repo",
    demo: "https://link-demo.com",
    featured: true,
    year: "2026",
  },
]
```

Catatan penting:
- `id` **harus unik**
- `featured: true` berarti project muncul di section Projects
- `image` ambil dari folder **`public/`** (contoh: taruh file `public/nama-gambar.png`, lalu pakai `"/nama-gambar.png"`)
- Kalau belum ada link GitHub/demo, isi `"#"` dulu.

---

## Dark mode (theme) & styling

- Toggle dark mode ada di **Header**.
- Preferensi tema disimpan di `localStorage` (key: `theme`).
- Warna tema menggunakan CSS variables di **`src/index.css`**:
  - Default (light) ada di `@theme`
  - Dark override ada di `html[data-theme="dark"]`

Kalau mau ganti nuansa warna dark mode, edit value variabel di blok:

```css
html[data-theme="dark"] { ... }
```

---

## Animasi (minimalis & smooth)

Animasi utama diatur lewat CSS di `src/index.css` (hover micro-interactions, nav underline, reveal, menu slide-down).  
Project ini juga mendukung **prefers-reduced-motion** untuk aksesibilitas.

---

## Lisensi / penggunaan

Silakan fork dan pakai untuk portofolio pribadi. Kalau kamu pakai struktur ini, appreciate banget kalau kasih credit kecil (opsional).
