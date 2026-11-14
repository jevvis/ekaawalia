'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-blue-600', 'bg-teal-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Keperawatan Gawat Darurat", en: "Emergency Nursing" },
    description: { id: "Pengkajian awal cepat dan sistematis dengan pendekatan ABCDE serta penanganan henti napas, syok, dan trauma.", en: "Quick, systematic initial assessment with the ABCDE approach and management of respiratory arrest, shock, and trauma." },
    framework: "RSUD GOETENG PURBALINGGA 2026",
    techStack: ["ABCDE", "Emergency"],
  },
  {
    number: '02',
    title: { id: "Manajemen Keperawatan", en: "Nursing Management" },
    description: { id: "Koordinasi tim, pengorganisasian asuhan keperawatan, dan penerapan standar keselamatan pasien.", en: "Team coordination, organization of nursing care, and implementation of patient safety standards." },
    framework: "RSUD GOETENG PURBALINGGA 2026",
    techStack: ["Management", "Patient Safety"],
  },
  {
    number: '03',
    title: { id: "Keperawatan Gerontik", en: "Gerontic Nursing" },
    description: { id: "Pengkajian status kesehatan lansia, pemantauan tanda vital, serta identifikasi risiko jatuh dan masalah kesehatan.", en: "Assessment of elderly health status, vital signs monitoring, and identification of fall risk and health problems." },
    framework: "PPSLU SUDAGARAN BANYUMAS 2026",
    techStack: ["Elderly", "Fall Risk"],
  },
  {
    number: '04',
    title: { id: "Keperawatan Komunitas", en: "Community Nursing" },
    description: { id: "Rencana intervensi serta kegiatan promotif dan preventif: kunjungan masyarakat, penyuluhan, imunisasi, dan kampanye kesehatan.", en: "Intervention plans and promotive and preventive activities: community visits, health education, immunization, and health campaigns." },
    framework: "PUSKESMAS II KEMBARAN 2026",
    techStack: ["Promotive", "Immunization"],
  },
  {
    number: '05',
    title: { id: "Keperawatan Keluarga", en: "Family Nursing" },
    description: { id: "Pengkajian kesehatan keluarga, identifikasi masalah dan faktor risiko, serta edukasi untuk kemandirian keluarga.", en: "Family health assessment, identification of problems and risk factors, and education for family independence." },
    framework: "PUSKESMAS II KEMBARAN 2026",
    techStack: ["Family", "Education"],
  },
  {
    number: '06',
    title: { id: "Keperawatan Dasar", en: "Fundamental Nursing" },
    description: { id: "Asuhan dasar pada pasien dewasa dan anak: pengkajian, kebutuhan dasar, pemantauan, evaluasi, dan dokumentasi.", en: "Basic care for adult and pediatric patients: assessment, basic needs, monitoring, evaluation, and documentation." },
    framework: "RSUD PROF. DR. MARGONO SOEKARJO 2025 — 2026",
    techStack: ["Fundamental", "Documentation"],
  },
  {
    number: '07',
    title: { id: "Keperawatan Anak", en: "Pediatric Nursing" },
    description: { id: "Asuhan pada pasien anak: pengkajian kebutuhan, intervensi, pemantauan perkembangan, dan edukasi kesehatan kepada keluarga.", en: "Care for pediatric patients: needs assessment, interventions, progress monitoring, and health education for families." },
    framework: "RSUD PROF. DR. MARGONO SOEKARJO 2025 — 2026",
    techStack: ["Pediatric", "Education"],
  },
  {
    number: '08',
    title: { id: "Keperawatan Maternitas", en: "Maternity Nursing" },
    description: { id: "Asuhan ibu antenatal, intranatal, dan postnatal, perawatan bayi baru lahir, dukungan menyusui, dan edukasi pascapersalinan.", en: "Antenatal, intranatal, and postnatal maternal care, newborn care, breastfeeding support, and postpartum education." },
    framework: "RSUD PROF. DR. MARGONO SOEKARJO 2025 — 2026",
    techStack: ["Maternity", "Newborn Care"],
  },
  {
    number: '09',
    title: { id: "Keperawatan Medikal Bedah", en: "Medical-Surgical Nursing" },
    description: { id: "Asuhan pada pasien dewasa dengan berbagai gangguan kesehatan, dari pengkajian hingga evaluasi dan dokumentasi.", en: "Care for adult patients with various health disorders, from assessment to evaluation and documentation." },
    framework: "RSUD PROF. DR. MARGONO SOEKARJO 2025 — 2026",
    techStack: ["Medical-Surgical", "Evaluation"],
  },
  {
    number: '10',
    title: { id: "Keperawatan Jiwa", en: "Psychiatric Nursing" },
    description: { id: "Pengkajian status mental, komunikasi terapeutik, Terapi Aktivitas Kelompok (TAK), dan edukasi kesehatan.", en: "Mental status assessment, therapeutic communication, Group Activity Therapy (TAK), and health education." },
    framework: "RSUD BANYUMAS 2025",
    techStack: ["Therapeutic Communication", "TAK"],
  },
  {
    number: '11',
    title: { id: "Juara 1 Inovasi Produk Kesehatan, ISCONEX 2026", en: "1st Winner, Health Product-Based Innovation, ISCONEX 2026" },
    description: { id: "Juara 1 pada UMP International Health Sciences Student Competition, Innovation & Exhibition 2026.", en: "1st place at the UMP International Health Sciences Student Competition, Innovation & Exhibition 2026." },
    framework: "UNIVERSITAS MUHAMMADIYAH PURWOKERTO 2026",
    techStack: ["1st Place", "Innovation"],
  },
  {
    number: '12',
    title: { id: "Publikasi Jurnal Nasional Terakreditasi Sinta 5", en: "National Sinta 5 Accredited Journal Publication" },
    description: { id: "Kontribusi penulisan artikel ilmiah pada Jurnal Penelitian Perawat Profesional.", en: "Contribution to a scientific article in Jurnal Penelitian Perawat Profesional." },
    framework: "JURNAL PENELITIAN PERAWAT PROFESIONAL",
    techStack: ["Sinta 5", "Publication"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'NURSING CLINICAL PORTFOLIO' : 'PORTOFOLIO KLINIS KEPERAWATAN'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Clinical Practice, Achievements & Publications' : 'Praktik Klinis, Prestasi & Publikasi'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of clinical nursing practice across five healthcare facilities, an innovation award, and a journal publication.'
              : 'Rekam jejak praktik klinis keperawatan di lima fasilitas pelayanan kesehatan, penghargaan inovasi, dan publikasi jurnal.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
