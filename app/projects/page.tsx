import Navbar from '@/components/Navbar'
import ProjectList from '@/components/ProjectList'

export const metadata = {
  title: 'Pengalaman & Portofolio | Ns. Eka Awalia, S.Kep',
  description: 'Portofolio praktik klinis keperawatan, prestasi, dan publikasi',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <ProjectList />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)] mt-20">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Ns. Eka Awalia, S.Kep All rights reserved.
        </p>
      </footer>
    </main>
  )
}
