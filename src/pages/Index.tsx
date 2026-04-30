import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Cursor from "@/components/Cursor";
import { ArrowUpRight, Plus } from "lucide-react";

const services = [
  { num: "01", title: "Web Development", italic: "Crafted", desc: "Bespoke web platforms — from marketing sites to complex SaaS — engineered with React, Next.js and the modern web stack.", tags: ["React", "Next.js", "Node"] },
  { num: "02", title: "Mobile Applications", italic: "Pocketed", desc: "Native iOS, Android and cross-platform apps that feel inevitable in the hand. Considered, performant, alive.", tags: ["Swift", "Kotlin", "Flutter"] },
  { num: "03", title: "Search & Visibility", italic: "Discovered", desc: "Technical SEO, content architecture and analytics that compound — turning your site into a steady source of inbound demand.", tags: ["SEO", "Content", "Analytics"] },
  { num: "04", title: "Cloud & DevOps", italic: "Resilient", desc: "Infrastructure that scales quietly. CI/CD, observability and architecture on AWS, GCP and Azure.", tags: ["AWS", "Docker", "K8s"] },
  { num: "05", title: "Brand & Interface", italic: "Considered", desc: "Identity systems and product interfaces designed with the rigour of a studio and the warmth of a craftsperson.", tags: ["Brand", "UI", "UX"] },
  { num: "06", title: "AI & Automation", italic: "Augmented", desc: "From copilots to internal automations — AI woven into your product and operations with taste and restraint.", tags: ["LLM", "RAG", "Agents"] },
];

const works = [
  { client: "Focus Print & Pack", year: "2025", type: "ERP · Web" },
  { client: "House of Breads", year: "2025", type: "Service · Branding" },
  { client: "Cake Studio", year: "2026", type: "Service · Web" },
  { client: "GEMANA", year: "2026", type: "SaaS Platform" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-paper text-ink min-h-screen relative overflow-x-hidden">
      <Cursor />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 bg-paper/70 backdrop-blur-md border-b border-ink/10">
        <nav className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <a href="#" data-cursor="hover" className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-rust" />
            <span className="serif text-xl">Aurentra</span>
          </a>
          <div className="hidden md:flex items-center gap-10 mono text-[11px] uppercase tracking-[0.2em] text-ink/70">
            <a href="#work" className="link-underline">Work</a>
            <a href="#services" className="link-underline">Practice</a>
            <a href="#process" className="link-underline">Process</a>
            <a href="#contact" className="link-underline">Contact</a>
          </div>
          <a href="#contact" data-cursor="hover" className="mono text-[11px] uppercase tracking-[0.2em] flex items-center gap-2 group">
            <span className="hidden sm:inline">Begin a project</span>
            <span className="w-8 h-8 rounded-full bg-ink text-paper grid place-items-center group-hover:bg-rust transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section ref={heroRef} className="relative pt-32 md:pt-40 pb-24 min-h-screen flex flex-col justify-between">
        <motion.div
          style={{ y: bgY }}
          className="pointer-events-none absolute inset-x-0 top-[35%] md:top-1/4 -translate-y-1/2 flex justify-center z-0"
        >
          <h1 className="font-aurentra text-[20vw] md:text-[18vw] font-light tracking-tight text-transparent stroke-text">
            AURENTRA
          </h1>
        </motion.div>
        <motion.div style={{ y, opacity }} className="max-w-[1600px] mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-3 mono text-[11px] uppercase tracking-[0.25em] text-ink/60 pt-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rust animate-pulse" /> Index — 2026
              </div>
              <p className="leading-relaxed">A digital studio for brands building things worth keeping.</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="serif text-[clamp(3rem,11vw,11rem)] leading-[0.92] tracking-tight font-light">
                <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }} className="block">
                  Software
                </motion.span>
                <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.65, 0, 0.35, 1] }} className="block">
                  <span className="italic-serif text-rust">made</span> with
                </motion.span>
                <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.65, 0, 0.35, 1] }} className="block">
                  patience.
                </motion.span>
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-5 md:col-start-4">
              <p className="text-lg md:text-xl leading-relaxed text-ink/80 max-w-md">
                We are a small, opinionated team designing and engineering web platforms, mobile apps and digital identities for ambitious founders and storied institutions alike.
              </p>
            </div>
            <motion.div>
              <div className="col-span-12 md:col-span-3 md:col-start-10 text-right">
                <div className="mono text-[11px] uppercase tracking-[0.25em] text-ink/60">
                  <div>Estd. 2025</div>
                  <div>Coimbatore</div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full mt-20 flex items-end justify-between">
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-ink/50 flex items-center gap-3">
            <span className="w-12 h-px bg-ink/30" />
            Scroll
          </div>
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-ink/50 text-right">
            <div>25+ Projects</div>
            <div>20+ Clients </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-ink/15 py-8 overflow-hidden bg-bone/40">
        <div className="flex marquee-track whitespace-nowrap">
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {["Web", "Mobile", "Brand", "SEO", "Cloud", "AI", "Commerce", "Editorial"].map((t) => (
                <span key={t} className="flex items-center">
                  <span className="serif italic-serif text-5xl md:text-7xl px-10 text-ink/90">{t}</span>
                  <span className="w-2 h-2 rounded-full bg-rust" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-32 md:py-48 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3 mono text-[11px] uppercase tracking-[0.25em] text-ink/60">
            <div className="flex items-center gap-2 mb-4"><span className="w-6 h-px bg-ink/40" /> A · Note</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="serif text-3xl md:text-5xl leading-[1.15] font-light tracking-tight">
              We believe the best digital products feel <span className="italic-serif text-rust">inevitable</span> — quietly considered, generously designed, and engineered to age with grace. <span className="text-ink/40">Each engagement is treated as a small commission, not a transaction.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-ink/15 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 py-10 mono text-[11px] uppercase tracking-[0.25em] text-ink/60">
          <div className="col-span-6 md:col-span-2">§ Practice</div>
          <div className="col-span-6 md:col-span-10 text-right md:text-left">Six disciplines · One studio</div>
        </div>

        <div className="border-t border-ink/15">
          {services.map((s, i) => (
            <motion.article
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.04, ease: [0.65, 0, 0.35, 1] }}
              data-cursor="view"
              data-cursor-label="Explore"
              className="group grid grid-cols-12 gap-6 py-10 md:py-14 border-b border-ink/15 hover:bg-bone/40 transition-colors duration-500 -mx-6 md:-mx-12 px-6 md:px-12"
            >
              <div className="col-span-2 md:col-span-1 mono text-[11px] uppercase tracking-[0.25em] text-ink/50 pt-3">{s.num}</div>
              <div className="col-span-10 md:col-span-5">
                <h3 className="serif text-3xl md:text-5xl font-light tracking-tight leading-[1]">
                  {s.title}<span className="text-rust">.</span>
                </h3>
                <div className="mt-3 italic-serif text-xl md:text-2xl text-ink/40">{s.italic}</div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <p className="text-ink/75 leading-relaxed text-base md:text-lg">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {s.tags.map((t) => (
                    <span key={t} className="mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border border-ink/25 rounded-full text-ink/70">{t}</span>
                  ))}
                </div>
              </div>
              <div className="col-span-12 md:col-span-2 flex md:justify-end items-start">
                <span className="w-12 h-12 rounded-full border border-ink/25 grid place-items-center group-hover:bg-ink group-hover:text-paper group-hover:border-ink transition-all duration-500">
                  <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-32 md:py-48 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-3 mono text-[11px] uppercase tracking-[0.25em] text-ink/60">§ Selected Work</div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="serif text-5xl md:text-7xl font-light tracking-tight leading-[0.95]">
              A small <span className="italic-serif text-rust">archive</span> of recent commissions.
            </h2>
          </div>
        </div>

        <div className="border-t border-ink/15">
          {works.map((w) => (
            <a
              key={w.client}
              href="#"
              data-cursor="view"
              data-cursor-label="View"
              className="group grid grid-cols-12 gap-6 py-8 border-b border-ink/15 items-center hover:bg-ink hover:text-paper transition-colors duration-500 -mx-6 md:-mx-12 px-6 md:px-12"
            >
              <div className="col-span-1 mono text-[11px] tracking-[0.2em] opacity-60">{w.year}</div>
              <div className="col-span-7 md:col-span-7">
                <span className="serif text-3xl md:text-5xl font-light italic-serif">{w.client}</span>
              </div>
              <div className="col-span-3 mono text-[11px] uppercase tracking-[0.2em] opacity-70">{w.type}</div>
              <div className="col-span-1 flex justify-end">
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" data-cursor-section="process" className="bg-ink text-paper py-32 md:py-48 grain">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-12 gap-6 mb-20">
            <div className="col-span-12 md:col-span-3 mono text-[11px] uppercase tracking-[0.25em] text-paper/60">§ Method</div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="serif text-5xl md:text-7xl font-light tracking-tight leading-[0.95] text-paper">
                A method,<br /><span className="italic-serif text-primary-glow">not a formula.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-paper/10 border border-paper/10">
            {[
              { n: "I", title: "Listen", desc: "We start with a conversation, not a brief. The right questions shape the right product." },
              { n: "II", title: "Sketch", desc: "Paper, prototypes, principles. We design the spine of the experience before the surface." },
              { n: "III", title: "Build", desc: "Tight, transparent sprints. Code reviewed line-by-line. No black boxes." },
              { n: "IV", title: "Tend", desc: "We stay on after launch — measuring, refining and growing alongside you." },
            ].map((p) => (
              <div key={p.n} className="bg-ink p-8 md:p-10">
                <div className="serif italic-serif text-paper/40 text-2xl mb-8">{p.n}</div>
                <h3 className="serif text-3xl text-paper font-light mb-3">{p.title}</h3>
                <p className="text-paper/65 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 md:py-48 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3 mono text-[11px] uppercase tracking-[0.25em] text-ink/60">§ Correspondence</div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="serif text-6xl md:text-9xl font-light leading-[0.9] tracking-tight">
              Let's begin<br /> <span className="italic-serif text-rust">something</span> good.
            </h2>
            <div className="mt-16 grid md:grid-cols-3 gap-10 items-start">
              <div className="md:col-span-2">
                <a
                  href="mailto:aurentratechnologies@gmail.com"
                  data-cursor="view"
                  data-cursor-label="Write"
                  className="serif text-2xl sm:text-3xl md:text-5xl italic-serif link-underline inline-block"
                >
                  aurentratechnologies@gmail.com
                </a>
              </div>
              <div className="mono text-[11px] uppercase tracking-[0.25em] text-ink/70 leading-loose">
                <div className="text-ink/50 mb-2">Office</div>
                114 51 Stockholm<br />Coimbatore
              </div>
              <div className="mono text-[11px] uppercase tracking-[0.25em] text-ink/70 leading-loose">
                <div className="text-ink/50 mb-2">Elsewhere</div>
                <a href="#" className="link-underline block">Instagram, ↗</a>
                <a href="#" className="link-underline block">LinkedIn, ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ink/15">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 mono text-[10px] uppercase tracking-[0.25em] text-ink/60">
          <div>© 2026 · AuraForge</div>
          <div className="serif italic-serif text-base text-ink/80">Made slowly, in Coimbatore.</div>
          <div>All rights, gently reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
