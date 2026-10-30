import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/labs.css?raw";

export const Route = createFileRoute("/labs")({
  head: () => ({ meta: [{ title: "Swaniki Labs | SaaS Products \u0026 AI Tools" }] }),
  staticData: { importedDocument: { html: { "className": "lenis", "lang": "en" }, body: { "id": "top" } } },
  component: Index,
});

function Index() {
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="bg pointer-events-none z-0" />
      <div className="inset-0 pointer-events-none fixed z-0 [background-image:linear-gradient(rgba(11,14,23,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(11,14,23,0.04)_1px,transparent_1px)] [background-size:66px_66px] [mask:radial-gradient(circle_at_50%_16%,rgb(0,0,0),transparent_80%)]" />
      <div className="grain inset-0 mix-blend-multiply opacity-[0.045] pointer-events-none fixed z-5" />
      <nav className="nav" id="nav" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"collapsed\"],\"removed\":[],\"threshold\":648},\"mobile\":{\"added\":[\"collapsed\"],\"removed\":[],\"threshold\":633}}"}>
        <a className="nav-home" style={{ textDecoration: "none" }} aria-label="Swaniki Home" href="/indexhtml-213456c5dc963e03">
          <span className="brand">
            <img className="brand-mark" src="/site-assets/acbe9434c0d28eff.png" alt="Swaniki Mark" width="30" height="30" />
            <img className="brand-text" src="/site-assets/4042d99102476dbf.png" alt="Swaniki" width="85" height="19" />
          </span>
        </a>
        <div className="nav-links"><a className="active" href="/labshtml-ffe9d364ec6cac35">Swaniki Labs</a><a href="/technologieshtml-1df41b6d05675be9">Swaniki <span className="qual">Technologies</span></a><a href="/abouthtml-db5b16407156eab2#about">About</a><a href="/careershtml-263d6d2aa1009c5e">Careers</a></div>
        <a className="nav-cta" href="/contacthtml-030e61461fb49a1a">Start a project</a>
        <div className="nav-flyout" id="navFlyout" role="region" aria-label="Quick navigation">
          <a className="nav-flyout-link" href="/indexhtml-213456c5dc963e03">Home</a>
          <a className="nav-flyout-link" href="/labshtml-ffe9d364ec6cac35">Products</a>
          <a className="nav-flyout-link" href="/indexhtml-213456c5dc963e03#stack">What we build</a>
          <a className="nav-flyout-link" href="/technologieshtml-1df41b6d05675be9">Websites &amp; Technologies</a>
          <a className="nav-flyout-link" href="/abouthtml-db5b16407156eab2#services">About &amp; Capabilities</a>
          <a className="nav-flyout-link nav-flyout-cta" href="/contacthtml-030e61461fb49a1a">Start a Project</a>
        </div>
        <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <span />
          <span />
          <span />
        </button>
      </nav>
      <ImportedHeaderWhereAChallengeBecomes />
      <ImportedSection />
      <ImportedFooter />
      <a className="wa-float items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#25d366] [box-shadow:rgba(18,140,74,0.45)_0px_10px_30px,rgba(0,0,0,0.2)_0px_2px_8px] flex justify-center fixed no-underline z-60" aria-label="Chat with Swaniki on WhatsApp" href="https://wa.me/917019996099?text=Hi%20Swaniki%2C%20I%27d%20like%20to%20discuss%20a%20project" rel="noopener" target="_blank">
        <svg className="fill-white relative z-1" viewBox="0 0 448 512" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.7 111L0 480l117.7-30.9c32.4 17.7 68.3 27 105.5 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 5.6-3.7 8.4-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5.8-8.5 2.5-11.2 2.5-3.6 5.6-6.9 8.4-10.4 2.8-3.5 3.7-6 5.6-9.3 1.9-3.2 1-6.1-.4-8.6-1.4-2.4-12.5-30-17.1-41.1-4.5-10.9-9.1-9.4-12.5-9.6-3.4-.2-7.3-.2-11.2-.2-3.9 0-10.2 1.4-15.5 7-5.3 5.6-20.3 19.8-20.3 48.3 0 28.5 20.8 56 23.8 59.9 3 3.9 41 62.7 99.2 88 13.9 6 24.7 9.6 33.1 12.3 13.9 4.4 26.5 3.8 36.5 2.3 11.1-1.7 34.3-14 39.2-27.5 4.9-13.5 4.9-25 3.4-27.5-1.4-2.5-5.2-3.9-10.7-6.7z" />
        </svg>
      </a>
      <div className="nav-drawer bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#fffffff2] rounded-[24px] [box-shadow:var(--soft-lg)] flex flex-col gap-[8px] left-[16px] opacity-0 pointer-events-none fixed right-[16px] top-[72px] [transform:translateY(-10px)] z-49 [backdrop-filter:blur(24px)] [border:1px_solid_var(--line)]" id="navDrawer">
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/indexhtml-213456c5dc963e03"><span>Home</span>{" "}<span>→</span></a>
        <a className="active items-center flex text-[15px] font-semibold justify-between no-underline" href="/labshtml-ffe9d364ec6cac35"><span>Swaniki Labs</span>{" "}<span>→</span></a>
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/technologieshtml-1df41b6d05675be9"><span>Swaniki Technologies</span>{" "}<span>→</span></a>
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/abouthtml-db5b16407156eab2#about"><span>About</span>{" "}<span>→</span></a>
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/careershtml-263d6d2aa1009c5e"><span>Careers</span>{" "}<span>→</span></a>
        <a className="nav-drawer-cta items-center flex text-[15px] font-semibold justify-center no-underline" href="/contacthtml-030e61461fb49a1a">Start a project</a>
      </div>
    </>
  );
}

function ImportedHeaderWhereAChallengeBecomes() {
  return (
    <header className="hero overflow-hidden relative z-1">
      <div className="[background:radial-gradient(circle,rgba(99,102,241,0.15)_0%,rgba(168,85,247,0.08)_45%,transparent_70%)] rounded-[50%] h-[600px] left-1/2 pointer-events-none absolute top-[22%] [transform:translate(-50%,-50%)] w-[600px] z-0 [filter:blur(90px)]" aria-hidden="true" />
      <div className="wrap max-w-[1180px] relative z-1">
        <div className="breadcrumb reveal in items-center text-(--ink-soft) flex font-[family-name:var(--mono)] text-[11px] gap-[10px] tracking-[0.14em] uppercase">
          <a className="no-underline" href="/indexhtml-213456c5dc963e03">Home</a>
          <span className="text-(--indigo) font-semibold opacity-75">/</span>
          <b className="text-(--ink) font-bold">Swaniki Labs</b>
        </div>
        <h1 className="reveal in font-extrabold tracking-[-0.04em]" style={{ transitionDelay: "0.05s" }}>Where a challenge becomes a <em className="text-(--indigo) font-[family-name:var(--display)] italic font-normal">product.</em></h1>
        <p className="lede reveal in text-(--ink-soft)" style={{ transitionDelay: "0.1s" }}>Every Labs product started as a problem worth solving. Read each one’s story — the <b className="[color:var(--ink)]">need</b> behind it, the <b className="[color:var(--ink)]">gap</b> it fills and the <b className="[color:var(--ink)]">benefit</b> it delivers — then try the live build.</p>
        <div className="meta reveal in flex flex-wrap gap-[10px]" style={{ transitionDelay: "0.15s" }} id="filterPills"><button className="pill active items-center bg-none! [background-position:0%_0%]! [background-size:auto_auto]! [background-repeat:repeat]! [background-origin:padding-box]! [background-clip:border-box]! [background-attachment:scroll]! bg-(--ink)! text-white! inline-flex text-[12.5px] font-semibold gap-[7px]">All (17)</button><button className="pill live items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0fb5a31a] text-[#0b7a4b] inline-flex text-[12.5px] font-semibold gap-[7px]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) rounded-[50%] h-[7px] w-[7px]" />11 Live</button><button className="pill dev items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#f0b42924] text-[#8a5b08] inline-flex text-[12.5px] font-semibold gap-[7px]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#f0b429] rounded-[50%] h-[7px] w-[7px]" />4 In dev</button><button className="pill ext items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#5b53e61f] text-[#4b3fb0] inline-flex text-[12.5px] font-semibold gap-[7px]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--indigo) rounded-[50%] h-[7px] w-[7px]" />1 Extension</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">AI &amp; Research</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Productivity</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Web Tools</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Finance</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Community</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Consumer Tech</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Travel Intelligence</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Procurement</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Automation</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Marketing</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Careers</button></div>
      </div>
    </header>
  );
}

function ImportedSection() {
  return (
    <section className="sec relative z-1">
      <div className={"\x67rid [&]:grid gap-[26px] max-w-[1180px] relative z-1"} id="grid">
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0s" }} href="/labs/findmytriphtml-79fda8f303a2e4ba">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/2fe4fa259043598d.webp" alt="FindMyTrip — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Consumer Tech · Travel Intelligence</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#7cffe8e0] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">PRODUCT LIVE</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">FindMyTrip</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Plan a trip around your budget, with flights, stays, food, activities and weather in view.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.05s" }} href="/labs/foundersignalhtml-4f9a0e5189d421ad">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/973b96bb3e52fe92.webp" alt="FounderSignal — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">AI &amp; Research</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#7cffe8e0] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">PRODUCT LIVE</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">FounderSignal</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Explore product ideas and opportunities relevant to the current market.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.1s" }} href="/labs/kontentoshtml-c0a2825079506ad9">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/ae7317fcd9da9f39.webp" alt="KontentOS — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Productivity</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#ffcf7deb] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">UNDER DEVELOPMENT</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">KontentOS</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Plan, review and publish content through one connected workflow.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.15s" }} href="/labs/vibehtml-50fc6648ceef8cb9">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/a3f06b539cc017e4.webp" alt="Vibe — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Community</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#7cffe8e0] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">PRODUCT LIVE</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Vibe</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Find events and follow where the city’s energy is happening.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0s" }} href="/labs/lead-intelligencehtml-60cdb3d18b944155">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/39c8a24a9ea37cc2.webp" alt="Lead Intelligence — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">AI &amp; Research</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#ffcf7deb] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">UNDER DEVELOPMENT</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Lead Intelligence</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Score, enrich and route leads so teams can prioritize follow-up.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.05s" }} href="/labs/website-doctor-v2html-2f5331659df0a692">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/f676962b740f0713.webp" alt="Website Doctor — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Web Tools</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#7cffe8e0] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">PRODUCT LIVE</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Website Doctor</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Instant health audit and performance diagnostics for your website.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.1s" }} href="/labs/website-builderhtml-12cea195304e667d">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/a4148b63d160ca18.webp" alt="Website Builder — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Creator Tools</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#ffcf7deb] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">UNDER DEVELOPMENT</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Website Builder</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Turn a written brief into a designed website you can refine.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.15s" }} href="/labs/event-aggregatorhtml-b4a21ec2e01d9287">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/056808f7059c8717.webp" alt="Event Aggregator — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Community</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#ffcf7deb] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">UNDER DEVELOPMENT</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Event Aggregator</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Find city events across sources in one searchable feed.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0s" }} href="/labs/swatrackhtml-43ea34c58c7c9142">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/4b0d2808fff139e0.webp" alt="SwaTrack — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Productivity</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#ffffffa8] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">CHROME EXTENSION</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">SwaTrack</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Track prices in your browser and get alerts when they drop.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.05s" }} href="/labs/invoicerhtml-7402e616e1dda3ad">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/73d1068c8fd82f03.webp" alt="Invoicer — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Finance</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#7cffe8e0] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">PRODUCT LIVE</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Invoicer</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Create and send on-brand invoices with accurate totals in seconds.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.1s" }} href="/labs/myhrhtml-14be143af204d49e">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/2bd54ca5497fc0b0.webp" alt="myHR by Swaniki — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Productivity</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#7cffe8e0] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">PRODUCT LIVE</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">myHR by Swaniki</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Run attendance, payroll and people operations from one clean HR dashboard.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.15s" }} href="/labs/rfqclubhtml-42ceb9680f48d04a">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/927730c5a45e30a5.webp" alt="RFQClub by Swaniki — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Procurement</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#7cffe8e0] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">PRODUCT LIVE</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">RFQClub by Swaniki</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Create, send and compare B2B quotes through one shared RFQ workspace.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0s" }} href="/labs/tap-togglehtml-e4dd3843e7b804ef">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/2c64215beb9b50cd.webp" alt={"Tap & Toggle — product screenshot"} loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Automation</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#7cffe8e0] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">PRODUCT LIVE</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Tap &amp; Toggle</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Flip, schedule and manage your automations with a single tap.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.05s" }} href="/labs/gmbhtml-41f6571dd7dbb9bd">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/f84eee08a2c51b55.webp" alt="GMB by Swaniki — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Marketing</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#7cffe8e0] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">PRODUCT LIVE</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">GMB by Swaniki</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Manage Google Business Profile listings, reviews and posts in one place.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.1s" }} href="https://github.com/mailjaiswal/GlossDesk" rel="noopener" target="_blank">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/bd57ccccaee626e9.webp" alt="GlossDesk — Car Detailer OS — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Automotive</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#ffcf7deb] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">COMING SOON</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">GlossDesk — Car Detailer OS</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A workspace built for running a car detailing business.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.15s" }} href="https://mailjaiswal.github.io/2048-game/" rel="noopener" target="_blank">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/8830df9fd1cfca57.webp" alt="2048 Game — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Interactive</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#7cffe8e0] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">PRODUCT LIVE</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">2048 Game</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Play 2048 with smooth controls on touch or keyboard.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0s" }} href="/labs/swapikihtml-83ec082f772f4833">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/d37fd7e761ee456a.webp" alt="Swapiki — product screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <div className="card-meta items-center flex flex-wrap gap-[8px] justify-between">
              <span className="cat items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#7cffe814] border border-solid border-[#7cffe833] rounded-[999px] text-[#7cffe8eb] inline-flex font-[family-name:var(--mono)] text-[9px] tracking-widest leading-[1.35] max-w-full uppercase">Careers</span>
              <span className="status items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0f] border border-solid border-site-import-card rounded-[999px] text-[#7cffe8e0] inline-flex font-[family-name:var(--mono)] text-[9px] font-semibold tracking-[0.08em] leading-[1.35]">PRODUCT LIVE</span>
            </div>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Swapiki</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">Tech jobs and internships across India. Apply with real project proof and a 2-minute voice walkthrough, heard by humans not AI.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Explore product <span className="arw">→</span></span>
          </div>
        </a>
      </div>
    </section>
  );
}

function ImportedFooter() {
  return (
    <footer className="relative z-1 [border-top:1px_solid_var(--line)]">
      <div className="wrap max-w-[1180px]">
        <div className={"foot-grid [&]:grid"}>
          <div className="foot-col foot-brand max-w-[34ch]">
            <a className={"brand [&]:block font-medium leading-[1.42]"} style={{ fontSize: "26px" }} href="/indexhtml-213456c5dc963e03">
              <span className="bg-clip-text [-webkit-text-fill-color:transparent]">Swaniki</span>
            </a>
            <p className={"[&]:block font-medium leading-[1.62]"}>An IT studio building SaaS products, custom automations and modern websites — engineered to perform, designed to last.</p>
          </div>
          <div className="foot-col"><h4 className="text-(--ink) font-[family-name:var(--mono)] text-[10.5px] tracking-[0.18em] opacity-50 uppercase">Products · Labs</h4><a className={"[&]:block font-medium leading-[1.42]"} href="/labshtml-ffe9d364ec6cac35">All Labs products</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/findmytriphtml-79fda8f303a2e4ba">FindMyTrip</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/foundersignalhtml-4f9a0e5189d421ad">FounderSignal</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/kontentoshtml-c0a2825079506ad9">KontentOS</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/vibehtml-50fc6648ceef8cb9">Vibe</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/swatrackhtml-43ea34c58c7c9142">SwaTrack</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/invoicerhtml-7402e616e1dda3ad">Invoicer</a></div>
          <div className="foot-col"><h4 className="text-(--ink) font-[family-name:var(--mono)] text-[10.5px] tracking-[0.18em] opacity-50 uppercase">Websites · Technologies</h4><a className={"[&]:block font-medium leading-[1.42]"} href="/technologieshtml-1df41b6d05675be9">All client websites</a><a className={"[&]:block font-medium leading-[1.42]"} href="/websites/novoeximhtml-fb54a1e2a17a040d">NovoExim</a><a className={"[&]:block font-medium leading-[1.42]"} href="/websites/executive-portfoliohtml-749ba432870049d3">Executive Portfolio</a><a className={"[&]:block font-medium leading-[1.42]"} href="/websites/yash-hondahtml-196b09df0c178351">Yash Honda</a><a className={"[&]:block font-medium leading-[1.42]"} href="/websites/hairporthtml-7390de30c088c040">Hairport Salon</a><a className={"[&]:block font-medium leading-[1.42]"} href="/websites/coffee-factoryhtml-dbaf61cfaeccfe23">The Coffee Factory</a></div>
          <div className="foot-col"><h4 className="text-(--ink) font-[family-name:var(--mono)] text-[10.5px] tracking-[0.18em] opacity-50 uppercase">Studio</h4><a className={"[&]:block font-medium leading-[1.42]"} href="/abouthtml-db5b16407156eab2#services">Services</a><a className={"[&]:block font-medium leading-[1.42]"} href="/abouthtml-db5b16407156eab2#about">About</a><a className={"[&]:block font-medium leading-[1.42]"} href="/careershtml-263d6d2aa1009c5e">Careers</a><a className={"[&]:block font-medium leading-[1.42]"} href="/indexhtml-213456c5dc963e03#method">How we work</a><a className={"[&]:block font-medium leading-[1.42]"} href="/contacthtml-030e61461fb49a1a">Contact us</a></div>
          <div className="foot-col"><h4 className="text-(--ink) font-[family-name:var(--mono)] text-[10.5px] tracking-[0.18em] opacity-50 uppercase">Legal</h4><a className={"[&]:block font-medium leading-[1.42]"} href="/contacthtml-030e61461fb49a1a">Privacy Policy</a><a className={"[&]:block font-medium leading-[1.42]"} href="/contacthtml-030e61461fb49a1a">Terms of Service</a><a className={"[&]:block font-medium leading-[1.42]"} href="/contacthtml-030e61461fb49a1a">Disclaimer</a><a className={"[&]:block font-medium leading-[1.42]"} href="/contacthtml-030e61461fb49a1a">Cookie Policy</a></div>
        </div>
        <div className="foot-legal items-center text-(--ink-soft) flex flex-wrap text-[12.5px] gap-[16px] justify-between [border-top:1px_solid_var(--line)]">
          <p>© 2026 <b className="[color:var(--ink)]">Swaniki LLP</b> — Swaniki, Swaniki Technologies and Swaniki Labs are operating brand names of Swaniki LLP. All rights reserved.</p>
          <a className={"\x74o-top items-center inline-flex font-semibold gap-[8px] no-underline"} href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}


function useImportedLayout() {
  useEffect(() => {
    const scrollingAreas = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-root]"));
    const scrollTop = () =>
      scrollingAreas.find(
        (node) =>
          node.clientHeight > 0 &&
          node.scrollHeight > node.clientHeight &&
          /^(auto|scroll)$/.test(getComputedStyle(node).overflowY),
      )?.scrollTop ?? window.scrollY;
    const scrollHeaders = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-header]"))
      .slice(0, 128)
      .flatMap((node) => {
        try {
          const states = JSON.parse(node.dataset["siteImportScrollHeader"] || "{}");
          if (!states || typeof states !== "object") return [];
          for (const key of ["desktop", "mobile"]) {
            const state = states[key];
            if (
              !state ||
              !Array.isArray(state.added) ||
              !Array.isArray(state.removed) ||
              state.added.length + state.removed.length > 32
            )
              delete states[key];
          }
          return [
            {
              node,
              states,
              original: new Set(node.classList),
              originalFill: node.getAttribute("fill"),
              transform: node.style.getPropertyValue("transform"),
              priority: node.style.getPropertyPriority("transform"),
            },
          ];
        } catch {
          return [];
        }
      });
    function syncScrollHeaders(reset = false) {
      for (const { node, states, original, originalFill, transform, priority } of scrollHeaders) {
        if (!reset && node.getAttribute("data-import-menu-open") === "true") continue;
        const state = states[innerWidth < 768 ? "mobile" : "desktop"];
        if ([states.desktop, states.mobile].some((entry) => entry && Object.hasOwn(entry, "fill"))) {
          if (originalFill === null) node.removeAttribute("fill");
          else node.setAttribute("fill", originalFill);
        }
        if (states.desktop?.transform || states.mobile?.transform) {
          if (transform) node.style.setProperty("transform", transform, priority);
          else node.style.removeProperty("transform");
        }
        for (const value of [states.desktop, states.mobile].filter(Boolean) as {
          added: string[];
          removed: string[];
        }[]) {
          for (const token of [...(value.added || []), ...(value.removed || [])]) {
            if (typeof token !== "string" || !token || /\s/.test(token)) continue;
            node.classList.toggle(token, original.has(token));
          }
        }
        if (reset || !state || !Number.isFinite(state.threshold) || scrollTop() < state.threshold) continue;
        let until = state.until;
        if (
          typeof state.untilAnchor === "string" &&
          /^\d$/.test(state.untilAnchor) &&
          Number.isFinite(state.untilProgress) &&
          Math.abs(state.untilProgress) <= 2
        ) {
          const anchor = document.querySelector<HTMLElement>(
            '[data-site-import-header-end="' + state.untilAnchor + '"]',
          );
          if (anchor) until = anchor.getBoundingClientRect().top + scrollTop() + innerHeight * state.untilProgress;
        }
        if (Number.isFinite(until) && scrollTop() >= until) continue;
        if (state.fill === null) node.removeAttribute("fill");
        else if (typeof state.fill === "string" && state.fill.length <= 256 && !/url\(/i.test(state.fill))
          node.setAttribute("fill", state.fill);
        if (
          typeof state.transform === "string" &&
          state.transform.length <= 128 &&
          CSS.supports("transform", state.transform)
        )
          node.style.setProperty("transform", state.transform, "important");
        for (const token of state.added || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.add(token);
        for (const token of state.removed || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.remove(token);
      }
    }
    const handleScroll = () => {
      syncScrollHeaders();
    };
    function resizeSummaries() {
      syncScrollHeaders();
    }
    document.addEventListener("load", handleScroll, true);
    resizeSummaries();
    const parallaxFrame = requestAnimationFrame(handleScroll);
    window.addEventListener("resize", resizeSummaries);
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      cancelAnimationFrame(parallaxFrame);
      syncScrollHeaders(true);
      document.removeEventListener("load", handleScroll, true);
      window.removeEventListener("resize", resizeSummaries);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
}
