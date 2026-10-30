import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/about.css?raw";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Swaniki | Product Studio Team \u0026 Capabilities" }] }),
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
        <div className="nav-links"><a href="/labshtml-ffe9d364ec6cac35">Swaniki Labs</a><a href="/technologieshtml-1df41b6d05675be9">Swaniki <span className="qual">Technologies</span></a><a className="active" href="/abouthtml-db5b16407156eab2#about">About</a><a href="/careershtml-263d6d2aa1009c5e">Careers</a></div>
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
      <ImportedHeaderASmallSeniorTeam />
      <ImportedSection />
      <ImportedSectionOneSeniorTeamFour />
      <ImportedFooter />
      <a className="wa-float items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#25d366] [box-shadow:rgba(18,140,74,0.45)_0px_10px_30px,rgba(0,0,0,0.2)_0px_2px_8px] flex justify-center fixed no-underline z-60" aria-label="Chat with Swaniki on WhatsApp" href="https://wa.me/917019996099?text=Hi%20Swaniki%2C%20I%27d%20like%20to%20discuss%20a%20project" rel="noopener" target="_blank">
        <svg className="fill-white relative z-1" viewBox="0 0 448 512" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.7 111L0 480l117.7-30.9c32.4 17.7 68.3 27 105.5 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 5.6-3.7 8.4-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5.8-8.5 2.5-11.2 2.5-3.6 5.6-6.9 8.4-10.4 2.8-3.5 3.7-6 5.6-9.3 1.9-3.2 1-6.1-.4-8.6-1.4-2.4-12.5-30-17.1-41.1-4.5-10.9-9.1-9.4-12.5-9.6-3.4-.2-7.3-.2-11.2-.2-3.9 0-10.2 1.4-15.5 7-5.3 5.6-20.3 19.8-20.3 48.3 0 28.5 20.8 56 23.8 59.9 3 3.9 41 62.7 99.2 88 13.9 6 24.7 9.6 33.1 12.3 13.9 4.4 26.5 3.8 36.5 2.3 11.1-1.7 34.3-14 39.2-27.5 4.9-13.5 4.9-25 3.4-27.5-1.4-2.5-5.2-3.9-10.7-6.7z" />
        </svg>
      </a>
      <div className="nav-drawer bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#fffffff2] rounded-[24px] [box-shadow:var(--soft-lg)] flex flex-col gap-[8px] left-[16px] opacity-0 pointer-events-none fixed right-[16px] top-[72px] [transform:translateY(-10px)] z-49 [backdrop-filter:blur(24px)] [border:1px_solid_var(--line)]" id="navDrawer">
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/indexhtml-213456c5dc963e03"><span>Home</span>{" "}<span>→</span></a>
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/labshtml-ffe9d364ec6cac35"><span>Swaniki Labs</span>{" "}<span>→</span></a>
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/technologieshtml-1df41b6d05675be9"><span>Swaniki Technologies</span>{" "}<span>→</span></a>
        <a className="active items-center flex text-[15px] font-semibold justify-between no-underline" href="/abouthtml-db5b16407156eab2#about"><span>About</span>{" "}<span>→</span></a>
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/careershtml-263d6d2aa1009c5e"><span>Careers</span>{" "}<span>→</span></a>
        <a className="nav-drawer-cta items-center flex text-[15px] font-semibold justify-center no-underline" href="/contacthtml-030e61461fb49a1a">Start a project</a>
      </div>
    </>
  );
}

function ImportedHeaderASmallSeniorTeam() {
  return (
    <header className="hero overflow-hidden relative z-1">
      <div className="[background:radial-gradient(circle,rgba(99,102,241,0.15)_0%,rgba(168,85,247,0.08)_45%,transparent_70%)] rounded-[50%] h-[600px] left-1/2 pointer-events-none absolute top-[22%] [transform:translate(-50%,-50%)] w-[600px] z-0 [filter:blur(90px)]" aria-hidden="true" />
      <div className="wrap max-w-[1180px] relative z-1">
        <div className="breadcrumb reveal in items-center text-(--ink-soft) flex font-[family-name:var(--mono)] text-[11px] gap-[10px] tracking-[0.14em] uppercase">
          <a className="no-underline" href="/indexhtml-213456c5dc963e03">Home</a>
          <span className="sep opacity-75">/</span>
          <b className="text-(--ink) font-bold">About</b>
        </div>
        <h1 className="reveal in font-extrabold tracking-[-0.04em]" style={{ transitionDelay: "0.05s" }}>A small senior team behind <em className="text-(--indigo) font-[family-name:var(--display)] italic font-normal">every build.</em></h1>
        <p className="lede reveal in text-(--ink-soft)" style={{ transitionDelay: "0.1s" }}>Swaniki is an IT studio founded to act like a product company — small, senior, and accountable for the outcome. We prefer one team owning each project end to end over a chain of hand-offs.</p>
        <div className="meta reveal in flex flex-wrap gap-[10px]" style={{ transitionDelay: "0.15s" }}><span className="pill live gap-[7px]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) rounded-[50%] h-[7px] w-[7px]" />3 operating names</span><span className="pill live gap-[7px]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) rounded-[50%] h-[7px] w-[7px]" />15+ products &amp; 20+ websites shipped</span><span className="pill live gap-[7px]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) rounded-[50%] h-[7px] w-[7px]" />100% in-house build</span></div>
      </div>
    </header>
  );
}

function ImportedSection() {
  return (
    <section className="sec about-story relative z-1" id="about">
      <div className="wrap max-w-[1180px]">
        <ul className="list-none [border-top:1px_solid_var(--line)]">
          <li className={"\x62lock [&]:grid [border-bottom:1px_solid_var(--line)]"}>
            <div className="no text-(--indigo) font-[family-name:var(--mono)] text-[13px] tracking-[0.16em]">01<b className={"text-(--ink) [&]:block font-[family-name:var(--sans)] text-[15px] font-extrabold tracking-[0px]"}>Who we are</b></div>
            <div>
              <h3 className="text-[clamp(24px,3.2vw,34px)] font-extrabold tracking-[-0.028em] leading-[1.12]">Product builders, not <em className="text-(--indigo) font-[family-name:var(--display)] italic font-normal">order-takers.</em></h3>
              <p className="text-(--ink-soft) text-[16px] leading-[1.72] max-w-[62ch]">Swaniki Technologies builds websites, Swaniki Labs builds software products, and Swaniki itself is the studio that keeps them honest — one team with shared standards, shared taste and a shared dislike for hand-offs.</p>
              <div className="kick items-center text-(--ink-soft) inline-flex text-[13.5px] font-semibold gap-[8px]">
                <a className="no-underline" href="/indexhtml-213456c5dc963e03#method">See how we work ↗</a>
              </div>
            </div>
          </li>
          <li className={"\x62lock [&]:grid [border-bottom:1px_solid_var(--line)]"}>
            <div className="no text-(--indigo) font-[family-name:var(--mono)] text-[13px] tracking-[0.16em]">02<b className={"text-(--ink) [&]:block font-[family-name:var(--sans)] text-[15px] font-extrabold tracking-[0px]"}>What we value</b></div>
            <div>
              <h3 className="text-[clamp(24px,3.2vw,34px)] font-extrabold tracking-[-0.028em] leading-[1.12]">Outcomes, evidence and <em className="text-(--indigo) font-[family-name:var(--display)] italic font-normal">craft.</em></h3>
              <p className="text-(--ink-soft) text-[16px] leading-[1.72] max-w-[62ch]">We measure success in what ships and what keeps improving, not in hours billed. Every recommendation we make is backed by evidence — and everything we touch gets the same care as the front page.</p>
              <div className="kick items-center text-(--ink-soft) inline-flex text-[13.5px] font-semibold gap-[8px]">
                <a className="no-underline" href="/technologieshtml-1df41b6d05675be9">See the evidence — shipped websites ↗</a>
              </div>
            </div>
          </li>
          <li className={"\x62lock [&]:grid [border-bottom:1px_solid_var(--line)]"}>
            <div className="no text-(--indigo) font-[family-name:var(--mono)] text-[13px] tracking-[0.16em]">03<b className={"text-(--ink) [&]:block font-[family-name:var(--sans)] text-[15px] font-extrabold tracking-[0px]"}>Where we're from</b></div>
            <div>
              <h3 className="text-[clamp(24px,3.2vw,34px)] font-extrabold tracking-[-0.028em] leading-[1.12]">India-based, working <em className="text-(--indigo) font-[family-name:var(--display)] italic font-normal">global.</em></h3>
              <p className="text-(--ink-soft) text-[16px] leading-[1.72] max-w-[62ch]">Based in India and working with clients everywhere, Swaniki is the studio behind products like FounderSignal, Invoicer and SwaTrack, and a growing portfolio of live client builds.</p>
              <div className="kick items-center text-(--ink-soft) inline-flex text-[13.5px] font-semibold gap-[8px]">
                <a className="no-underline" href="/labshtml-ffe9d364ec6cac35">Explore the Labs portfolio ↗</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function ImportedSectionOneSeniorTeamFour() {
  return (
    <section className="sec about-capabilities overflow-hidden relative z-1" id="services">
      <div className="[background:radial-gradient(circle,rgba(99,102,241,0.15)_0%,rgba(168,85,247,0.08)_45%,transparent_70%)] rounded-[50%] h-[600px] pointer-events-none absolute right-[-280px] top-[10px] w-[600px] z-0 [filter:blur(90px)]" aria-hidden="true" />
      <div className="wrap max-w-[1180px] relative z-1">
        <header className="cap-head reveal in" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"in\"],\"removed\":[],\"threshold\":1296}}"}>
          <span className="kicker">Capabilities &amp; Services</span>
          <h2>One senior team. <em>Four ways to build.</em></h2>
          <p>Every engagement is delivered end to end, in house. No agency hand-offs or committee decisions, just a focused team accountable for the outcome.</p>
        </header>
        <article className={"svc reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) [&]:grid overflow-hidden relative"}>
          <div className="svc-copy flex flex-col justify-center min-w-0">
            <span className="no font-[family-name:var(--mono)] tracking-[0.12em] leading-[1.2] absolute">01<b className={"text-(--ink) [&]:block font-[family-name:var(--sans)] text-[18px] font-extrabold tracking-[0.04em] leading-[1.2]"}>Custom software</b></span>
            <h3 className="text-(--ink) text-[clamp(28px,3.2vw,38px)] font-extrabold leading-[1.1] max-w-[18ch]">We build the tool your business is <em className="[background:linear-gradient(135deg,rgb(99,102,241)_0%,rgb(168,85,247)_60%,rgb(236,72,153)_100%)_text] font-[family-name:var(--display)] italic font-normal [-webkit-text-fill-color:transparent]">missing.</em></h3>
            <p className="text-(--ink-soft) text-[15.5px] leading-[1.7]">Dashboards, workflows, AI-powered tools, internal systems and SaaS products. If it runs your operation, we can shape it into software that saves your team time every week.</p>
            <div className="feat">
              <span>AI-powered solutions</span>
              <span>Dashboards &amp; internal tools</span>
              <span>Process automation</span>
              <span>SaaS products</span>
              <span>Lead &amp; web research</span>
            </div>
            <div className="kick text-[13px] font-bold">
              <a className="no-underline" href="/labshtml-ffe9d364ec6cac35">Explore Swaniki Labs →</a>
            </div>
          </div>
          <div className="svc-media min-w-0 overflow-hidden">
            <img className="h-[calc(100%_-_84px)] top-[14px] right-[14px] bottom-[70px] left-[22px] object-contain absolute w-[calc(100%_-_36px)] [object-position:right_center]" src="/site-assets/efab61879c73cc47.jpg" alt="FounderSignal dashboard, a custom software example" loading="lazy" />
            <div className="svc-cap items-end bottom-[18px] text-white flex gap-[14px] justify-between left-[20px] absolute right-[20px] z-2 [text-shadow:rgba(0,0,0,0.7)_0px_1px_12px]">
              <span className="ph font-[family-name:var(--mono)] tracking-[0.13em] uppercase">Working example<b className={"[&]:block font-[family-name:var(--sans)] text-[14px] font-bold tracking-[0px] normal-case"}>FounderSignal — signal-first intelligence</b></span>
              <span className="go [text-shadow:none]" aria-hidden="true">↗</span>
            </div>
          </div>
        </article>
        <article className={"svc reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) [&]:grid overflow-hidden relative"} style={{ transitionDelay: "0.06s" }}>
          <div className="svc-copy flex flex-col justify-center min-w-0">
            <span className="no font-[family-name:var(--mono)] tracking-[0.12em] leading-[1.2] absolute">02<b className={"text-(--ink) [&]:block font-[family-name:var(--sans)] text-[18px] font-extrabold tracking-[0.04em] leading-[1.2]"}>Creative websites</b></span>
            <h3 className="text-(--ink) text-[clamp(28px,3.2vw,38px)] font-extrabold leading-[1.1] max-w-[18ch]">Websites that look like you, and <em className="[background:linear-gradient(135deg,rgb(99,102,241)_0%,rgb(168,85,247)_60%,rgb(236,72,153)_100%)_text] font-[family-name:var(--display)] italic font-normal [-webkit-text-fill-color:transparent]">perform.</em></h3>
            <p className="text-(--ink-soft) text-[15.5px] leading-[1.7]">Modern, editorial-grade builds for businesses that sell trust, taste or a great experience. Each is designed to be fast, credible and built for an outcome, not just an aesthetic.</p>
            <div className="feat">
              <span>Modern engineering</span>
              <span>Brand-led design</span>
              <span>Case-study storytelling</span>
              <span>Speed &amp; Core Web Vitals</span>
            </div>
            <div className="kick text-[13px] font-bold">
              <a className="no-underline" href="/technologieshtml-1df41b6d05675be9">See the websites we’ve shipped →</a>
            </div>
          </div>
          <div className="svc-media min-w-0 overflow-hidden">
            <img className="h-[calc(100%_-_84px)] top-[14px] right-[14px] bottom-[70px] left-[22px] object-contain absolute w-[calc(100%_-_36px)] [object-position:right_center]" src="/site-assets/88702fc64e7c4741.jpg" alt="Boutique Hotel website, a creative website example" loading="lazy" />
            <div className="svc-cap items-end bottom-[18px] text-white flex gap-[14px] justify-between left-[20px] absolute right-[20px] z-2 [text-shadow:rgba(0,0,0,0.7)_0px_1px_12px]">
              <span className="ph font-[family-name:var(--mono)] tracking-[0.13em] uppercase">Working example<b className={"[&]:block font-[family-name:var(--sans)] text-[14px] font-bold tracking-[0px] normal-case"}>Boutique Hotel — atmosphere-first build</b></span>
              <span className="go [text-shadow:none]" aria-hidden="true">↗</span>
            </div>
          </div>
        </article>
        <article className={"svc reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) [&]:grid overflow-hidden relative"} style={{ transitionDelay: "0.12s" }}>
          <div className="svc-copy flex flex-col justify-center min-w-0">
            <span className="no font-[family-name:var(--mono)] tracking-[0.12em] leading-[1.2] absolute">03<b className={"text-(--ink) [&]:block font-[family-name:var(--sans)] text-[18px] font-extrabold tracking-[0.04em] leading-[1.2]"}>Automation &amp; AI</b></span>
            <h3 className="text-(--ink) text-[clamp(28px,3.2vw,38px)] font-extrabold leading-[1.1] max-w-[18ch]">Automation in AI</h3>
            <p className="svc-subhead text-[#334155] text-[clamp(20px,2.1vw,25px)] font-bold leading-tight">Make the repetitive parts disappear.</p>
            <p className="text-(--ink-soft) text-[15.5px] leading-[1.7]">Rules that run themselves across invoicing, social workflows, research, enrichment and routing. Our automations plug into what you already use and remove the busywork.</p>
            <div className="feat">
              <span>Invoicing &amp; business tools</span>
              <span>Social media workflows</span>
              <span>Data enrichment</span>
              <span>AI-assisted research</span>
            </div>
            <div className="kick text-[13px] font-bold">
              <a className="no-underline" href="/contacthtml-030e61461fb49a1a">Tell us what’s eating your team’s time →</a>
            </div>
          </div>
          <div className="svc-media min-w-0 overflow-hidden">
            <img className="h-[calc(100%_-_84px)] top-[14px] right-[14px] bottom-[70px] left-[22px] object-contain absolute w-[calc(100%_-_36px)] [object-position:right_center]" src="/site-assets/738f15f94a3b22cd.jpg" alt="Invoicer, an automation product example" loading="lazy" />
            <div className="svc-cap items-end bottom-[18px] text-white flex gap-[14px] justify-between left-[20px] absolute right-[20px] z-2 [text-shadow:rgba(0,0,0,0.7)_0px_1px_12px]">
              <span className="ph font-[family-name:var(--mono)] tracking-[0.13em] uppercase">Working example<b className={"[&]:block font-[family-name:var(--sans)] text-[14px] font-bold tracking-[0px] normal-case"}>Invoicer — billing that runs itself</b></span>
              <span className="go [text-shadow:none]" aria-hidden="true">↗</span>
            </div>
          </div>
        </article>
        <article className={"svc reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) [&]:grid overflow-hidden relative"} style={{ transitionDelay: "0.18s" }}>
          <div className="svc-copy flex flex-col justify-center min-w-0">
            <span className="no font-[family-name:var(--mono)] tracking-[0.12em] leading-[1.2] absolute">04<b className={"text-(--ink) [&]:block font-[family-name:var(--sans)] text-[18px] font-extrabold tracking-[0.04em] leading-[1.2]"}>SOCIAL MEDIA MANAGEMENT</b></span>
            <h3 className="text-(--ink) text-[clamp(28px,3.2vw,38px)] font-extrabold leading-[1.1] max-w-[18ch]">Scale your presence across platforms with <em className="[background:linear-gradient(135deg,rgb(99,102,241)_0%,rgb(168,85,247)_60%,rgb(236,72,153)_100%)_text] font-[family-name:var(--display)] italic font-normal [-webkit-text-fill-color:transparent]">precision.</em></h3>
            <p className="text-(--ink-soft) text-[15.5px] leading-[1.7]">We craft targeted content strategies, manage multi-channel distribution across Instagram, YouTube, Threads, Facebook, and Google My Business, and optimize organic engagement to build an enduring brand audience.</p>
            <div className="feat">
              <span>Content Strategy</span>
              <span>Multi-Channel Distribution</span>
              <span>Audience Growth</span>
              <span>Analytics &amp; Reporting</span>
            </div>
            <div className="kick text-[13px] font-bold">
              <a className="no-underline" href="/contacthtml-030e61461fb49a1a">Grow your social presence →</a>
            </div>
          </div>
          <div className="svc-media min-w-0 overflow-hidden">
            <img className="h-[calc(100%_-_84px)] top-[14px] right-[14px] bottom-[70px] left-[22px] object-contain absolute w-[calc(100%_-_36px)] [object-position:right_center]" src="/site-assets/9bb4ca992377ec9b.webp" alt="Social media analytics dashboard" loading="lazy" />
            <div className="svc-cap items-end bottom-[18px] text-white flex gap-[14px] justify-between left-[20px] absolute right-[20px] z-2 [text-shadow:rgba(0,0,0,0.7)_0px_1px_12px]">
              <span className="ph font-[family-name:var(--mono)] tracking-[0.13em] uppercase">Working example<b className={"[&]:block font-[family-name:var(--sans)] text-[14px] font-bold tracking-[0px] normal-case"}>Social media management — multi-channel audience growth</b></span>
              <span className="go [text-shadow:none]" aria-hidden="true">↗</span>
            </div>
          </div>
        </article>
        <div className="proc reveal in [background:linear-gradient(145deg,rgb(16,22,40),rgb(10,14,28))] [box-shadow:var(--soft-lg)] overflow-hidden relative" id="how-we-build">
          <div className="proc-in text-white relative">
            <span className="kicker">How We Build</span>
            <h3 className="text-white text-[clamp(28px,3.4vw,40px)] font-extrabold leading-[1.12] max-w-[22ch]">From first sentence to a product that <em className="text-[#7cffe8e6] font-[family-name:var(--display)] italic font-normal">keeps improving.</em></h3>
            <div className={"proc-steps [&]:grid"}>
              <div className="proc-step bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0d] border border-solid border-site-import-card rounded-[16px] min-w-0">
                <span className="n font-[family-name:var(--mono)] tracking-[0.16em]">STEP 01</span>
                <h4 className="text-white text-[15px] font-bold leading-[1.3]">Scope to one sentence</h4>
                <p className="text-[#ffffffb8] text-[13px] leading-[1.55]">You describe the problem; we turn it into a sharp definition of what we’re going to build.</p>
              </div>
              <div className="proc-step bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0d] border border-solid border-site-import-card rounded-[16px] min-w-0">
                <span className="n font-[family-name:var(--mono)] tracking-[0.16em]">STEP 02</span>
                <h4 className="text-white text-[15px] font-bold leading-[1.3]">Build in the open</h4>
                <p className="text-[#ffffffb8] text-[13px] leading-[1.55]">Senior hands only. Regular previews, no black boxes and no hand-offs between agencies.</p>
              </div>
              <div className="proc-step bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0d] border border-solid border-site-import-card rounded-[16px] min-w-0">
                <span className="n font-[family-name:var(--mono)] tracking-[0.16em]">STEP 03</span>
                <h4 className="text-white text-[15px] font-bold leading-[1.3]">Ship, then sharpen</h4>
                <p className="text-[#ffffffb8] text-[13px] leading-[1.55]">Launch fast, then keep improving performance, behaviour and outcomes after it’s live.</p>
              </div>
              <div className="proc-step bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff0d] border border-solid border-site-import-card rounded-[16px] min-w-0">
                <span className="n font-[family-name:var(--mono)] tracking-[0.16em]">STEP 04</span>
                <h4 className="text-white text-[15px] font-bold leading-[1.3]">You own it all</h4>
                <p className="text-[#ffffffb8] text-[13px] leading-[1.55]">Clean code, documented setup and full ownership transferred to you.</p>
              </div>
            </div>
          </div>
        </div>
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
              <span className="mark [-webkit-text-fill-color:transparent]">Swaniki</span>
            </a>
            <p className={"[&]:block font-medium leading-[1.62]"}>An IT studio building SaaS products, custom automations and modern websites — engineered to perform, designed to last.</p>
          </div>
          <div className="foot-col"><h4 className="text-(--ink) font-[family-name:var(--mono)] text-[10.5px] tracking-[0.18em] opacity-50 uppercase">Products · Labs</h4><a className={"[&]:block font-medium leading-[1.42]"} href="/labshtml-ffe9d364ec6cac35">All Labs products</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/findmytriphtml-79fda8f303a2e4ba">FindMyTrip</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/foundersignalhtml-4f9a0e5189d421ad">FounderSignal</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/invoicerhtml-7402e616e1dda3ad">Invoicer</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/swatrackhtml-43ea34c58c7c9142">SwaTrack</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/website-doctor-v2html-2f5331659df0a692">Website Doctor</a></div>
          <div className="foot-col"><h4 className="text-(--ink) font-[family-name:var(--mono)] text-[10.5px] tracking-[0.18em] opacity-50 uppercase">Websites · Technologies</h4><a className={"[&]:block font-medium leading-[1.42]"} href="/technologieshtml-1df41b6d05675be9">All client websites</a><a className={"[&]:block font-medium leading-[1.42]"} href="/websites/novoeximhtml-fb54a1e2a17a040d">NovoExim</a><a className={"[&]:block font-medium leading-[1.42]"} href="/websites/executive-portfoliohtml-749ba432870049d3">Executive Portfolio</a><a className={"[&]:block font-medium leading-[1.42]"} href="/websites/yash-hondahtml-196b09df0c178351">Yash Honda</a><a className={"[&]:block font-medium leading-[1.42]"} href="/websites/coffee-factoryhtml-dbaf61cfaeccfe23">The Coffee Factory</a></div>
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
