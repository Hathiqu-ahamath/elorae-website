import { Link } from 'react-router-dom';
import WhatsAppFAB from '../components/WhatsAppFAB';

const Home = () => {
  return (
    <main>
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Elegant handcrafted ivory dress with intricate gold embroidery" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6bTGiI8TxcvxCo4fUdtRTZ0ZDI0xtehiAEgLH882Exxn1gZ9WvrlVZ7leZLoSqxdr8TNn8z2sEvktru3qM-0An7Wf3p6n23SgmfoI3LsxnkdL6x_ITTNwWmeoEb92h8IhIugBLAjQCSQhfTdScpRl7bp2xLz3b7RTIqxlYVFNB7Y7lKSOiFN6_ziY_kuT4sZIVMcbjSt8AgIQTMBg2kDWWWah9WRyjsdpxeSyv6Ry4wPgFuqViw-LVY-ADA3MKSAINOmyF5VsHWnC" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-xl ml-2 md:ml-6">
            <span className="font-label text-primary tracking-[0.3em] uppercase text-xs mb-3 block">
              Handcrafted Excellence
            </span>
            <h1 className="font-headline text-4xl md:text-6xl text-on-surface leading-tight mb-5">
              Elegant Handcrafted Designs Just for You
            </h1>
            <p className="font-body text-base md:text-lg text-on-surface-variant mb-8 max-w-md leading-relaxed">
              Customized Handcrafted Designs for Every Outfit. Experience the poetry of thread and bead.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="liquid-gold-cta text-on-primary px-8 py-3 rounded-lg font-label uppercase tracking-widest text-sm hover:scale-102 transition-transform shadow-md">
                Order Now
              </button>
              <Link to="/gallery">
                <button className="border border-outline-variant/40 text-primary px-8 py-3 rounded-lg font-label uppercase tracking-widest text-sm hover:bg-surface-container-low transition-colors">
                  View Collections
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-[16/10] max-w-sm mx-auto md:max-w-none overflow-hidden rounded-lg shadow-editorial">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Artisanal hands meticulously sewing pearlwork" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSMiu0j8Fc6mbt9NBKP7bpt4fGZ0bkWAdvL3HPjR4GS_nLc1M5mYJbQwv9nOTN7ZAj5WRtnANqF5zk0axPAkdSGpq9z4TECPCztXsTTvjsOYppwN7-YA1MRTU1K2o98wP0ZFnLxSMgIqSXSG1t0enwdQb55a9itCEKz9z_c8qRYKuHehkwHcHzFHFAxlfhXxskwS4KCv3la0OrMWqzR36N9qeS83f5MzLRYH0iUeVdmHNaH2faqeQh-SAIvRnAP7lGaC9CYf7k7OxY" 
                />
              </div>
              <div className="absolute -bottom-8 -right-8 hidden lg:block w-40 aspect-square rounded-lg overflow-hidden border-[10px] border-surface shadow-xl">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Beadwork details on abaya" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO-3bDaoPgebugJXLa7BtRYGTnDAuYJd4g6Rzqvr0v6lohDLmpRX4bA6RMG4QVZlHb_s4TAzuc9GuzjxXVI5fT7wcZsY687yan35y9NBdySrHiWU_exv9gsfrgUS6_HQexWqyGW_B_OAKfLRhioQEV-4OQL2yGVGSmD_fC69zwGrsc6bMU-azfOAx8G-Ns_Q-Pp7HD6F8jCsyVNEsv4xrn8xrO_XFvbsT3K4gJAH7-espaYidDazwL9y_6d0zYr7GevSQoT6RwzEL7" 
                />
              </div>
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="font-headline text-3xl md:text-4xl text-on-surface leading-snug">
                Specializing in the Fine Art of Beadwork & Embroidery
              </h2>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed italic">
                At ELORAE.MODEST, we believe every garment tells a story. Our atelier specializes in the intricate crafts of beadwork, detailed embroidery, and delicate pearlwork.
              </p>
              <div className="grid grid-cols-2 gap-6 py-2">
                <div className="space-y-2">
                  <h4 className="font-headline text-primary text-lg">The Collections</h4>
                  <ul className="text-on-surface-variant space-y-1 font-label text-sm uppercase tracking-wider">
                    <li>Abayas</li>
                    <li>Salwars</li>
                    <li>Shawls</li>
                    <li>Frocks</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-headline text-primary text-lg">The Craft</h4>
                  <ul className="text-on-surface-variant space-y-1 font-label text-sm uppercase tracking-wider">
                    <li>Beadwork</li>
                    <li>Embroidery</li>
                    <li>Pearlwork</li>
                    <li>Bespoke Tailoring</li>
                  </ul>
                </div>
              </div>
              <Link to="/about">
                <button className="text-primary font-label uppercase tracking-[0.2em] text-xs flex items-center gap-2 group">
                  Our Story <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h3 className="font-headline text-2xl md:text-3xl mb-4 italic">The Editorial Selection</h3>
            <div className="h-1 w-12 bg-primary-container mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5 md:col-start-2 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-editorial">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Premium Salwar with gold beadwork" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB61sjFgR1yOWu2B1LL7FNSf-Txoy0siTZAjAHM9KIdlyQi1RltGppdGP5UpIT--dUk8l2zoN-XMdlO8wbFPjTzAQOFFz0EUWP2GlBli32TxlOlOu6ZN4rL4TZIh19UcTOR9xikEnAho-6ixb6cLXCY1OszeafT5ygptGNp5lzw1yzQFZLip2Tv_hHgYrDbQZDlTYh-xDv791aP4cfm4YKEthUc7XpSzhar_mzzFxN0S-5BxnC0AEyCzi9V7nb7PkbYBW_a7QJlx8-u" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-primary mb-2 block">Premium Salwars</span>
                    <h4 className="font-headline text-xl">The Golden Thread Collection</h4>
                  </div>
                  <span className="material-symbols-outlined text-primary-container text-3xl">auto_awesome</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-5 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-editorial">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Pearl work on blush shawl" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgaf-E-LuWGDc7293j989IQ9yCguMUZU3OoEipi4uhoDVB3g91-qP-hKqVudeV9M5vNWNBM5zfvi261rj6uFvGp_UxbZAL-gQOuDsRvflk2maYGENPDrHuX_7b7kF2OI0ekbgd1AVORyqU16NBeiJPtZZJEo8WshVZnbB3z3qEOuRNEqT9fS_MKwOhgT3IIkk7Gi6LUO1D5pJTuG6EmcZfOnrfcaz8ykMCrPLKNIER-08MeaGbrdFgh8kq6937u15kIccon2kVB7oa" 
                />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-primary mb-2 block">Luxury Shawls</span>
                <h4 className="font-headline text-xl">Pearl Essence</h4>
              </div>
            </div>
            
            <div className="md:col-span-12 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-editorial">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-10 flex flex-col justify-center bg-secondary-fixed/30">
                  <h4 className="font-headline text-2xl md:text-3xl mb-4">Signature Abayas</h4>
                  <p className="text-on-surface-variant mb-6 leading-relaxed text-sm md:text-base">
                    Merging traditional modesty with contemporary haute couture. Our abayas feature hand-placed Austrian crystals and intricate lace-cut embroidery.
                  </p>
                  <Link to="/services" className="inline-flex items-center gap-3 text-primary font-label uppercase tracking-widest text-sm font-semibold">
                    Explore Bespoke Options <span className="material-symbols-outlined">trending_flat</span>
                  </Link>
                </div>
                <div className="h-64 md:h-80 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Flowing silk abaya with silver embroidery" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcozYB_Y9mEwlHGNYrb41fwdEy5BJTJP2f1ZOyfwJoMm_cC3W5RG7Kh87TVe5lz4rO5_8LNRdM6j2opA-H_63U9z_6nmQjDPDicPL2RB0-FwmK51RmjQOLTdYkaHomFfrUwC8QEMjDjOUOoVyvlu0sNLhKBZ4jdAe4RiPdYDMt_FV3UoCz4JCIjVLYbJIgIR16nZ0GBNxn2lUA9-L0VDN8Kzj21kEf99EXjvcogr-gNSOMwSWY1tNEU4sjcihLfLEDVM_Q-O9S0GUU" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-surface overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h3 className="font-headline text-xl md:text-2xl mb-8 italic">Customize Your Masterpiece</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="bg-secondary-container px-5 py-2 rounded-full font-label text-xs uppercase tracking-widest text-on-secondary-container border border-primary transition-all duration-300">
              Pearlwork
            </button>
            <button className="bg-secondary-container/30 px-5 py-2 rounded-full font-label text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary/50 border border-transparent transition-all duration-300">
              3D Flowers
            </button>
            <button className="bg-secondary-container/30 px-5 py-2 rounded-full font-label text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary/50 border border-transparent transition-all duration-300">
              Glass Beads
            </button>
            <button className="bg-secondary-container/30 px-5 py-2 rounded-full font-label text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary/50 border border-transparent transition-all duration-300">
              Silk Thread
            </button>
            <button className="bg-secondary-container/30 px-5 py-2 rounded-full font-label text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary/50 border border-transparent transition-all duration-300">
              Gold Zardosi
            </button>
          </div>
        </div>
      </section>
      
      <WhatsAppFAB />
    </main>
  );
};

export default Home;
