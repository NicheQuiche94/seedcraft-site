export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 px-8 lg:px-16 py-6 flex justify-between items-center z-50 bg-cream">
        <div className="text-sm font-semibold tracking-widest uppercase text-text-dark">
          Seedcraft
        </div>
        <ul className="hidden md:flex gap-10">
          <li><a href="#process" className="text-xs font-medium tracking-wider uppercase text-text-medium hover:text-text-dark transition-colors">Process</a></li>
          <li><a href="#portfolio" className="text-xs font-medium tracking-wider uppercase text-text-medium hover:text-text-dark transition-colors">Portfolio</a></li>
          <li><a href="#philosophy" className="text-xs font-medium tracking-wider uppercase text-text-medium hover:text-text-dark transition-colors">Philosophy</a></li>
          <li><a href="#contact" className="text-xs font-medium tracking-wider uppercase text-text-medium hover:text-text-dark transition-colors">Contact</a></li>
        </ul>
      </nav>

      {/* Diagonal Divider - below nav */}
      <div className="h-24 lg:h-36 bg-forest-deep relative overflow-hidden mt-[72px]">
        <div className="absolute inset-0 bg-cream origin-bottom-left skew-y-2" style={{ bottom: 0, left: '-10%', right: '-10%' }} />
      </div>

      {/* Hero */}
      <section className="min-h-[calc(100vh-72px-6rem)] flex flex-col justify-center items-center text-center px-6 pb-24 relative -mt-12">
        <div className="absolute bottom-[15%] right-[8%] w-48 h-px bg-text-light rotate-[-45deg] opacity-30 hidden lg:block" />
        
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-text-light mb-12">
          Venture Studio
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-normal leading-[0.95] tracking-tight max-w-5xl mb-12">
          <span className="block">Where ideas</span>
          <span className="block">become <em className="italic">experiences</em></span>
        </h1>
        <p className="text-lg text-text-medium max-w-md leading-relaxed mb-24">
          We take products from zero to one. Build, validate, launch, then find the right team to scale.
        </p>
        
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.2em] uppercase text-text-light">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-text-light to-transparent" />
        </div>
      </section>

      {/* About */}
      <section className="py-32 lg:py-48 px-8 lg:px-16 bg-forest-deep text-cream relative overflow-hidden">
        <div className="absolute -top-1/2 -right-[10%] w-[600px] h-px bg-forest-light rotate-[-45deg]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed font-normal">
            We don't wait for perfect conditions. We build when others are still planning. We ship when others are still debating. We find the gaps <em className="italic text-cream-dark">everyone else walked past.</em>
          </p>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-32 lg:py-40 px-8 lg:px-16 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-20">
            The process
          </h2>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="group">
              <div className="font-serif text-7xl lg:text-8xl text-cream-darker group-hover:text-forest-deep transition-colors duration-300 mb-6">01</div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Build</h3>
              <p className="text-text-medium leading-relaxed">We identify gaps others miss and build from scratch. No templates, no shortcuts. Real solutions to real problems.</p>
            </div>
            <div className="group">
              <div className="font-serif text-7xl lg:text-8xl text-cream-darker group-hover:text-forest-deep transition-colors duration-300 mb-6">02</div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Validate</h3>
              <p className="text-text-medium leading-relaxed">Real users, real revenue. We prove market fit before anyone talks about scale. Validation over vanity.</p>
            </div>
            <div className="group">
              <div className="font-serif text-7xl lg:text-8xl text-cream-darker group-hover:text-forest-deep transition-colors duration-300 mb-6">03</div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Partner</h3>
              <p className="text-text-medium leading-relaxed">We find the right operators to scale, retain equity, stay as advisors, and move on to build the next thing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div className="h-24 lg:h-36 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-forest-deep origin-top-left -skew-y-2" style={{ top: 0, left: '-10%', right: '-10%' }} />
      </div>

      {/* Portfolio */}
      <section id="portfolio" className="py-32 lg:py-40 px-8 lg:px-16 bg-forest-deep text-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-16">
            Portfolio
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-cream-dark opacity-60 block mb-8">Staff Scheduling</span>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6">Shiftly</h3>
              <p className="text-lg text-cream-dark opacity-80 leading-relaxed mb-10 max-w-md">
                Staff scheduling for retail and hospitality. Rotas that used to take hours, done in minutes. Fair by design.
              </p>
              <a href="https://shiftly.so" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider uppercase hover:gap-5 transition-all">
                Visit Shiftly <span className="text-lg">→</span>
              </a>
            </div>
            <div className="aspect-[4/3] bg-forest-mid relative flex items-center justify-center">
              <span className="absolute top-6 right-6 text-[10px] font-semibold tracking-[0.15em] uppercase px-4 py-2 border border-cream/30">Live</span>
              {/* Placeholder for Shiftly logo - we'll add the real SVG later */}
              <span className="font-serif text-9xl text-cream opacity-5">S</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-32 lg:py-40 px-8 lg:px-16 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-16">
            Philosophy
          </h2>
          <div className="flex flex-col gap-10">
            <div className="pl-6 border-l border-cream-darker hover:border-forest-deep transition-colors">
              <p className="font-serif text-xl md:text-2xl lg:text-3xl leading-snug italic">
                The best opportunities look like bad ideas at first.
              </p>
            </div>
            <div className="pl-6 border-l border-cream-darker hover:border-forest-deep transition-colors">
              <p className="font-serif text-xl md:text-2xl lg:text-3xl leading-snug italic">
                Inspiration has no borders.
              </p>
            </div>
            <div className="pl-6 border-l border-cream-darker hover:border-forest-deep transition-colors">
              <p className="font-serif text-xl md:text-2xl lg:text-3xl leading-snug italic">
                Playing it safe is how you get left behind.
              </p>
            </div>
            <div className="pl-6 border-l border-cream-darker hover:border-forest-deep transition-colors">
              <p className="font-serif text-xl md:text-2xl lg:text-3xl leading-snug italic">
                Validation beats vision. But vision comes first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 lg:py-40 px-8 lg:px-16 bg-cream-dark">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6">
              Let's talk
            </h2>
            <p className="text-lg text-text-medium leading-relaxed max-w-md">
              Whether you're an operator looking to scale a validated product, or you've spotted a gap we should explore together.
            </p>
          </div>
          <div className="space-y-8 lg:pt-4">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-text-light mb-2">Email</div>
              <a href="mailto:hello@seedcraft.co" className="text-lg hover:opacity-60 transition-opacity">hello@seedcraft.co</a>
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-text-light mb-2">Location</div>
              <div className="text-lg">United Kingdom</div>
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-text-light mb-2">Company</div>
              <div className="text-lg">Seedcraft Ventures Ltd</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 lg:px-16 bg-forest-deep">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-cream opacity-40 text-sm">© 2025 Seedcraft Ventures Ltd</span>
          <span className="text-cream opacity-40 text-xs">Company No. [Your Number] | England & Wales</span>
        </div>
      </footer>
    </main>
  )
}