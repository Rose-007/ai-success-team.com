import { useState } from 'react';
import { 
  Sprout, Recycle, FlaskConical, Microscope, 
  ArrowLeft, ExternalLink, BookOpen, 
  Timer, Layers, Sparkles, ShieldCheck, 
  Leaf, Beaker, ArrowUpRight, ChevronDown,
  Database, Clock3, Factory
} from 'lucide-react';

export default function App() {
  const [activeBacteria, setActiveBacteria] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const bacteria = [
    {
      name: "Ideonella sakaiensis",
      year: "2016 • Sakai, Japan",
      enzyme: "PETase + MHETase",
      plastic: "PET",
      speed: "6 weeks → 0.13mg/day",
      detail: "ค้นพบที่โรงงานรีไซเคิลขวด PET ในเมืองซาไก โดยทีมวิจัยเกียวโต คันไซ สามารถใช้ PET เป็นแหล่งคาร์บอนหลักได้",
      color: "bg-[var(--green)]",
      icon: "🦠",
      lab: "Yoshida et al. Science 2016"
    },
    {
      name: "Pseudomonas putida",
      year: "2020 • Germany / US",
      enzyme: "Polyurethanase, Esterase",
      plastic: "Polyurethane (PU)",
      speed: "50% weight loss in 30 days",
      detail: "ย่อยสลายโฟม PU ที่ใช้ในรองเท้าและฉนวน สามารถดัดแปลงทางพันธุกรรมให้ผลิตวัสดุชีวภาพต่อได้",
      color: "bg-[#344E41]",
      icon: "🧫",
      lab: "B2B - Shoe waste research"
    },
    {
      name: "Bacillus spp.",
      year: "2018 • Soil isolate",
      enzyme: "Laccase, Peroxidase",
      plastic: "PE - Polyethylene",
      speed: "10-15% in 60 days",
      detail: "พบในดินฝังกลบ แบคทีเรียกลุ่มนี้ย่อยถุงพลาสติก PE ได้ช้า แต่สามารถเร่งด้วย UV pretreatment",
      color: "bg-[#606C38]",
      icon: "🌱",
      lab: "PE low-density research"
    },
    {
      name: "Engineered FAST-PETase",
      year: "2022-2024 • Austin / Kyoto",
      enzyme: "Engineered PETase (5 mut)",
      plastic: "PET + amorphous PET",
      speed: "51 products in 1 week (2023)",
      detail: "2024 Kyoto U. ปรับปรุงให้ทนความร้อน 70°C ทำงานเร็วขึ้น 6 เท่า วนซ้ำได้ไม่จำกัดโดยไม่เสียคุณภาพ",
      color: "bg-[#BC6C25]",
      icon: "⚡",
      lab: "Lu et al. Nature 2022 → 2024 Kyoto"
    },
  ];

  const timeline = [
    { year: "2016", title: "Discovery", desc: "Ideonella sakaiensis 201-F6 ตีพิมพ์ใน Science", tag: "Yoshida" },
    { year: "2018", title: "Structure Solved", desc: "Austin lab เผยโครงสร้าง 3D ของ PETase + สร้าง mutant เร็วขึ้น 20%", tag: "3D" },
    { year: "2020", title: "MHETase Combo", desc: "รวม PETase+MHETase ย่อยสมบูรณ์เป็น monomers ใช้เลี้ยงต่อได้", tag: "COMBO" },
    { year: "2022", title: "FAST-PETase", desc: "Machine-learning engineered ทำงานที่ 50°C ย่อย PET 51 ชิ้นใน 1 สัปดาห์", tag: "AI + Enzyme" },
    { year: "2024", title: "Hot-Tolerant + Closed Loop", desc: "Kyoto U. 2024: 70°C stable, แยก TPA+EG บริสุทธิ์ ทำขวดใหม่ได้เลย", tag: "Kyoto Univ." },
    { year: "2026", title: "LEO3C Foundation Module", desc: "เป้าหมาย: นำ ISO/DIM timestamp ไป track รอบรีไซเคิลด้วยจุลชีพ", tag: "LEO3C Vision →" },
  ];

  return (
    <div 
      data-safe-area-inset-root
      className="min-h-screen w-full bg-[var(--bg)] text-[var(--ink)] overflow-x-clip"
      style={{ boxSizing: 'border-box', paddingTop: 'var(--safe-area-inset-top)' }}
    >
      {/* Top Sticky Nav */}
      <header 
        data-safe-area-sticky-top
        className="sticky z-40 backdrop-blur-xl border-b border-[var(--line)] bg-[var(--surface)]/80"
        style={{ top: 'var(--safe-area-inset-top)' }}
      >
        <div className="mx-auto max-w-[1120px] px-5 md:px-8 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[var(--ink)] text-[var(--bg)] grid place-items-center font-bold mono text-[13px]">IA</div>
            <div className="leading-[1.1]">
              <div className="font-bold text-[13px] tracking-[0.08em] uppercase">IA&IB • Learning Module</div>
              <div className="text-[11px] text-[var(--ink-muted)] mono">SUPPLEMENTARY / SUSTAINABILITY</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--surface-2)] border border-[var(--line)] text-[11px] mono font-medium"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />EDUCATIONAL ONLY • NOT PATENT CLAIM</span>
          </div>
          <a href="#main" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--ink)] text-[var(--bg)] text-[13px] font-semibold hover:opacity-90 transition-opacity">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Main
          </a>
        </div>
      </header>

      {/* Hero */}
      <div className="mx-auto max-w-[1120px] px-5 md:px-8 pt-10 md:pt-16">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--lime)] text-[#1A2B1A] text-[11px] font-bold tracking-widest uppercase mb-5">
              <Sprout className="h-3.5 w-3.5" /> LEO3C Sustainability Extension
            </div>
            <h1 className="text-[32px] md:text-[52px] font-[700] leading-[0.95] tracking-[-0.02em]">
              <span className="inline-flex items-center gap-2">🦠 Plastic-Eating</span><br />
              <span className="text-[var(--green-2)]">Bacteria Research</span>
            </h1>
            <p className="mt-4 text-[18px] md:text-[20px] leading-[1.35] font-medium thai text-[var(--ink-muted)]">
              เอกสารศึกษาเพิ่มเติมเรื่องแบคทีเรียย่อยสลายพลาสติก<br />
              เพื่อเศรษฐกิจหมุนเวียน — สำหรับพาร์ทเนอร์ LEO3C
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[12px] mono flex items-center gap-1.5"><Recycle className="h-3.5 w-3.5" /> CIRCULAR ECONOMY</span>
              <span className="px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[12px] mono flex items-center gap-1.5"><FlaskConical className="h-3.5 w-3.5" /> PETase / MHETase</span>
              <span className="px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[12px] mono flex items-center gap-1.5"><Database className="h-3.5 w-3.5" /> ISO / DIM COUNTABLE</span>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-[460px]">
              <div className="rounded-2xl bg-[var(--surface)] border border-[var(--line)] p-3">
                <div className="text-[10px] mono text-[var(--ink-faint)] tracking-widest">STUDY FOCUS</div>
                <div className="font-bold text-[13px] mt-1 leading-tight">End-of-life for 100% Made-in-Origin Jackets</div>
              </div>
              <div className="rounded-2xl bg-[var(--surface)] border border-[var(--line)] p-3">
                <div className="text-[10px] mono text-[var(--ink-faint)] tracking-widest">SYSTEM LINK</div>
                <div className="font-bold text-[13px] mt-1 leading-tight">Timestamp can track recycling loop</div>
              </div>
              <div className="rounded-2xl bg-[#1A2B1A] text-white p-3">
                <div className="text-[10px] mono text-white/60 tracking-widest">STATUS</div>
                <div className="font-bold text-[13px] mt-1 leading-tight">Supplementary • Not commercial claim</div>
              </div>
            </div>
          </div>

          {/* Right hero card - Enzyme mechanism */}
          <div className="rounded-[28px] bg-[var(--surface)] border border-[var(--line)] overflow-hidden shadow-[0_16px_40px_-16px_rgba(0,0,0,0.15)]">
            <div className="p-5 md:p-6 bg-[var(--surface-2)] border-b border-[var(--line)] flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-[13px] tracking-widest mono uppercase"><Beaker className="h-4 w-4" /> How PETase Works</div>
              <span className="text-[10px] px-2 py-1 rounded-full bg-white border border-[var(--line)] mono">EDU DIAGRAM</span>
            </div>
            <div className="p-6">
              <div className="relative rounded-2xl bg-[#F8FAF3] border border-dashed border-[var(--line-strong)] p-4 md:p-5">
                <div className="flex items-center justify-between gap-2 text-[12px] mono font-bold">
                  <div className="px-2.5 py-1.5 rounded-full bg-[#1A2B1A] text-white">PET POLYMER</div>
                  <div className="h-px flex-1 bg-[var(--line-strong)] relative">
                    <div className="absolute -top-1.5 right-0 text-[10px] bg-[#D9ED92] px-1.5 py-0.5 rounded-full">PETase</div>
                  </div>
                  <div className="px-2.5 py-1.5 rounded-full bg-white border border-[var(--line)]">MHET</div>
                  <div className="h-px w-6 bg-[var(--line-strong)] relative">
                    <div className="absolute -top-1.5 right-0 text-[10px] bg-[#B5E48C] px-1.5 py-0.5 rounded-full">MHETase</div>
                  </div>
                  <div className="px-2.5 py-1.5 rounded-full bg-[var(--lime)]">EG + TPA</div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-[11px] leading-[1.3]">
                  <div className="rounded-xl bg-white border p-2.5">
                    <div className="font-bold mono text-[10px] text-[var(--ink-faint)]">INPUT</div>
                    <div className="mt-1 font-medium">ขวด PET, เส้นใยโพลีเอสเตอร์จากแจ็คเก็ต</div>
                  </div>
                  <div className="rounded-xl bg-white border p-2.5">
                    <div className="font-bold mono text-[10px] text-[var(--ink-faint)]">ENZYME</div>
                    <div className="mt-1 font-medium">PETase ตัดสาย, MHETase ย่อยต่อ</div>
                  </div>
                  <div className="rounded-xl bg-[#1A2B1A] text-white p-2.5">
                    <div className="font-bold mono text-[10px] text-white/60">OUTPUT = FOOD</div>
                    <div className="mt-1 font-medium">แบคทีเรียใช้เป็นพลังงาน วนกลับเป็นวัสดุใหม่</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-[#1A2B1A] text-[#D9ED92] p-4 flex gap-3">
                <Leaf className="h-5 w-5 shrink-0" />
                <div className="text-[12px] leading-[1.5] mono">
                  <span className="font-bold text-white">ทำไมต้องรู้?</span> เพราะ LEO3C jacket ผลิต 100% in origin — ต้องคิดถึงปลายทาง (end-of-life). ระบบนับได้ (countable) ของเราที่มี ISO/DIM + ONLINE ONLY สามารถขยายไป track การรีไซเคิลด้วยชีวภาพได้ในอนาคต
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[11px] mono text-[var(--ink-faint)]">
                <Timer className="h-3.5 w-3.5" /> Natural: 6 weeks → Engineered 2024: &lt;24h at 70°C (lab scale)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Why LEO3C */}
      <section className="mx-auto max-w-[1120px] px-5 md:px-8 mt-12 md:mt-20">
        <div className="rounded-[32px] bg-[#1A2B1A] text-white overflow-hidden grid md:grid-cols-[0.9fr_1.1fr]">
          <div className="p-7 md:p-10">
            <div className="inline-flex items-center gap-2 text-[#D9ED92] mono text-[11px] tracking-widest font-bold"><span className="h-px w-6 bg-[#D9ED92]" /> SECTION 01 — WHY LEO3C CARES</div>
            <h2 className="mt-4 text-[28px] md:text-[36px] font-bold leading-[0.95] tracking-tight">We make 100% in origin. So we must own the end.</h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-white/70 thai">
              แจ็คเก็ต LEO3C ผลิตครบวงจรในต้นกำเนิด — นั่นหมายความว่าเราต้องรับผิดชอบตั้งแต่ออกแบบ จนถึงวันที่ลูกค้าไม่ใช้แล้ว ไม่ใช่แค่ขายจบ
            </p>
            <div className="mt-6 space-y-3">
              {[
                { t: "Circular Economy จริง", d: "จาก Made in Origin → Worn → Collected → Biorecycled → New Fiber" },
                { t: "Countable system ต่อยอดได้", d: "ระบบ ISO/DIM timestamp ที่เราใช้ตอนนี้ สามารถเพิ่ม state: RECYCLED_BY_BACTERIA ได้เลย" },
                { t: "IA&IB Foundation ในอนาคต", d: "โมดูล AI-Success_foundation จะต้องมี Circular Economy ให้พาร์ทเนอร์เรียนรู้" },
              ].map((i, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#D9ED92] text-[#1A2B1A] grid place-items-center text-[12px] font-bold shrink-0 mt-0.5">{idx+1}</div>
                  <div>
                    <div className="font-bold text-[14px]">{i.t}</div>
                    <div className="text-[13px] text-white/60 leading-[1.4]">{i.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#EFEFE7] text-[#1A2B1A] p-6 md:p-8">
            <div className="rounded-[20px] border border-[#1A2B1A]/10 bg-white p-5 h-full">
              <div className="flex items-center justify-between">
                <div className="font-bold mono text-[11px] tracking-widest">LEO3C LIFECYCLE EXTENSION • CONCEPT</div>
                <Factory className="h-4 w-4 opacity-60" />
              </div>
              <div className="mt-6 relative">
                {/* lifecycle diagram */}
                <div className="grid grid-cols-5 gap-1.5 text-[10px] mono font-bold">
                  {[
                    { k:"ORIGIN", s:"ISO/DIM" },
                    { k:"SALE", s:"ONLINE ONLY" },
                    { k:"WEAR", s:"TIMESTAMP" },
                    { k:"RETURN", s:"COUNTABLE" },
                    { k:"BIO-RECYCLE", s:"NEW 2026?" },
                  ].map((step, i) => (
                    <div key={i} className={`rounded-xl border p-2.5 text-center ${i===4 ? 'bg-[#1A2B1A] text-white border-[#1A2B1A]' : 'bg-[#F6F7F2] border-[#D8E2CC]'}`}>
                      <div className="text-[9px] opacity-60">{step.s}</div>
                      <div className="mt-1 text-[11px]">{step.k}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-[#F6F7F2] border border-dashed border-[#B9C9A8] p-4">
                  <div className="flex items-center gap-2 text-[11px] font-bold mono"><Database className="h-3.5 w-3.5" /> TIMESTAMP EXAMPLE (อนาคต)</div>
                  <div className="mt-3 font-mono text-[11px] leading-[1.6] bg-white rounded-lg border p-3">
                    {`{`}
                    <br />{`  id: LEO3C-2024-A091,`}
                    <br />{`  iso: TH-BKK-001,`}
                    <br />{`  dim: 12.5x18x2,`}
                    <br />{`  status: RECYCLED,`}
                    <br />{`  method: "Ideonella sakaiensis + FAST-PETase",`}
                    <br />{`  output: "TPA 98% pure → new yarn"`}
                    <br />{`}`}
                  </div>
                </div>
                <div className="mt-4 text-[11px] text-[#5C715C] mono leading-[1.4]">
                  * นี่คือตัวอย่างแนวคิด ยังไม่ใช่ระบบจริง — ให้พาร์ทเนอร์เห็นภาพว่า countable ต่อยอดไปเศรษฐกิจหมุนเวียนได้อย่างไร
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Bacteria */}
      <section className="mx-auto max-w-[1120px] px-5 md:px-8 mt-12 md:mt-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mono text-[11px] tracking-widest font-bold text-[var(--ink-faint)]"><Microscope className="h-3.5 w-3.5" /> SECTION 02 — KEY BACTERIA TO STUDY</div>
            <h2 className="mt-2 text-[26px] md:text-[34px] font-bold leading-[0.95] tracking-tight">4 ตัวที่พาร์ทเนอร์ต้องรู้จัก</h2>
          </div>
          <div className="text-[13px] text-[var(--ink-muted)] max-w-[380px] thai leading-[1.5]">เลือกตัวที่เกี่ยวข้องกับวัสดุในอุตสาหกรรมสิ่งทอโดยตรง — เน้น PET ก่อน เพราะแจ็คเก็ตเราใช้โพลีเอสเตอร์รีไซเคิล</div>
        </div>

        <div className="mt-6 grid md:grid-cols-[320px_1fr] gap-4">
          <div className="rounded-[20px] bg-[var(--surface)] border border-[var(--line)] p-2">
            {bacteria.map((b, i) => (
              <button
                key={i}
                onClick={() => setActiveBacteria(i)}
                className={`w-full text-left rounded-[14px] p-3.5 flex gap-3 transition-all ${activeBacteria===i ? 'bg-[#1A2B1A] text-white shadow' : 'hover:bg-[var(--surface-2)]'}`}
              >
                <div className={`h-10 w-10 rounded-full grid place-items-center text-[18px] shrink-0 ${activeBacteria===i ? 'bg-white text-black' : 'bg-[var(--surface-2)]'}`}>{b.icon}</div>
                <div className="min-w-0">
                  <div className="font-bold text-[13px] leading-tight truncate">{b.name}</div>
                  <div className={`mono text-[10px] mt-0.5 ${activeBacteria===i ? 'text-white/60' : 'text-[var(--ink-faint)]'}`}>{b.year}</div>
                  <div className={`mt-1.5 inline-flex text-[10px] px-2 py-0.5 rounded-full mono font-bold ${activeBacteria===i ? 'bg-white/15 text-[#D9ED92]' : 'bg-[var(--surface-3)]'}`}>{b.plastic} • {b.enzyme}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-[24px] bg-[var(--surface)] border border-[var(--line)] overflow-hidden">
            <div className="p-6 md:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-[#F6F7F2] border grid place-items-center text-[24px]">{bacteria[activeBacteria].icon}</div>
                    <div>
                      <h3 className="text-[20px] md:text-[22px] font-bold leading-none">{bacteria[activeBacteria].name}</h3>
                      <div className="mono text-[11px] text-[var(--ink-muted)] mt-1">{bacteria[activeBacteria].lab}</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#1A2B1A] text-white text-[11px] mono font-bold">{bacteria[activeBacteria].plastic}</span>
                  <span className="px-3 py-1 rounded-full bg-[var(--lime)] text-[#1A2B1A] text-[11px] mono font-bold">{bacteria[activeBacteria].speed}</span>
                </div>
              </div>

              <p className="mt-5 text-[14px] leading-[1.6] thai bg-[var(--surface-2)] border border-[var(--line)] rounded-xl p-4">{bacteria[activeBacteria].detail}</p>

              <div className="mt-5 grid md:grid-cols-3 gap-3">
                <div className="rounded-xl border p-3.5 bg-[#FEFEFB]">
                  <div className="mono text-[10px] tracking-widest text-[var(--ink-faint)]">ENZYME</div>
                  <div className="font-bold text-[13px] mt-1">{bacteria[activeBacteria].enzyme}</div>
                </div>
                <div className="rounded-xl border p-3.5 bg-[#FEFEFB]">
                  <div className="mono text-[10px] tracking-widest text-[var(--ink-faint)]">MECHANISM</div>
                  <div className="font-bold text-[13px] mt-1">PETase → MHET → EG+TPA → bacterial food</div>
                </div>
                <div className="rounded-xl border p-3.5 bg-[#1A2B1A] text-white">
                  <div className="mono text-[10px] tracking-widest text-white/60">LEO3C RELEVANCE</div>
                  <div className="font-bold text-[13px] mt-1">{activeBacteria===0 || activeBacteria===3 ? "สูง — เกี่ยวกับแจ็คเก็ต PET โดยตรง" : activeBacteria===1 ? "กลาง — เกี่ยวกับโฟม/ซับใน" : "เรียนรู้ — พื้นฐาน PE"}</div>
                </div>
              </div>
            </div>
            <div className="px-6 md:px-7 py-3 bg-[var(--surface-2)] border-t border-[var(--line)] flex items-center gap-2 text-[11px] mono text-[var(--ink-faint)]">
              <BookOpen className="h-3.5 w-3.5" /> Tip: ให้ทีม R&D ลองค้นชื่อเอนไซม์นี้ใน NCBI ก่อน จะเห็นโครงสร้างโปรตีน 3D จริง
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-[1120px] px-5 md:px-8 mt-12 md:mt-16">
        <div className="rounded-[28px] bg-[var(--surface)] border border-[var(--line)] overflow-hidden">
          <div className="p-6 md:p-8 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-[18px] md:text-[22px] font-bold flex items-center gap-2"><Clock3 className="h-5 w-5" /> Timeline 2016 → 2026: จากค้นพบสู่ LEO3C Foundation</h3>
            <span className="text-[11px] mono px-3 py-1 rounded-full bg-[#1A2B1A] text-white">EDUCATIONAL TIMELINE</span>
          </div>
          <div className="px-6 md:px-8 pb-8 overflow-x-auto">
            <div className="flex gap-3 min-w-[760px]">
              {timeline.map((t, i) => (
                <div key={i} className={`relative rounded-[18px] border p-4 w-[200px] shrink-0 ${i===5 ? 'bg-[#1A2B1A] text-white border-[#1A2B1A]' : 'bg-[var(--surface-2)] border-[var(--line)]'}`}>
                  <div className="flex items-center justify-between">
                    <div className={`text-[22px] font-bold leading-none ${i===5 ? 'text-[#D9ED92]' : 'text-[var(--green)]'}`}>{t.year}</div>
                    <span className={`text-[9px] mono px-1.5 py-0.5 rounded-full font-bold ${i===5 ? 'bg-[#D9ED92] text-[#1A2B1A]' : 'bg-white border'}`}>{t.tag}</span>
                  </div>
                  <div className="mt-3 font-bold text-[13px] leading-tight">{t.title}</div>
                  <div className={`mt-1 text-[12px] leading-[1.4] ${i===5 ? 'text-white/70' : 'text-[var(--ink-muted)]'}`}>{t.desc}</div>
                  {i<timeline.length-1 && <div className="absolute top-1/2 -right-2 h-px w-4 bg-[var(--line-strong)] hidden md:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Study Links */}
      <section className="mx-auto max-w-[1120px] px-5 md:px-8 mt-12 md:mt-16 grid md:grid-cols-[1.1fr_0.9fr] gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mono text-[11px] tracking-widest font-bold text-[var(--ink-faint)]"><Layers className="h-3.5 w-3.5" /> SECTION 05 — STUDY LINKS & REFERENCES</div>
          <h2 className="mt-2 text-[26px] md:text-[32px] font-bold leading-[0.95] tracking-tight">เอกสารให้พาร์ทเนอร์ไปศึกษาต่อ</h2>
          
          <div className="mt-6 space-y-3">
            {[
              { 
                type: "Primary Paper", 
                title: "Yoshida et al. 2016 Science — A bacterium that degrades and assimilates PET", 
                link: "https://www.science.org/doi/10.1126/science.aad6359", 
                desc: "เปเปอร์ต้นฉบับ ค้นพบ Ideonella sakaiensis 201-F6 ที่โรงงานรีไซเคิล Sakai, Japan — ต้องอ่าน",
                badge: "MUST READ"
              },
              { 
                type: "2024 Update", 
                title: "2024 Kyoto University — Thermostable PETase improvements & closed-loop recycling", 
                link: "https://www.ncbi.nlm.nih.gov/search/?term=Ideonella+sakaiensis+2024", 
                desc: "ค้น NCBI ล่าสุด: PETase ทนร้อน 70°C, ย่อยเร็วขึ้น 6x, แยก TPA บริสุทธิ์",
                badge: "2024"
              },
              { 
                type: "Engineered Enzymes", 
                title: "Lu et al. 2022 Nature — FAST-PETase machine-learning engineered", 
                link: "https://www.nature.com/articles/s41586-022-04599-z", 
                desc: "FAST-PETase: 51 PET products in 1 week, ทำงานที่ 50°C, ตัวอย่างการทำ protein engineering",
                badge: "AI + BIO"
              },
              { 
                type: "Explainer Video", 
                title: "Video explainer: How PETase breaks down plastic (placeholder for internal training)", 
                link: "#video-explainer", 
                desc: "วิดีโอ 8 นาที อธิบายกลไก PETase → MHETase → EG+TPA สำหรับทีมที่ไม่ใช่สายชีวะ",
                badge: "VIDEO"
              },
              { 
                type: "For deeper study", 
                title: "NCBI Search: Ideonella sakaiensis — all recent studies", 
                link: "https://www.ncbi.nlm.nih.gov/", 
                desc: "ไปที่ https://www.ncbi.nlm.nih.gov/ แล้ว search Ideonella sakaiensis — ลิงก์ค้นงานวิจัยทั้งหมด สำหรับทีม R&D อยากดูโครงสร้าง 3D, genome, และงานใหม่ๆ",
                badge: "DATABASE"
              },
            ].map((r, i) => (
              <a 
                key={i} 
                href={r.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex gap-4 rounded-[18px] bg-[var(--surface)] border border-[var(--line)] p-4 hover:border-[var(--green-2)] hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)] transition-all"
              >
                <div className="h-10 w-10 rounded-full bg-[var(--surface-2)] border grid place-items-center shrink-0 group-hover:bg-[#1A2B1A] group-hover:text-white transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] mono px-2 py-0.5 rounded-full bg-[#1A2B1A] text-white font-bold">{r.type}</span>
                    <span className="text-[10px] mono px-2 py-0.5 rounded-full bg-[var(--lime)] text-[#1A2B1A] font-bold">{r.badge}</span>
                  </div>
                  <div className="font-bold text-[13px] md:text-[14px] leading-[1.3] mt-1.5 group-hover:text-[var(--green)] transition-colors">{r.title}</div>
                  <div className="text-[12px] text-[var(--ink-muted)] leading-[1.4] mt-1">{r.desc}</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-[11px] mono font-bold text-[var(--green)]">Open <ArrowUpRight className="h-3 w-3" /></div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[24px] bg-[#1A2B1A] text-white p-6">
            <div className="flex items-center gap-2 mono text-[11px] tracking-widest font-bold text-[#D9ED92]"><Sparkles className="h-3.5 w-3.5" /> INTERNAL NOTE FOR PARTNERS</div>
            <h4 className="mt-3 text-[18px] font-bold leading-[1.15]">เตรียมพร้อมสำหรับ AI-Success_foundation: Circular Economy Module</h4>
            <p className="mt-3 text-[13px] leading-[1.6] text-white/70 thai">
              เอกสารนี้เป็นส่วนหนึ่งของ Learning Module ก่อนเปิดตัว Foundation ในอนาคต เราต้องการให้พาร์ทเนอร์เข้าใจว่าทำไมระบบนับได้ (countable) จึงสำคัญ — ไม่ใช่แค่ขาย แต่คือการพิสูจน์วงจรชีวิตผลิตภัณฑ์ได้จริง
            </p>
            <div className="mt-5 rounded-xl bg-white/10 border border-white/10 p-4">
              <div className="mono text-[10px] tracking-widest text-white/50">ACTION FOR PARTNERS</div>
              <ul className="mt-2 space-y-2 text-[12px] leading-[1.5]">
                <li className="flex gap-2"><span className="text-[#D9ED92]">•</span> อ่านเปเปอร์ Yoshida 2016 อย่างน้อย abstract + figures</li>
                <li className="flex gap-2"><span className="text-[#D9ED92]">•</span> ดูวิดีโออธิบาย PETase/MHETase mechanism</li>
                <li className="flex gap-2"><span className="text-[#D9ED92]">•</span> คิด use-case: จะอธิบายลูกค้าอย่างไรว่า countable → recyclable ได้</li>
                <li className="flex gap-2"><span className="text-[#D9ED92]">•</span> เตรียมคำถามสำหรับ Foundation Q&A รอบหน้า</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[24px] bg-[var(--surface)] border border-[var(--line)] p-6">
            <div className="font-bold mono text-[11px] tracking-widest flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> DISCLAIMER</div>
            <p className="mt-3 text-[12px] leading-[1.6] text-[var(--ink-muted)] thai">
              เอกสารนี้เป็นสื่อการเรียนรู้เสริมเพื่อสร้างความตระหนักด้านความยั่งยืนเท่านั้น (educational supplementary material for sustainability awareness) ไม่ใช่ส่วนหนึ่งของข้ออ้างสิทธิบัตร (not part of patent claims) และไม่ใช่คำกล่าวอ้างเชิงพาณิชย์ (not a commercial claim) เกี่ยวกับผลิตภัณฑ์ LEO3C ในปัจจุบัน ข้อมูลชีววิทยาและการย่อยสลายพลาสติกยังอยู่ในขั้นวิจัยในห้องปฏิบัติการ
            </p>
            <div className="mt-4 rounded-xl bg-[#FFF8E1] border border-[#FFE082] p-3 flex gap-2">
              <div className="h-5 w-5 rounded-full bg-[#FFBA08] grid place-items-center text-[12px] shrink-0">!</div>
              <div className="text-[11px] leading-[1.4] font-medium">LEO3C jackets ยังไม่ถูกย่อยด้วยแบคทีเรียในปัจจุบัน — นี่คือวิสัยทัศน์การศึกษาวงจรชีวิตร่วมกันสำหรับอนาคต</div>
            </div>
          </div>

          {/* FAQ */}
          <div className="rounded-[24px] bg-[var(--surface)] border border-[var(--line)] overflow-hidden">
            <div className="p-5 border-b border-[var(--line)] font-bold mono text-[11px] tracking-widest">FAQ — คำถามที่พบบ่อย</div>
            {[
              { q: "ทำไม LEO3C ต้องสนใจแบคทีเรีย?", a: "เพราะเราเคลม 100% Made in Origin เราต้องตอบคำถามเรื่องปลายทางของผลิตภัณฑ์ได้ ระบบ countable ที่มีอยู่ต่อยอดไป track การรีไซเคิลได้" },
              { q: "จะใช้จริงเมื่อไหร่?", a: "ตอนนี้เป็นการศึกษาเท่านั้น กระบวนการชีวภาพยังต้องใช้เวลาและโรงงานเฉพาะทาง แต่การเข้าใจไว้ก่อนทำให้ออกแบบ Foundation ได้ครบวงจร" },
              { q: "เกี่ยวกับสิทธิบัตรของเราหรือไม่?", a: "ไม่เกี่ยว — เอกสารนี้ระบุชัดเจนว่า supplementary educational material, not part of patent claims เพื่อไม่ให้สับสน" },
            ].map((f, i) => (
              <div key={i} className="border-b last:border-0 border-[var(--line)]">
                <button onClick={() => setOpenFaq(openFaq===i ? null : i)} className="w-full flex items-center justify-between p-4 text-left">
                  <span className="font-bold text-[13px] leading-tight pr-4">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${openFaq===i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq===i && <div className="px-4 pb-4 text-[12px] leading-[1.6] text-[var(--ink-muted)] thai">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1120px] px-5 md:px-8 mt-12 md:mt-16">
        <div className="rounded-[28px] bg-[#D9ED92] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="mono text-[11px] tracking-widest font-bold">NEXT STEP</div>
            <div className="mt-1 text-[20px] md:text-[24px] font-bold leading-[0.95]">กลับไปหน้าประกาศหลัก<br />และเตรียมคำถามสำหรับ Foundation</div>
            <div className="mt-2 text-[13px] text-[#1A2B1A]/70 thai">เอกสารนี้เป็นส่วนเสริม — หน้าหลักยังคงเป็นประกาศ LEO3C หลัก</div>
          </div>
          <div className="flex gap-3">
            <a href="#main" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A2B1A] text-white font-bold text-[14px] hover:opacity-90 transition-opacity">
              <ArrowLeft className="h-4 w-4" /> Back to Main Announcement
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 md:mt-16 border-t border-[var(--line)]">
        <div className="mx-auto max-w-[1120px] px-5 md:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[var(--ink)] text-[var(--bg)] grid place-items-center font-bold mono text-[12px]">IA</div>
            <div>
              <div className="font-bold text-[13px]">Part of IA&IB - Learning Module</div>
              <div className="mono text-[11px] text-[var(--ink-muted)]">LEO3C Sustainability Extension • Educational Supplementary Material • 2024-2026</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px] mono">
            <span className="px-2.5 py-1 rounded-full border bg-[var(--surface)]">NOT A PATENT CLAIM</span>
            <span className="px-2.5 py-1 rounded-full border bg-[var(--surface)]">EDUCATIONAL ONLY</span>
            <span className="px-2.5 py-1 rounded-full bg-[#1A2B1A] text-white">TH / EN</span>
          </div>
        </div>
      </footer>

      <div className="h-6" />
    </div>
  );
}
