import WhatsAppFAB from '../components/WhatsAppFAB';

const Services = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-12 pb-32">
      <section className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="font-headline text-5xl md:text-7xl text-on-surface leading-tight mb-6">
            The Art of <span className="italic">Modesty</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed uppercase tracking-[0.2em] text-sm">
            Bespoke craftsmanship for the modern muse.
          </p>
        </div>
        <div className="hidden md:block">
          <span className="font-headline italic text-primary opacity-40 text-8xl leading-none select-none">Services</span>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="group relative bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(119,90,25,0.08)]">
          <div className="aspect-[4/2] overflow-hidden">
            <img 
              alt="Embroidery Detail" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb_2HlUCaqW3yX-jDVo9yBCCJVXIvVzhj1owG239uIXtSlNbnGbBa1eRlCxybmL6gZkUhyfQ__I4GAlPmNWjVAt1X8e6nGYaudYlaTL31LUNlECzis912QedDBwCK7RcVd1DKSOp0QAbEXxFfvkBJNf-7K30bOBQ1dz69utPpUb0iLhwfIzvPDZY5qqX4fSF8gLTaQOaJ0c3ld2DiTyQB0UAF6PvAc2K7rs_T4Rvok0WWQryXQUstwRRTkQxNY3A_Yw3bmhiers6ZE" 
            />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary">brush</span>
              <h3 className="font-headline text-2xl text-on-surface">Embroidery Work</h3>
            </div>
            <p className="font-body text-on-surface-variant text-sm mb-6 leading-relaxed">
              Intricate needlework narrating stories of tradition through silk threads and gold zari.
            </p>
            <a className="inline-block text-primary font-label text-xs tracking-widest border-b border-primary-container/30 pb-1 hover:border-primary transition-colors" href="#">
              VIEW COLLECTIONS
            </a>
          </div>
        </div>

        <div className="group relative bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(119,90,25,0.08)]">
          <div className="aspect-[4/2] overflow-hidden">
            <img 
              alt="Pearls" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXa6n1FTBqDsO48EFaqUA7u6nGuNl47pBGCyHR5s9e3Zrek4gdXPYJB9rP460hOgn-knFcvmKNz_aCK9UMyRvHEYl9DR2UZ_xvyY1oVzf0FJ29SjtmSItdaOjRFrZvHkal6HlehzUam6Dbnqv70e-DaKAHAKvKZVRGV78pFKqpdT1TEl9r37-Y53Wc764s4T9sDTsZnSxIEYh2rspJ7-tj4EXz5cbbFuMkN17Sk2iUkEu-DdAud-J3wL_iwbo7NkBKeFdaQeHi4eIw" 
            />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary">temp_preferences_custom</span>
              <h3 className="font-headline text-2xl text-on-surface">Pearlwork Customization</h3>
            </div>
            <p className="font-body text-on-surface-variant text-sm mb-6 leading-relaxed">
              Lustrous pearls delicately woven into your garments for a timeless, ethereal elegance.
            </p>
            <a className="inline-block text-primary font-label text-xs tracking-widest border-b border-primary-container/30 pb-1 hover:border-primary transition-colors" href="#">
              VIEW COLLECTIONS
            </a>
          </div>
        </div>
      </div>

      <section className="mt-32 text-center">
        <h4 className="font-headline text-2xl mb-10 italic">Personalize Your Selection</h4>
        <div className="flex flex-wrap justify-center gap-4">
          {['HEAVY BEADWORK', 'FLORAL EMBROIDERY', 'MINIMALIST PEARL', 'HAND-STITCHED'].map((item, index) => (
            <button 
              key={item}
              className={`px-6 py-2 font-label text-xs tracking-widest rounded-full transition-all ${
                index < 3 
                  ? 'bg-secondary-container text-on-secondary-container hover:shadow-sm border border-transparent' 
                  : 'border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>
      
      <WhatsAppFAB />
    </main>
  );
};

export default Services;
