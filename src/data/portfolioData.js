export const portfolioData = {
  siteName: "MyPortofolio",

  profile: {
    name: "Achmad Nobe Anta Ananda",
    role: "Frontend Developer in Progress",
    tagline:
      "Membangun antarmuka web yang responsif dan fungsional, sambil terus mengeksplorasi teknologi modern.",
    status: "Learning & building",
    email: "nobedes32@gmail.com",
    whatsapp: "+62 822-4128-8336",
    whatsappAlt: "+62 819-1469-7372",
    socials: {
      github: "https://github.com/Nobecuy",
      linkedin: "https://www.linkedin.com/in/ananda-nobe-4871123b3",
      emailLink: "mailto:nobedes32@gmail.com",
      whatsappLink: "https://wa.me/6281914697372",
      whatsappLinkAlt: "https://wa.me/6282241288336",
    },
  },

  about: {
    bio: [
      "Frontend developer in progress. Saya membangun antarmuka web yang fungsional dan mudah digunakan menggunakan HTML, CSS, dan JavaScript.",
      "Saat ini sedang mendalami React dan Tailwind CSS untuk membuat pengalaman web yang lebih modern dan interaktif.",
      "Saya percaya kode yang baik adalah kode yang bisa dipahami — baik oleh mesin maupun manusia. Meski masih dalam perjalanan menuju mastery, saya menikmati proses belajar dari setiap project yang dikerjakan, baik yang berhasil maupun yang menjadi pelajaran.",
    ],
    focus:
      "Saat ini fokus pada frontend development, dengan cita-cita perlahan merambah ke fullstack di masa depan.",
    philosophy:
      "Progress over perfection. Setiap project — berhasil maupun gagal — adalah catatan pertumbuhan. Saya di sini untuk belajar, membangun, dan berkontribusi.",
    whatIDo: [
      {
        title: "Web Interface Development",
        description:
          "Mengubah desain menjadi halaman web responsif yang bisa diakses di berbagai device.",
      },
      {
        title: "Component-based UI",
        description: "Belajar membangun UI modular dan reusable dengan React.",
      },
      {
        title: "Styling & Layout Systems",
        description:
          "Transisi dari Bootstrap yang familiar menuju Tailwind CSS yang lebih fleksibel.",
      },
    ],
    skills: [
      { name: "HTML & CSS", level: "comfortable", percent: 75 },
      { name: "JavaScript", level: "functional", percent: 65 },
      { name: "Bootstrap", level: "familiar", percent: 80 },
      { name: "React", level: "beginner", percent: 40 },
      { name: "Tailwind CSS", level: "beginner", percent: 40 },
      { name: "Git & GitHub", level: "basic", percent: 50 },
    ],
    levelLabels: {
      comfortable: "Comfortable",
      functional: "Functional",
      familiar: "Familiar",
      beginner: "Beginner",
      basic: "Basic",
    },
    levelDescriptions: {
      comfortable:
        "Bisa ngoding mandiri, tahu best practice dasar, masih googling tapi jarang stuck di syntax.",
      functional:
        "Logika beres, DOM manipulation lancar, ES6+ tahu arrow function, destructuring, async/await.",
      familiar:
        "Pernah pakai intensif, tahu grid system, komponen, utilities Bootstrap.",
      beginner:
        "Baru beberapa project, masih sering lihat docs, paham konsep dasar (component, props, hooks).",
      basic:
        "Commit, push, pull, branch dasar. Belum advanced (rebase, conflict complex).",
    },
  },

  learning: {
    currentlyLearning: [
      {
        topic: "React",
        items: [
          "Hooks (useState, useEffect)",
          "Component composition",
          "React Router",
        ],
      },
      {
        topic: "Tailwind CSS",
        items: [
          "Utility-first workflow",
          "Responsive design",
          "Dark mode & custom config",
        ],
      },
      {
        topic: "JavaScript Deep Dive",
        items: ["Async programming", "Fetch API", "Modular code"],
      },
    ],
    nextGoals: ["Blazor", ".Net", "Database (PostgreSQL / MongoDB)"],
  },

  projects: [
    {
      id: 0,
      slug: "perspective-architect",
      title: "Perspective Architect",
      description:
        "Website portofolio arsitektur & interior — galeri proyek, showcase, dan alur kontak.",
      tags: ["React", "Vite", "Tailwind"],
      image: "/perspective_architect.png",
      github: "#",
      demo: "https://pa-arsitek.com/",
      featured: true,
      year: "2026",
    },

    {
      id: 1,
      slug: "KnitHouse",
      title: "KnitHouse",
      description:
        "Website portofolio KnitHouse - galeri, about, dan alur kontak.",
      tags: ["React", "Vite", "Tailwind"],
      image: "/Mock1.jpg",
      github: "#",
      demo: "https://pa-arsitek.com/",
      featured: true,
      year: "2026",
    },
  ],
};
