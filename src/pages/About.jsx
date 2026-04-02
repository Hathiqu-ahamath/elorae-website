import WhatsAppFAB from '../components/WhatsAppFAB';

const About = () => {
  return (
    <main className="relative">
      <section className="relative h-[707px] flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Ethereal fabric background" 
            className="w-full h-full object-cover opacity-20" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7uxbf4btXqBTcnHKFslPzrtUieuVqVd0w8AXZe0DLKUa0oVG04f22f0wnN2-WD-lxkNXh61veG3_UGC_MAbSedlEbC1HLyKpIEEDDfHR9uVQnhsb2mm3SrjXgR0R6UHiZRy0NSAZv4Bk7QfZEFpPFj6qBHcY38rvy_GbVRMOPByb_eNGd651diOoRhIQEg6EMbBGiRObzsfN38zqcvR73_Y15VRIT9oybtw1Zj2scfNaatrrliGXCl5Nwk6H1N2nRmi7DI8fbbboi" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/20 to-surface"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-3xl">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
            The Atelier Ethos
          </span>
          <h2 className="font-headline text-5xl md:text-7xl font-light leading-tight text-on-surface mb-8">
            Redefining <span className="italic">Modesty</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Where traditional craftsmanship meets contemporary silhouettes. We believe that true luxury is found in the quiet details and the softest touch of silk.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3 className="font-headline text-4xl leading-snug">Our Craftsmanship</h3>
              <p className="text-on-surface-variant leading-loose">
                Each piece at ELORAE.MODEST is a testament to the patient hands of our artisans. We reject the haste of mass production, choosing instead the deliberate pace of hand-stitched seams and meticulously applied beadwork.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">edit_note</span>
                <div>
                  <h4 className="font-headline text-xl mb-2">Bespoke Tailoring</h4>
                  <p className="text-sm text-on-surface-variant">
                    Every client's journey begins with a unique pattern, drafted to ensure the perfect drape and unparalleled comfort.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">diamond</span>
                <div>
                  <h4 className="font-headline text-xl mb-2">Artisanal Embroidery</h4>
                  <p className="text-sm text-on-surface-variant">
                    Our intricate beadwork takes hours of focus, using the finest crystals and threads to catch the light with every movement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <div className="pt-12">
              <img 
                alt="Handmade details" 
                className="rounded-lg shadow-editorial w-full aspect-[3/4] object-cover" 
                src="/images/3.jpeg" 
              />
            </div>
            <div className="pb-12">
              <img 
                alt="Tailoring process" 
                className="rounded-lg shadow-editorial w-full aspect-[3/4] object-cover mt-8" 
                src="images/1.jpeg" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface">
        <div className="max-w-5xl mx-auto text-center px-6">
          <div className="bg-secondary-container/30 py-20 px-8 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#775a19]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="font-headline text-3xl mb-6">Designed Around You</h3>
              <p className="text-on-surface-variant mb-10 italic">
                "A garment should never feel like a compromise. We offer a private consultation for every piece, allowing you to choose fabrics, adjust lengths, and add personal embroidery."
              </p>
              <button className="liquid-gold-bg text-on-primary px-10 py-4 rounded-lg font-label text-sm tracking-[0.2em] uppercase hover:scale-102 transition-transform duration-300 shadow-editorial">
                Begin Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppFAB />
    </main>
  );
};

export default About;
