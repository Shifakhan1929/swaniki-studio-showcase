import type { CSSProperties } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Swaniki | Digital Product Studio for SaaS, Web & Automation" },
    { name: "description", content: "Swaniki builds SaaS products, creative websites, custom automations and AI-powered solutions." },
    { property: "og:title", content: "Swaniki | Digital Product Studio" },
    { property: "og:description", content: "Explore Swaniki Labs products, client websites and our in-house approach to digital solutions." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  staticData: { importedDocument: { html: { "lang": "en", "style": { scrollBehavior: "smooth" } }, body: { "className": "gsap-on", "id": "top" } } },
  component: Index,
});

function Index() {
  const [activeSlide0, setActiveSlide0] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { collapsed, bandProgress } = useImportedLayout();
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setFlyoutOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const moveCapability = (direction: number) => {
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
      <div className="bg pointer-events-none z-0">
        <div className="[background:radial-gradient(52vw_52vw_at_88%_116%,rgba(42,143,227,.12),transparent_62%),radial-gradient(46vw_46vw_at_6%_104%,rgba(15,181,163,.10),transparent_60%)] inset-0 absolute" />
      </div>
      <div className="inset-0 pointer-events-none fixed z-0 [background-image:linear-gradient(rgba(11,14,23,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(11,14,23,.04)_1px,transparent_1px)] [background-size:66px_66px] [mask:radial-gradient(circle_at_50%_16%,#000,transparent_80%)]" />
      <div className={"\x63ursor-glow [background:radial-gradient(circle,rgba(124,107,240,.14),rgba(42,143,227,.07)_42%,transparent_66%)] h-[600px] left-0 pointer-events-none fixed top-0 w-[600px] will-change-transform z-0"} id="cursorGlow" aria-hidden="true" />
      <div className="grain mix-blend-multiply" />
      <nav className={`nav${collapsed ? " collapsed" : ""}${menuOpen ? " menu-open" : ""}${flyoutOpen ? " flyout-open" : ""}`} onMouseEnter={() => collapsed && setFlyoutOpen(true)} onMouseLeave={() => setFlyoutOpen(false)} id="nav" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"collapsed\"],\"removed\":[],\"threshold\":648},\"mobile\":{\"added\":[\"collapsed\"],\"removed\":[],\"threshold\":633}}"}>
        <a className="nav-home" style={{ textDecoration: "none" }} aria-label="Swaniki Home" onFocus={() => collapsed && setFlyoutOpen(true)} href="#top">
          <span className="brand">
            <img className="brand-mark" src="/site-assets/acbe9434c0d28eff.png" alt="Swaniki Mark" width="30" height="30" />
            <img className="brand-text" src="/site-assets/4042d99102476dbf.png" alt="Swaniki" width="85" height="19" />
          </span>
        </a>
        <div className="nav-links"><a aria-label="Swaniki Labs — all products" href="/labs.html" title="Swaniki Labs — all our products"><span className="brand">Swaniki <span className="qual">Labs</span></span></a><a aria-label="Swaniki Technologies — all client websites" href="/technologies.html" title="Swaniki Technologies — all our client websites"><span className="brand">Swaniki <span className="qual">Technologies</span></span></a><a href="/about.html#about">About</a><a href="/careers.html">Careers</a></div>
        <a className="nav-cta" data-magnetic="" href="/contact.html">Start a project</a>
        <div className="nav-flyout" id="navFlyout" role="region" aria-label="Quick navigation">
          <a className="nav-flyout-link" href="#top">Home</a>
          <a className="nav-flyout-link" href="/labs.html">Products</a>
          <a className="nav-flyout-link" href="/#stack">What we build</a>
          <a className="nav-flyout-link" href="/technologies.html">Websites &amp; Technologies</a>
          <a className="nav-flyout-link" href="/about.html#services">About &amp; Capabilities</a>
          <a className="nav-flyout-link nav-flyout-cta" href="/contact.html">Start a Project</a>
        </div>
        <button ref={toggleRef} className="nav-toggle" type="button" aria-label="Toggle navigation" aria-controls="navDrawer" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
      <ImportedHeaderGotAProblemLet />
      <div className="wrap max-w-[1200px]">
        <div className="proof reveal flex-wrap gap-0 isolate justify-center overflow-hidden relative [rotate:none] [scale:none]" style={{ translate: "none", opacity: "0.9906", transform: "translate(0px, 0px)" } as CSSProperties}>
          <div className="ambient-glow [background:radial-gradient(circle,rgba(99,102,241,.15)_0%,rgba(168,85,247,.08)_45%,transparent_70%)] h-[600px] left-1/2 pointer-events-none absolute top-1/2 w-[600px] z-0" aria-hidden="true" />
          <div className="relative text-center z-1">
            <b className="[background-image:var(--g)] [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [background-image:var(--g)] bg-clip-text! text-[34px] tracking-[-.03em] [-webkit-text-fill-color:transparent]">15+</b>
            <span className="text-(--ink-soft) text-[13px] font-medium">Products</span>
          </div>
          <div className="relative text-center z-1">
            <b className="[background-image:var(--g)] [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [background-image:var(--g)] bg-clip-text! text-[34px] tracking-[-.03em] [-webkit-text-fill-color:transparent]">20+</b>
            <span className="text-(--ink-soft) text-[13px] font-medium">Websites</span>
          </div>
          <div className="relative text-center z-1">
            <b className="[background-image:var(--g)] [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [background-image:var(--g)] bg-clip-text! text-[34px] tracking-[-.03em] [-webkit-text-fill-color:transparent]">3</b>
            <span className="text-(--ink-soft) text-[13px] font-medium">Core capabilities</span>
          </div>
          <div className="relative text-center z-1">
            <b className="[background-image:var(--g)] [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] [background-image:var(--g)] bg-clip-text! text-[34px] tracking-[-.03em] [-webkit-text-fill-color:transparent]">100%</b>
            <span className="text-(--ink-soft) text-[13px] font-medium">In-house build</span>
          </div>
        </div>
        <div className="dir-paths reveal max-w-[1100px] [rotate:none] [scale:none]" style={{ translate: "none", opacity: "0.9906", transform: "translate(0px, 0px)" } as CSSProperties}><a className="path-chip path-products items-center gap-[14px] isolate overflow-hidden" href="#labs"><span className="path-icon d-labs text-[#2563eb] h-[34px] place-items-center w-[34px]"><svg className="fill-none h-[18px] stroke-current w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.7]" viewBox="0 0 24 24" aria-hidden="true" {...({ focusable: "false" } as any)}><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m12 12 8-4.5M12 12v9M12 12 4 7.5M8 5.3l8 4.5" /></svg></span><div className="path-txt flex-col gap-[2px]"><span className="text-(--ink) text-[14px] font-bold tracking-[-.01em]">Products</span><span className="path-desc text-[12.5px] font-medium">Explore Swaniki Labs <span className="path-arrow">→</span></span></div></a><a className="path-chip path-websites items-center gap-[14px] isolate overflow-hidden" href="#tech"><span className="path-icon d-tech text-[#7c3aed] h-[34px] place-items-center w-[34px]"><svg className="fill-none h-[18px] stroke-current w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.7]" viewBox="0 0 24 24" aria-hidden="true" {...({ focusable: "false" } as any)}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg></span><div className="path-txt flex-col gap-[2px]"><span className="text-(--ink) text-[14px] font-bold tracking-[-.01em]">Websites</span><span className="path-desc text-[12.5px] font-medium">Explore Swaniki Technologies <span className="path-arrow">→</span></span></div></a><a className="path-chip path-solutions items-center gap-[14px] isolate overflow-hidden" href="/contact.html"><span className="path-icon d-sol text-[#059669] h-[34px] place-items-center w-[34px]"><svg className="fill-none h-[18px] stroke-current w-[18px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.7]" viewBox="0 0 24 24" aria-hidden="true" {...({ focusable: "false" } as any)}><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1 2.5 2 1-2 1L19 21l-1-2.5-2-1 2-1L19 14Z" /></svg></span><div className="path-txt flex-col gap-[2px]"><span className="text-(--ink) text-[14px] font-bold tracking-[-.01em]">Custom Solutions</span><span className="path-desc text-[12.5px] font-medium">Start a project <span className="path-arrow">→</span></span></div></a></div>
      </div>
      <ImportedSection />
      <ImportedSectionSwanikiLabs />
      <ImportedSectionSwanikiTechnologies />
      <div className="band-wrap relative z-1" id="band">
        <div className="band-inner h-screen overflow-hidden sticky top-0 [@media(min-width:861px)]:[will-change:clip-path]" style={{ "--cp": bandProgress } as CSSProperties}>
          <div className="band-img inset-[-9%] absolute [@media(min-width:861px)]:will-change-transform" style={{ backgroundImage: "url(\"/site-assets/fcbfe8ff3d3fadb7.avif\")" }} />
          <div className="[background:linear-gradient(120deg,rgba(15,181,163,.30),rgba(91,83,230,.5))] inset-0 mix-blend-multiply absolute" />
          <div className="[background:linear-gradient(0deg,rgba(6,8,16,.55),transparent_55%)] inset-0 absolute" />
          <div className="band-cap bottom-[clamp(40px,12vh,120px)] text-white left-[clamp(24px,7vw,88px)] absolute right-[clamp(24px,7vw,88px)] z-2">
            <span className="text-[#ffffffd9] font-[family-name:var(--mono)] text-[11px] tracking-[.22em] uppercase">Inside Swaniki</span>
            <p className="font-[family-name:var(--display)] text-[clamp(26px,4.6vw,52px)] italic leading-[1.06] max-w-[20ch] [text-shadow:0_2px_24px_rgba(6,8,16,.5)]">The small senior team behind every product, automation and website.</p>
            <span className="band-num items-center text-[#ffffffbf] font-[family-name:var(--mono)] text-[11.5px] gap-[10px] tracking-[.2em] uppercase">Scroll — we'll draw the curtain</span>
          </div>
        </div>
      </div>
      <ImportedSectionAClearPathFrom />
      <section className="stack bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#f8fafc] relative z-1" id="stack">
        <div className="stack-head reveal justify-between max-w-[1140px] [@media(max-width:600px)]:flex-wrap [rotate:none] [scale:none]" style={{ translate: "none", opacity: "0.9928", transform: "translate(0px, 0px)" } as CSSProperties}>
          <div className="min-w-0">
            <span className="stack-badge items-center text-site-import-primary font-[family-name:var(--mono)] text-[10px] font-medium tracking-[.12em] uppercase">What we do</span>
            <h2 className={"\x74ext-reveal in text-site-import-primary text-[clamp(30px,4.4vw,50px)] font-extrabold tracking-[-.035em] leading-[1.02]"}><span className={"\x74ext-reveal-word"} style={{ "--word-index": "0" } as CSSProperties}>What</span> <span className={"\x74ext-reveal-word"} style={{ "--word-index": "1" } as CSSProperties}>we</span> <em className="text-site-import-primary"><span className={"\x74ext-reveal-word"} style={{ "--word-index": "2" } as CSSProperties}>build</span></em></h2>
            <p className="text-[#475569] text-[16px] max-w-[52ch]">Four capabilities, one senior team — each delivered end to end, in house.</p>
          </div>
          <div className="stack-controls" aria-label="Capability card navigation" data-site-import-carousel-root="0">{carouselContent0}</div>
        </div>
        <div onScroll={event => { const rail = event.currentTarget; const card = rail.querySelector<HTMLElement>(".sp"); if (card) setActiveSlide0(Math.min(3, Math.round(rail.scrollLeft / (card.offsetWidth + 24)))); }} className="stack-wrap flex-row gap-[24px] max-w-[1100px] overflow-x-auto w-full [-webkit-overflow-scrolling:touch] [scroll-snap-type:x_mandatory] [scrollbar-width:none]">
          <article className="sp bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white min-h-[520px] overflow-hidden relative z-auto [@media(max-width:820px)]:min-h-[520px]">
            <div className="sp-inner bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white text-site-import-primary h-full overflow-hidden relative [@media(max-width:820px)]:h-full [@media(max-width:820px)]:min-h-[520px]">
              <div className="sp-media h-[44%] top-0 right-0 bottom-auto left-0 absolute z-0" style={{ backgroundImage: "url(\"/site-assets/973b96bb3e52fe92.webp\")" }} />
              <div className="inset-0 pointer-events-none absolute z-1" />
              <span className="sn text-white font-[family-name:var(--mono)] text-[11px] font-semibold left-[12px] tracking-[.2em] absolute uppercase top-[12px] z-10 [backdrop-filter:blur(8px)] [text-shadow:none]">01 · SaaS</span>
              <div className="sp-content bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white bottom-0 text-[#475569] left-0 absolute right-0 z-10">
                <h3 className="text-site-import-primary leading-[1.08]">SaaS Products</h3>
                <p>We design, build and operate multi-tenant products — from the first prototype to the version that scales to thousands of users.</p>
                <div className="slist flex-wrap">
                  <span className="text-[#334155] font-semibold">Product strategy</span>
                  <span className="text-[#334155] font-semibold">Full-stack build</span>
                  <span className="text-[#334155] font-semibold">Scaling &amp; ops</span>
                </div>
                <a className="sp-action-btn items-center gap-[8px]" href="/labs.html">Explore Swaniki Labs →</a>
              </div>
            </div>
          </article>
          <ImportedArticleWanderBeyondTheHorizon />
          <article className="sp bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white min-h-[520px] overflow-hidden relative z-auto [@media(max-width:820px)]:min-h-[520px]">
            <div className="sp-inner bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white text-site-import-primary h-full overflow-hidden relative [@media(max-width:820px)]:h-full [@media(max-width:820px)]:min-h-[520px]">
              <div className="sp-media h-[44%] top-0 right-0 bottom-auto left-0 absolute z-0" style={{ backgroundImage: "url(\"/site-assets/d95999966bb9a159.png\")" }} />
              <div className="inset-0 pointer-events-none absolute z-1" />
              <span className="sn text-white font-[family-name:var(--mono)] text-[11px] font-semibold left-[12px] tracking-[.2em] absolute uppercase top-[12px] z-10 [backdrop-filter:blur(8px)] [text-shadow:none]">03 · Web</span>
              <div className="sp-content bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white bottom-0 text-[#475569] left-0 absolute right-0 z-10">
                <h3 className="text-site-import-primary leading-[1.08]">Websites That Convert</h3>
                <p>We craft fast, accessible, beautifully-designed marketing sites and portfolios — engineered to perform and easy for you to update.</p>
                <div className="slist flex-wrap">
                  <span className="text-[#334155] font-semibold">Design systems</span>
                  <span className="text-[#334155] font-semibold">Performance</span>
                  <span className="text-[#334155] font-semibold">SEO &amp; CMS</span>
                </div>
                <a className="sp-action-btn items-center gap-[8px]" href="/technologies.html">Explore Swaniki Technologies →</a>
              </div>
            </div>
          </article>
          <article className="sp bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white min-h-[520px] overflow-hidden relative z-auto [@media(max-width:820px)]:min-h-[520px]">
            <div className="sp-inner bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white text-site-import-primary h-full overflow-hidden relative [@media(max-width:820px)]:h-full [@media(max-width:820px)]:min-h-[520px]">
              <div className="sp-media h-[44%] top-0 right-0 bottom-auto left-0 absolute z-0" style={{ backgroundImage: "url(\"/site-assets/9bb4ca992377ec9b.webp\")" }} />
              <div className="inset-0 pointer-events-none absolute z-1" />
              <span className="sn text-white font-[family-name:var(--mono)] text-[11px] font-semibold left-[12px] tracking-[.2em] absolute uppercase top-[12px] z-10 [backdrop-filter:blur(8px)] [text-shadow:none]">04 · Social</span>
              <div className="sp-content bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white bottom-0 text-[#475569] left-0 absolute right-0 z-10">
                <h3 className="text-site-import-primary leading-[1.08]">Social Media Management</h3>
                <p>Strategic multi-channel presence and growth campaigns.</p>
                <div className="slist flex-wrap">
                  <span className="text-[#334155] font-semibold">Instagram &amp; YouTube</span>
                  <span className="text-[#334155] font-semibold">Threads &amp; Meta</span>
                  <span className="text-[#334155] font-semibold">GMB Growth</span>
                </div>
                <a className="sp-action-btn items-center gap-[8px]" href="/about.html#services">Learn more →</a>
              </div>
            </div>
          </article>
        </div>
      </section>
      <ImportedFooter />
      <a className="wa-float items-center justify-center z-60" aria-label="Chat with Swaniki on WhatsApp" href="https://wa.me/917019996099?text=Hi%20Swaniki%2C%20I%27d%20like%20to%20discuss%20a%20project" rel="noopener" target="_blank">
        <svg className="fill-white relative z-1" viewBox="0 0 448 512" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.7 111L0 480l117.7-30.9c32.4 17.7 68.3 27 105.5 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 5.6-3.7 8.4-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5.8-8.5 2.5-11.2 2.5-3.6 5.6-6.9 8.4-10.4 2.8-3.5 3.7-6 5.6-9.3 1.9-3.2 1-6.1-.4-8.6-1.4-2.4-12.5-30-17.1-41.1-4.5-10.9-9.1-9.4-12.5-9.6-3.4-.2-7.3-.2-11.2-.2-3.9 0-10.2 1.4-15.5 7-5.3 5.6-20.3 19.8-20.3 48.3 0 28.5 20.8 56 23.8 59.9 3 3.9 41 62.7 99.2 88 13.9 6 24.7 9.6 33.1 12.3 13.9 4.4 26.5 3.8 36.5 2.3 11.1-1.7 34.3-14 39.2-27.5 4.9-13.5 4.9-25 3.4-27.5-1.4-2.5-5.2-3.9-10.7-6.7z" />
        </svg>
      </a>
      <div className={`nav-drawer${menuOpen ? " is-open" : ""} bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#fffffff2] flex-col gap-[8px] left-[16px] pointer-events-none fixed right-[16px] top-[72px] z-49 [backdrop-filter:blur(24px)]`} id="navDrawer" aria-hidden={!menuOpen} inert={!menuOpen}>
        <a className="items-center justify-between" href="/labs.html"><span>Swaniki Labs</span>{" "}<span>→</span></a>
        <a className="items-center justify-between" href="/technologies.html"><span>Swaniki Technologies</span>{" "}<span>→</span></a>
        <a className="items-center justify-between" href="/about.html#about"><span>About</span>{" "}<span>→</span></a>
        <a className="items-center justify-between" href="/careers.html"><span>Careers</span>{" "}<span>→</span></a>
        <a className="nav-drawer-cta items-center justify-center" href="/contact.html">Start a project</a>
      </div>

    </>
  );
}

function ImportedHeaderGotAProblemLet() {
  return (
    <header className="hero hr-go overflow-hidden text-center">
      <div className="ambient-glow [background:radial-gradient(circle,rgba(99,102,241,.15)_0%,rgba(168,85,247,.08)_45%,transparent_70%)] h-[600px] left-1/2 pointer-events-none absolute top-[22%] w-[600px] z-0" aria-hidden="true" />
      <div className="hero-stage inset-0 overflow-hidden pointer-events-none absolute z-0" aria-hidden="true"><div className="hero-aurora h-[125%] left-1/2 absolute top-[-14%] w-[150%] [background:radial-gradient(40%_52%_at_16%_40%,rgba(15,181,163,.17),transparent_70%),radial-gradient(38%_52%_at_84%_30%,rgba(124,107,240,.19),transparent_70%),radial-gradient(44%_58%_at_50%_4%,rgba(42,143,227,.15),transparent_72%)]" /><div className="hero-beam [background:conic-gradient(from_10deg,transparent_0_42deg,rgba(124,107,240,.12)_56deg,transparent_72deg,transparent_186deg,rgba(15,181,163,.10)_202deg,transparent_218deg)] h-[980px] left-1/2 absolute top-[34%] w-[980px] will-change-transform" /><div className="hero-spot [background:radial-gradient(52%_52%_at_50%_50%,rgba(255,255,255,.85),rgba(255,255,255,0)_72%)] left-1/2 absolute w-[min(820px,86vw)]" /><div className="orb-wrap w1 left-[4%] absolute top-[16%] will-change-transform"><div className="hero-orb [background:radial-gradient(circle,rgba(15,181,163,.34),transparent_66%)] h-full w-full" /></div><div className="orb-wrap w2 absolute will-change-transform"><div className="hero-orb o2 [background:radial-gradient(circle,rgba(124,107,240,.32),transparent_66%)] h-full w-full" /></div><div className="orb-wrap w3 bottom-[2%] left-[16%] absolute will-change-transform"><div className="hero-orb o3 [background:radial-gradient(circle,rgba(42,143,227,.30),transparent_66%)] h-full w-full" /></div><a className="hero-chip c1 overflow-hidden top-1/5 w-[246px] [backdrop-filter:blur(12px)] [rotate:var(--tilt,-4deg)] [will-change:translate,transform]" aria-label="Explore Vibe product" href="/labs/vibe.html"><img className="h-[138px] object-cover w-full [object-position:top_center]" src="/site-assets/a3f06b539cc017e4.webp" alt="Vibe — Live Events preview" loading="lazy" decoding="async" /><figcaption className="items-center text-(--ink) font-[family-name:var(--mono)] text-[10px] justify-between tracking-[.12em] uppercase"><span className="text-(--ink) font-bold">Vibe</span> <em className="text-(--ink-soft) text-[9.5px]">Live Events</em> <span className="chip-arw text-(--indigo) text-[12px] font-bold">↗</span></figcaption></a><a className="hero-chip c2 overflow-hidden top-[42%] w-[246px] [backdrop-filter:blur(12px)] [rotate:var(--tilt,-4deg)] [will-change:translate,transform]" aria-label="Explore KontentOS product" href="/labs/kontentos.html"><img className="h-[138px] object-cover w-full [object-position:top_center]" src="/site-assets/ae7317fcd9da9f39.webp" alt="KontentOS — Content Pipeline preview" loading="lazy" decoding="async" /><figcaption className="items-center text-(--ink) font-[family-name:var(--mono)] text-[10px] justify-between tracking-[.12em] uppercase"><span className="text-(--ink) font-bold">KontentOS</span> <em className="text-(--ink-soft) text-[9.5px]">Content Pipeline</em> <span className="chip-arw text-(--indigo) text-[12px] font-bold">↗</span></figcaption></a></div>
      <div className="wrap max-w-[1200px] relative z-2 [rotate:none] [scale:none]" style={{ translate: "none", opacity: "1", transform: "translate(0px, 0px)" } as CSSProperties}>
        <div className="eyebrow hr items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) font-[family-name:var(--mono)] gap-[9px]" style={{ transform: "translateY(0px) scale(1)", filter: "blur(0px)", opacity: "1" } as CSSProperties}>
          <i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) h-[6px] w-[6px]" />
          <span className="[@media(max-width:560px)]:leading-[1.3] [@media(max-width:560px)]:text-center [@media(max-width:560px)]:whitespace-normal">Digital Product Studio · SaaS · Web · Automation</span>
        </div>
        <h1 className="hr text-(--ink)" style={{ transform: "translateY(0px) scale(1)", filter: "blur(0px)", opacity: "1" } as CSSProperties}>
          <div><span className="sc-w whitespace-pre">Got</span> <span className="sc-w whitespace-pre">a</span> <span className="sc-w whitespace-pre">problem?</span> <span className="grad [-webkit-text-fill-color:transparent]"><span className="sc-w whitespace-pre">Let's</span>{" "}<span className="sc-w whitespace-pre">build</span>{" "}<span className="sol"><span className="sc-w whitespace-pre">the</span>{" "}<span className="sc-w whitespace-pre">solution.</span></span></span></div>
        </h1>
        <p className="hr" style={{ transform: "translateY(0px) scale(1)", filter: "blur(0px)", opacity: "1" } as CSSProperties}>We love a challenge. Bring us an idea or a gnarly problem — custom tools, websites, automations and AI — and Swaniki Labs will put its best effort into solving it.</p>
        <div className="hero-ctas hr flex-wrap gap-[14px] justify-center" style={{ transform: "translateY(0px) scale(1)", filter: "blur(0px)", opacity: "1" } as CSSProperties}><a className="btn btn-primary overflow-hidden" data-magnetic="" href="/contact.html">Bring us your challenge <span className="arrow items-center text-[13px] h-[26px] justify-center w-[26px]">↗</span></a><a className="btn btn-ghost" data-magnetic="" href="#labs">See what we've built</a></div>
      </div>
      <div className="wave-band hr w-full z-1" style={{ transform: "translateY(0px) scale(1)", filter: "blur(0px)", opacity: "1" } as CSSProperties}>
        <picture style={{ display: "contents" }}>
          <source media="(max-width: 767px)" srcSet="data:image/webp;base64,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" />
          <img className="cursor-crosshair inset-0 absolute [width:100%] [height:100%]" id="wave" width="1521" height="200" src="data:image/webp;base64,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" data-site-import-static-fallback="canvas" alt="" />
        </picture>
        <div className="[background:linear-gradient(90deg,var(--paper),transparent_4%,transparent_96%,var(--paper))] inset-0 pointer-events-none absolute" />
      </div>
    </header>
  );
}

function ImportedSection() {
  return (
    <section className="basics relative z-1">
      <div className="wrap max-w-[1200px]">
        <div className="basic-row">
          <span className="basic-label text-(--ink-soft) font-[family-name:var(--mono)] text-[10.5px] tracking-[.24em] text-center uppercase">We can help with</span>
          <p className="basic-text text-(--ink) text-[clamp(16px,2.1vw,22px)] font-bold tracking-[-.02em] leading-[1.65] max-w-[62ch] text-center">Creative Websites · Process Automation · AI-Powered Solutions · Invoicing &amp; Business Tools · Lead &amp; Web Research · Social Media Workflows · Dashboards &amp; Internal Tools · <em className="text-(--indigo)">Your Idea. Our Build.</em></p>
        </div>
        <div className="basic-row">
          <span className="basic-label text-(--ink-soft) font-[family-name:var(--mono)] text-[10.5px] tracking-[.24em] text-center uppercase">The stack we build on</span>
          <div className="marquee overflow-hidden relative [mask:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]" aria-hidden="true">
            <div className="track items-center w-max will-change-transform">
              <div className="set items-center w-max"><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/48cfb52f87dbd843-a787131525f18e13e897b779bddf4fa4.png" alt="React" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">React</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/8df30fcf417f0a39-575da22d6bdbb24e49cb733aef21a1c4.png" alt="Next.js" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Next.js</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/456d4964a7334e23-221db5aef99d4f05cccf7d887fae10fb.png" alt="TypeScript" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">TypeScript</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/d2ead14bc595ca62-47fc22a248dc65c0f0553471b61aa3f1.png" alt="Tailwind" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Tailwind</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/bb0f9708578c414e-5503f5dca388eab139c7b34716ff6403.png" alt="Node.js" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Node.js</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/16908c24f5d95a94-5d5432605939c5b1e640faf9223697e1.png" alt="Python" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Python</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/efb2c9e9202a5bd1-cda4bbfa24e149bd29d1a72389d91ac3.png" alt="PostgreSQL" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">PostgreSQL</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/bf28e51a960b2afd-dc96a4ee064d8b6f83ca8ba2b513d0e9.png" alt="Supabase" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Supabase</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/9c741f9952e8f890-63f615de2dc1cf6b63fd65c6116bf843.png" alt="Docker" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Docker</span></span><span className="logo items-center gap-[9px]"><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">AWS</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/3ab898dbeff5a1bb-79d3c17440d76234278936d8f7fe3102.png" alt="Figma" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Figma</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/59a5937ff1c60e4e-78937f522d7dffeaa4b93b3082eb7766.png" alt="Redis" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Redis</span></span></div>
              <div className="set items-center w-max"><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/48cfb52f87dbd843-a787131525f18e13e897b779bddf4fa4.png" alt="React" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">React</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/8df30fcf417f0a39-575da22d6bdbb24e49cb733aef21a1c4.png" alt="Next.js" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Next.js</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/456d4964a7334e23-221db5aef99d4f05cccf7d887fae10fb.png" alt="TypeScript" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">TypeScript</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/d2ead14bc595ca62-47fc22a248dc65c0f0553471b61aa3f1.png" alt="Tailwind" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Tailwind</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/bb0f9708578c414e-5503f5dca388eab139c7b34716ff6403.png" alt="Node.js" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Node.js</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/16908c24f5d95a94-5d5432605939c5b1e640faf9223697e1.png" alt="Python" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Python</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/efb2c9e9202a5bd1-cda4bbfa24e149bd29d1a72389d91ac3.png" alt="PostgreSQL" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">PostgreSQL</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/bf28e51a960b2afd-dc96a4ee064d8b6f83ca8ba2b513d0e9.png" alt="Supabase" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Supabase</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/9c741f9952e8f890-63f615de2dc1cf6b63fd65c6116bf843.png" alt="Docker" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Docker</span></span><span className="logo items-center gap-[9px]"><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">AWS</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/3ab898dbeff5a1bb-79d3c17440d76234278936d8f7fe3102.png" alt="Figma" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Figma</span></span><span className="logo items-center gap-[9px]"><img className="h-[40px] object-contain w-[40px]" src="/site-assets/59a5937ff1c60e4e-78937f522d7dffeaa4b93b3082eb7766.png" alt="Redis" loading="lazy" /><span className="text-(--ink-soft) font-[family-name:var(--mono)] text-[10px] tracking-[.04em] uppercase">Redis</span></span></div>
            </div>
          </div>
        </div>
        <div className="basic-row">
          <span className="basic-label text-(--ink-soft) font-[family-name:var(--mono)] text-[10.5px] tracking-[.24em] text-center uppercase">Trusted by</span>
          <div className="marquee mq-ltr overflow-hidden relative [mask:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]" aria-hidden="true">
            <div className="track items-center w-max will-change-transform">
              <div className="grp items-center w-max"><span className="clogo items-center h-[72px] justify-center"><img className="h-auto max-h-[42px] max-w-[172px] object-contain w-auto" src="/site-assets/5d2d71583c6a76f8.webp" alt="Hairport by Santinoo Tamang" loading="lazy" decoding="async" /></span><span className="clogo clogo-yash items-center gap-[8px] h-[72px] justify-center min-w-[180px]" aria-label="Yash Honda">{"\n          "}<span className="text-site-import-primary font-[family-name:var(--sans)] text-[17px] font-bold tracking-[-.02em] whitespace-nowrap">Yash Honda</span>{"\n          "}<svg className="flex-none h-[18px] w-auto" viewBox="-1181 -632 2000 1329" aria-hidden="true" {...({ focusable: "false" } as any)}>{"\n            "}<path fill="#e53935" d="M-860.666 696.668s-12.333-40.002-34-61.668S-1083.334 446.334-1108 421.667s-73-72.665-73-142.666c0-70 59-120 130.333-148.667S180.667-369 266.667-405s209.667-91.333 265.667-118S747-624.75 752.25-627.583 760.333-632 762.833-632s4.834 2.167 4.834 5-1.834 6.75-2.417 8.667S716.667-473.667 678.667-425 622-355.667 440-291.667-957.335 199.001-988.001 211.001s-100 33.333-100 84.667c0 41.333 41.333 73.334 53.333 84s338.667 316.999 338.667 316.999h-164.665z" />{"\n            "}<path fill="#cc0000" d="M-1004 365.5s-29.667-27.5-33.667-31.5-12.667-18.999-12.667-29.666 2-36.334 47-50.334S92.001-105.667 149.334-123.667 545.25-254 605.5-281c12.75-5.5 15-6.833 17-6.833s4.583 1.25 4.583 4.333-1.417 5.417-2.5 7.167S565.5-155.5 531.5-118 467-54 405-38.5-623.5 237-629.75 238.75s-13.5 7.5-13.5 15.25c0 12.75 10.5 13.75 10.5 13.75L-1004 365.5z" />{"\n            "}<path fill="#e53935" d="M-982.5,384.5L-897,464l443.5-83.5c0,0-11.5-7.25-11.5-15.625s6.75-13.875,14.875-15.5s651.125-126.374,691.125-133.374s92.666-18.667,135.666-70.667S461.375,23.875,462.75,21.75s1.875-3.375,1.875-4.625-.75-4.375-4-4.375-5,.75-8.25,2S-982.5,384.5-982.5,384.5z" />{"\n            "}<path fill="#cc0000" d="M275,267.5c-1.817,.413-1151.667,215.833-1151.667,215.833l99.667,92.166l531.835-66.999c0,0-10-3.666-10-14s9.833-14.167,15.5-15.167s273.667-40.335,305.167-45.002s83.333-15.5,127-61.5s86.668-97,88.334-99s1.915-3.248,1.915-4.248S281.5,266.5,279,266.5c-.666,0-2.167,.584-4,1z" />{"\n            "}<polygon fill="#e53935" points="-753.333 597 -646.666 697 57.334 697 -206 533" />{"\n          "}</svg>{"\n        "}</span><span className="clogo items-center h-[72px] justify-center"><img className="h-auto max-h-[42px] max-w-[172px] object-contain w-auto" src="/site-assets/8ac6ea8e799be68a.webp" alt="GS Consultants" loading="lazy" decoding="async" /></span><span className="clogo items-center h-[72px] justify-center"><img className="h-auto max-h-[42px] max-w-[172px] object-contain w-auto" src="/site-assets/5d2d71583c6a76f8.webp" alt="Hairport by Santinoo Tamang" loading="lazy" decoding="async" /></span><span className="clogo clogo-yash items-center gap-[8px] h-[72px] justify-center min-w-[180px]" aria-label="Yash Honda">{"\n          "}<span className="text-site-import-primary font-[family-name:var(--sans)] text-[17px] font-bold tracking-[-.02em] whitespace-nowrap">Yash Honda</span>{"\n          "}<svg className="flex-none h-[18px] w-auto" viewBox="-1181 -632 2000 1329" aria-hidden="true" {...({ focusable: "false" } as any)}>{"\n            "}<path fill="#e53935" d="M-860.666 696.668s-12.333-40.002-34-61.668S-1083.334 446.334-1108 421.667s-73-72.665-73-142.666c0-70 59-120 130.333-148.667S180.667-369 266.667-405s209.667-91.333 265.667-118S747-624.75 752.25-627.583 760.333-632 762.833-632s4.834 2.167 4.834 5-1.834 6.75-2.417 8.667S716.667-473.667 678.667-425 622-355.667 440-291.667-957.335 199.001-988.001 211.001s-100 33.333-100 84.667c0 41.333 41.333 73.334 53.333 84s338.667 316.999 338.667 316.999h-164.665z" />{"\n            "}<path fill="#cc0000" d="M-1004 365.5s-29.667-27.5-33.667-31.5-12.667-18.999-12.667-29.666 2-36.334 47-50.334S92.001-105.667 149.334-123.667 545.25-254 605.5-281c12.75-5.5 15-6.833 17-6.833s4.583 1.25 4.583 4.333-1.417 5.417-2.5 7.167S565.5-155.5 531.5-118 467-54 405-38.5-623.5 237-629.75 238.75s-13.5 7.5-13.5 15.25c0 12.75 10.5 13.75 10.5 13.75L-1004 365.5z" />{"\n            "}<path fill="#e53935" d="M-982.5,384.5L-897,464l443.5-83.5c0,0-11.5-7.25-11.5-15.625s6.75-13.875,14.875-15.5s651.125-126.374,691.125-133.374s92.666-18.667,135.666-70.667S461.375,23.875,462.75,21.75s1.875-3.375,1.875-4.625-.75-4.375-4-4.375-5,.75-8.25,2S-982.5,384.5-982.5,384.5z" />{"\n            "}<path fill="#cc0000" d="M275,267.5c-1.817,.413-1151.667,215.833-1151.667,215.833l99.667,92.166l531.835-66.999c0,0-10-3.666-10-14s9.833-14.167 15.5-15.167s273.667-40.335 305.167-45.002s83.333-15.5 127-61.5s86.668-97 88.334-99s1.915-3.248 1.915-4.248S281.5,266.5 279,266.5c-.666,0-2.167,.584-4,1z" />{"\n            "}<polygon fill="#e53935" points="-753.333 597 -646.666 697 57.334 697 -206 533" />{"\n          "}</svg>{"\n        "}</span><span className="clogo items-center h-[72px] justify-center"><img className="h-auto max-h-[42px] max-w-[172px] object-contain w-auto" src="/site-assets/0bbec53122567be5.jpg" alt="" loading="lazy" /></span></div>
              <div className="grp items-center w-max"><span className="clogo items-center h-[72px] justify-center"><img className="h-auto max-h-[42px] max-w-[172px] object-contain w-auto" src="/site-assets/5d2d71583c6a76f8.webp" alt="Hairport by Santinoo Tamang" loading="lazy" decoding="async" /></span><span className="clogo clogo-yash items-center gap-[8px] h-[72px] justify-center min-w-[180px]" aria-label="Yash Honda">{"\n          "}<span className="text-site-import-primary font-[family-name:var(--sans)] text-[17px] font-bold tracking-[-.02em] whitespace-nowrap">Yash Honda</span>{"\n          "}<svg className="flex-none h-[18px] w-auto" viewBox="-1181 -632 2000 1329" aria-hidden="true" {...({ focusable: "false" } as any)}>{"\n            "}<path fill="#e53935" d="M-860.666 696.668s-12.333-40.002-34-61.668S-1083.334 446.334-1108 421.667s-73-72.665-73-142.666c0-70 59-120 130.333-148.667S180.667-369 266.667-405s209.667-91.333 265.667-118S747-624.75 752.25-627.583 760.333-632 762.833-632s4.834 2.167 4.834 5-1.834 6.75-2.417 8.667S716.667-473.667 678.667-425 622-355.667 440-291.667-957.335 199.001-988.001 211.001s-100 33.333-100 84.667c0 41.333 41.333 73.334 53.333 84s338.667 316.999 338.667 316.999h-164.665z" />{"\n            "}<path fill="#cc0000" d="M-1004 365.5s-29.667-27.5-33.667-31.5-12.667-18.999-12.667-29.666 2-36.334 47-50.334S92.001-105.667 149.334-123.667 545.25-254 605.5-281c12.75-5.5 15-6.833 17-6.833s4.583 1.25 4.583 4.333-1.417 5.417-2.5 7.167S565.5-155.5 531.5-118 467-54 405-38.5-623.5 237-629.75 238.75s-13.5 7.5-13.5 15.25c0 12.75 10.5 13.75 10.5 13.75L-1004 365.5z" />{"\n            "}<path fill="#e53935" d="M-982.5,384.5L-897,464l443.5-83.5c0,0-11.5-7.25-11.5-15.625s6.75-13.875,14.875-15.5s651.125-126.374,691.125-133.374s92.666-18.667,135.666-70.667S461.375,23.875,462.75,21.75s1.875-3.375,1.875-4.625-.75-4.375-4-4.375-5,.75-8.25,2S-982.5,384.5-982.5,384.5z" />{"\n            "}<path fill="#cc0000" d="M275,267.5c-1.817,.413-1151.667,215.833-1151.667,215.833l99.667,92.166l531.835-66.999c0,0-10-3.666-10-14s9.833-14.167,15.5-15.167s273.667-40.335,305.167-45.002s83.333-15.5,127-61.5s86.668-97,88.334-99s1.915-3.248,1.915-4.248S281.5,266.5,279,266.5c-.666,0-2.167,.584-4,1z" />{"\n            "}<polygon fill="#e53935" points="-753.333 597 -646.666 697 57.334 697 -206 533" />{"\n          "}</svg>{"\n        "}</span><span className="clogo items-center h-[72px] justify-center"><img className="h-auto max-h-[42px] max-w-[172px] object-contain w-auto" src="/site-assets/8ac6ea8e799be68a.webp" alt="GS Consultants" loading="lazy" decoding="async" /></span><span className="clogo items-center h-[72px] justify-center"><img className="h-auto max-h-[42px] max-w-[172px] object-contain w-auto" src="/site-assets/5d2d71583c6a76f8.webp" alt="Hairport by Santinoo Tamang" loading="lazy" decoding="async" /></span><span className="clogo clogo-yash items-center gap-[8px] h-[72px] justify-center min-w-[180px]" aria-label="Yash Honda">{"\n          "}<span className="text-site-import-primary font-[family-name:var(--sans)] text-[17px] font-bold tracking-[-.02em] whitespace-nowrap">Yash Honda</span>{"\n          "}<svg className="flex-none h-[18px] w-auto" viewBox="-1181 -632 2000 1329" aria-hidden="true" {...({ focusable: "false" } as any)}>{"\n            "}<path fill="#e53935" d="M-860.666 696.668s-12.333-40.002-34-61.668S-1083.334 446.334-1108 421.667s-73-72.665-73-142.666c0-70 59-120 130.333-148.667S180.667-369 266.667-405s209.667-91.333 265.667-118S747-624.75 752.25-627.583 760.333-632 762.833-632s4.834 2.167 4.834 5-1.834 6.75-2.417 8.667S716.667-473.667 678.667-425 622-355.667 440-291.667-957.335 199.001-988.001 211.001s-100 33.333-100 84.667c0 41.333 41.333 73.334 53.333 84s338.667 316.999 338.667 316.999h-164.665z" />{"\n            "}<path fill="#cc0000" d="M-1004 365.5s-29.667-27.5-33.667-31.5-12.667-18.999-12.667-29.666 2-36.334 47-50.334S92.001-105.667 149.334-123.667 545.25-254 605.5-281c12.75-5.5 15-6.833 17-6.833s4.583 1.25 4.583 4.333-1.417 5.417-2.5 7.167S565.5-155.5 531.5-118 467-54 405-38.5-623.5 237-629.75 238.75s-13.5 7.5-13.5 15.25c0 12.75 10.5 13.75 10.5 13.75L-1004 365.5z" />{"\n            "}<path fill="#e53935" d="M-982.5,384.5L-897,464l443.5-83.5c0,0-11.5-7.25-11.5-15.625s6.75-13.875,14.875-15.5s651.125-126.374,691.125-133.374s92.666-18.667,135.666-70.667S461.375,23.875,462.75,21.75s1.875-3.375,1.875-4.625-.75-4.375-4-4.375-5,.75-8.25,2S-982.5,384.5-982.5,384.5z" />{"\n            "}<path fill="#cc0000" d="M275,267.5c-1.817,.413-1151.667,215.833-1151.667,215.833l99.667,92.166l531.835-66.999c0,0-10-3.666-10-14s9.833-14.167 15.5-15.167s273.667-40.335 305.167-45.002s83.333-15.5 127-61.5s86.668-97 88.334-99s1.915-3.248 1.915-4.248S281.5,266.5 279,266.5c-.666,0-2.167,.584-4,1z" />{"\n            "}<polygon fill="#e53935" points="-753.333 597 -646.666 697 57.334 697 -206 533" />{"\n          "}</svg>{"\n        "}</span><span className="clogo items-center h-[72px] justify-center"><img className="h-auto max-h-[42px] max-w-[172px] object-contain w-auto" src="/site-assets/0bbec53122567be5.jpg" alt="" loading="lazy" /></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionSwanikiLabs() {
  const [category, setCategory] = useState("All");
  return (
    <section className="sec wrap max-w-[1200px] relative z-1" id="labs">
      <div className="sec-head reveal items-end flex-wrap gap-[20px] justify-between [rotate:none] [scale:none]" style={{ translate: "none", opacity: "0.9908", transform: "translate(0px, 0px)" } as CSSProperties}>
        <div>
          <div className="eyebrow items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) font-[family-name:var(--mono)] gap-[9px]" style={{ marginBottom: "12px" }}>
            <i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) h-[6px] w-[6px]" />
            <span className="[@media(max-width:560px)]:leading-[1.3] [@media(max-width:560px)]:text-center [@media(max-width:560px)]:whitespace-normal">Products</span>
          </div>
          <h2 className={"\x74ext-reveal in text-[clamp(25px,4.4vw,48px)] font-extrabold tracking-[-.035em] leading-[1.06]"}><span className={"\x74ext-reveal-word"} style={{ "--word-index": "0" } as CSSProperties}>Swaniki</span> <em className="text-(--indigo)"><span className={"\x74ext-reveal-word"} style={{ "--word-index": "1" } as CSSProperties}>Labs</span></em></h2>
          <p className={"sub \x6cine-reveal-ready in text-(--ink-soft) text-[15px] max-w-[38ch]"}>
            <span className={"\x6cine-reveal-line"} style={{ "--line-index": "0" } as CSSProperties}>Where a challenge becomes a product — your ideas and our own, prototyped and shipped by hand.</span>
          </p>
        </div>
        <a className="sec-link items-center gap-[9px] whitespace-nowrap" href="/labs.html">All Labs products <span className="arr">→</span></a>
        <div className="rail-nav gap-[10px]"><button className="rail-btn items-center cursor-pointer text-[17px] h-[44px] justify-center w-[44px]" id="prev" onClick={() => scrollRail("rail", -1)} aria-label="Scroll left">←</button><button className="rail-btn items-center cursor-pointer text-[17px] h-[44px] justify-center w-[44px]" id="next" onClick={() => scrollRail("rail", 1)} aria-label="Scroll right">→</button></div>
      </div>
      <div className="pills reveal in flex-wrap gap-[10px]">{["All", "AI & Research", "Creator Tools", "Web Tools", "Productivity", "Finance", "Community", "Consumer Tech", "Travel Intelligence"].map(value => <button key={value} type="button" className={`pill cursor-pointer text-[13.5px] font-semibold${category === value ? " active" : ""}`} aria-pressed={category === value} onClick={() => { setCategory(value); document.getElementById("rail")?.scrollTo({left: 0}); }}>{value}</button>)}</div>
      <div className="reveal relative [rotate:none] [scale:none]" style={{ translate: "none", opacity: "1", transform: "translate(0px, 0px)" } as CSSProperties}>
        <div className="rail cursor-grab gap-[24px] overflow-x-auto [-ms-overflow-style:none] [scroll-snap-type:x_mandatory] [scrollbar-width:none]" id="rail">
          <a hidden={category !== "All" && !"Consumer Tech, Travel Intelligence".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(15,181,163)", "--c2": "rgb(42,143,227)" } as CSSProperties} data-shot="1" href="/labs/findmytrip.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(15, 181, 163), rgb(42, 143, 227))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/2fe4fa259043598d.webp" alt="FindMyTrip preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">FindMyTrip</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Plan a trip around your budget, with flights, stays, food, activities and weather in view.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Consumer Tech, Travel Intelligence</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"AI & Research".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(15,181,163)", "--c2": "rgb(42,143,227)" } as CSSProperties} data-shot="1" href="/labs/foundersignal.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(15, 181, 163), rgb(42, 143, 227))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/973b96bb3e52fe92.webp" alt="FounderSignal preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">FounderSignal</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Explore product ideas and opportunities relevant to the current market.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">AI &amp; Research</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"Productivity".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(91,83,230)", "--c2": "rgb(124,107,240)" } as CSSProperties} data-shot="1" href="/labs/kontentos.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(91, 83, 230), rgb(124, 107, 240))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/ae7317fcd9da9f39.webp" alt="KontentOS preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />UNDER DEVELOPMENT</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">KontentOS</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Plan, review and publish content through one connected workflow.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Productivity</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"Community".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(42,143,227)", "--c2": "rgb(15,181,163)" } as CSSProperties} data-shot="1" href="/labs/vibe.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(42, 143, 227), rgb(15, 181, 163))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/a3f06b539cc017e4.webp" alt="Vibe preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Vibe</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Find events and follow where the city’s energy is happening.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Community</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"AI & Research".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(124,107,240)", "--c2": "rgb(240,120,140)" } as CSSProperties} data-shot="1" href="/labs/lead-intelligence.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(124, 107, 240), rgb(240, 120, 140))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/39c8a24a9ea37cc2.webp" alt="Lead Intelligence preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />UNDER DEVELOPMENT</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Lead Intelligence</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Score, enrich and route leads so teams can prioritize follow-up.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">AI &amp; Research</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"Web Tools".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(42,143,227)", "--c2": "rgb(124,107,240)" } as CSSProperties} data-shot="1" href="/labs/website-doctor-v2.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(42, 143, 227), rgb(124, 107, 240))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/f676962b740f0713.webp" alt="Website Doctor preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Website Doctor</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Instant health audit and performance diagnostics for your website.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Web Tools</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"Creator Tools".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(91,83,230)", "--c2": "rgb(15,181,163)" } as CSSProperties} data-shot="1" href="/labs/website-builder.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(91, 83, 230), rgb(15, 181, 163))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/a4148b63d160ca18.webp" alt="Website Builder preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />UNDER DEVELOPMENT</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Website Builder</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Turn a written brief into a designed website you can refine.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Creator Tools</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"Community".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(240,120,140)", "--c2": "rgb(124,107,240)" } as CSSProperties} data-shot="1" href="/labs/event-aggregator.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(240, 120, 140), rgb(124, 107, 240))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/056808f7059c8717.webp" alt="Event Aggregator preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />UNDER DEVELOPMENT</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Event Aggregator</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Find city events across sources in one searchable feed.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Community</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"Productivity".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(15,181,163)", "--c2": "rgb(42,143,227)" } as CSSProperties} data-shot="1" href="/labs/swatrack.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(15, 181, 163), rgb(42, 143, 227))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/4b0d2808fff139e0.webp" alt="SwaTrack preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />CHROME EXTENSION</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">SwaTrack</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Track prices in your browser and get alerts when they drop.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Productivity</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"Finance".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(42,143,227)", "--c2": "rgb(91,83,230)" } as CSSProperties} data-shot="1" href="/labs/invoicer.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(42, 143, 227), rgb(91, 83, 230))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/73d1068c8fd82f03.webp" alt="Invoicer preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Invoicer</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Create and send on-brand invoices with accurate totals in seconds.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Finance</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"Interactive".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(42,143,227)", "--c2": "rgb(15,181,163)" } as CSSProperties} data-shot="1" href="https://mailjaiswal.github.io/2048-game/" rel="noopener" target="_blank">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(42, 143, 227), rgb(15, 181, 163))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/07b5d38cc3a9eb55.jpg" alt="2048 Game preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">2048 Game</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Play 2048 with smooth controls on touch or keyboard.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Interactive</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"Procurement".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(42,143,227)", "--c2": "rgb(15,181,163)" } as CSSProperties} data-shot="1" href="/labs/rfqclub.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(42, 143, 227), rgb(15, 181, 163))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/927730c5a45e30a5.webp" alt="RFQClub by Swaniki preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">RFQClub by Swaniki</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Create, send and compare B2B quotes through one shared RFQ workspace.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Procurement</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"Automation".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(91,83,230)", "--c2": "rgb(124,107,240)" } as CSSProperties} data-shot="1" href="/labs/tap-toggle.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(91, 83, 230), rgb(124, 107, 240))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/2c64215beb9b50cd.webp" alt={"Tap & Toggle preview"} loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Tap &amp; Toggle</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Flip, schedule and manage your automations with a single tap.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Automation</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"Productivity".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(15,181,163)", "--c2": "rgb(42,143,227)" } as CSSProperties} data-shot="1" href="/labs/myhr.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(15, 181, 163), rgb(42, 143, 227))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/2bd54ca5497fc0b0.webp" alt="myHR by Swaniki preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">myHR by Swaniki</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Run attendance, payroll and people operations from one clean HR dashboard.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Productivity</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"Marketing".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(124,107,240)", "--c2": "rgb(42,143,227)" } as CSSProperties} data-shot="1" href="/labs/gmb.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(124, 107, 240), rgb(42, 143, 227))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/f84eee08a2c51b55.webp" alt="GMB by Swaniki preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">GMB by Swaniki</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Manage Google Business Profile listings, reviews and posts in one place.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Marketing</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a hidden={category !== "All" && !"Careers".split(", ").includes(category)} className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(234,91,35)", "--c2": "rgb(245,158,66)" } as CSSProperties} data-shot="1" href="/labs/swapiki.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(234, 91, 35), rgb(245, 158, 66))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/d37fd7e761ee456a.webp" alt="Swapiki preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Swapiki</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">Tech jobs and internships across India. Apply with real project proof and a 2-minute voice walkthrough, heard by humans not AI.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Careers</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
              </div>
            </div>
          </a>
        </div>
        <button className="rail-cue items-center text-white cursor-pointer h-[54px] justify-center w-[54px] z-6" onClick={() => scrollRail("rail", 1)} aria-label="Scroll products">
          <svg className="fill-none h-[22px] stroke-white w-[22px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2.4]" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

function ImportedSectionSwanikiTechnologies() {
  return (
    <section className="sec wrap max-w-[1200px] relative z-1" id="tech">
      <div className="sec-head reveal items-end flex-wrap gap-[20px] justify-between [rotate:none] [scale:none]" style={{ translate: "none", opacity: "1", transform: "translate(0px, 0px)" } as CSSProperties}>
        <div>
          <div className="eyebrow items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) font-[family-name:var(--mono)] gap-[9px]" style={{ marginBottom: "12px" }}>
            <i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) h-[6px] w-[6px]" />
            <span className="[@media(max-width:560px)]:leading-[1.3] [@media(max-width:560px)]:text-center [@media(max-width:560px)]:whitespace-normal">Websites</span>
          </div>
          <h2 className={"\x74ext-reveal in text-[clamp(25px,4.4vw,48px)] font-extrabold tracking-[-.035em] leading-[1.06]"}><span className={"\x74ext-reveal-word"} style={{ "--word-index": "0" } as CSSProperties}>Swaniki</span> <em className="text-(--indigo)"><span className={"\x74ext-reveal-word"} style={{ "--word-index": "1" } as CSSProperties}>Technologies</span></em></h2>
          <p className={"sub \x6cine-reveal-ready in text-(--ink-soft) text-[15px] max-w-[38ch]"}>
            <span className={"\x6cine-reveal-line"} style={{ "--line-index": "0" } as CSSProperties}>Websites we've designed and shipped for clients — fast, responsive, and built to convert.</span>
          </p>
        </div>
        <a className="sec-link items-center gap-[9px] whitespace-nowrap" href="/technologies.html">All client websites <span className="arr">→</span></a>
        <div className="rail-nav gap-[10px]"><button className="rail-btn items-center cursor-pointer text-[17px] h-[44px] justify-center w-[44px]" onClick={() => scrollRail("railTech", -1)} aria-label="Scroll left">←</button><button className="rail-btn items-center cursor-pointer text-[17px] h-[44px] justify-center w-[44px]" onClick={() => scrollRail("railTech", 1)} aria-label="Scroll right">→</button></div>
      </div>
      <div className="reveal relative [rotate:none] [scale:none]" style={{ translate: "none", opacity: "1", transform: "translate(0px, 0px)" } as CSSProperties}>
        <div className="rail cursor-grab gap-[24px] overflow-x-auto [-ms-overflow-style:none] [scroll-snap-type:x_mandatory] [scrollbar-width:none]" id="railTech">
          <a className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(15,181,163)", "--c2": "rgb(42,143,227)" } as CSSProperties} data-shot="1" href="/websites/yash-honda.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(15, 181, 163), rgb(42, 143, 227))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/e1598c1d6ec126cf.webp" alt="Yash Honda preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Yash Honda</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">A Honda dealership website presenting its vehicle range and ways to enquire.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Automotive</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(240,120,140)", "--c2": "rgb(42,143,227)" } as CSSProperties} data-shot="1" href="/websites/between-your-buns.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(240, 120, 140), rgb(42, 143, 227))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/f6f178bf98c81074.webp" alt="Between Your Buns preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Between Your Buns</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">A burger brand website presenting its menu and food through playful brand imagery.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Food</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(42,143,227)", "--c2": "rgb(15,181,163)" } as CSSProperties} data-shot="1" href="/websites/novoexim.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(42, 143, 227), rgb(15, 181, 163))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/17465132b5d2cbe0.webp" alt="NovoExim preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">NovoExim</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">A trade and logistics website introducing the company’s B2B services and international operations.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Trade &amp; Logistics</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(91,83,230)", "--c2": "rgb(124,107,240)" } as CSSProperties} data-shot="1" href="/websites/gs-consultants.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(91, 83, 230), rgb(124, 107, 240))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/2959f66bc8ca0122.webp" alt="GSconsultants preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">GSconsultants</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">A professional services website presenting legal, company-secretary, accounting and compliance support for businesses and individuals.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Professional Services</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(15,181,163)", "--c2": "rgb(42,143,227)" } as CSSProperties} data-shot="1" href="/websites/gara.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(15, 181, 163), rgb(42, 143, 227))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/1bc8944e9b273ad9.webp" alt="Gara preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Gara</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">A real-estate website for builders to showcase their projects and premium residences.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Real Estate</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(91,83,230)", "--c2": "rgb(124,107,240)" } as CSSProperties} data-shot="1" href="/websites/ankur-jaiswal.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(91, 83, 230), rgb(124, 107, 240))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/1c9124fbb5094ac2.webp" alt="Ankur Jaiswal preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Ankur Jaiswal</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">An executive résumé presenting engineering and product leadership through project case studies.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Personal · Leadership</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(124,107,240)", "--c2": "rgb(42,143,227)" } as CSSProperties} data-shot="1" href="/websites/coffee-factory.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(124, 107, 240), rgb(42, 143, 227))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/fb71ff2182d7a522.webp" alt="The Coffee Factory preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">The Coffee Factory</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">An online roastery storefront introducing its coffees, roast options and subscriptions.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Hospitality</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(124,107,240)", "--c2": "rgb(15,181,163)" } as CSSProperties} data-shot="1" href="/websites/boutique-hotel.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(124, 107, 240), rgb(15, 181, 163))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/c4666da966401e8b.webp" alt="Boutique Hotel preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Boutique Hotel</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">A hotel and restaurant website presenting its rooms, dining and booking information.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Hospitality</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(240,120,140)", "--c2": "rgb(124,107,240)" } as CSSProperties} data-shot="1" href="/websites/myra-studio.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(240, 120, 140), rgb(124, 107, 240))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/5ee3b28b89ca5857.webp" alt="Myra Studio preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Myra Studio</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">A fashion and brand studio portfolio showcasing its visual identity and editorial work.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Fashion</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(91,83,230)", "--c2": "rgb(124,107,240)" } as CSSProperties} data-shot="1" href="/websites/hairport.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(91, 83, 230), rgb(124, 107, 240))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/29646c23542e1baa.webp" alt="Hairport by Santinoo preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Hairport by Santinoo</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">A salon website presenting hair services, its work and ways to get in touch or book.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Beauty</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
              </div>
            </div>
          </a>
          <a className="card cursor-pointer overflow-hidden w-[calc((100%_-_24px)/1.2)] will-change-transform [scroll-snap-align:start]" style={{ "--c1": "rgb(15,181,163)", "--c2": "rgb(91,83,230)" } as CSSProperties} data-shot="1" href="/websites/executive-portfolio.html">
            <div className="mock inset-0 overflow-hidden absolute z-0" style={{ background: "radial-gradient(120% 90% at 22% 0%, rgb(15, 181, 163), rgb(91, 83, 230))" }}>
              <div className="absolute top-[190px] left-[22px] right-[22px] h-[212px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.18)", backdropFilter: "blur(6px)", padding: "16px" } as CSSProperties}>
                <div className="[gap:6px]" style={{ display: "flex" }}>
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.55)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.35)]" style={{ borderRadius: "50%" }} />
                  <i className="w-[8px] h-[8px] [background:rgba(255,_255,_255,_0.22)]" style={{ borderRadius: "50%" }} />
                </div>
                <div className="absolute left-[16px] right-[16px] top-[52px] h-[9px] [background:rgba(255,_255,_255,_0.22)] [overflow:hidden]" style={{ borderRadius: "9px" }}>
                  <div className="absolute [top:0px] [bottom:0px] [width:40%] [background:rgb(255,_255,_255)]" style={{ borderRadius: "9px", animation: "load 3.2s var(--ease) infinite" } as CSSProperties} />
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-[16px] h-[110px] items-end [gap:8px]" style={{ display: "flex" }}>
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.00s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.16s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.32s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.48s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.64s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.80s infinite" } as CSSProperties} />
                  <div className="[flex:1_1_0%] [background:linear-gradient(rgb(255,_255,_255),_rgba(255,_255,_255,_0.4))]" style={{ borderRadius: "6px 6px 0px 0px", transformOrigin: "center bottom", animation: "eq 2.6s var(--ease) 0.96s infinite" } as CSSProperties} />
                </div>
              </div>
              <div className="absolute top-[430px] left-[22px] w-[96px] h-[96px] [background:rgba(255,_255,_255,_0.1)]" style={{ borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.16)", animation: "7s ease-in-out 0s infinite normal none running float" } as CSSProperties} />
              <div className="absolute top-[452px] left-[132px] right-[22px] h-[12px] [background:rgba(255,_255,_255,_0.16)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[476px] left-[132px] w-[55%] h-[12px] [background:rgba(255,_255,_255,_0.12)]" style={{ borderRadius: "6px" }} />
              <div className="absolute top-[500px] left-[132px] w-[38%] h-[12px] [background:rgba(255,_255,_255,_0.09)]" style={{ borderRadius: "6px" }} />
            </div>
            <img className="shot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground object-cover absolute z-1" src="/site-assets/b16cff259c949d4b.webp" alt="Executive Portfolio preview" loading="lazy" decoding="async" />
            <div className="spot [background:radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,.20),transparent_46%)] inset-0 pointer-events-none absolute z-3" />
            <div className="sheen [background:linear-gradient(115deg,transparent_32%,rgba(255,255,255,.22)_46%,transparent_60%)] inset-0 pointer-events-none absolute z-2" />
            <span className="status items-center text-white text-[11px] font-extrabold gap-[7px] tracking-[.08em] absolute uppercase z-10 [backdrop-filter:blur(14px)]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-current h-[7px] w-[7px]" />PRODUCT LIVE</span>
            <div className="foot bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0f172a99] bottom-0 text-white flex-col gap-[8px] left-0 absolute right-0 z-10 [backdrop-filter:blur(18px)]">
              <h3 className="text-white font-bold tracking-normal leading-[1.2]">Executive Portfolio</h3>
              <p className="one text-[#ffffffe0] text-[13px] font-normal leading-[1.45] overflow-hidden [line-clamp:2]">A portfolio presenting the experience and work of a C-suite and board-level advisor.</p>
              <div className="foot-meta items-center flex-wrap gap-[10px] justify-between">
                <span className="cat items-center text-[#ffffffe6] font-[family-name:var(--mono)] text-[9px] tracking-[.08em] leading-[1.35] max-w-full uppercase">Executive</span>
                <span className="card-action items-center text-[12.5px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
              </div>
            </div>
          </a>
        </div>
        <button className="rail-cue items-center text-white cursor-pointer h-[54px] justify-center w-[54px] z-6" onClick={() => scrollRail("railTech", 1)} aria-label="Scroll websites">
          <svg className="fill-none h-[22px] stroke-white w-[22px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2.4]" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

function ImportedSectionAClearPathFrom() {
  return (
    <section className="method wrap bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper) max-w-[1200px] relative z-2" id="method">
      <div className="m-grid items-start max-w-[1140px]">
        <div className={"\x6d-left top-[118px]"}>
          <div className="k text-(--indigo) font-[family-name:var(--mono)] text-[11px] tracking-[.2em] uppercase">How we work</div>
          <h2 className={"\x74ext-reveal in text-[clamp(34px,4.6vw,58px)] font-extrabold tracking-[-.04em] leading-[1.02]"}><span className={"\x74ext-reveal-word"} style={{ "--word-index": "0" } as CSSProperties}>A</span> <span className={"\x74ext-reveal-word"} style={{ "--word-index": "1" } as CSSProperties}>clear</span> <span className={"\x74ext-reveal-word"} style={{ "--word-index": "2" } as CSSProperties}>path</span> <span className={"\x74ext-reveal-word"} style={{ "--word-index": "3" } as CSSProperties}>from</span> <em className="text-(--indigo)"><span className={"\x74ext-reveal-word"} style={{ "--word-index": "4" } as CSSProperties}>idea</span>{" "}<span className={"\x74ext-reveal-word"} style={{ "--word-index": "5" } as CSSProperties}>to</span>{" "}<span className={"\x74ext-reveal-word"} style={{ "--word-index": "6" } as CSSProperties}>impact.</span></em></h2>
          <p className={"sub \x6cine-reveal-ready in text-(--ink-soft) text-[16.5px] leading-[1.62] max-w-[36ch]"}>
            <span className={"\x6cine-reveal-line"} style={{ "--line-index": "0" } as CSSProperties}>Four repeatable stages take you from first conversation to a product that keeps improving long after launch.</span>
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
          <article className={"\x6d-card reveal past overflow-hidden [rotate:none] [scale:none]"} style={{ translate: "none", opacity: "1", transform: "translate(0px, 0px)" } as CSSProperties}>
            <div className={"\x6d-thumb [background:linear-gradient(140deg,#0FB5A3,#5B53E6)] overflow-hidden relative"}><span className="num items-center bottom-[12px] text-white text-[13px] font-extrabold h-[30px] justify-center left-[12px] absolute w-[30px] z-3 [backdrop-filter:blur(6px)]">1</span><img className="h-full inset-0 object-cover absolute w-full" alt="Team mapping requirements together" loading="lazy" src="/site-assets/e23003080ff46877.avif" /></div>
            <span className="k font-[family-name:var(--mono)] text-[10.5px] tracking-[.16em] uppercase">Step 01 · Tell us</span>
            <h3 className="text-[23px] font-extrabold tracking-[-.028em] leading-[1.16]">Tell us your challenge</h3>
            <p className="text-(--ink-soft) text-[15.5px] font-normal leading-[1.66]">What are you trying to build? Bring us an idea, workflow, or business problem — we turn ambiguity into a clear, agreed plan.</p>
          </article>
          <article className={"\x6d-card reveal past overflow-hidden [rotate:none] [scale:none]"} style={{ translate: "none", opacity: "1", transform: "translate(0px, 0px)" } as CSSProperties}>
            <div className={"\x6d-thumb [background:linear-gradient(140deg,#0FB5A3,#5B53E6)] overflow-hidden relative"}><span className="num items-center bottom-[12px] text-white text-[13px] font-extrabold h-[30px] justify-center left-[12px] absolute w-[30px] z-3 [backdrop-filter:blur(6px)]">2</span><img className="h-full inset-0 object-cover absolute w-full" alt="Design sketches and wireframes in progress" loading="lazy" src="/site-assets/c75b74653d8ca470.avif" /></div>
            <span className="k font-[family-name:var(--mono)] text-[10.5px] tracking-[.16em] uppercase">Step 02 · We design</span>
            <h3 className="text-[23px] font-extrabold tracking-[-.028em] leading-[1.16]">Turn idea into experience</h3>
            <p className="text-(--ink-soft) text-[15.5px] font-normal leading-[1.66]">We map user flows, interface architecture, and technical blueprints before writing a single line of production code.</p>
          </article>
          <article className={"\x6d-card reveal past overflow-hidden [rotate:none] [scale:none]"} style={{ translate: "none", opacity: "1", transform: "translate(0px, 0px)" } as CSSProperties}>
            <div className={"\x6d-thumb [background:linear-gradient(140deg,#0FB5A3,#5B53E6)] overflow-hidden relative"}><span className="num items-center bottom-[12px] text-white text-[13px] font-extrabold h-[30px] justify-center left-[12px] absolute w-[30px] z-3 [backdrop-filter:blur(6px)]">3</span><img className="h-full inset-0 object-cover absolute w-full" alt="Code being written during an iterative build" loading="lazy" src="/site-assets/129ef568262fc193.avif" /></div>
            <span className="k font-[family-name:var(--mono)] text-[10.5px] tracking-[.16em] uppercase">Step 03 · We build</span>
            <h3 className="text-[23px] font-extrabold tracking-[-.028em] leading-[1.16]">Build and ship the product</h3>
            <p className="text-(--ink-soft) text-[15.5px] font-normal leading-[1.66]">Rapid, sprint-based delivery with working software you can see, test, and react to every single week.</p>
          </article>
          <article className={"\x6d-card reveal active overflow-hidden [rotate:none] [scale:none]"} style={{ translate: "none", opacity: "1", transform: "translate(0px, 0px)" } as CSSProperties}>
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
    <article className="sp bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white min-h-[520px] overflow-hidden relative z-auto [@media(max-width:820px)]:min-h-[520px]">
      <div className="sp-inner bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white text-site-import-primary h-full overflow-hidden relative [@media(max-width:820px)]:h-full [@media(max-width:820px)]:min-h-[520px]">
        <div className="sp-media sp-frame h-[44%] top-0 right-0 bottom-auto left-0 absolute z-0">
          <img className="automation-still" src="/site-assets/automation-preview.png" alt="Custom automation interactive build demonstration" data-site-import-static-fallback="automation-demo" />
        </div>
        <div className="inset-0 pointer-events-none absolute z-1" />
        <span className="sn text-white font-[family-name:var(--mono)] text-[11px] font-semibold left-[12px] tracking-[.2em] absolute uppercase top-[12px] z-10 [backdrop-filter:blur(8px)] [text-shadow:none]">02 · Automation</span>
        <div className="sp-content bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white bottom-0 text-[#475569] left-0 absolute right-0 z-10">
          <h3 className="text-site-import-primary leading-[1.08]">Custom IT &amp; Automation</h3>
          <p>We map manual, fragile processes and replace them with automations and internal tools that quietly run in the background.</p>
          <div className="slist flex-wrap">
            <span className="text-[#334155] font-semibold">Workflow mapping</span>
            <span className="text-[#334155] font-semibold">Integrations</span>
            <span className="text-[#334155] font-semibold">AI-assisted tooling</span>
          </div>
          <a className="sp-action-btn sp-action-btn--dot-morph items-center gap-[8px]" href="/contact.html"><span className="sp-action-dot" aria-hidden="true" />Start a project →</a>
        </div>
      </div>
    </article>
  );
}

function ImportedFooter() {
  return (
    <footer className="relative z-1" id="contact">
      <div className="wrap max-w-[1200px]">
        <div className="foot-grid">
          <div className="foot-col foot-brand max-w-[34ch]">
            <span className="brand" style={{ fontSize: "26px" }}>
              <span className="mark [-webkit-text-fill-color:transparent]">Swaniki</span>
            </span>
            <p className="leading-[1.62]">An IT studio building SaaS products, custom automations and modern websites — engineered to perform, designed to last.</p>
            <div className="foot-social gap-[12px]"><a className="items-center justify-center leading-[1.42] w-[38px]" aria-label="X" href="https://x.com" rel="noopener" target="_blank"><svg className="fill-current h-[17px] w-[17px]" viewBox="0 0 24 24"><path d="M18.9 2H22l-6.9 7.9L23 22h-6.4l-5-6.1L5.9 22H2.8l7.4-8.4L1.5 2H8l4.5 5.6L18.9 2Zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20Z" /></svg></a><a className="items-center justify-center leading-[1.42] w-[38px]" aria-label="LinkedIn" href="https://linkedin.com" rel="noopener" target="_blank"><svg className="fill-current h-[17px] w-[17px]" viewBox="0 0 24 24"><path d="M6.94 5A1.94 1.94 0 1 1 3.06 5a1.94 1.94 0 0 1 3.88 0ZM3.4 8.4h3.1V21H3.4V8.4Zm5.3 0h2.97v1.72h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.1v-5.56c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94V21H8.7V8.4Z" /></svg></a><a className="items-center justify-center leading-[1.42] w-[38px]" aria-label="YouTube" href="https://youtube.com" rel="noopener" target="_blank"><svg className="fill-current h-[17px] w-[17px]" viewBox="0 0 24 24"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" /></svg></a><a className="items-center justify-center leading-[1.42] w-[38px]" aria-label="Threads" href="https://threads.net" rel="noopener" target="_blank"><svg className="fill-current h-[17px] w-[17px]" viewBox="0 0 24 24"><path d="M12.19 2.38a9.8 9.8 0 0 0-2 .2 6.5 6.5 0 0 0-4.5 2.33A6.4 6.4 0 0 0 4.2 9.6c-.06 1.03.06 2.2.3 3.15a9.7 9.7 0 0 0 1.34 3.05 6.7 6.7 0 0 0 5.85 3.34c1.75.05 3.44-.46 5.17-1.02a11 11 0 0 0 1.86-.73 6.56 6.56 0 0 1-2.98 4.55 6.64 6.64 0 0 1-3.22.86 5.26 5.26 0 0 1-3.6-1.6.68.68 0 0 0-.42-.2.63.63 0 0 0-.46.15c-.36.27-1.07.8-1 1.5.1.85 1.6 1.92 2.72 2.31.79.27 1.51.44 2.22.55.54.08 1.1.1 1.64.08a11.6 11.6 0 0 0 3.48-.55 8.3 8.3 0 0 0 4.7-4.25 11.1 11.1 0 0 0 .96-2.31 6.2 6.2 0 0 0 .2-2.3c-.06-.52-.13-1.9-.19-2.4-.1-.68-.2-1.29-.32-1.77a9.6 9.6 0 0 0-1.3-2.88.73.73 0 0 0-.6-.35h-.27a.73.73 0 0 0-.5.19.7.7 0 0 0-.23.42c.02.33.05.66.08 1-.02 0-.02-.01-.05 0-1.35-.9-3.14-1.48-5.2-1.48Zm.05 3.68c1.56 0 2.9.5 3.96 1.41.06.05.06.14.01.2a8.8 8.8 0 0 1-.65.74c-.3.26-.36.32-.55.85a6.6 6.6 0 0 0-.33 1.7c-.03.54.02 1.17.14 1.88.07.41.1.62.13.8l.04.23c.05.26.07.4.08.52.02.2.01.6-.09.84l-.11.28c-.23.64-.78 1.4-1.36 1.88-.62.5-1.36.83-2.03.83-.7 0-1.32-.4-1.72-1.12-.3-.55-.3-1.3.04-2.2.14-.4.34-.87.58-1.4l.15-.29c.08-.15.15-.3.22-.45.43-.9.83-1.76 1.2-2.6a5.9 5.9 0 0 0 .38-1.12.62.62 0 0 0-.5-.77.6.6 0 0 0-.7.42c-.04.16-.1.54-.12.7a13.4 13.4 0 0 1-.03.72.66.66 0 0 1-.4.5.66.66 0 0 1-.62-.08 2.8 2.8 0 0 1-.38-.4l-.26-.4a.7.7 0 0 1-.08-.57.64.64 0 0 1 .34-.4c.5-.3.88-.7 1.1-1.2.12-.27.16-.6.07-.92-.1-.34-.34-.5-.72-.5Zm.02 3.4c-.42.95-.93 1.87-1.43 2.78-.22.4-.43.8-.61 1.18v.02c-.06.15-.13.34-.16.47-.11.4-.13.7-.06.92.07.23.26.48.5.65.27.2.66.3 1.14.3.55 0 1.15-.28 1.66-.7.5-.4.94-.97 1.13-1.36.12-.24.22-.7.24-1.14.01-.16-.01-.42-.04-.71a9.5 9.5 0 0 0-.12-.7l-.05-.2c-.03-.12-.1-.36-.22-.56l-.13-.23c-.23-.4-.56-.76-.88-1.16-.04.02 0 0-.01 0q0 0-.01 0Z" /></svg></a><a className="items-center justify-center leading-[1.42] w-[38px]" aria-label="Instagram" href="https://instagram.com" rel="noopener" target="_blank"><svg className="fill-current h-[17px] w-[17px]" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38a3.7 3.7 0 0 1-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05 0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.76.72 1.4 1.38 2.06a5.9 5.9 0 0 0 2.06 1.38c.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.06-1.38 5.9 5.9 0 0 0 1.38-2.06c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.06A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.15a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" /></svg></a></div>
          </div>
          <div className="foot-col"><h4 className="text-(--ink) font-[family-name:var(--mono)] text-[10.5px] tracking-[.18em] uppercase">Products · Labs</h4><a className="leading-[1.42]" href="/labs/findmytrip.html">FindMyTrip</a><a className="leading-[1.42]" href="/labs/foundersignal.html">FounderSignal</a><a className="leading-[1.42]" href="/labs/kontentos.html">KontentOS</a><a className="leading-[1.42]" href="/labs/vibe.html">Vibe</a><a className="leading-[1.42]" href="/labs/lead-intelligence.html">Lead Intelligence</a><a className="leading-[1.42]" href="/labs/website-doctor-v2.html">Website Doctor</a><a className="leading-[1.42]" href="/labs/website-builder.html">Website Builder</a><a className="leading-[1.42]" href="/labs/invoicer.html">Invoicer</a><a className="leading-[1.42]" href="/labs.html">All products →</a></div>
          <div className="foot-col"><h4 className="text-(--ink) font-[family-name:var(--mono)] text-[10.5px] tracking-[.18em] uppercase">Websites · Technologies</h4><a className="leading-[1.42]" href="/websites/novoexim.html">NovoExim</a><a className="leading-[1.42]" href="/websites/executive-portfolio.html">Executive Portfolio</a><a className="leading-[1.42]" href="/websites/yash-honda.html">Yash Honda</a><a className="leading-[1.42]" href="/websites/hairport.html">Hairport Salon</a><a className="leading-[1.42]" href="/websites/coffee-factory.html">The Coffee Factory</a><a className="leading-[1.42]" href="/technologies.html">All websites →</a></div>
          <div className="foot-col"><h4 className="text-(--ink) font-[family-name:var(--mono)] text-[10.5px] tracking-[.18em] uppercase">Studio</h4><a className="leading-[1.42]" href="/about.html#services">Services</a><a className="leading-[1.42]" href="/about.html#about">About</a><a className="leading-[1.42]" href="/careers.html">Careers</a><a className="leading-[1.42]" href="/#method">How we work</a><a className="leading-[1.42]" href="/contact.html">Contact us</a></div>
          <div className="foot-col"><h4 className="text-(--ink) font-[family-name:var(--mono)] text-[10.5px] tracking-[.18em] uppercase">Legal</h4><a className="leading-[1.42]" href="/contact.html">Privacy Policy</a><a className="leading-[1.42]" href="/contact.html">Terms of Service</a><a className="leading-[1.42]" href="/contact.html">Disclaimer</a><a className="leading-[1.42]" href="/contact.html">Cookie Policy</a></div>
        </div>
        <div className="foot-legal items-center text-(--ink-soft) flex-wrap text-[12.5px] gap-[16px] justify-between">
          <p>© 2026 <b className="[color:var(--ink)]">Swaniki LLP</b> — Swaniki, Swaniki Technologies and Swaniki Labs are operating brand names of Swaniki LLP. All rights reserved.</p>
          <a className={"\x74o-top items-center gap-[8px]"} href="#top">Back to top ↑</a>
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
