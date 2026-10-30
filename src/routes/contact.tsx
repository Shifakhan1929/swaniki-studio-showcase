import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/contact.css?raw";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Swaniki | Start Your Project" }] }),
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
      <div className="grain inset-0 mix-blend-multiply opacity-[0.045] pointer-events-none fixed z-5" />
      <nav className="nav" id="nav" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"collapsed\"],\"removed\":[],\"threshold\":648},\"mobile\":{\"added\":[\"collapsed\"],\"removed\":[],\"threshold\":633}}"}>
        <a className="nav-home" style={{ textDecoration: "none" }} aria-label="Swaniki Home" href="/indexhtml-213456c5dc963e03">
          <span className="brand">
            <img className="brand-mark" src="/site-assets/acbe9434c0d28eff.png" alt="Swaniki Mark" width="30" height="30" />
            <img className="brand-text" src="/site-assets/4042d99102476dbf.png" alt="Swaniki" width="85" height="19" />
          </span>
        </a>
        <div className="nav-links"><a href="/labshtml-ffe9d364ec6cac35">Swaniki Labs</a><a href="/technologieshtml-1df41b6d05675be9">Swaniki <span className="qual">Technologies</span></a><a href="/abouthtml-db5b16407156eab2#about">About</a><a href="/careershtml-263d6d2aa1009c5e">Careers</a></div>
        <a className="nav-cta active" href="/contacthtml-030e61461fb49a1a">Start a project</a>
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
      <ImportedHeaderGotAProblemLet />
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
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/technologieshtml-1df41b6d05675be9"><span>Swaniki Technologies</span>{" "}<span>→</span></a>
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/abouthtml-db5b16407156eab2#about"><span>About</span>{" "}<span>→</span></a>
        <a className="items-center flex text-[15px] font-semibold justify-between no-underline" href="/careershtml-263d6d2aa1009c5e"><span>Careers</span>{" "}<span>→</span></a>
        <a className="nav-drawer-cta items-center flex text-[15px] font-semibold justify-center no-underline" href="/contacthtml-030e61461fb49a1a">Start a project</a>
      </div>
    </>
  );
}

function ImportedHeaderGotAProblemLet() {
  return (
    <header className="hero overflow-hidden relative z-1">
      <div className="wrap max-w-[1180px] relative z-1">
        <div className="breadcrumb reveal in items-center text-(--ink-soft) flex font-[family-name:var(--mono)] text-[11px] gap-[10px] tracking-[0.14em] uppercase">
          <a className="no-underline" href="/indexhtml-213456c5dc963e03">Home</a>
          <span className="text-(--indigo) font-semibold opacity-75">/</span>
          <b className="text-(--ink) font-bold">Contact</b>
        </div>
        <h1 className="reveal in font-extrabold tracking-[-0.04em]" style={{ transitionDelay: "0.05s" }}>Got a problem? <em className="text-(--indigo) font-[family-name:var(--display)] italic font-normal">Let's build the solution.</em></h1>
        <p className="lede reveal in text-(--ink-soft)" style={{ transitionDelay: "0.1s" }}>Tell us what you need — a tool, a website, an automation, or something you're not even sure how to name. We'll come back within a day with a straight answer.</p>
        <div className="hero-ctas reveal in flex flex-wrap gap-[14px]" style={{ transitionDelay: "0.15s" }}><a className="btn btn-primary items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--ink) inline-flex text-[14.5px] font-semibold gap-[10px] no-underline" href="https://wa.me/917019996099?text=Hi%20Swaniki%2C%20I%27d%20like%20to%20discuss%20a%20project" rel="noopener" target="_blank">WhatsApp us directly <span className="arw items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-border rounded-[50%] flex text-[12px] h-[24px] justify-center w-[24px]">↗</span></a><a className="btn btn-ghost items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) [box-shadow:var(--soft)] inline-flex text-[14.5px] font-semibold gap-[10px] no-underline" href="mailto:contactus@swaniki.com">contactus@swaniki.com</a></div>
      </div>
    </header>
  );
}

function ImportedSection() {
  return (
    <section className="sec relative z-1">
      <div className="wrap max-w-[1180px]">
        <div className={"contact-grid items-start [&]:grid"}>
          <div className="contact-aside">
            <h3 className="text-[20px] font-extrabold tracking-[-0.02em]">How to reach us</h3>
            <div className="row [border-top:1px_solid_var(--line)]"><b className={"text-(--ink) [&]:block text-[13px]"}>WhatsApp (fastest)</b><a className="text-[15px] no-underline" href="https://wa.me/917019996099" rel="noopener" target="_blank">+91 70199 96099 ↗</a></div>
            <div className="row [border-top:1px_solid_var(--line)]"><b className={"text-(--ink) [&]:block text-[13px]"}>Email</b><a className="text-[15px] no-underline" href="mailto:contactus@swaniki.com">contactus@swaniki.com</a></div>
            <div className="row [border-top:1px_solid_var(--line)]">
              <b className={"text-(--ink) [&]:block text-[13px]"}>Studio hours</b>
              <p className="text-(--ink-soft) text-[15px] leading-[1.66]">Mon–Fri, 10:00–19:00 IST. We answer within one working day.</p>
            </div>
            <div className="contact-note bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#0fb5a314] border border-solid border-[#0fb5a340] rounded-[16px] text-(--ink-soft) text-[13.5px] leading-[1.6]">
              Prefer speed? Send a one-line brief on WhatsApp — we usually reply within minutes during studio hours.
            </div>
          </div>
          <form className="contact-form flex flex-col gap-[16px]" id="contactForm" noValidate><label className="text-(--ink-soft) flex flex-col text-[12px] font-bold gap-[7px] tracking-[0.04em] uppercase">Your name<input className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) font-[family-name:var(--sans)] text-[15px] font-medium outline-none" type="text" name="name" required maxLength={120} placeholder="What should we call you?" /></label><label className="text-(--ink-soft) flex flex-col text-[12px] font-bold gap-[7px] tracking-[0.04em] uppercase">Email<input className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) font-[family-name:var(--sans)] text-[15px] font-medium outline-none" type="email" name="email" required maxLength={200} placeholder="you@company.com" /></label><label className="text-(--ink-soft) flex flex-col text-[12px] font-bold gap-[7px] tracking-[0.04em] uppercase" id="bb-customSelect-3Nz59-label">What do you need?
              <div><span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-3Nz59-panel" aria-activedescendant="bb-customSelect-3Nz59-selectedOption" aria-labelledby="bb-customSelect-3Nz59-label" tabIndex={0}><span>Choose one…</span></span><select className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) font-[family-name:var(--sans)] text-[15px] font-medium outline-none" name="kind" required tabIndex={-1} defaultValue="">{"\n            "}<option value="" selected>Choose one…</option>{"\n            "}<option>Custom software / SaaS product</option>{"\n            "}<option>Website</option>{"\n            "}<option>Automation / AI workflow</option>{"\n            "}<option>Something else — let's figure it out</option>{"\n          "}</select><div id="bb-customSelect-3Nz59-panel" role="listbox"><div role="option" id="bb-customSelect-3Nz59-selectedOption">Choose one…</div><div role="option">Custom software / SaaS product</div><div role="option">Website</div><div role="option">Automation / AI workflow</div><div role="option">Something else — let's figure it out</div></div></div>{"\n        "}</label><label className="text-(--ink-soft) flex flex-col text-[12px] font-bold gap-[7px] tracking-[0.04em] uppercase">Tell us about it<textarea className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--paper-2) text-(--ink) font-[family-name:var(--sans)] text-[15px] font-medium min-h-[130px] outline-none resize-y" name="message" required maxLength={2000} placeholder="A sentence or two about the idea, the gap, or the problem eating your team's time." /></label><button className="btn btn-primary btn-submit items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--ink) cursor-pointer inline-flex font-[family-name:var(--sans)] text-[14.5px] font-semibold gap-[10px] no-underline" type="submit">Send it to us <span className="arw items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-border rounded-[50%] flex text-[12px] h-[24px] justify-center w-[24px]">↗</span></button></form>
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
              <span className="bg-clip-text [-webkit-text-fill-color:transparent]">Swaniki</span>
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
