import type { CSSProperties } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swaniki | Digital Product Studio for SaaS, Web & Automation" },
      { name: "description", content: "Swaniki builds SaaS products, creative websites, custom automations and AI-powered solutions." },
      { property: "og:title", content: "Swaniki | Digital Product Studio" },
      { property: "og:description", content: "Explore Swaniki Labs products, client websites and our in-house approach to digital solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ]
  }),
  staticData: { importedDocument: { html: { "lang": "en", "style": { scrollBehavior: "smooth" } }, body: { "className": "gsap-on", "id": "top" } } },
  component: Index,
});

function WaveformBar() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;

    let mouseX = -9999;
    let isHovered = false;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.width = rect.width * dpr;
      height = canvas.height = (rect.height || 200) * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top - 80 &&
        e.clientY <= rect.bottom + 80
      ) {
        mouseX = e.clientX - rect.left;
        isHovered = true;
      } else {
        isHovered = false;
        mouseX = -9999;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const observer = new IntersectionObserver(([entry]) => {
      if (entry) isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const barWidth = 3.5;
    const barGap = 4;
    const totalStep = barWidth + barGap;
    const startTime = performance.now();

    const render = (now: number) => {
      if (!isVisible && !prefersReducedMotion) {
        animId = requestAnimationFrame(render);
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = width / dpr;
      const displayHeight = height / dpr;

      ctx.clearRect(0, 0, displayWidth, displayHeight);

      if (displayWidth <= 0 || displayHeight <= 0) {
        animId = requestAnimationFrame(render);
        return;
      }

      const t = (now - startTime) * 0.001;
      const barCount = Math.floor(displayWidth / totalStep);
      const startX = (displayWidth - barCount * totalStep) / 2;
      const centerY = displayHeight * 0.52;

      // Brand gradient: Teal -> Sky -> Indigo -> Violet
      const grad = ctx.createLinearGradient(0, 0, displayWidth, 0);
      grad.addColorStop(0, "#0FB5A3");
      grad.addColorStop(0.35, "#2A8FE3");
      grad.addColorStop(0.7, "#5B53E6");
      grad.addColorStop(1, "#7C6BF0");
      ctx.fillStyle = grad;

      for (let i = 0; i < barCount; i++) {
        const x = startX + i * totalStep;
        const norm = (i / barCount) * Math.PI;
        const baseArch = Math.sin(norm);

        let h = 0;
        if (prefersReducedMotion) {
          h = 24 + 48 * baseArch;
        } else {
          // Soft harmonic equalizer animation
          const wave1 = Math.sin(t * 2.2 + i * 0.1);
          const wave2 = Math.cos(t * 1.5 - i * 0.07);
          const wave3 = Math.sin(t * 3.4 + i * 0.22);
          const waveVal = wave1 * 0.5 + wave2 * 0.35 + wave3 * 0.15;

          h = 16 + baseArch * (36 + waveVal * 26);

          // Reactive boost near cursor
          if (isHovered && mouseX > -1000) {
            const dist = Math.abs(x - mouseX);
            const radius = 180;
            if (dist < radius) {
              const proximity = Math.pow(1 - dist / radius, 1.8);
              const reactiveBounce = Math.sin(t * 7.5 + i * 0.45) * 20;
              h += proximity * (34 + reactiveBounce);
            }
          }
        }

        h = Math.max(6, Math.min(displayHeight * 0.92, h));
        const barY = centerY - h / 2;

        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(x, barY, barWidth, h, 2);
        } else {
          ctx.rect(x, barY, barWidth, h);
        }
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(startTime);
    } else {
      animId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="waveCanvas"
      className="cursor-crosshair inset-0 absolute w-full h-full"
      style={{ display: "block" }}
      aria-label="Interactive equalizer wave"
    />
  );
}

function Index() {
  const [activeSlide0, setActiveSlide0] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { bandProgress } = useImportedLayout();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const navEl = document.getElementById("nav");
      const drawerEl = document.getElementById("navDrawer");
      if (
        navEl && !navEl.contains(e.target as Node) &&
        drawerEl && !drawerEl.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  // 1. Mouse tracking: 3D tilt & parallax for floating cards + spring-damped spotlight cursor glow
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId: number;
    let targetX = window.innerWidth / 2;
    let targetY = 300;
    let currentX = targetX;
    let currentY = targetY;
    let isDesktop = window.innerWidth > 1024;
    let hasMoved = false;

    const heroStage = document.querySelector<HTMLElement>(".hero-stage");
    const cursorGlow = document.getElementById("cursorGlow");
    const card1 = document.querySelector<HTMLElement>(".hero-chip.c1");
    const card2 = document.querySelector<HTMLElement>(".hero-chip.c2");

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      hasMoved = true;
    };

    const onResize = () => {
      isDesktop = window.innerWidth > 1024;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize);

    const updateLoop = () => {
      if (hasMoved) {
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;

        if (cursorGlow && isDesktop) {
          cursorGlow.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
          cursorGlow.style.opacity = "0.14";
        }

        if (isDesktop && heroStage) {
          const rect = heroStage.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            const normX = Math.max(-1, Math.min(1, (targetX - (rect.left + rect.width / 2)) / (rect.width / 2)));
            const normY = Math.max(-1, Math.min(1, (targetY - (rect.top + rect.height / 2)) / (rect.height / 2)));

            heroStage.style.setProperty("--mxu", String(normX));
            heroStage.style.setProperty("--myu", String(normY));
          }
        }
      }

      rafId = requestAnimationFrame(updateLoop);
    };

    rafId = requestAnimationFrame(updateLoop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // 2. Magnetic pull for [data-magnetic] buttons
  useEffect(() => {
    if (window.innerWidth <= 1024) return;
    const magneticElements = document.querySelectorAll<HTMLElement>("[data-magnetic]");
    const cleanupFns: Array<() => void> = [];

    magneticElements.forEach((el) => {
      const onMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = (e.clientX - centerX) * 0.22;
        const dy = (e.clientY - centerY) * 0.22;
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      };

      const onMouseLeave = () => {
        el.style.transform = "translate3d(0px, 0px, 0)";
      };

      el.addEventListener("mousemove", onMouseMove);
      el.addEventListener("mouseleave", onMouseLeave);

      cleanupFns.push(() => {
        el.removeEventListener("mousemove", onMouseMove);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  // 3. Reveal on scroll with IntersectionObserver (below the fold)
  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    revealEls.forEach((el, index) => {
      el.style.setProperty("--reveal-index", String(index % 4));
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const moveCapability = (direction: number) => {
    if (typeof document === "undefined") return;
    const rail = document.querySelector<HTMLElement>(".stack-wrap");
    const card = rail?.querySelector<HTMLElement>(".sp");
    if (!rail || !card) return;
    const next = Math.max(0, Math.min(3, activeSlide0 + direction));
    setActiveSlide0(next);
    rail.scrollTo({ left: next * (card.offsetWidth + 24), behavior: "smooth" });
  };
  const carouselContent0 = <>
    <button className="stack-nav-btn" type="button" aria-label="Previous capability card" disabled={activeSlide0 === 0} onClick={() => moveCapability(-1)}><span>Prev</span><span aria-hidden="true">←</span></button>
    <span className="stack-counter" aria-live="polite">0{activeSlide0 + 1} / 04</span>
    <button className="stack-nav-btn" type="button" aria-label="Next capability card" disabled={activeSlide0 === 3} onClick={() => moveCapability(1)}><span>Next</span><span aria-hidden="true">→</span></button>
  </>;
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="ref-bg-grid" aria-hidden="true" />
      <div className="ref-ambient-purple" aria-hidden="true" />
      <div className="ref-ambient-amber" aria-hidden="true" />
      <div className={"cursor-glow [background:radial-gradient(circle,rgba(155,135,255,.14),rgba(67,97,238,.07)_42%,transparent_66%)] h-[600px] left-0 pointer-events-none fixed top-0 w-[600px] will-change-transform z-0 opacity-0"} id="cursorGlow" aria-hidden="true" />
      <div className="grain mix-blend-multiply" />
      <nav
        className={`nav${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}
        id="nav"
        aria-label="Main Navigation"
      >
        <div className="nav-container">
          <a className="nav-home" aria-label="Swaniki Home" href="#top">
            <div className="nav-logo-box">
              <img
                className="brand-mark"
                src="/site-assets/acbe9434c0d28eff.png"
                alt="Swaniki Mark"
                width="24"
                height="24"
              />
            </div>
            <div className="nav-brand-text">
              <span className="brand-name">Swaniki</span>
              <span className="brand-tagline">STUDIO</span>
            </div>
          </a>

          <div className="nav-links">
            <a aria-label="Swaniki Labs — all products" href="/labs.html">
              <span>Labs</span>
            </a>
            <a aria-label="Swaniki Technologies — all client websites" href="/technologies.html">
              <span>Technologies</span>
            </a>
            <a href="/about.html#about">About</a>
            <a href="/careers.html">Careers</a>
          </div>

          <div className="nav-actions">
            <a className="nav-cta" data-magnetic="" href="/contact.html">
              <span>Start a project</span>
            </a>

            <button
              ref={toggleRef}
              className="nav-toggle"
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="navDrawer"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
      <ImportedHeaderGotAProblemLet />
      <div className="wrap max-w-[1200px]">
        <StatisticsProof />
      </div>
      <div className="section-divider" aria-hidden="true" />
      <ImportedSection />
      <div className="section-divider" aria-hidden="true" />
      <ImportedSectionSwanikiLabs />
      <div className="section-divider" aria-hidden="true" />
      <ImportedSectionSwanikiTechnologies />
      <div className="section-divider" aria-hidden="true" />
      {/* Refined Banner Section with website margins & centered composition */}
      <section className="banner-section wrap max-w-[1200px] relative z-1 my-10 md:my-14" id="band" aria-label="Inside Swaniki Banner">
        <div className="banner-container relative w-full overflow-hidden rounded-[24px] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.65)] min-h-[460px] md:min-h-[560px] lg:min-h-[640px] aspect-[16/10] flex items-center justify-center">
          {/* Complete background image */}
          <img
            src="/site-assets/fcbfe8ff3d3fadb7.avif"
            alt="Inside Swaniki senior team"
            className="banner-image absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            loading="lazy"
          />
          {/* Subtle multi-layer dark overlay & ambient tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/15 to-indigo-600/25 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060810]/85 via-[#060810]/55 to-[#060810]/40 pointer-events-none" />

          {/* Centered Content over Image */}
          <div className="banner-content relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 max-w-[760px] mx-auto">
            <span className="inline-flex items-center text-[#ffffffd9] font-[family-name:var(--mono)] text-[11px] font-bold tracking-[.22em] uppercase mb-4 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              Inside Swaniki
            </span>
            <p className="font-[family-name:var(--display)] text-[clamp(28px,4.5vw,54px)] italic leading-[1.1] text-white [text-shadow:0_2px_24px_rgba(6,8,16,.85)] mb-6">
              The small senior team behind every product, automation and website.
            </p>
            <span className="inline-flex items-center text-[#ffffffbf] font-[family-name:var(--mono)] text-[11.5px] gap-[10px] tracking-[.2em] uppercase">
              Handcrafted in-house · Driven by craft
            </span>
          </div>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />
      <ImportedSectionAClearPathFrom />
      <div className="section-divider" aria-hidden="true" />
      <section className="stack relative z-1" id="stack">
        <div className="stack-head max-w-[1140px] mx-auto px-6 mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-[720px]">
            <div className="labs-pill-badge !mb-4">WHAT WE BUILD</div>
            <h2 className="labs-heading-title text-left !m-0 !mb-3">
              Four capabilities, <span className="labs-highlight-marker">one senior team.</span>
            </h2>
            <p className="labs-heading-desc text-left !m-0 !max-w-[54ch]">
              Each delivered end to end, in house — from prototype to scale.
            </p>
          </div>
          <div className="stack-controls self-start md:self-end" aria-label="Capability card navigation" data-site-import-carousel-root="0">{carouselContent0}</div>
        </div>
        <div onScroll={event => { const rail = event.currentTarget; const card = rail.querySelector<HTMLElement>(".sp"); if (card) setActiveSlide0(Math.min(3, Math.round(rail.scrollLeft / (card.offsetWidth + 20)))); }} className="stack-wrap flex-row gap-[20px] max-w-[1140px] overflow-x-auto w-full [-webkit-overflow-scrolling:touch] [scroll-snap-type:x_mandatory] [scrollbar-width:none]">
          <article className="sp">
            <div className="sp-inner">
              <div className="sp-media" style={{ backgroundImage: "url(\"/site-assets/973b96bb3e52fe92.webp\")" }}>
                <span className="sn">01 · SaaS</span>
              </div>
              <div className="sp-content">
                <h3>SaaS Products</h3>
                <p>We design, build and operate multi-tenant products — from the first prototype to the version that scales to thousands of users.</p>
                <div className="slist">
                  <span>Product strategy</span>
                  <span>Full-stack build</span>
                  <span>Scaling &amp; ops</span>
                </div>
                <div className="sp-actions">
                  <a className="sp-action-btn" href="/labs.html">Explore Swaniki Labs →</a>
                </div>
              </div>
            </div>
          </article>
          <ImportedArticleWanderBeyondTheHorizon />
          <article className="sp">
            <div className="sp-inner">
              <div className="sp-media" style={{ backgroundImage: "url(\"/site-assets/d95999966bb9a159.png\")" }}>
                <span className="sn">03 · Web</span>
              </div>
              <div className="sp-content">
                <h3>Websites That Convert</h3>
                <p>We craft fast, accessible, beautifully-designed marketing sites and portfolios — engineered to perform and easy for you to update.</p>
                <div className="slist">
                  <span>Design systems</span>
                  <span>Performance</span>
                  <span>SEO &amp; CMS</span>
                </div>
                <div className="sp-actions">
                  <a className="sp-action-btn" href="/technologies.html">Explore Swaniki Technologies →</a>
                </div>
              </div>
            </div>
          </article>
          <article className="sp">
            <div className="sp-inner">
              <div className="sp-media" style={{ backgroundImage: "url(\"/site-assets/9bb4ca992377ec9b.webp\")" }}>
                <span className="sn">04 · Social</span>
              </div>
              <div className="sp-content">
                <h3>Social Media Management</h3>
                <p>Strategic multi-channel presence and growth campaigns.</p>
                <div className="slist">
                  <span>Instagram &amp; YouTube</span>
                  <span>Threads &amp; Meta</span>
                  <span>GMB Growth</span>
                </div>
                <div className="sp-actions">
                  <a className="sp-action-btn" href="/about.html#services">Learn more →</a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />
      <ImportedFooter />
      <a className="wa-float items-center justify-center z-60" aria-label="Chat with Swaniki on WhatsApp" href="https://wa.me/917019996099?text=Hi%20Swaniki%2C%20I%27d%20like%20to%20discuss%20a%20project" rel="noopener" target="_blank">
        <svg className="fill-white relative z-1" viewBox="0 0 448 512" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.7 111L0 480l117.7-30.9c32.4 17.7 68.3 27 105.5 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 5.6-3.7 8.4-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5.8-8.5 2.5-11.2 2.5-3.6 5.6-6.9 8.4-10.4 2.8-3.5 3.7-6 5.6-9.3 1.9-3.2 1-6.1-.4-8.6-1.4-2.4-12.5-30-17.1-41.1-4.5-10.9-9.1-9.4-12.5-9.6-3.4-.2-7.3-.2-11.2-.2-3.9 0-10.2 1.4-15.5 7-5.3 5.6-20.3 19.8-20.3 48.3 0 28.5 20.8 56 23.8 59.9 3 3.9 41 62.7 99.2 88 13.9 6 24.7 9.6 33.1 12.3 13.9 4.4 26.5 3.8 36.5 2.3 11.1-1.7 34.3-14 39.2-27.5 4.9-13.5 4.9-25 3.4-27.5-1.4-2.5-5.2-3.9-10.7-6.7z" />
        </svg>
      </a>
      <div
        className={`nav-drawer${menuOpen ? " is-open" : ""}`}
        id="navDrawer"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        role="dialog"
        aria-label="Mobile Navigation Menu"
      >
        <div className="nav-drawer-header">
          <div className="nav-brand-text">
            <span className="brand-name">Swaniki</span>
            <span className="brand-tagline">STUDIO</span>
          </div>
          <span className="nav-drawer-caption">Menu</span>
        </div>
        <a onClick={() => setMenuOpen(false)} href="/labs.html">
          <span>Swaniki Labs</span> <span className="arrow">→</span>
        </a>
        <a onClick={() => setMenuOpen(false)} href="/technologies.html">
          <span>Swaniki Technologies</span> <span className="arrow">→</span>
        </a>
        <a onClick={() => setMenuOpen(false)} href="/#work">
          <span>Selected Work</span> <span className="arrow">→</span>
        </a>
        <a onClick={() => setMenuOpen(false)} href="/#stack">
          <span>What We Build</span> <span className="arrow">→</span>
        </a>
        <a onClick={() => setMenuOpen(false)} href="/about.html#about">
          <span>About Studio</span> <span className="arrow">→</span>
        </a>
        <a onClick={() => setMenuOpen(false)} href="/careers.html">
          <span>Careers</span> <span className="arrow">→</span>
        </a>
        <a onClick={() => setMenuOpen(false)} className="nav-drawer-cta" href="/contact.html">
          <span>Start a project</span>
          <span className="cta-arrow">↗</span>
        </a>
      </div>

    </>
  );
}

const DEMO_SLIDES = [
  {
    id: "ai",
    command: "build an AI voice agent platform with real-time audio",
    results: [
      "custom RAG pipelines & multi-modal knowledge retrieval",
      "sub-200ms voice synthesis & telephony integration",
      "deployed to global edge infrastructure",
    ],
  },
  {
    id: "saas",
    command: "architect a multi-tenant cloud SaaS with enterprise billing",
    results: [
      "role-based team workspaces & audit logging",
      "automated Stripe metering & self-serve subscriptions",
      "99.99% SLA multi-region PostgreSQL clustering",
    ],
  },
  {
    id: "web",
    command: "engineer a bespoke brand website with 100/100 Lighthouse",
    results: [
      "sub-second global edge delivery & instant page transitions",
      "dynamic CMS & conversion-focused interactive micro-apps",
      "zero-layout-shift responsive design system",
    ],
  },
  {
    id: "automation",
    command: "deploy an autonomous publishing and lead research pipeline",
    results: [
      "automated multi-channel content syndication",
      "CRM synchronization & real-time webhook intelligence",
      "saves 40+ hours per week of manual operations",
    ],
  },
];

function DeveloperCodePanel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [visibleResults, setVisibleResults] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = DEMO_SLIDES[activeSlide] ?? DEMO_SLIDES[0]!;

  // Auto-advance slides every 5.5s unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % DEMO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Typing effect when activeSlide changes
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedChars(currentSlide.command.length);
      setVisibleResults(currentSlide.results.length);
      return;
    }

    setTypedChars(0);
    setVisibleResults(0);

    const fullCmd = currentSlide.command;
    let charIndex = 0;
    let t1: ReturnType<typeof setTimeout> | undefined;
    let t2: ReturnType<typeof setTimeout> | undefined;
    let t3: ReturnType<typeof setTimeout> | undefined;

    const typeInterval = setInterval(() => {
      charIndex++;
      setTypedChars(charIndex);

      if (charIndex >= fullCmd.length) {
        clearInterval(typeInterval);
        t1 = setTimeout(() => setVisibleResults(1), 180);
        t2 = setTimeout(() => setVisibleResults(2), 380);
        t3 = setTimeout(() => setVisibleResults(3), 580);
      }
    }, 28);

    return () => {
      clearInterval(typeInterval);
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
      if (t3) clearTimeout(t3);
    };
  }, [activeSlide, currentSlide]);

  return (
    <div
      className="ref-terminal-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Swaniki Product Terminal Demo"
    >
      {/* Golden 4-point sparkle star top-right */}
      <div className="ref-sparkle-star ref-star-gold" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFB51B">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
        </svg>
      </div>

      {/* Pink 4-point sparkle star bottom-left */}
      <div className="ref-sparkle-star ref-star-pink" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#F472B6">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
        </svg>
      </div>

      <div className="ref-terminal-window">
        {/* Terminal Window Header */}
        <div className="ref-terminal-header">
          <div className="ref-terminal-dots" aria-hidden="true">
            <span className="ref-term-dot dot-red" />
            <span className="ref-term-dot dot-yellow" />
            <span className="ref-term-dot dot-green" />
          </div>
          <div className="ref-terminal-path">
            <span>builder@swaniki ~ /products</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="ref-terminal-body">
          <div className="ref-terminal-prompt-line">
            <span className="ref-terminal-prompt-symbol">&gt;</span>
            <span className="ref-terminal-command-text">
              {currentSlide.command.slice(0, typedChars)}
              {typedChars < currentSlide.command.length && <span className="typing-caret" />}
            </span>
          </div>

          <div className="ref-terminal-results">
            {currentSlide.results.slice(0, visibleResults).map((res, idx) => (
              <div key={idx} className="ref-terminal-result-item">
                <span className="ref-terminal-check" aria-hidden="true">✓</span>
                <span>{res}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel dots below the terminal: ○ ○ ● ○ */}
      <div className="ref-carousel-dots" role="tablist" aria-label="Swaniki capability demos">
        {DEMO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={idx === activeSlide}
            aria-label={`Slide ${idx + 1}: ${slide.command}`}
            className={`ref-carousel-dot${idx === activeSlide ? " active" : ""}`}
            onClick={() => setActiveSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}

function ImportedHeaderGotAProblemLet() {
  return (
    <header className="hero hr-go overflow-hidden">
      <div className="wrap max-w-[1240px] relative z-2">
        <div className="hero-workspace-grid">
          {/* Left Column: Status Badge, Headline with squiggle, copy, dual CTAs, note with pink arrow */}
          <div>
            <div className="ref-status-badge">
              <span className="ref-status-badge-dot" />
              <span>ACCEPTING NEW PROJECTS · Q4</span>
            </div>

            <h1 className="ref-hero-headline">
              <span className="ref-headline-line1">Got a problem?</span>
              <span className="ref-highlight-word">
                Build &amp; Ship.
                <svg
                  className="ref-squiggle"
                  viewBox="0 0 260 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 15C45 4 85 24 130 14C175 4 218 20 257 12"
                    stroke="#FFB51B"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="ref-hero-desc">
              At <strong className="font-bold text-(--ink)">Swaniki</strong>, we engineer the digital products you put in front of real users: multi-tenant SaaS, custom automations, and high-conversion websites. You pair directly with senior builders and put your name on software that scales.
            </p>

            <div className="ref-hero-ctas">
              <a className="ref-btn-primary" href="/contact.html">
                Bring us your challenge <span aria-hidden="true">→</span>
              </a>
              <a className="ref-btn-secondary" href="#work">
                See what we've built
              </a>
            </div>

            <div className="ref-hero-footer-note">
              <span>Production-grade code. Direct founder collaboration. Zero junior handoffs.</span>
              <svg
                className="ref-pink-arrow"
                viewBox="0 0 60 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 8C20 28 42 24 52 10"
                  stroke="#F472B6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M44 8L53 10L52 19"
                  stroke="#F472B6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Column: Interactive Solution Code Panel */}
          <div className="w-full">
            <DeveloperCodePanel />
          </div>
        </div>
      </div>

      <div className="wave-band hr w-full z-1 mt-[48px]">
        <WaveformBar />
        <div className="[background:linear-gradient(90deg,var(--paper),transparent_4%,transparent_96%,var(--paper))] inset-0 pointer-events-none absolute" />
      </div>
    </header>
  );
}

function StatisticsProof() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    let rafId: number | null = null;
    let startTime: number | null = null;
    const duration = 1200;
    const targets = [15, 20, 3, 100];

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounts(targets.map((t) => Math.round(t * ease)));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          if (rafId) cancelAnimationFrame(rafId);
          startTime = null;
          rafId = requestAnimationFrame(step);
        } else {
          if (rafId) cancelAnimationFrame(rafId);
          startTime = null;
          setCounts([0, 0, 0, 0]);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="proof reveal flex-wrap gap-0 isolate justify-center overflow-hidden relative [rotate:none] [scale:none]"
    >
      <div
        className="ambient-glow [background:radial-gradient(circle,rgba(99,102,241,.15)_0%,rgba(168,85,247,.08)_45%,transparent_70%)] h-[600px] left-1/2 pointer-events-none absolute top-1/2 w-[600px] z-0"
        aria-hidden="true"
      />
      <div className="relative text-center z-1">
        <b className="[background-image:var(--g)] [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-clip-text! text-[34px] tracking-[-.03em] [-webkit-text-fill-color:transparent]">
          {counts[0] ?? 0}+
        </b>
        <span className="text-(--ink-soft) text-[13px] font-medium">Products</span>
      </div>
      <div className="relative text-center z-1">
        <b className="[background-image:var(--g)] [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-clip-text! text-[34px] tracking-[-.03em] [-webkit-text-fill-color:transparent]">
          {counts[1] ?? 0}+
        </b>
        <span className="text-(--ink-soft) text-[13px] font-medium">Websites</span>
      </div>
      <div className="relative text-center z-1">
        <b className="[background-image:var(--g)] [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-clip-text! text-[34px] tracking-[-.03em] [-webkit-text-fill-color:transparent]">
          {counts[2] ?? 0}
        </b>
        <span className="text-(--ink-soft) text-[13px] font-medium">Core capabilities</span>
      </div>
      <div className="relative text-center z-1">
        <b className="[background-image:var(--g)] [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-clip-text! text-[34px] tracking-[-.03em] [-webkit-text-fill-color:transparent]">
          {counts[3] ?? 0}%
        </b>
        <span className="text-(--ink-soft) text-[13px] font-medium">In-house build</span>
      </div>
    </div>
  );
}

const TECH_ITEMS = [
  { name: "React", img: "/site-assets/48cfb52f87dbd843-a787131525f18e13e897b779bddf4fa4.png" },
  { name: "Next.js", img: "/site-assets/8df30fcf417f0a39-575da22d6bdbb24e49cb733aef21a1c4.png" },
  { name: "TypeScript", img: "/site-assets/456d4964a7334e23-221db5aef99d4f05cccf7d887fae10fb.png" },
  { name: "Tailwind", img: "/site-assets/d2ead14bc595ca62-47fc22a248dc65c0f0553471b61aa3f1.png" },
  { name: "Node.js", img: "/site-assets/bb0f9708578c414e-5503f5dca388eab139c7b34716ff6403.png" },
  { name: "Python", img: "/site-assets/16908c24f5d95a94-5d5432605939c5b1e640faf9223697e1.png" },
  { name: "PostgreSQL", img: "/site-assets/efb2c9e9202a5bd1-cda4bbfa24e149bd29d1a72389d91ac3.png" },
  { name: "Supabase", img: "/site-assets/bf28e51a960b2afd-dc96a4ee064d8b6f83ca8ba2b513d0e9.png" },
  { name: "Docker", img: "/site-assets/9c741f9952e8f890-63f615de2dc1cf6b63fd65c6116bf843.png" },
  { name: "AWS", isAws: true },
  { name: "Figma", img: "/site-assets/3ab898dbeff5a1bb-79d3c17440d76234278936d8f7fe3102.png" },
  { name: "Redis", img: "/site-assets/59a5937ff1c60e4e-78937f522d7dffeaa4b93b3082eb7766.png" },
];

const SERVICES_LIST = [
  "Creative Websites",
  "Process Automation",
  "AI-Powered Solutions",
  "Invoicing & Business Tools",
  "Lead & Web Research",
  "Social Media Workflows",
  "Dashboards & Internal Tools",
] as const;

function ImportedSection() {
  const renderTechSet = (keyPrefix: string) => (
    <div key={keyPrefix} className="set items-center w-max">
      {TECH_ITEMS.map((item) => (
        <span key={keyPrefix + "-" + item.name} className="logo items-center gap-[9px]">
          {item.isAws ? (
            <svg
              className="h-[40px] w-[40px] object-contain flex-none"
              viewBox="0 0 40 40"
              aria-label="AWS"
            >
              <rect width="40" height="40" rx="8" fill="#232F3E" />
              <text
                x="20"
                y="19"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="11"
                fontWeight="bold"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                aws
              </text>
              <path
                d="M11 23.5c3.2 3.2 14.8 3.2 18 0"
                stroke="#FF9900"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M26.5 23l3 .5-.5-3"
                stroke="#FF9900"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          ) : (
            <img
              className="h-[40px] object-contain w-[40px]"
              src={item.img}
              alt={item.name}
              loading="lazy"
            />
          )}
          <span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">
            {item.name}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="basics relative z-1 overflow-hidden">
      <div className="wrap max-w-[1200px]">
        {/* 1. Technology stack (directly below stats) */}
        <div className="basic-row">
          <span className="basic-label text-(--ink-soft) font-[family-name:var(--mono)] text-[10.5px] tracking-[.24em] text-center uppercase">
            The stack we build on
          </span>
          <div
            className="marquee overflow-hidden relative [mask:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
            aria-hidden="true"
          >
            <div className="track items-center w-max will-change-transform">
              {renderTechSet("set-1")}
              {renderTechSet("set-2")}
            </div>
          </div>
        </div>

        {/* 2. "We can help with" content */}
        <div className="basic-row">
          <span className="basic-label text-(--ink-soft) font-[family-name:var(--mono)] text-[10.5px] tracking-[.24em] text-center uppercase">
            We can help with
          </span>
          <div className="help-services-cluster">
            {SERVICES_LIST.map((service) => (
              <span key={service} className="help-service-pill">
                <span className="help-service-dot" aria-hidden="true" />
                <span>{service}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 3. "Trusted by" (3 stationary cards) */}
        <div className="basic-row">
          <span className="basic-label text-(--ink-soft) font-[family-name:var(--mono)] text-[10.5px] tracking-[.24em] text-center uppercase">
            Trusted by
          </span>
          <div className="trusted-row">
            <div className="trusted-card">
              <img
                className="h-auto max-h-[38px] max-w-[165px] object-contain w-auto block mx-auto"
                src="/site-assets/5d2d71583c6a76f8.webp"
                alt="Hairport by Santinoo Tamang"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div
              className="trusted-card clogo-yash"
              aria-label="Yash Honda"
            >
              <div className="flex items-center justify-center gap-[10px]">
                <span className="text-[#0b0e17] font-[family-name:var(--sans)] text-[17px] font-bold tracking-[-.02em] whitespace-nowrap">
                  Yash Honda
                </span>
                <svg
                  className="flex-none h-[20px] w-auto"
                  viewBox="-1181 -632 2000 1329"
                  aria-hidden="true"
                  {...({ focusable: "false" } as any)}
                >
                  <path
                    fill="#e53935"
                    d="M-860.666 696.668s-12.333-40.002-34-61.668S-1083.334 446.334-1108 421.667s-73-72.665-73-142.666c0-70 59-120 130.333-148.667S180.667-369 266.667-405s209.667-91.333 265.667-118S747-624.75 752.25-627.583 760.333-632 762.833-632s4.834 2.167 4.834 5-1.834 6.75-2.417 8.667S716.667-473.667 678.667-425 622-355.667 440-291.667-957.335 199.001-988.001 211.001s-100 33.333-100 84.667c0 41.333 41.333 73.334 53.333 84s338.667 316.999 338.667 316.999h-164.665z"
                  />
                  <path
                    fill="#cc0000"
                    d="M-1004 365.5s-29.667-27.5-33.667-31.5-12.667-18.999-12.667-29.666 2-36.334 47-50.334S92.001-105.667 149.334-123.667 545.25-254 605.5-281c12.75-5.5 15-6.833 17-6.833s4.583 1.25 4.583 4.333-1.417 5.417-2.5 7.167S565.5-155.5 531.5-118 467-54 405-38.5-623.5 237-629.75 238.75s-13.5 7.5-13.5 15.25c0 12.75 10.5 13.75 10.5 13.75L-1004 365.5z"
                  />
                  <path
                    fill="#e53935"
                    d="M-982.5,384.5L-897,464l443.5-83.5c0,0-11.5-7.25-11.5-15.625s6.75-13.875,14.875-15.5s651.125-126.374,691.125-133.374s92.666-18.667,135.666-70.667S461.375,23.875,462.75,21.75s1.875-3.375,1.875-4.625-.75-4.375-4-4.375-5,.75-8.25,2S-982.5,384.5-982.5,384.5z"
                  />
                  <path
                    fill="#cc0000"
                    d="M275,267.5c-1.817,.413-1151.667,215.833-1151.667,215.833l99.667,92.166l531.835-66.999c0,0-10-3.666-10-14s9.833-14.167,15.5-15.167s273.667-40.335,305.167-45.002s83.333-15.5,127-61.5s86.668-97,88.334-99s1.915-3.248,1.915-4.248S281.5,266.5,279,266.5c-.666,0-2.167,.584-4,1z"
                  />
                  <polygon fill="#e53935" points="-753.333 597 -646.666 697 57.334 697 -206 533" />
                </svg>
              </div>
            </div>
            <div className="trusted-card">
              <img
                className="h-auto max-h-[38px] max-w-[165px] object-contain w-auto block mx-auto"
                src="/site-assets/8ac6ea8e799be68a.webp"
                alt="GS Consultants"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const LABS_ROW_1 = [
  {
    title: "FindMyTrip",
    tag: "Travel AI",
    href: "/labs/findmytrip.html",
    img: "/site-assets/2fe4fa259043598d.webp",
    alt: "FindMyTrip preview",
  },
  {
    title: "FounderSignal",
    tag: "AI & Research",
    href: "/labs/foundersignal.html",
    img: "/site-assets/973b96bb3e52fe92.webp",
    alt: "FounderSignal preview",
  },
  {
    title: "KontentOS",
    tag: "Creator Tools",
    href: "/labs/kontentos.html",
    img: "/site-assets/ae7317fcd9da9f39.webp",
    alt: "KontentOS preview",
  },
  {
    title: "Vibe",
    tag: "Community",
    href: "/labs/vibe.html",
    img: "/site-assets/a3f06b539cc017e4.webp",
    alt: "Vibe preview",
  },
  {
    title: "Lead Intelligence",
    tag: "AI Research",
    href: "/labs/lead-intelligence.html",
    img: "/site-assets/39c8a24a9ea37cc2.webp",
    alt: "Lead Intelligence preview",
  },
  {
    title: "Website Doctor",
    tag: "Web Tools",
    href: "/labs/website-doctor-v2.html",
    img: "/site-assets/f676962b740f0713.webp",
    alt: "Website Doctor preview",
  },
  {
    title: "Website Builder",
    tag: "Web Tools",
    href: "/labs/website-builder.html",
    img: "/site-assets/a4148b63d160ca18.webp",
    alt: "Website Builder preview",
  },
  {
    title: "Event Aggregator",
    tag: "Consumer Tech",
    href: "/labs/event-aggregator.html",
    img: "/site-assets/056808f7059c8717.webp",
    alt: "Event Aggregator preview",
  },
];

const LABS_ROW_2 = [
  {
    title: "SwaTrack",
    tag: "Productivity",
    href: "/labs/swatrack.html",
    img: "/site-assets/4b0d2808fff139e0.webp",
    alt: "SwaTrack preview",
  },
  {
    title: "Invoicer",
    tag: "Finance",
    href: "/labs/invoicer.html",
    img: "/site-assets/73d1068c8fd82f03.webp",
    alt: "Invoicer preview",
  },
  {
    title: "2048 Game",
    tag: "Consumer Tech",
    href: "https://mailjaiswal.github.io/2048-game/",
    img: "/site-assets/07b5d38cc3a9eb55.jpg",
    alt: "2048 Game preview",
    external: true,
  },
  {
    title: "RFQClub by Swaniki",
    tag: "Finance",
    href: "/labs/rfqclub.html",
    img: "/site-assets/927730c5a45e30a5.webp",
    alt: "RFQClub by Swaniki preview",
  },
  {
    title: "Tap & Toggle",
    tag: "Automation",
    href: "/labs/tap-toggle.html",
    img: "/site-assets/2c64215beb9b50cd.webp",
    alt: "Tap & Toggle preview",
  },
  {
    title: "myHR by Swaniki",
    tag: "Productivity",
    href: "/labs/myhr.html",
    img: "/site-assets/2bd54ca5497fc0b0.webp",
    alt: "myHR by Swaniki preview",
  },
  {
    title: "GMB by Swaniki",
    tag: "Web Tools",
    href: "/labs/gmb.html",
    img: "/site-assets/f84eee08a2c51b55.webp",
    alt: "GMB by Swaniki preview",
  },
  {
    title: "Swapiki",
    tag: "Web Tools",
    href: "/labs/swapiki.html",
    img: "/site-assets/d37fd7e761ee456a.webp",
    alt: "Swapiki preview",
  },
];

function ImportedSectionSwanikiLabs() {
  return (
    <section className="labs-showcase-section" id="labs">
      {/* Centered Heading Layout matching Screenshot 1 */}
      <div className="labs-heading-wrapper">
        <div className="labs-pill-badge">SWANIKI LABS</div>
        <h2 className="labs-heading-title">
          Real products, <span className="labs-highlight-marker">built with interns.</span>
        </h2>
        <p className="labs-heading-desc">
          No toy projects, no internal wikis nobody reads. Interns have shipped code into every product on this wall, and most of them are already finished and in people&apos;s hands.
        </p>
      </div>

      {/* Two-Row Project Gallery matching Screenshot 2 */}
      <div className="labs-gallery-container">
        {/* Row 1: Right to Left (Scrolls leftward) */}
        <div className="labs-gallery-row" aria-label="Labs projects row 1">
          <div className="labs-gallery-track labs-track-left">
            {LABS_ROW_1.concat(LABS_ROW_1).map((item, idx) => (
              <a
                key={`row1-${item.title}-${idx}`}
                href={item.href}
                className="labs-project-card"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={`Open ${item.title}`}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="labs-card-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="labs-card-scrim" />
                <div className="labs-card-meta">
                  <span className="labs-card-title">{item.title}</span>
                  <span className="labs-card-tag">{item.tag}</span>
                </div>
                <div className="labs-card-cta">
                  <span className="labs-card-cta-btn">
                    Open Project ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right (Scrolls rightward) */}
        <div className="labs-gallery-row" aria-label="Labs projects row 2">
          <div className="labs-gallery-track labs-track-right">
            {LABS_ROW_2.concat(LABS_ROW_2).map((item, idx) => (
              <a
                key={`row2-${item.title}-${idx}`}
                href={item.href}
                className="labs-project-card"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={`Open ${item.title}`}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="labs-card-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="labs-card-scrim" />
                <div className="labs-card-meta">
                  <span className="labs-card-title">{item.title}</span>
                  <span className="labs-card-tag">{item.tag}</span>
                </div>
                <div className="labs-card-cta">
                  <span className="labs-card-cta-btn">
                    Open Project ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer link to browse all products */}
      <div className="labs-footer-cta">
        <a className="sec-link inline-flex items-center gap-[9px] whitespace-nowrap" href="/labs.html">
          All Labs products <span className="arr">→</span>
        </a>
      </div>
    </section>
  );
}

const TECH_PROJECTS = [
  {
    title: "Yash Honda",
    category: "Automotive",
    desc: "A Honda dealership website presenting its vehicle range, test drives, and ways to enquire.",
    href: "/websites/yash-honda.html",
    img: "/site-assets/e1598c1d6ec126cf.webp",
    alt: "Yash Honda preview",
    githubUrl: undefined,
  },
  {
    title: "Between Your Buns",
    category: "Food & Dining",
    desc: "A burger brand website presenting its menu, story, and food through playful brand imagery.",
    href: "/websites/between-your-buns.html",
    img: "/site-assets/f6f178bf98c81074.webp",
    alt: "Between Your Buns preview",
    githubUrl: undefined,
  },
  {
    title: "NovoExim",
    category: "Trade & Logistics",
    desc: "A trade and logistics website introducing B2B import/export services and international operations.",
    href: "/websites/novoexim.html",
    img: "/site-assets/17465132b5d2cbe0.webp",
    alt: "NovoExim preview",
    githubUrl: undefined,
  },
  {
    title: "GSconsultants",
    category: "Professional Services",
    desc: "Legal, company-secretary, accounting, and compliance support for businesses and individuals.",
    href: "/websites/gs-consultants.html",
    img: "/site-assets/2959f66bc8ca0122.webp",
    alt: "GSconsultants preview",
    githubUrl: undefined,
  },
  {
    title: "Gara",
    category: "Real Estate",
    desc: "A luxury real-estate website for builders to showcase premium residences and developments.",
    href: "/websites/gara.html",
    img: "/site-assets/1bc8944e9b273ad9.webp",
    alt: "Gara preview",
    githubUrl: undefined,
  },
  {
    title: "Ankur Jaiswal",
    category: "Personal · Leadership",
    desc: "An executive résumé presenting engineering and product leadership through project case studies.",
    href: "/websites/ankur-jaiswal.html",
    img: "/site-assets/1c9124fbb5094ac2.webp",
    alt: "Ankur Jaiswal preview",
    githubUrl: "https://github.com/mailjaiswal/AnkurJaiswal",
  },
  {
    title: "The Coffee Factory",
    category: "Hospitality & Retail",
    desc: "An online roastery storefront introducing artisanal coffees, roast options, and subscriptions.",
    href: "/websites/coffee-factory.html",
    img: "/site-assets/fb71ff2182d7a522.webp",
    alt: "The Coffee Factory preview",
    githubUrl: undefined,
  },
  {
    title: "Boutique Hotel",
    category: "Hospitality",
    desc: "A hotel and dining website presenting guest rooms, fine dining menus, and direct booking.",
    href: "/websites/boutique-hotel.html",
    img: "/site-assets/c4666da966401e8b.webp",
    alt: "Boutique Hotel preview",
    githubUrl: undefined,
  },
  {
    title: "Myra Studio",
    category: "Fashion & Identity",
    desc: "A fashion and brand studio portfolio showcasing its visual identity and editorial work.",
    href: "/websites/myra-studio.html",
    img: "/site-assets/5ee3b28b89ca5857.webp",
    alt: "Myra Studio preview",
    githubUrl: undefined,
  },
  {
    title: "Hairport by Santinoo",
    category: "Beauty & Wellness",
    desc: "A luxury salon website presenting hair services, creative styling, and appointment booking.",
    href: "/websites/hairport.html",
    img: "/site-assets/29646c23542e1baa.webp",
    alt: "Hairport by Santinoo preview",
    githubUrl: undefined,
  },
  {
    title: "Executive Portfolio",
    category: "Executive Advisory",
    desc: "A portfolio presenting the executive track record and board-level advisory experience.",
    href: "/websites/executive-portfolio.html",
    img: "/site-assets/b16cff259c949d4b.webp",
    alt: "Executive Portfolio preview",
    githubUrl: undefined,
  },
];

function ImportedSectionSwanikiTechnologies() {
  return (
    <section className="tech-showcase-section" id="tech">
      {/* Heading matching Swaniki Labs visual hierarchy and typography */}
      <div className="tech-heading-wrapper">
        <div className="labs-pill-badge">SWANIKI TECHNOLOGIES</div>
        <h2 className="labs-heading-title">
          Websites we&apos;ve designed and <span className="labs-highlight-marker">shipped for clients.</span>
        </h2>
        <p className="labs-heading-desc">
          Websites we&apos;ve designed and shipped for clients — fast, responsive, and built to convert. Handcrafted with modern web technologies, clean code, and premium interactions.
        </p>
      </div>

      {/* User-controlled horizontal scroll container */}
      <div className="tech-scroll-wrapper">
        {/* Navigation controls: All link + manual previous/next arrows */}
        <div className="tech-nav-bar">
          <a className="sec-link inline-flex items-center gap-[9px] whitespace-nowrap" href="/technologies.html">
            All client websites <span className="arr">→</span>
          </a>
          <div className="tech-nav-arrows">
            <button
              type="button"
              className="tech-nav-btn"
              onClick={() => scrollRail("railTech", -1)}
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              type="button"
              className="tech-nav-btn"
              onClick={() => scrollRail("railTech", 1)}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* User-controlled horizontally scrollable track */}
        <div
          className="tech-scroll-track cursor-grab active:cursor-grabbing"
          id="railTech"
          role="region"
          aria-label="Client technology websites"
        >
          {TECH_PROJECTS.map((item, idx) => (
            <article key={item.title} className="tech-card">
              {/* Image preview at the top with index circle badge */}
              <div className="tech-card-image-wrap">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="tech-card-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="tech-card-num" aria-hidden="true">
                  {idx + 1}
                </div>
              </div>

              {/* Technology details matching reference screenshot */}
              <div className="tech-card-body">
                <div className="tech-card-eyebrow">
                  <span>{`STEP 0${idx + 1} · ${item.category}`}</span>
                </div>
                <h3 className="tech-card-title">{item.title}</h3>
                <p className="tech-card-desc">{item.desc}</p>
                <div className="tech-card-actions">
                  <a
                    href={item.githubUrl || item.href}
                    className="tech-card-btn-blue"
                    target={item.githubUrl ? "_blank" : undefined}
                    rel={item.githubUrl ? "noopener noreferrer" : undefined}
                    aria-label={`View Details for ${item.title}`}
                  >
                    View Details ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImportedSectionAClearPathFrom() {
  return (
    <section className="method wrap bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper) max-w-[1200px] relative z-2" id="method">
      <div className="m-grid items-start max-w-[1140px]">
        <div className={"m-left top-[118px]"}>
          <div className="labs-pill-badge !mb-4">HOW WE WORK</div>
          <h2 className="labs-heading-title text-left !m-0 !mb-4">
            A clear path from{" "}
            <span className="labs-highlight-marker">
              <em className="font-[family-name:var(--display)] italic font-normal text-white">idea to impact.</em>
            </span>
          </h2>
          <p className="sub text-(--ink-soft) text-[16.5px] leading-[1.62] max-w-[36ch] !mt-4">
            Four repeatable stages take you from first conversation to a product that keeps improving long after launch.
          </p>
          <ol className={"\x6d-steps list-none"} id="mSteps">
            <li className={"\x6d-step items-center text-[15px] font-semibold gap-[14px] tracking-[-.01em]"}>
              <span className="mn font-[family-name:var(--mono)] text-[11.5px]">01</span>
              <span>Tell us</span>
              <span className="und h-[2px] w-0" />
            </li>
            <li className={"\x6d-step items-center text-[15px] font-semibold gap-[14px] tracking-[-.01em]"}>
              <span className="mn font-[family-name:var(--mono)] text-[11.5px]">02</span>
              <span>We design</span>
              <span className="und h-[2px] w-0" />
            </li>
            <li className={"\x6d-step items-center text-[15px] font-semibold gap-[14px] tracking-[-.01em]"}>
              <span className="mn font-[family-name:var(--mono)] text-[11.5px]">03</span>
              <span>We build</span>
              <span className="und h-[2px] w-0" />
            </li>
            <li className={"\x6d-step active items-center text-[15px] font-semibold gap-[14px] tracking-[-.01em]"}>
              <span className="mn text-(--indigo) font-[family-name:var(--mono)] text-[11.5px]">04</span>
              <span>We improve</span>
              <span className="und h-[2px] w-[26px]" />
            </li>
          </ol>
          <div className={"\x6d-progress bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--line) h-[3px] overflow-hidden"}>
            <i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--g) h-full" style={{ width: "100%" }} id="mProg" />
          </div>
          <a className={"\x6d-link items-center gap-[9px]"} href="/about.html#how-we-build">Our process in depth <span className="a items-center h-[30px] justify-center w-[30px]">↗</span></a>
        </div>
        <div className={"\x6d-right flex-col gap-[26px]"} id="mRight">
          <article className={"\x6d-card reveal past overflow-hidden [rotate:none] [scale:none]"}>
            <div className={"\x6d-thumb [background:linear-gradient(140deg,#0FB5A3,#5B53E6)] overflow-hidden relative"}><span className="num items-center bottom-[12px] text-white text-[13px] font-extrabold h-[30px] justify-center left-[12px] absolute w-[30px] z-3 [backdrop-filter:blur(6px)]">1</span><img className="h-full inset-0 object-cover absolute w-full" alt="Team mapping requirements together" loading="lazy" src="/site-assets/e23003080ff46877.avif" /></div>
            <span className="k font-[family-name:var(--mono)] text-[10.5px] tracking-[.16em] uppercase">Step 01 · Tell us</span>
            <h3 className="text-[23px] font-extrabold tracking-[-.028em] leading-[1.16]">Tell us your challenge</h3>
            <p className="text-(--ink-soft) text-[15.5px] font-normal leading-[1.66]">What are you trying to build? Bring us an idea, workflow, or business problem — we turn ambiguity into a clear, agreed plan.</p>
          </article>
          <article className={"\x6d-card reveal past overflow-hidden [rotate:none] [scale:none]"}>
            <div className={"\x6d-thumb [background:linear-gradient(140deg,#0FB5A3,#5B53E6)] overflow-hidden relative"}><span className="num items-center bottom-[12px] text-white text-[13px] font-extrabold h-[30px] justify-center left-[12px] absolute w-[30px] z-3 [backdrop-filter:blur(6px)]">2</span><img className="h-full inset-0 object-cover absolute w-full" alt="Design sketches and wireframes in progress" loading="lazy" src="/site-assets/c75b74653d8ca470.avif" /></div>
            <span className="k font-[family-name:var(--mono)] text-[10.5px] tracking-[.16em] uppercase">Step 02 · We design</span>
            <h3 className="text-[23px] font-extrabold tracking-[-.028em] leading-[1.16]">Turn idea into experience</h3>
            <p className="text-(--ink-soft) text-[15.5px] font-normal leading-[1.66]">We map user flows, interface architecture, and technical blueprints before writing a single line of production code.</p>
          </article>
          <article className={"\x6d-card reveal past overflow-hidden [rotate:none] [scale:none]"}>
            <div className={"\x6d-thumb [background:linear-gradient(140deg,#0FB5A3,#5B53E6)] overflow-hidden relative"}><span className="num items-center bottom-[12px] text-white text-[13px] font-extrabold h-[30px] justify-center left-[12px] absolute w-[30px] z-3 [backdrop-filter:blur(6px)]">3</span><img className="h-full inset-0 object-cover absolute w-full" alt="Code being written during an iterative build" loading="lazy" src="/site-assets/129ef568262fc193.avif" /></div>
            <span className="k font-[family-name:var(--mono)] text-[10.5px] tracking-[.16em] uppercase">Step 03 · We build</span>
            <h3 className="text-[23px] font-extrabold tracking-[-.028em] leading-[1.16]">Build and ship the product</h3>
            <p className="text-(--ink-soft) text-[15.5px] font-normal leading-[1.66]">Rapid, sprint-based delivery with working software you can see, test, and react to every single week.</p>
          </article>
          <article className={"\x6d-card reveal active overflow-hidden [rotate:none] [scale:none]"}>
            <div className={"\x6d-thumb [background:linear-gradient(140deg,#0FB5A3,#5B53E6)] overflow-hidden relative"}><span className="num items-center bottom-[12px] text-white text-[13px] font-extrabold h-[30px] justify-center left-[12px] absolute w-[30px] z-3 [backdrop-filter:blur(6px)]">4</span><img className="h-full inset-0 object-cover absolute w-full" alt="Analytics dashboard after launch" loading="lazy" src="/site-assets/a1ea5196658d024b.avif" /></div>
            <span className="k font-[family-name:var(--mono)] text-[10.5px] tracking-[.16em] uppercase">Step 04 · We improve</span>
            <h3 className="text-[23px] font-extrabold tracking-[-.028em] leading-[1.16]">Iterate on real usage</h3>
            <p className="text-(--ink-soft) text-[15.5px] font-normal leading-[1.66]">Post-launch monitoring, performance tuning, and continuous refinements guided by real user behaviour.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ImportedArticleWanderBeyondTheHorizon() {
  return (
    <article className="sp">
      <div className="sp-inner">
        <div className="sp-media sp-frame">
          <img className="automation-still" src="/site-assets/automation-preview.png" alt="Custom automation interactive build demonstration" data-site-import-static-fallback="automation-demo" />
          <span className="sn">02 · Automation</span>
        </div>
        <div className="sp-content">
          <h3>Custom IT &amp; Automation</h3>
          <p>We map manual, fragile processes and replace them with automations and internal tools that quietly run in the background.</p>
          <div className="slist">
            <span>Workflow mapping</span>
            <span>Integrations</span>
            <span>AI-assisted tooling</span>
          </div>
          <div className="sp-actions">
            <a className="sp-action-btn sp-action-btn--amber sp-action-btn--dot-morph" href="/contact.html">
              <span className="sp-action-dot" aria-hidden="true" />
              <span>Start a project →</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function ImportedFooter() {
  return (
    <footer className="site-footer relative z-1" id="contact">
      <div className="wrap max-w-[1200px]">
        <div className="foot-grid">
          {/* Brand Column */}
          <div className="foot-col foot-brand">
            <div className="foot-brand-header">
              <div className="foot-logo-box">
                <img
                  src="/site-assets/acbe9434c0d28eff.png"
                  alt="Swaniki Mark"
                  width="22"
                  height="22"
                />
              </div>
              <span className="foot-brand-title">Swaniki</span>
            </div>
            <p className="foot-brand-desc">
              A Bengaluru studio that builds and sells AI and general-purpose software, with interns doing a lot of the building.
            </p>
            <p className="foot-tagline">
              Built by interns. Shipped for real.
            </p>
            <div className="foot-social gap-[10px]">
              <a aria-label="X" href="https://x.com" rel="noopener" target="_blank">
                <svg className="fill-current h-[15px] w-[15px]" viewBox="0 0 24 24"><path d="M18.9 2H22l-6.9 7.9L23 22h-6.4l-5-6.1L5.9 22H2.8l7.4-8.4L1.5 2H8l4.5 5.6L18.9 2Zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20Z" /></svg>
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com" rel="noopener" target="_blank">
                <svg className="fill-current h-[15px] w-[15px]" viewBox="0 0 24 24"><path d="M6.94 5A1.94 1.94 0 1 1 3.06 5a1.94 1.94 0 0 1 3.88 0ZM3.4 8.4h3.1V21H3.4V8.4Zm5.3 0h2.97v1.72h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.1v-5.56c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94V21H8.7V8.4Z" /></svg>
              </a>
              <a aria-label="YouTube" href="https://youtube.com" rel="noopener" target="_blank">
                <svg className="fill-current h-[15px] w-[15px]" viewBox="0 0 24 24"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" /></svg>
              </a>
              <a aria-label="Threads" href="https://threads.net" rel="noopener" target="_blank">
                <svg className="fill-current h-[15px] w-[15px]" viewBox="0 0 24 24"><path d="M12.19 2.38a9.8 9.8 0 0 0-2 .2 6.5 6.5 0 0 0-4.5 2.33A6.4 6.4 0 0 0 4.2 9.6c-.06 1.03.06 2.2.3 3.15a9.7 9.7 0 0 0 1.34 3.05 6.7 6.7 0 0 0 5.85 3.34c1.75.05 3.44-.46 5.17-1.02a11 11 0 0 0 1.86-.73 6.56 6.56 0 0 1-2.98 4.55 6.64 6.64 0 0 1-3.22.86 5.26 5.26 0 0 1-3.6-1.6.68.68 0 0 0-.42-.2.63.63 0 0 0-.46.15c-.36.27-1.07.8-1 1.5.1.85 1.6 1.92 2.72 2.31.79.27 1.51.44 2.22.55.54.08 1.1.1 1.64.08a11.6 11.6 0 0 0 3.48-.55 8.3 8.3 0 0 0 4.7-4.25 11.1 11.1 0 0 0 .96-2.31 6.2 6.2 0 0 0 .2-2.3c-.06-.52-.13-1.9-.19-2.4-.1-.68-.2-1.29-.32-1.77a9.6 9.6 0 0 0-1.3-2.88.73.73 0 0 0-.6-.35h-.27a.73.73 0 0 0-.5.19.7.7 0 0 0-.23.42c.02.33.05.66.08 1-.02 0-.02-.01-.05 0-1.35-.9-3.14-1.48-5.2-1.48Zm.05 3.68c1.56 0 2.9.5 3.96 1.41.06.05.06.14.01.2a8.8 8.8 0 0 1-.65.74c-.3.26-.36.32-.55.85a6.6 6.6 0 0 0-.33 1.7c-.03.54.02 1.17.14 1.88.07.41.1.62.13.8l.04.23c.05.26.07.4.08.52.02.2.01.6-.09.84l-.11.28c-.23.64-.78 1.4-1.36 1.88-.62.5-1.36.83-2.03.83-.7 0-1.32-.4-1.72-1.12-.3-.55-.3-1.3.04-2.2.14-.4.34-.87.58-1.4l.15-.29c.08-.15.15-.3.22-.45.43-.9.83-1.76 1.2-2.6a5.9 5.9 0 0 0 .38-1.12.62.62 0 0 0-.5-.77.6.6 0 0 0-.7.42c-.04.16-.1.54-.12.7a13.4 13.4 0 0 1-.03.72.66.66 0 0 1-.4.5.66.66 0 0 1-.62-.08 2.8 2.8 0 0 1-.38-.4l-.26-.4a.7.7 0 0 1-.08-.57.64.64 0 0 1 .34-.4c.5-.3.88-.7 1.1-1.2.12-.27.16-.6.07-.92-.1-.34-.34-.5-.72-.5Zm.02 3.4c-.42.95-.93 1.87-1.43 2.78-.22.4-.43.8-.61 1.18v.02c-.06.15-.13.34-.16.47-.11.4-.13.7-.06.92.07.23.26.48.5.65.27.2.66.3 1.14.3.55 0 1.15-.28 1.66-.7.5-.4.94-.97 1.13-1.36.12-.24.22-.7.24-1.14.01-.16-.01-.42-.04-.71a9.5 9.5 0 0 0-.12-.7l-.05-.2c-.03-.12-.1-.36-.22-.56l-.13-.23c-.23-.4-.56-.76-.88-1.16-.04.02 0 0-.01 0q0 0-.01 0Z" /></svg>
              </a>
              <a aria-label="Instagram" href="https://instagram.com" rel="noopener" target="_blank">
                <svg className="fill-current h-[15px] w-[15px]" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38a3.7 3.7 0 0 1-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05 0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.76.72 1.4 1.38 2.06a5.9 5.9 0 0 0 2.06 1.38c.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.06-1.38 5.9 5.9 0 0 0 1.38-2.06c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.06A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.15a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" /></svg>
              </a>
            </div>
          </div>

          {/* Reach Us Column */}
          <div className="foot-col">
            <h4 className="foot-col-title">REACH US</h4>
            <div className="foot-reach-list">
              <a className="foot-reach-item" href="mailto:contactus@swaniki.com">
                <svg className="foot-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>contactus@swaniki.com</span>
              </a>
              <div className="foot-reach-item">
                <svg className="foot-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <a className="foot-reach-item" href="https://wa.me/917019996099?text=Hi%20Swaniki%2C%20I%27d%20like%20to%20discuss%20a%20project" rel="noopener" target="_blank">
                <svg className="foot-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 70199 96099</span>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="foot-col">
            <h4 className="foot-col-title">COMPANY</h4>
            <div className="foot-links-list">
              <a href="/contact.html">Contact us</a>
              <a href="/labs.html">Swaniki Labs</a>
              <a href="/technologies.html">Swaniki Technologies</a>
              <a href="/about.html#about">About Studio</a>
              <a href="/careers.html">Careers</a>
              <a href="/contact.html">Privacy policy</a>
              <a href="/contact.html">Terms &amp; conditions</a>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="foot-legal">
          <p>© 2026 Swaniki Studio. Est. 2026. All rights reserved.</p>
          <a className="to-top" href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}


function scrollRail(id: string, direction: number) {
  const rail = document.getElementById(id);
  if (!rail) return;
  rail.scrollBy({ left: direction * rail.clientWidth * .85, behavior: "smooth" });
}

function useImportedLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [bandProgress, setBandProgress] = useState(1);
  useEffect(() => {
    const update = () => {
      setCollapsed(window.scrollY >= (window.innerWidth < 768 ? 633 : 648));
      const band = document.getElementById("band");
      if (band) setBandProgress(Math.max(0, Math.min(1, 1 - Math.max(0, -band.getBoundingClientRect().top) / (window.innerHeight * .3))));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return { collapsed, bandProgress };
}
