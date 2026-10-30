import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/technologies.css?raw";

export const Route = createFileRoute("/technologies")({
  head: () => ({ meta: [{ title: "Swaniki Technologies | Client Websites \u0026 Web Design" }] }),
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
        <div className="nav-links"><a href="/labshtml-ffe9d364ec6cac35">Swaniki Labs</a><a className="active" href="/technologieshtml-1df41b6d05675be9">Swaniki <span className="qual">Technologies</span></a><a href="/abouthtml-db5b16407156eab2#about">About</a><a href="/careershtml-263d6d2aa1009c5e">Careers</a></div>
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
      <ImportedHeaderWebsitesWeVeDesigned />
      <ImportedSection />
      <ImportedFooter />
      <a className="wa-float items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#25d366] [box-shadow:rgba(18,140,74,0.45)_0px_10px_30px,rgba(0,0,0,0.2)_0px_2px_8px] flex justify-center fixed no-underline z-60" aria-label="Chat with Swaniki on WhatsApp" href="https://wa.me/917019996099?text=Hi%20Swaniki%2C%20I%27d%20like%20to%20discuss%20a%20project" rel="noopener" target="_blank">
        <svg className="fill-white relative z-1" viewBox="0 0 448 512" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.7 111L0 480l117.7-30.9c32.4 17.7 68.3 27 105.5 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 5.6-3.7 8.4-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5.8-8.5 2.5-11.2 2.5-3.6 5.6-6.9 8.4-10.4 2.8-3.5 3.7-6 5.6-9.3 1.9-3.2 1-6.1-.4-8.6-1.4-2.4-12.5-30-17.1-41.1-4.5-10.9-9.1-9.4-12.5-9.6-3.4-.2-7.3-.2-11.2-.2-3.9 0-10.2 1.4-15.5 7-5.3 5.6-20.3 19.8-20.3 48.3 0 28.5 20.8 56 23.8 59.9 3 3.9 41 62.7 99.2 88 13.9 6 24.7 9.6 33.1 12.3 13.9 4.4 26.5 3.8 36.5 2.3 11.1-1.7 34.3-14 39.2-27.5 4.9-13.5 4.9-25 3.4-27.5-1.4-2.5-5.2-3.9-10.7-6.7z" />
        </svg>
      </a>
      <div className="nav-drawer bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#fffffff2] rounded-[24px] [box-shadow:var(--soft-lg)] flex flex-col gap-[8px] left-[16px] opacity-0 pointer-events-none fixed right-[16px] top-[72px] [transform:translateY(-10px)] z-49 [backdrop-filter:blur(24px)] [border:1px_solid_var(--line)]" id="navDrawer">
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/indexhtml-213456c5dc963e03"><span>Home</span>{" "}<span>→</span></a>
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/labshtml-ffe9d364ec6cac35"><span>Swaniki Labs</span>{" "}<span>→</span></a>
        <a className="active items-center flex text-[15px] font-semibold justify-between no-underline" href="/technologieshtml-1df41b6d05675be9"><span>Swaniki Technologies</span>{" "}<span>→</span></a>
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/abouthtml-db5b16407156eab2#about"><span>About</span>{" "}<span>→</span></a>
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/careershtml-263d6d2aa1009c5e"><span>Careers</span>{" "}<span>→</span></a>
        <a className="nav-drawer-cta items-center flex text-[15px] font-semibold justify-center no-underline" href="/contacthtml-030e61461fb49a1a">Start a project</a>
      </div>
    </>
  );
}

function ImportedHeaderWebsitesWeVeDesigned() {
  return (
    <header className="hero overflow-hidden relative z-1">
      <div className="[background:radial-gradient(circle,rgba(99,102,241,0.15)_0%,rgba(168,85,247,0.08)_45%,transparent_70%)] rounded-[50%] h-[600px] left-1/2 pointer-events-none absolute top-[22%] [transform:translate(-50%,-50%)] w-[600px] z-0 [filter:blur(90px)]" aria-hidden="true" />
      <div className="wrap max-w-[1180px] relative z-1">
        <div className="breadcrumb reveal in items-center text-(--ink-soft) flex font-[family-name:var(--mono)] text-[11px] gap-[10px] tracking-[0.14em] uppercase">
          <a className="no-underline" href="/indexhtml-213456c5dc963e03">Home</a>
          <span className="text-(--indigo) font-semibold opacity-75">/</span>
          <b className="text-(--ink) font-bold">Swaniki Technologies</b>
        </div>
        <h1 className="reveal in font-extrabold tracking-[-0.04em]" style={{ transitionDelay: "0.05s" }}>Websites we’ve designed, built &amp; <em className="text-(--indigo) font-[family-name:var(--display)] italic font-normal">shipped.</em></h1>
        <p className="lede reveal in text-(--ink-soft)" style={{ transitionDelay: "0.1s" }}>Every client site starts with a <b className="[color:var(--ink)]">requirement</b>. Each one here is a real business — you get its <b className="[color:var(--ink)]">description</b>, the brief we answered and the <b className="[color:var(--ink)]">benefits</b> the finished build delivers.</p>
        <div className="meta reveal in flex flex-wrap gap-[10px]" style={{ transitionDelay: "0.15s" }} id="filterPills"><button className="pill active items-center bg-none! [background-position:0%_0%]! [background-size:auto_auto]! [background-repeat:repeat]! [background-origin:padding-box]! [background-clip:border-box]! [background-attachment:scroll]! bg-(--ink)! text-white! inline-flex text-[12.5px] font-semibold gap-[7px]">All (16)</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Trade &amp; Logistics</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Leadership</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Executive</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Hospitality</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Fashion</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Interactive</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Automotive</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Beauty</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Food</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Professional Services</button><button className="pill items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">Real Estate</button></div>
      </div>
    </header>
  );
}

function ImportedSection() {
  return (
    <section className="sec relative z-1">
      <div className={"\x67rid [&]:grid gap-[26px] max-w-[1180px] relative z-1"} id="grid">
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0s" }} href="/websites/yash-hondahtml-196b09df0c178351">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/e1598c1d6ec126cf.webp" alt="Yash Honda — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Automotive</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Yash Honda</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A Honda dealership website presenting its vehicle range and ways to enquire.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">View case study <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.05s" }} href="/websites/between-your-bunshtml-3c4e27c0220e4685">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/f6f178bf98c81074.webp" alt="Between Your Buns — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Food</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Between Your Buns</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A burger brand website presenting its menu and food through playful brand imagery.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">View case study <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.1s" }} href="/websites/novoeximhtml-fb54a1e2a17a040d">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/17465132b5d2cbe0.webp" alt="NovoExim — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Trade &amp; Logistics</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">NovoExim</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A trade and logistics website introducing the company’s B2B services and international operations.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">View case study <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.15s" }} href="/websites/gs-consultantshtml-e77a51d49981f1b5">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/2959f66bc8ca0122.webp" alt="GSconsultants — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Professional Services</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">GSconsultants</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A professional services website introducing legal, CS, accounting and other support for businesses and individuals.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">View case study <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0s" }} href="/websites/garahtml-78f782fc194d90ee">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/1bc8944e9b273ad9.webp" alt="Gara — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Real Estate</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Gara</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A real-estate website for builders to showcase their projects and premium residences.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">View case study <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.05s" }} href="/websites/ankur-jaiswalhtml-1caf08c6fce78692">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/1c9124fbb5094ac2.webp" alt="Ankur Jaiswal Resume — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Personal · Leadership</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Ankur Jaiswal Resume</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">An executive résumé presenting engineering and product leadership through project case studies.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">View case study <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.1s" }} href="/websites/coffee-factoryhtml-dbaf61cfaeccfe23">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/fb71ff2182d7a522.webp" alt="The Coffee Factory — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Hospitality</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">The Coffee Factory</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">An online roastery storefront introducing its coffees, roast options and subscriptions.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">View case study <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.15s" }} href="/websites/boutique-hotelhtml-d5f9f09deebb1c61">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/c4666da966401e8b.webp" alt="Boutique Hotel — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Hospitality</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Boutique Hotel</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A hotel and restaurant website presenting its rooms, dining and booking information.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">View case study <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0s" }} href="/websites/myra-studiohtml-5422f6f15944d28d">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/5ee3b28b89ca5857.webp" alt="Myra Studio — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Fashion</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Myra Studio</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A fashion and brand studio portfolio showcasing its visual identity and editorial work.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">View case study <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.05s" }} href="/websites/hairporthtml-7390de30c088c040">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/29646c23542e1baa.webp" alt="Hairport Salon — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Beauty</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Hairport Salon</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A salon website presenting hair services, its work and ways to get in touch or book.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">View case study <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.1s" }} href="/websites/executive-portfoliohtml-749ba432870049d3">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/b16cff259c949d4b.webp" alt="Executive Portfolio — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Executive</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Executive Portfolio</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A portfolio presenting the experience and work of a C-suite and board-level advisor.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">View case study <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.15s" }} href="https://mailjaiswal.github.io/AnkurJaiswal/" rel="noopener" target="_blank">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/1c9124fbb5094ac2.webp" alt="Ankur Jaiswal @ Swaniki — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Personal &amp; Leadership</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Ankur Jaiswal @ Swaniki</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A personal portfolio introducing Ankur Jaiswal and presenting his work.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0s" }} href="https://bombon-pune.vercel.app/" rel="noopener" target="_blank">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/7be810929dfa7428.webp" alt="BomBon Pune — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Food</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">BomBon Pune</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A Pune café website introducing its specialty coffee, all-day breakfast and dining options.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.05s" }} href="https://hairport-by-santinoo.vercel.app/" rel="noopener" target="_blank">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/2510097068303284.webp" alt="Hairport by Santinoo — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Beauty</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Hairport by Santinoo</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A salon website presenting hair services, its work and ways to get in touch or book.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.1s" }} href="https://mailjaiswal.github.io/Wayfarer/" rel="noopener" target="_blank">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/1c1d93ef96590298.webp" alt="Wayfarer — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Hospitality</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Wayfarer</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A travel company website presenting curated journeys and destination options.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
          </div>
        </a>
        <a className="card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col h-auto min-h-0 overflow-hidden relative no-underline" style={{ transitionDelay: "0.15s" }} href="https://mailjaiswal.github.io/Aetheria/" rel="noopener" target="_blank">
          <div className="thumb aspect-auto flex-none h-auto overflow-hidden w-full">
            <img src="/site-assets/4f8169dd581031df.webp" alt="Aetheria — website screenshot" loading="lazy" decoding="async" />
          </div>
          <div className="body bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-foreground flex flex-col gap-[8px] inset-auto relative z-3">
            <span className="cat text-[#7cffe8eb] font-[family-name:var(--mono)] text-[10.5px] tracking-[0.16em] uppercase">Fashion</span>
            <h3 className="text-white text-[22px] font-extrabold tracking-tight leading-[1.15]">Aetheria</h3>
            <p className="text-[#ffffffdb] text-[14.5px] leading-[1.55] max-w-[44ch]">A luxury travel website presenting private flights, orbital stays and destinations.</p>
            <span className="more items-center inline-flex text-[13px] font-bold gap-[6px]">Visit website <span className="arw">→</span></span>
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
