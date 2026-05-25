import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Learning from "./components/Learning";
import About from "./components/About";
import Footer from "./components/Footer";

const THEME_STORAGE_KEY = "theme";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";

    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;

    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
  });
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const loader = document.getElementById("app-loader");
    if (!loader) return;
    const MIN_VISIBLE_MS = 900;
    const start = window.__APP_LOADER_START__ ?? Date.now();
    const elapsed = Date.now() - start;
    const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);

    window.setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
      window.setTimeout(() => loader.remove(), 220);
    }, wait);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
      return next;
    });
  };

  useEffect(() => {
    const sections = ["projects", "learning", "about"];

    const handleScroll = () => {
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -32px 0px" }
    );

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const revealEls = document.querySelectorAll(".fade-in-reveal");
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      revealEls.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Header
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="page-wrap">
        <Hero />
        <hr className="divider" />
        <Projects />
        <Learning />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
