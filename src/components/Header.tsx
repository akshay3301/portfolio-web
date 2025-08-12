export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_20px_var(--accent)]" style={{['--accent' as any]: '#00ADEF'}} />
          <span className="text-sm uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors">HS Akshay - Building Data-Driven Software</span>
        </a>
        <nav className="hidden gap-6 md:flex">
          <a href="#projects" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">Projects</a>
          <a href="#experience" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">Experience</a>
          <a href="#contact" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
} 