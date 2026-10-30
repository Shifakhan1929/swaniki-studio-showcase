import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/careers.css?raw";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers at Swaniki | Remote Internships \u0026 Part-Time Roles" }] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: { "id": "top" } } },
  component: Index,
});

function Index() {
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="bg pointer-events-none z-0" />
      <div className="inset-0 pointer-events-none fixed z-0 [background-image:linear-gradient(rgba(11,14,23,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(11,14,23,0.04)_1px,transparent_1px)] [background-size:66px_66px] [mask:radial-gradient(circle_at_50%_16%,rgb(0,0,0),transparent_80%)]" />
      <div className="grain inset-0 mix-blend-multiply pointer-events-none fixed z-5" />
      <nav className="nav" id="nav" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"collapsed\"],\"removed\":[],\"threshold\":648},\"mobile\":{\"added\":[\"collapsed\"],\"removed\":[],\"threshold\":633}}"}>
        <a className="nav-home" style={{ textDecoration: "none" }} aria-label="Swaniki Home" href="/indexhtml-213456c5dc963e03">
          <span className="brand">
            <img className="brand-mark" src="/site-assets/acbe9434c0d28eff.png" alt="Swaniki Mark" width="30" height="30" />
            <img className="brand-text" src="/site-assets/4042d99102476dbf.png" alt="Swaniki" width="85" height="19" />
          </span>
        </a>
        <div className="nav-links"><a href="/labshtml-ffe9d364ec6cac35">Swaniki Labs</a><a href="/technologieshtml-1df41b6d05675be9">Swaniki <span className="qual">Technologies</span></a><a href="/abouthtml-db5b16407156eab2#about">About</a><a className="active" href="/careershtml-263d6d2aa1009c5e">Careers</a></div>
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
      <ImportedHeaderReadyToJoinOne />
      <main>
        <ImportedSectionGoodWorkRealImpact />
        <ImportedSectionFindYourRole />
        <ImportedSectionGoodToKnow />
      </main>
      <div className="wiz hidden inset-0 fixed z-120" id="wiz" role="dialog" aria-modal="true" aria-label="Application">
        <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0b0e175c] inset-0 absolute [backdrop-filter:blur(4px)]" />
        <div className="wiz-panel [background:linear-gradient(180deg,#f7f8fc,#eef1f8)] rounded-[22px] [box-shadow:0_40px_100px_rgba(11,14,23,.3)] flex flex-col inset-[clamp(8px,3vw,40px)] overflow-hidden absolute">
          <div className="wiz-head items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffb3] flex gap-[14px] justify-between [backdrop-filter:blur(10px)] [border-bottom:1px_solid_var(--line)]">
            <div className="items-center flex gap-[10px]">
              <img className="h-[26px] w-auto" src="/site-assets/acbe9434c0d28eff.png" alt="" />
              <img className="h-[26px] w-auto" src="/site-assets/4042d99102476dbf.png" alt="Swaniki" />
            </div>
            <button className={"wiz-close cursor-pointer [&]:grid text-[18px] h-[36px] place-items-center w-[36px]"} aria-label="Close">×</button>
          </div>
          <div className="stepper items-center flex flex-wrap gap-[8px]" id="stepper">
            <div className="step items-center text-(--ink-faint) flex gap-[9px] tracking-[.04em] uppercase [font:700_11px_var(--mono)]">
              <span className={"dot [&]:grid text-[12px] place-items-center"}>1</span>
              <span>Role</span>
            </div>
            <div className="bar" />
            <div className="step items-center text-(--ink-faint) flex gap-[9px] tracking-[.04em] uppercase [font:700_11px_var(--mono)]">
              <span className={"dot [&]:grid text-[12px] place-items-center"}>2</span>
              <span>Overview</span>
            </div>
            <div className="bar" />
            <div className="step items-center text-(--ink-faint) flex gap-[9px] tracking-[.04em] uppercase [font:700_11px_var(--mono)]">
              <span className={"dot [&]:grid text-[12px] place-items-center"}>3</span>
              <span>Application</span>
            </div>
            <div className="bar" />
            <div className="step items-center text-(--ink-faint) flex gap-[9px] tracking-[.04em] uppercase [font:700_11px_var(--mono)]">
              <span className={"dot [&]:grid text-[12px] place-items-center"}>4</span>
              <span>Done</span>
            </div>
          </div>
          <div className="wiz-scroll flex-1 overflow-auto">
            <ImportedSectionWhichRoleAreYou />
            <ImportedSectionBeforeYouApplyHow />
            <ImportedSectionTellUsWhoYou />
            <ImportedSectionApplicationReceivedWelcomeAboard />
          </div>
        </div>
      </div>
      <div className={"bottom-[16px] [&]:grid gap-[10px] max-w-[min(360px,92vw)] fixed right-[16px] z-200"} id="toast-stack" />
      <ImportedFooter />
      <a className="wa-float items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#25d366] [box-shadow:rgba(18,140,74,0.45)_0px_10px_30px,rgba(0,0,0,0.2)_0px_2px_8px] flex justify-center fixed no-underline z-60" aria-label="Chat with Swaniki on WhatsApp" href="https://wa.me/917019996099?text=Hi%20Swaniki%2C%20I%27d%20like%20to%20discuss%20a%20project" rel="noopener" target="_blank">
        <svg className="fill-white relative z-1" viewBox="0 0 448 512" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.7 111L0 480l117.7-30.9c32.4 17.7 68.3 27 105.5 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 5.6-3.7 8.4-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5.8-8.5 2.5-11.2 2.5-3.6 5.6-6.9 8.4-10.4 2.8-3.5 3.7-6 5.6-9.3 1.9-3.2 1-6.1-.4-8.6-1.4-2.4-12.5-30-17.1-41.1-4.5-10.9-9.1-9.4-12.5-9.6-3.4-.2-7.3-.2-11.2-.2-3.9 0-10.2 1.4-15.5 7-5.3 5.6-20.3 19.8-20.3 48.3 0 28.5 20.8 56 23.8 59.9 3 3.9 41 62.7 99.2 88 13.9 6 24.7 9.6 33.1 12.3 13.9 4.4 26.5 3.8 36.5 2.3 11.1-1.7 34.3-14 39.2-27.5 4.9-13.5 4.9-25 3.4-27.5-1.4-2.5-5.2-3.9-10.7-6.7z" />
        </svg>
      </a>
      <div className="nav-drawer bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#fffffff2] rounded-[24px] [box-shadow:var(--soft-lg)] flex flex-col gap-[8px] left-[16px] pointer-events-none fixed right-[16px] top-[72px] z-49 [backdrop-filter:blur(24px)] [border:1px_solid_var(--line)]" id="navDrawer">
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/indexhtml-213456c5dc963e03"><span>Home</span>{" "}<span>→</span></a>
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/labshtml-ffe9d364ec6cac35"><span>Swaniki Labs</span>{" "}<span>→</span></a>
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/technologieshtml-1df41b6d05675be9"><span>Swaniki Technologies</span>{" "}<span>→</span></a>
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/abouthtml-db5b16407156eab2#about"><span>About</span>{" "}<span>→</span></a>
        <a className="active items-center flex text-[15px] font-semibold justify-between no-underline" href="/careershtml-263d6d2aa1009c5e"><span>Careers</span>{" "}<span>→</span></a>
        <a className="nav-drawer-cta items-center flex text-[15px] font-semibold justify-center no-underline" href="/contacthtml-030e61461fb49a1a">Start a project</a>
      </div>
    </>
  );
}

function ImportedHeaderReadyToJoinOne() {
  return (
    <header className="hero overflow-hidden relative z-1">
      <div className={"wrap career-hero items-center [&]:grid max-w-[1180px] relative z-1"}>
        <div className="career-intro max-w-[720px]">
          <div className="breadcrumb reveal in items-center text-(--ink-soft) flex font-[family-name:var(--mono)] text-[11px] gap-[10px] tracking-[0.14em] uppercase">
            <a className="no-underline" href="/indexhtml-213456c5dc963e03">Home</a>
            <span className="sep text-(--indigo) font-semibold">/</span>
            <b className="text-(--ink) font-bold">Careers</b>
          </div>
          <p className="eyebrow reveal in items-center text-(--ink-soft) inline-flex gap-[9px] tracking-[.18em] uppercase [font:500_11px_var(--mono)]" style={{ marginTop: "26px" }}><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) rounded-[50%] h-[8px] w-[8px]" />Swaniki Technologies · Remote Internships &amp; Part-Time</p>
          <h1 className="reveal in font-extrabold tracking-[-0.04em]" style={{ transitionDelay: "0.05s" }}>Ready to join one of <em className="text-(--indigo) font-[family-name:var(--display)] italic font-normal">India's fastest-growing</em> startups?</h1>
          <p className="lede reveal in text-(--ink-soft) max-w-[56ch]" style={{ transitionDelay: "0.1s" }}>We build SaaS products, AI automations and modern digital platforms. We're hiring curious, hands-on builders for remote internships — flexible hours, no weekend work, and a real path to a full-time role.</p>
          <div className="meta reveal in flex flex-wrap gap-[10px]" style={{ transitionDelay: "0.15s" }}><span className="pill live items-center text-[#0b7a4b] inline-flex text-[12.5px] font-semibold gap-[7px]"><i className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) rounded-[50%] h-[7px] w-[7px]" />4 open roles</span><span className="pill items-center text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">100% Remote · Flexible</span><span className="pill items-center text-(--ink) inline-flex text-[12.5px] font-semibold gap-[7px]">3–8 hrs / day</span></div>
          <div className="hero-notes reveal in text-(--ink-soft) flex flex-wrap gap-y-[10px] gap-x-[20px] [font:500_11px_var(--mono)]">
            <span className="items-center inline-flex gap-[8px]">Probation → paid internship → full-time / PPO</span>
            <span className="items-center inline-flex gap-[8px]">Applications reviewed weekly</span>
          </div>
        </div>
        <aside className="culture-card reveal in border border-solid border-[#ffffffad] rounded-[18px] [box-shadow:var(--soft-lg)] overflow-hidden [backdrop-filter:blur(18px)] [@media(max-width:760px)]:max-w-none" style={{ transitionDelay: "0.12s" }} aria-label="Studio culture">
          <p className="text-(--ink-soft) tracking-[.16em] uppercase [font:500_10px_var(--mono)]">Inside the studio</p>
          <h2 className="text-[23px] leading-[1.2]">Ship real products, <em className="[font-family:inherit] not-italic [color:var(--indigo)]">not toy projects.</em></h2>
          <ul className={"culture-points [&]:grid gap-0 list-none"}>
            <li className="items-center flex text-[13px] font-bold gap-[12px]">100% Remote &amp; Async</li>
            <li className="items-center flex text-[13px] font-bold gap-[12px]">End-to-end feature ownership</li>
            <li className="items-center flex text-[13px] font-bold gap-[12px]">AI-native workflows</li>
            <li className="items-center flex text-[13px] font-bold gap-[12px]">Flexible around your studies</li>
          </ul>
        </aside>
      </div>
    </header>
  );
}

function ImportedSectionGoodWorkRealImpact() {
  return (
    <section className="sec career-section relative z-1">
      <div className="wrap max-w-[1180px]">
        <div className="sec-head items-end flex flex-wrap gap-[20px] justify-between">
          <div>
            <p className="text-(--ink-soft) tracking-[.16em] uppercase [font:500_10px_var(--mono)]">How we work</p>
            <h2 className="text-[clamp(27px,3.5vw,40px)] font-extrabold tracking-[-0.035em] leading-[1.04]">Good work, <em className="text-(--indigo) font-[family-name:var(--display)] italic font-normal">real impact.</em></h2>
          </div>
        </div>
        <div className={"culture-grid [&]:grid gap-[12px]"}>
          <article className={"culture-tile reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff9e] [&:hover]:[box-shadow:var(--soft)]"}>
            <span className="text-(--teal) tracking-[.14em] [font:500_10px_var(--mono)]">01 / OWNERSHIP</span>
            <h3 className="text-[16px] leading-[1.3]">Real Production Ownership</h3>
            <p className="text-(--ink-soft) text-[12.5px] leading-[1.6]">Ship live features to Swaniki Labs products and client platforms.</p>
          </article>
          <article className={"culture-tile reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff9e] [&:hover]:[box-shadow:var(--soft)]"} style={{ transitionDelay: "0.05s" }}>
            <span className="text-(--teal) tracking-[.14em] [font:500_10px_var(--mono)]">02 / FLEXIBILITY</span>
            <h3 className="text-[16px] leading-[1.3]">Flexible &amp; Academic-First</h3>
            <p className="text-(--ink-soft) text-[12.5px] leading-[1.6]">Part-time hours designed to work around your semester. No weekend work.</p>
          </article>
          <article className={"culture-tile reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff9e] [&:hover]:[box-shadow:var(--soft)]"} style={{ transitionDelay: "0.1s" }}>
            <span className="text-(--teal) tracking-[.14em] [font:500_10px_var(--mono)]">03 / GROWTH</span>
            <h3 className="text-[16px] leading-[1.3]">A Path to Full-Time</h3>
            <p className="text-(--ink-soft) text-[12.5px] leading-[1.6]">Perform through probation and your 6-month internship and earn a full-time role or PPO.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionFindYourRole() {
  return (
    <section className="sec career-section relative z-1" style={{ paddingTop: "58px" }}>
      <div className="wrap max-w-[1180px]">
        <div className="sec-head items-end flex flex-wrap gap-[20px] justify-between">
          <div>
            <p className="text-(--ink-soft) tracking-[.16em] uppercase [font:500_10px_var(--mono)]">Open positions</p>
            <h2 className="text-[clamp(27px,3.5vw,40px)] font-extrabold tracking-[-0.035em] leading-[1.04]">Find your <em className="text-(--indigo) font-[family-name:var(--display)] italic font-normal">role.</em></h2>
          </div>
        </div>
      </div>
      <div className={"career-grid [&]:grid gap-[10px]"}>
        <details className="career-card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffc7] relative z-1" open>
          <summary className="role-top cursor-pointer justify-between list-none [@media(max-width:760px)]:flex-col">
            <div className="role-headline items-start flex min-w-0">
              <span className="role-index text-(--indigo) flex-none tracking-[.12em] [font:500_10px_var(--mono)]">01</span>
              <h2 className="role-title text-(--ink) font-extrabold leading-[1.35]">Full-Stack Developer Intern</h2>
            </div>
            <div className="role-meta items-center flex flex-wrap">
              <span className="role-department text-[#4b45bd] text-[10px] font-bold whitespace-nowrap">Engineering</span>
              <span className="role-remote text-[#087b6c] text-[10px] font-bold whitespace-nowrap">Remote</span>
              <span className="role-tag text-(--ink-soft) text-[10px] font-bold whitespace-nowrap">Part-Time · Internship</span>
              <span className="role-toggle items-center text-white inline-flex text-[10px] font-bold gap-[8px] whitespace-nowrap">View Role / Apply <i className="not-italic">▾</i></span>
            </div>
          </summary>
          <div className="role-panel [border-top:1px_solid_var(--line)]">
            <p className="role-about text-(--ink-soft) text-[13px] leading-[1.7]">Ship complete product features from user-facing interfaces through backend logic, including AI workflow integrations and testing.</p>
            <div className="role-facts flex flex-wrap gap-y-[8px] gap-x-[22px] [border-block:1px_solid_var(--line)]">
              <p className="text-(--ink-soft) text-[11.5px] leading-normal"><b className="text-(--ink) font-bold">Schedule:</b> 3–8 hours/day, flexible</p>
              <p className="text-(--ink-soft) text-[11.5px] leading-normal"><b className="text-(--ink) font-bold">Location:</b> Remote (Work from Home)</p>
              <p className="text-(--ink-soft) text-[11.5px] leading-normal"><b className="text-(--ink) font-bold">Track:</b> 1-mo probation → 6-mo internship → full-time / PPO</p>
            </div>
            <div className={"role-details [&]:grid"}>
              <section>
                <h3 className="text-(--ink-soft) tracking-[.16em] uppercase [font:600_10px_var(--mono)]">Key Responsibilities</h3>
                <ul className={"[&]:grid gap-[8px] list-none"}>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Deliver features across front-end interfaces and back-end services.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Connect UI components to APIs, databases, and product workflows.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Help integrate AI workflows into useful product experiences.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Test features, investigate issues, and own releases end to end.</li>
                </ul>
              </section>
              <section>
                <h3 className="text-(--ink-soft) tracking-[.16em] uppercase [font:600_10px_var(--mono)]">What You Bring</h3>
                <ul className={"[&]:grid gap-[8px] list-none"}>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Working knowledge of JavaScript / TypeScript and Node.js.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Familiarity with a front-end framework and databases.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Comfort using Git / GitHub and AI-assisted tools.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Curiosity, ownership and clear communication.</li>
                </ul>
              </section>
            </div>
            <p className="role-stack text-(--ink-soft) text-[12px] leading-[1.6] [border-top:1px_solid_var(--line)]"><b className="text-(--ink)">Stack:</b> JavaScript / TypeScript, Node.js, React / Next.js, REST APIs, SQL / NoSQL.</p>
            <div className="role-benefits [background:linear-gradient(110deg,rgba(15,181,163,.08),rgba(42,143,227,.05))] border border-solid border-[#0fb5a338] rounded-[10px]">
              <h3 className="text-[#087b6c] tracking-[.16em] uppercase [font:600_10px_var(--mono)]">Stipend &amp; Perks</h3>
              <p className="text-(--ink-soft) text-[12.5px] leading-[1.65]">A <strong className="text-(--ink)">6-month paid internship</strong> whose stipend scales with your committed hours, plus a <strong className="text-(--ink)">Letter of Recommendation</strong> and <strong className="text-(--ink)">Certificate of Completion</strong>.</p>
            </div>
            <button className={"role-apply items-center text-white cursor-pointer flex text-[12px] font-bold gap-[9px] justify-center no-underline w-full [font-family:inherit] [&:hover]:[box-shadow:0_10px_24px_rgba(11,14,23,.2)]"} type="button">Apply for this role <span aria-hidden="true">↗</span></button>
          </div>
        </details>
        <details className="career-card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffc7] relative z-1">
          <summary className="role-top cursor-pointer justify-between list-none [@media(max-width:760px)]:flex-col">
            <div className="role-headline items-start flex min-w-0">
              <span className="role-index text-(--indigo) flex-none tracking-[.12em] [font:500_10px_var(--mono)]">02</span>
              <h2 className="role-title text-(--ink) font-extrabold leading-[1.35]">UI/UX Design Intern</h2>
            </div>
            <div className="role-meta items-center flex flex-wrap">
              <span className="role-department text-[#4b45bd] text-[10px] font-bold whitespace-nowrap">Design</span>
              <span className="role-remote text-[#087b6c] text-[10px] font-bold whitespace-nowrap">Remote</span>
              <span className="role-tag text-(--ink-soft) text-[10px] font-bold whitespace-nowrap">Part-Time · Internship</span>
              <span className="role-toggle items-center text-white inline-flex text-[10px] font-bold gap-[8px] whitespace-nowrap">View Role / Apply <i className="not-italic">▾</i></span>
            </div>
          </summary>
          <div className="role-panel [border-top:1px_solid_var(--line)]">
            <p className="role-about text-(--ink-soft) text-[13px] leading-[1.7]">Shape clear, modern product experiences from early user journeys through high-fidelity prototypes and consistent design systems.</p>
            <div className="role-facts flex flex-wrap gap-y-[8px] gap-x-[22px] [border-block:1px_solid_var(--line)]">
              <p className="text-(--ink-soft) text-[11.5px] leading-normal"><b className="text-(--ink) font-bold">Schedule:</b> 3–8 hours/day, flexible</p>
              <p className="text-(--ink-soft) text-[11.5px] leading-normal"><b className="text-(--ink) font-bold">Location:</b> Remote (Work from Home)</p>
              <p className="text-(--ink-soft) text-[11.5px] leading-normal"><b className="text-(--ink) font-bold">Track:</b> 1-mo probation → 6-mo internship → full-time / PPO</p>
            </div>
            <div className={"role-details [&]:grid"}>
              <section>
                <h3 className="text-(--ink-soft) tracking-[.16em] uppercase [font:600_10px_var(--mono)]">Key Responsibilities</h3>
                <ul className={"[&]:grid gap-[8px] list-none"}>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Map user journeys and translate product needs into wireframes.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Create high-fidelity prototypes for responsive SaaS interfaces.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Contribute to design systems and reusable design tokens.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Explore modern SaaS visual patterns and layouts.</li>
                </ul>
              </section>
              <section>
                <h3 className="text-(--ink-soft) tracking-[.16em] uppercase [font:600_10px_var(--mono)]">What You Bring</h3>
                <ul className={"[&]:grid gap-[8px] list-none"}>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Comfort using Figma for layouts, components, and prototypes.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Interest in design tokens, interaction design, responsive systems.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Ability to explain design choices and incorporate feedback.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Curiosity about usable, accessible, polished products.</li>
                </ul>
              </section>
            </div>
            <p className="role-stack text-(--ink-soft) text-[12px] leading-[1.6] [border-top:1px_solid_var(--line)]"><b className="text-(--ink)">Tools:</b> Figma, design token systems, interactive prototyping.</p>
            <div className="role-benefits [background:linear-gradient(110deg,rgba(15,181,163,.08),rgba(42,143,227,.05))] border border-solid border-[#0fb5a338] rounded-[10px]">
              <h3 className="text-[#087b6c] tracking-[.16em] uppercase [font:600_10px_var(--mono)]">Stipend &amp; Perks</h3>
              <p className="text-(--ink-soft) text-[12.5px] leading-[1.65]">A <strong className="text-(--ink)">6-month paid internship</strong> scaled to your committed hours, plus <strong className="text-(--ink)">Recommendation</strong> &amp; <strong className="text-(--ink)">Certificate</strong>.</p>
            </div>
            <button className={"role-apply items-center text-white cursor-pointer flex text-[12px] font-bold gap-[9px] justify-center no-underline w-full [font-family:inherit] [&:hover]:[box-shadow:0_10px_24px_rgba(11,14,23,.2)]"} type="button">Apply for this role <span aria-hidden="true">↗</span></button>
          </div>
        </details>
        <details className="career-card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffc7] relative z-1">
          <summary className="role-top cursor-pointer justify-between list-none [@media(max-width:760px)]:flex-col">
            <div className="role-headline items-start flex min-w-0">
              <span className="role-index text-(--indigo) flex-none tracking-[.12em] [font:500_10px_var(--mono)]">03</span>
              <h2 className="role-title text-(--ink) font-extrabold leading-[1.35]">Social Media Marketing &amp; Research Intern</h2>
            </div>
            <div className="role-meta items-center flex flex-wrap">
              <span className="role-department text-[#4b45bd] text-[10px] font-bold whitespace-nowrap">Growth</span>
              <span className="role-remote text-[#087b6c] text-[10px] font-bold whitespace-nowrap">Remote</span>
              <span className="role-tag text-(--ink-soft) text-[10px] font-bold whitespace-nowrap">Part-Time · Internship</span>
              <span className="role-toggle items-center text-white inline-flex text-[10px] font-bold gap-[8px] whitespace-nowrap">View Role / Apply <i className="not-italic">▾</i></span>
            </div>
          </summary>
          <div className="role-panel [border-top:1px_solid_var(--line)]">
            <p className="role-about text-(--ink-soft) text-[13px] leading-[1.7]">Research the AI and SaaS landscape and help grow a thoughtful content strategy and B2B brand presence.</p>
            <div className="role-facts flex flex-wrap gap-y-[8px] gap-x-[22px] [border-block:1px_solid_var(--line)]">
              <p className="text-(--ink-soft) text-[11.5px] leading-normal"><b className="text-(--ink) font-bold">Schedule:</b> 3–8 hours/day, flexible</p>
              <p className="text-(--ink-soft) text-[11.5px] leading-normal"><b className="text-(--ink) font-bold">Location:</b> Remote (Work from Home)</p>
              <p className="text-(--ink-soft) text-[11.5px] leading-normal"><b className="text-(--ink) font-bold">Track:</b> 1-mo probation → 6-mo internship → full-time / PPO</p>
            </div>
            <div className={"role-details [&]:grid"}>
              <section>
                <h3 className="text-(--ink-soft) tracking-[.16em] uppercase [font:600_10px_var(--mono)]">Key Responsibilities</h3>
                <ul className={"[&]:grid gap-[8px] list-none"}>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Track competitors, market trends, and developments across AI and SaaS.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Research creators and relevant audiences for content opportunities.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Support content planning and writing for Swaniki's digital channels.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Review social analytics and share practical recommendations.</li>
                </ul>
              </section>
              <section>
                <h3 className="text-(--ink-soft) tracking-[.16em] uppercase [font:600_10px_var(--mono)]">What You Bring</h3>
                <ul className={"[&]:grid gap-[8px] list-none"}>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Strong content writing and editing skills.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Interest in market research and social analytics.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Curiosity about AI, SaaS, creator ecosystems and B2B.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Organized, self-directed, comfortable sharing research clearly.</li>
                </ul>
              </section>
            </div>
            <p className="role-stack text-(--ink-soft) text-[12px] leading-[1.6] [border-top:1px_solid_var(--line)]"><b className="text-(--ink)">Skills:</b> Content writing, market research, social analytics.</p>
            <div className="role-benefits [background:linear-gradient(110deg,rgba(15,181,163,.08),rgba(42,143,227,.05))] border border-solid border-[#0fb5a338] rounded-[10px]">
              <h3 className="text-[#087b6c] tracking-[.16em] uppercase [font:600_10px_var(--mono)]">Stipend &amp; Perks</h3>
              <p className="text-(--ink-soft) text-[12.5px] leading-[1.65]">A <strong className="text-(--ink)">6-month paid internship</strong> scaled to your committed hours, plus <strong className="text-(--ink)">Recommendation</strong> &amp; <strong className="text-(--ink)">Certificate</strong>.</p>
            </div>
            <button className={"role-apply items-center text-white cursor-pointer flex text-[12px] font-bold gap-[9px] justify-center no-underline w-full [font-family:inherit] [&:hover]:[box-shadow:0_10px_24px_rgba(11,14,23,.2)]"} type="button">Apply for this role <span aria-hidden="true">↗</span></button>
          </div>
        </details>
        <details className="career-card reveal in bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffc7] relative z-1">
          <summary className="role-top cursor-pointer justify-between list-none [@media(max-width:760px)]:flex-col">
            <div className="role-headline items-start flex min-w-0">
              <span className="role-index text-(--indigo) flex-none tracking-[.12em] [font:500_10px_var(--mono)]">04</span>
              <h2 className="role-title text-(--ink) font-extrabold leading-[1.35]">Inside Sales / Business Development Intern</h2>
            </div>
            <div className="role-meta items-center flex flex-wrap">
              <span className="role-department text-[#4b45bd] text-[10px] font-bold whitespace-nowrap">Business &amp; Growth</span>
              <span className="role-remote text-[#087b6c] text-[10px] font-bold whitespace-nowrap">Remote</span>
              <span className="role-tag text-(--ink-soft) text-[10px] font-bold whitespace-nowrap">Part-Time</span>
              <span className="role-toggle items-center text-white inline-flex text-[10px] font-bold gap-[8px] whitespace-nowrap">View Role / Apply <i className="not-italic">▾</i></span>
            </div>
          </summary>
          <div className="role-panel [border-top:1px_solid_var(--line)]">
            <p className="role-about text-(--ink-soft) text-[13px] leading-[1.7]">Growing technology platform building digital solutions to streamline commercial operations and business workflows for SME and manufacturing sectors.</p>
            <div className="role-facts flex flex-wrap gap-y-[8px] gap-x-[22px] [border-block:1px_solid_var(--line)]">
              <p className="text-(--ink-soft) text-[11.5px] leading-normal"><b className="text-(--ink) font-bold">Schedule:</b> 3–8 hours/day, flexible</p>
              <p className="text-(--ink-soft) text-[11.5px] leading-normal"><b className="text-(--ink) font-bold">Location:</b> Remote (Work from Home)</p>
              <p className="text-(--ink-soft) text-[11.5px] leading-normal"><b className="text-(--ink) font-bold">Track:</b> 1-mo probation → 6-mo internship → full-time / PPO</p>
            </div>
            <div className={"role-details [&]:grid"}>
              <section>
                <h3 className="text-(--ink-soft) tracking-[.16em] uppercase [font:600_10px_var(--mono)]">Key Responsibilities</h3>
                <ul className={"[&]:grid gap-[8px] list-none"}>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Make outbound professional calls to prospective B2B clients from a provided database.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Onboard and register business buyers and industrial suppliers onto our platform.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Educate business owners on digital tools and how the platform supports them.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Log call outcomes daily and collect market feedback.</li>
                </ul>
              </section>
              <section>
                <h3 className="text-(--ink-soft) tracking-[.16em] uppercase [font:600_10px_var(--mono)]">What You Bring</h3>
                <ul className={"[&]:grid gap-[8px] list-none"}>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Strong conversational and negotiation skills in English and Hindi.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Disciplined, self-motivated, comfortable working independently.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Basic technical savviness and confidence using online tools.</li>
                  <li className="text-(--ink-soft) text-[12px] leading-[1.6]">Personal laptop, smartphone and stable internet.</li>
                </ul>
              </section>
            </div>
            <div className="role-benefits [background:linear-gradient(110deg,rgba(15,181,163,.08),rgba(42,143,227,.05))] border border-solid border-[#0fb5a338] rounded-[10px]">
              <h3 className="text-[#087b6c] tracking-[.16em] uppercase [font:600_10px_var(--mono)]">Stipend &amp; Perks</h3>
              <p className="text-(--ink-soft) text-[12.5px] leading-[1.65]"><strong className="text-(--ink)">Stipend scales with committed hours</strong> after probation, plus performance incentives, <strong className="text-(--ink)">Letter of Recommendation</strong> and <strong className="text-(--ink)">Certificate of Completion</strong>.</p>
            </div>
            <button className={"role-apply items-center text-white cursor-pointer flex text-[12px] font-bold gap-[9px] justify-center no-underline w-full [font-family:inherit] [&:hover]:[box-shadow:0_10px_24px_rgba(11,14,23,.2)]"} type="button">Apply for this role <span aria-hidden="true">↗</span></button>
          </div>
        </details>
      </div>
      <p className="career-end reveal in text-(--ink-soft) text-[12.5px] leading-[1.65] max-w-[1084px] w-[calc(100%_-_clamp(48px,6.66vw,96px))]">All roles are 100% remote. Applying takes just a few minutes — you'll read the internship overview, then complete a short application. Every applicant records at least 2 project audios on <a className="dlink font-bold" href="https://www.swapiki.com" rel="noopener" target="_blank">Swapiki</a> for screening.</p>
    </section>
  );
}

function ImportedSectionGoodToKnow() {
  return (
    <section className="sec career-section relative z-1" style={{ paddingTop: "58px" }}>
      <div className="wrap max-w-[1180px]">
        <div className="sec-head items-end flex flex-wrap gap-[20px] justify-between">
          <div>
            <p className="text-(--ink-soft) tracking-[.16em] uppercase [font:500_10px_var(--mono)]">Questions</p>
            <h2 className="text-[clamp(27px,3.5vw,40px)] font-extrabold tracking-[-0.035em] leading-[1.04]">Good to <em className="text-(--indigo) font-[family-name:var(--display)] italic font-normal">know.</em></h2>
          </div>
        </div>
      </div>
      <div className="faq max-w-[1180px]">
        <details className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffa8] rounded-[12px] [border:1px_solid_var(--line)]">
          <summary className="cursor-pointer text-[13.5px] list-none">Are these roles remote?</summary>
          <p className="text-(--ink-soft) text-[12.5px] leading-[1.65]">Yes. Every Swaniki internship is 100% remote and async, with flexible hours and no weekend work.</p>
        </details>
        <details className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffa8] rounded-[12px] [border:1px_solid_var(--line)]">
          <summary className="cursor-pointer text-[13.5px] list-none">How many hours per day are required?</summary>
          <p className="text-(--ink-soft) text-[12.5px] leading-[1.65]">A minimum of 3 hours per day, up to 8. You choose your committed hours during the application — your stipend scales with them.</p>
        </details>
        <details className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffa8] rounded-[12px] [border:1px_solid_var(--line)]">
          <summary className="cursor-pointer text-[13.5px] list-none">Is the internship paid?</summary>
          <p className="text-(--ink-soft) text-[12.5px] leading-[1.65]">There is a one-month probation period, followed by a 6-month paid internship, then a full-time role or Pre-Placement Offer (PPO).</p>
        </details>
        <details className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffa8] rounded-[12px] [border:1px_solid_var(--line)]">
          <summary className="cursor-pointer text-[13.5px] list-none">Why do I need a Swapiki profile link?</summary>
          <p className="text-(--ink-soft) text-[12.5px] leading-[1.65]">Swapiki is a Swaniki audio product. Register, record at least 2 project audios, and paste your profile link — we use it to screen communication and clarity for all roles.</p>
        </details>
        <details className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffa8] rounded-[12px] [border:1px_solid_var(--line)]">
          <summary className="cursor-pointer text-[13.5px] list-none">What happens to my data?</summary>
          <p className="text-(--ink-soft) text-[12.5px] leading-[1.65]">We collect your details, links, resume and (optional) photo solely for recruitment, with your consent under India's DPDP Act. Records are automatically deleted 90 days after submission.</p>
        </details>
      </div>
    </section>
  );
}

function ImportedSectionWhichRoleAreYou() {
  return (
    <section className="wiz-step hidden max-w-[760px]">
      <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-.02em]">Which role are you <em className="text-(--indigo) italic font-normal">applying for?</em></h2>
      <p className="lede text-(--ink-soft) text-[14px] leading-[1.6]">Pick the track you're applying to. You can review the full description on the page behind this window.</p>
      <div className="seg flex flex-wrap gap-[8px]"><button className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffd9] text-(--ink-soft) cursor-pointer flex-1 font-[family-name:var(--sans)]! min-w-[120px] [font:700_13px_var(--sans)]">Full-Stack Developer</button><button className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffd9] text-(--ink-soft) cursor-pointer flex-1 font-[family-name:var(--sans)]! min-w-[120px] [font:700_13px_var(--sans)]">UI/UX Design</button><button className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffd9] text-(--ink-soft) cursor-pointer flex-1 font-[family-name:var(--sans)]! min-w-[120px] [font:700_13px_var(--sans)]">Social Media Marketing</button><button className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffd9] text-(--ink-soft) cursor-pointer flex-1 font-[family-name:var(--sans)]! min-w-[120px] [font:700_13px_var(--sans)]">Inside Sales / BizDev</button></div>
      <div className="wiz-nav flex gap-[12px] justify-between">
        <span />
        <button className="mbtn grad bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--g) text-white font-[family-name:var(--sans)]! [font:700_13px_var(--sans)]" id="toStep2" disabled>Continue <span aria-hidden="true">↗</span></button>
      </div>
    </section>
  );
}

function ImportedSectionBeforeYouApplyHow() {
  return (
    <section className="wiz-step hidden max-w-[760px]">
      <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-.02em]">Before you apply — <em className="text-(--indigo) italic font-normal">how it works.</em></h2>
      <p className="lede text-(--ink-soft) text-[14px] leading-[1.6]">Please read this once. It sets expectations before the application questions.</p>
      <div className={"ov-grid [&]:grid gap-[12px]"}>
        <div className="ov-a bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffb3] rounded-[16px] [border:1px_solid_var(--line)]">
          <div className="stat-big font-[family-name:var(--mono)] font-extrabold tracking-[-.03em] leading-none">3–8<span className="u text-(--ink-soft) text-[.4em]">hrs/day</span></div>
          <p className="complete-note text-(--ink-soft) text-[11.5px] leading-normal" style={{ marginTop: "8px" }}>Minimum 3 committed hours per day, up to 8. You choose your band in the next step.</p>
        </div>
        <div className="ov-a bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffb3] rounded-[16px] [border:1px_solid_var(--line)]">
          <div className="stat-big font-[family-name:var(--mono)] font-extrabold tracking-[-.03em] leading-none" style={{ fontSize: "32px" }}>100% Remote</div>
          <p className="complete-note text-(--ink-soft) text-[11.5px] leading-normal" style={{ marginTop: "8px" }}>Fully async and flexible around your studies — <b>no weekend work</b>.</p>
        </div>
        <div className="ov-a bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffb3] rounded-[16px] [border:1px_solid_var(--line)] [grid-column:1_/_-1]">
          <h4 className="[font:700_10px_var(--mono)] [letter-spacing:0.12em] uppercase [color:var(--ink-soft)]" style={{ margin: "0px 0px 12px" }}>The track</h4>
          <div className={"phases [&]:grid gap-[12px]"}>
            <div className="phase p1 items-start flex gap-[12px]">
              <span className={"pnum text-white [&]:grid flex-none place-items-center [font:700_12px_var(--mono)]"}>1</span>
              <div>
                <h4 className="text-[14px] font-extrabold">1-month probation</h4>
                <p className="text-(--ink-soft) text-[12.5px]">Unpaid. Prove your ownership, communication and consistency.</p>
              </div>
            </div>
            <div className="phase p2 items-start flex gap-[12px]">
              <span className={"pnum text-white [&]:grid flex-none place-items-center [font:700_12px_var(--mono)]"}>2</span>
              <div>
                <h4 className="text-[14px] font-extrabold">6-month internship</h4>
                <p className="text-(--ink-soft) text-[12.5px]">Paid. Stipend scales with your committed hours per day.</p>
              </div>
            </div>
            <div className="phase p3 items-start flex gap-[12px]">
              <span className={"pnum text-white [&]:grid flex-none place-items-center [font:700_12px_var(--mono)]"}>3</span>
              <div>
                <h4 className="text-[14px] font-extrabold">Full-time or PPO</h4>
                <p className="text-(--ink-soft) text-[12.5px]">Strong performers convert to a full-time role or Pre-Placement Offer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="retention bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#f59e0b12] border border-solid border-[#f59e0b33] rounded-[12px] text-(--ink-soft) text-[12px]">🔒 We collect your details, links, resume and (optional) photo solely for recruitment, with your consent under India's DPDP Act, and auto-delete them 90 days after submission.</div>
      <div className="wiz-nav flex gap-[12px] justify-between">
        <button className="mbtn bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffd9] text-(--ink) font-[family-name:var(--sans)]! [font:700_13px_var(--sans)]">← Back</button>
        <button className="mbtn grad bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--g) text-white font-[family-name:var(--sans)]! [font:700_13px_var(--sans)]">Continue to application <span aria-hidden="true">↗</span></button>
      </div>
    </section>
  );
}

function ImportedSectionTellUsWhoYou() {
  return (
    <section className="wiz-step hidden max-w-[760px]">
      <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-.02em]">Tell us who you <em className="text-(--indigo) italic font-normal">are</em> &amp; what you've built.</h2>
      <p className="lede text-(--ink-soft) text-[14px] leading-[1.6]">Applying for <b className="normal-case">Full-Stack Developer Intern</b>. Required fields are marked <span className="req text-[#c0233a] font-extrabold">*</span>.</p>
      <input className="h-px left-[-9999px] overflow-hidden absolute w-px" type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className={"form-grid [&]:grid gap-[16px]"}>
        <div className="field flex flex-col gap-[7px]">
          <label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">Full name <span className="req text-[#c0233a] font-extrabold">*</span></label>
          <input className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffe6] text-(--ink) font-[family-name:var(--sans)]! outline-none w-full [font:500_14px_var(--sans)] [&:focus]:[box-shadow:0_0_0_4px_rgba(15,181,163,.12)]"} placeholder="Ankur Jaiswal" />
        </div>
        <div className="field flex flex-col gap-[7px]">
          <label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">Email <span className="req text-[#c0233a] font-extrabold">*</span></label>
          <input className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffe6] text-(--ink) font-[family-name:var(--sans)]! outline-none w-full [font:500_14px_var(--sans)] [&:focus]:[box-shadow:0_0_0_4px_rgba(15,181,163,.12)]"} type="email" placeholder="you@email.com" />
        </div>
        <div className="field flex flex-col gap-[7px]">
          <label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">Phone / WhatsApp <span className="req text-[#c0233a] font-extrabold">*</span></label>
          <input className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffe6] text-(--ink) font-[family-name:var(--sans)]! outline-none w-full [font:500_14px_var(--sans)] [&:focus]:[box-shadow:0_0_0_4px_rgba(15,181,163,.12)]"} placeholder="+91 ..." />
        </div>
        <div className="field flex flex-col gap-[7px]">
          <label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">City &amp; time zone <span className="req text-[#c0233a] font-extrabold">*</span></label>
          <input className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffe6] text-(--ink) font-[family-name:var(--sans)]! outline-none w-full [font:500_14px_var(--sans)] [&:focus]:[box-shadow:0_0_0_4px_rgba(15,181,163,.12)]"} placeholder="Lucknow, IST (UTC+5:30)" />
        </div>
        <div className="field flex flex-col gap-[7px] col-start-1 col-end-[-1]">
          <label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">Committed hours per day <span className="req text-[#c0233a] font-extrabold">*</span></label>
          <div className="seg flex flex-wrap gap-[8px]"><button className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffd9] text-(--ink-soft) cursor-pointer flex-1 font-[family-name:var(--sans)]! min-w-[120px] [font:700_13px_var(--sans)]">3–4 hrs</button><button className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffd9] text-(--ink-soft) cursor-pointer flex-1 font-[family-name:var(--sans)]! min-w-[120px] [font:700_13px_var(--sans)]">4–6 hrs</button><button className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffd9] text-(--ink-soft) cursor-pointer flex-1 font-[family-name:var(--sans)]! min-w-[120px] [font:700_13px_var(--sans)]">6–8 hrs</button></div>
        </div>
        <div className="field flex flex-col gap-[7px]">
          <label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">Earliest start date <span className="req text-[#c0233a] font-extrabold">*</span></label>
          <input className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffe6] text-(--ink) font-[family-name:var(--sans)]! outline-none w-full [font:500_14px_var(--sans)] [&:focus]:[box-shadow:0_0_0_4px_rgba(15,181,163,.12)]"} type="date" />
        </div>
        <div className="field flex flex-col gap-[7px]">
          <label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">Preferred discussion slot <span className="req text-[#c0233a] font-extrabold">*</span></label>
          <div>
            <span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-csMdb-panel" aria-activedescendant="bb-customSelect-csMdb-selectedOption" tabIndex={0}>
              <span>Select…</span>
            </span>
            <select className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffe6] text-(--ink) font-[family-name:var(--sans)]! outline-none w-full [font:500_14px_var(--sans)] [&:focus]:[box-shadow:0_0_0_4px_rgba(15,181,163,.12)]"} tabIndex={-1} defaultValue="">
              <option value="">Select…</option>
              <option>9 am – 12 pm</option>
              <option>12 pm – 3 pm</option>
              <option>3 pm – 6 pm</option>
              <option>6 pm – 9 pm</option>
            </select>
            <div id="bb-customSelect-csMdb-panel" role="listbox">
              <div role="option" id="bb-customSelect-csMdb-selectedOption">Select…</div>
              <div role="option">9 am – 12 pm</div>
              <div role="option">12 pm – 3 pm</div>
              <div role="option">3 pm – 6 pm</div>
              <div role="option">6 pm – 9 pm</div>
            </div>
          </div>
        </div>
        <div className="field flex flex-col gap-[7px] col-start-1 col-end-[-1]">
          <label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">Prior experience in this role <span className="req text-[#c0233a] font-extrabold">*</span></label>
          <div className="seg flex flex-wrap gap-[8px]"><button className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffd9] text-(--ink-soft) cursor-pointer flex-1 font-[family-name:var(--sans)]! min-w-[120px] [font:700_13px_var(--sans)]">No — I'm a beginner</button><button className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffd9] text-(--ink-soft) cursor-pointer flex-1 font-[family-name:var(--sans)]! min-w-[120px] [font:700_13px_var(--sans)]">Some projects / coursework</button><button className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffd9] text-(--ink-soft) cursor-pointer flex-1 font-[family-name:var(--sans)]! min-w-[120px] [font:700_13px_var(--sans)]">Yes — real / freelance work</button></div>
          <input className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffe6] text-(--ink) font-[family-name:var(--sans)]! outline-none w-full [font:500_14px_var(--sans)] [&:focus]:[box-shadow:0_0_0_4px_rgba(15,181,163,.12)]"} placeholder="Briefly, where have you applied these skills before?" />
        </div>
        <div className="field flex flex-col gap-[7px] col-start-1 col-end-[-1]">
          <label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">Self-assessment — rate yourself <span className="req text-[#c0233a] font-extrabold">*</span>{" "}<span className="[font-weight:500] [color:var(--ink-faint)] [font-size:11px]">(1 = beginner → 5 = expert)</span></label>
          <div id="ratings" />
        </div>
        <div className="field flex flex-col gap-[7px] col-start-1 col-end-[-1]">
          <label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">GitHub / Portfolio / Proof-of-work <span className="req text-[#c0233a] font-extrabold">*</span></label>
          <input className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffe6] text-(--ink) font-[family-name:var(--sans)]! outline-none w-full [font:500_14px_var(--sans)] [&:focus]:[box-shadow:0_0_0_4px_rgba(15,181,163,.12)]"} placeholder="github.com/you  ·  behance/dribbble  ·  live site" />
        </div>
        <div className="field flex flex-col gap-[7px] col-start-1 col-end-[-1]">
          <label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">Swapiki profile link (audio screening) <span className="req text-[#c0233a] font-extrabold">*</span></label>
          <p className="[font-size:12px] [color:var(--ink-soft)]" style={{ margin: "2px 0px 10px" }}>Register on <a className="dlink font-bold" href="https://www.swapiki.com" rel="noopener" target="_blank">www.swapiki.com</a>, record <b>at least 2 project audios</b>, then paste your profile link. Your audio is used for screening.</p>
          <input className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffe6] text-(--ink) font-[family-name:var(--sans)]! outline-none w-full [font:500_14px_var(--sans)] [&:focus]:[box-shadow:0_0_0_4px_rgba(15,181,163,.12)]"} placeholder="swapiki.com/u/your-profile" />
        </div>
        <div className="field flex flex-col gap-[7px]">
          <label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">LinkedIn <span className="opt text-(--ink-faint) [font:600_10px_var(--mono)]">optional</span></label>
          <input className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffe6] text-(--ink) font-[family-name:var(--sans)]! outline-none w-full [font:500_14px_var(--sans)] [&:focus]:[box-shadow:0_0_0_4px_rgba(15,181,163,.12)]"} placeholder="linkedin.com/in/you" />
        </div>
        <div className="field flex flex-col gap-[7px]">
          <label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">How did you hear about us? <span className="opt text-(--ink-faint) [font:600_10px_var(--mono)]">optional</span></label>
          <input className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffe6] text-(--ink) font-[family-name:var(--sans)]! outline-none w-full [font:500_14px_var(--sans)] [&:focus]:[box-shadow:0_0_0_4px_rgba(15,181,163,.12)]"} placeholder="Referral / LinkedIn / Instagram…" />
        </div>
        <div className="field flex flex-col gap-[7px]"><label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">Resume (PDF) <span className="req text-[#c0233a] font-extrabold">*</span></label><label className="filebox items-center text-(--ink) cursor-pointer flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]"><span className={"fi text-(--ink-soft) [&]:grid flex-none text-[18px] place-items-center"}>📄</span><input className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffe6] text-(--ink) font-[family-name:var(--sans)]! outline-none w-full [font:500_14px_var(--sans)] [&:focus]:[box-shadow:0_0_0_4px_rgba(15,181,163,.12)]"} type="file" accept="application/pdf" hidden /><div><b className="text-[13px]">Upload resume</b><span className="text-(--ink-soft) text-[11px]" id="resumeName">PDF · max 10 MB</span></div></label></div>
        <div className="field flex flex-col gap-[7px]"><label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">Photo <span className="opt text-(--ink-faint) [font:600_10px_var(--mono)]">optional</span></label><label className="filebox items-center text-(--ink) cursor-pointer flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]"><span className={"fi text-(--ink-soft) [&]:grid flex-none text-[18px] place-items-center"}>📷</span><input className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffe6] text-(--ink) font-[family-name:var(--sans)]! outline-none w-full [font:500_14px_var(--sans)] [&:focus]:[box-shadow:0_0_0_4px_rgba(15,181,163,.12)]"} type="file" accept="image/*" hidden /><div><b className="text-[13px]">Add a photo</b><span className="text-(--ink-soft) text-[11px]" id="photoName">Speeds up profile review</span></div></label></div>
        <div className="field flex flex-col gap-[7px] col-start-1 col-end-[-1]">
          <label className="items-center text-(--ink) flex gap-[6px] tracking-[.04em] [font:700_11px_var(--sans)]">Why are you interested? <span className="opt text-(--ink-faint) [font:600_10px_var(--mono)]">optional</span></label>
          <textarea className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffe6] text-(--ink) font-[family-name:var(--sans)]! min-h-[88px] outline-none resize-y w-full [font:500_14px_var(--sans)] [&:focus]:[box-shadow:0_0_0_4px_rgba(15,181,163,.12)]"} placeholder="A short note about what excites you…" />
        </div>
      </div>
      <div className="meter-wrap bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff99] rounded-[16px] [border:1px_solid_var(--line)]">
        <div className="items-center flex text-[12.5px] font-bold justify-between">
          <span>Profile completeness</span>
          <span className="text-[#0a7a52] font-[family-name:var(--mono)]" id="pct">0%</span>
        </div>
        <div className="meter bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0b0e1712] rounded-[999px] h-[8px] overflow-hidden">
          <i className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--g) rounded-[999px] [&]:block h-full w-1/5"} id="mbar" />
        </div>
        <p className="complete-note text-(--ink-soft) text-[11.5px] leading-normal">💡 Candidates with a <b>completed profile</b> (all required fields + LinkedIn, photo &amp; a note) are prioritised and have a <b>higher chance of selection</b>.</p>
      </div>
      <label className="consent items-start bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0fb5a30d] border border-solid border-[#0a7a5238] rounded-[16px] flex gap-[12px]">
        <input className="accent-[#0a7a52] flex-none h-[18px] w-[18px]" type="checkbox" />
        <p className="text-(--ink-soft) text-[12px] leading-[1.6]">I consent to Swaniki collecting and storing my name, contact details, portfolio links, resume and (optional) photo <b>solely for recruitment and screening</b>, in line with India's <b>DPDP Act</b>. I understand my data is retained for <b>90 days</b> and can be deleted on request.</p>
      </label>
      <div className="wiz-nav flex gap-[12px] justify-between">
        <button className="mbtn bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffffd9] text-(--ink) font-[family-name:var(--sans)]! [font:700_13px_var(--sans)]">← Back</button>
        <button className="mbtn grad bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--g) text-white font-[family-name:var(--sans)]! [font:700_13px_var(--sans)]" id="submitBtn" disabled>Submit application <span aria-hidden="true">↗</span></button>
      </div>
      <p className="gate text-(--ink-soft) text-[11.5px]" id="gateNote">Complete all <b>required</b> fields and accept the consent to enable submit.</p>
    </section>
  );
}

function ImportedSectionApplicationReceivedWelcomeAboard() {
  return (
    <section className="wiz-step hidden max-w-[760px]">
      <div className="done text-center">
        <div className={"tick bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--g) rounded-[50%] [box-shadow:0_16px_40px_-8px_rgba(91,83,230,.5)] text-white [&]:grid text-[34px] h-[76px] place-items-center w-[76px]"}>✓</div>
        <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-.02em]">Application received. <em className="text-(--indigo) italic font-normal">Welcome aboard the journey.</em></h2>
        <p className="lede text-(--ink-soft) text-[14px] leading-[1.6]" style={{ margin: "12px auto 0px" }}>Thanks, <b>friend</b>. Your application for <b>Full-Stack Developer Intern</b> is in review.</p>
        <div className="appid bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffffff99] rounded-[12px] inline-block font-[family-name:var(--mono)] text-[13px] [border:1px_dashed_var(--line)]">Application ID · <b id="appid">SWK-000000</b></div>
        <ul className={"tl [&]:grid gap-[12px] list-none max-w-[440px] text-left"}>
          <li className="text-(--ink-soft) flex text-[13px] gap-[12px] leading-normal">
            <span className={"tn text-[#087b6c] [&]:grid flex-none place-items-center [font:700_12px_var(--mono)]"}>1</span>
            <div><b>We review</b> — applications are checked weekly. Watch your inbox &amp; WhatsApp.</div>
          </li>
          <li className="text-(--ink-soft) flex text-[13px] gap-[12px] leading-normal">
            <span className={"tn text-[#087b6c] [&]:grid flex-none place-items-center [font:700_12px_var(--mono)]"}>2</span>
            <div><b>Audio screening</b> — we listen to your Swapiki project audios.</div>
          </li>
          <li className="text-(--ink-soft) flex text-[13px] gap-[12px] leading-normal">
            <span className={"tn text-[#087b6c] [&]:grid flex-none place-items-center [font:700_12px_var(--mono)]"}>3</span>
            <div><b>Quick discussion</b> — in your chosen slot, then probation start date.</div>
          </li>
        </ul>
        <div style={{ marginTop: "22px" }}>
          <button className="mbtn grad bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--g) text-white font-[family-name:var(--sans)]! [font:700_13px_var(--sans)]">Done</button>
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
          <div className="foot-col"><h4 className="text-(--ink) font-[family-name:var(--mono)] text-[10.5px] tracking-[0.18em] uppercase">Products · Labs</h4><a className={"[&]:block font-medium leading-[1.42]"} href="/labshtml-ffe9d364ec6cac35">All Labs products</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/findmytriphtml-79fda8f303a2e4ba">FindMyTrip</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/foundersignalhtml-4f9a0e5189d421ad">FounderSignal</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/kontentoshtml-c0a2825079506ad9">KontentOS</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/vibehtml-50fc6648ceef8cb9">Vibe</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/swatrackhtml-43ea34c58c7c9142">SwaTrack</a><a className={"[&]:block font-medium leading-[1.42]"} href="/labs/invoicerhtml-7402e616e1dda3ad">Invoicer</a></div>
          <div className="foot-col"><h4 className="text-(--ink) font-[family-name:var(--mono)] text-[10.5px] tracking-[0.18em] uppercase">Websites · Technologies</h4><a className={"[&]:block font-medium leading-[1.42]"} href="/technologieshtml-1df41b6d05675be9">All client websites</a><a className={"[&]:block font-medium leading-[1.42]"} href="/websites/novoeximhtml-fb54a1e2a17a040d">NovoExim</a><a className={"[&]:block font-medium leading-[1.42]"} href="/websites/executive-portfoliohtml-749ba432870049d3">Executive Portfolio</a><a className={"[&]:block font-medium leading-[1.42]"} href="/websites/yash-hondahtml-196b09df0c178351">Yash Honda</a><a className={"[&]:block font-medium leading-[1.42]"} href="/websites/hairporthtml-7390de30c088c040">Hairport Salon</a><a className={"[&]:block font-medium leading-[1.42]"} href="/websites/coffee-factoryhtml-dbaf61cfaeccfe23">The Coffee Factory</a></div>
          <div className="foot-col"><h4 className="text-(--ink) font-[family-name:var(--mono)] text-[10.5px] tracking-[0.18em] uppercase">Studio</h4><a className={"[&]:block font-medium leading-[1.42]"} href="/abouthtml-db5b16407156eab2#services">Services</a><a className={"[&]:block font-medium leading-[1.42]"} href="/abouthtml-db5b16407156eab2#about">About</a><a className={"[&]:block font-medium leading-[1.42]"} href="/careershtml-263d6d2aa1009c5e">Careers</a><a className={"[&]:block font-medium leading-[1.42]"} href="/indexhtml-213456c5dc963e03#method">How we work</a><a className={"[&]:block font-medium leading-[1.42]"} href="/contacthtml-030e61461fb49a1a">Contact us</a></div>
          <div className="foot-col"><h4 className="text-(--ink) font-[family-name:var(--mono)] text-[10.5px] tracking-[0.18em] uppercase">Legal</h4><a className={"[&]:block font-medium leading-[1.42]"} href="/contacthtml-030e61461fb49a1a">Privacy Policy</a><a className={"[&]:block font-medium leading-[1.42]"} href="/contacthtml-030e61461fb49a1a">Terms of Service</a><a className={"[&]:block font-medium leading-[1.42]"} href="/contacthtml-030e61461fb49a1a">Disclaimer</a><a className={"[&]:block font-medium leading-[1.42]"} href="/contacthtml-030e61461fb49a1a">Cookie Policy</a></div>
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
