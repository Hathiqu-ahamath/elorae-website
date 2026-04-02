import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppFAB from '../components/WhatsAppFAB';
import { fetchGalleryData } from '../services/sheetService';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchGalleryData();
      setGalleryItems(data);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-24">
      <div className="mb-16 md:mb-20 text-center">
        <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary mb-3 block">
          The Art of the Atelier
        </span>
        <h2 className="font-headline text-4xl md:text-6xl font-light text-on-surface mb-5">
          Curated Details
        </h2>
        <p className="font-headline italic text-base md:text-lg text-on-surface-variant max-w-xl mx-auto opacity-80">
          A visual journey through our most intricate hand-stitched masterpieces, where every pearl tells a story of devotion.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="space-y-20 md:space-y-28">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`
                flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center
                ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
              `}
            >
              <div className="w-full md:w-3/5">
                <div className="relative group">
                  <div className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] overflow-hidden rounded-lg shadow-editorial">
                    <img 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={item.title}
                      src={item.src}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute -top-3 -left-3 w-12 h-12 md:w-16 md:h-16 bg-secondary-container rounded-full blur-xl"></div>
                </div>
              </div>
              
              <div className="w-full md:w-2/5 text-center md:text-left">
                <p className="font-label text-[10px] uppercase tracking-[0.25em] text-primary mb-2 md:mb-3">
                  {item.category}
                </p>
                <h3 className="font-headline text-2xl md:text-3xl lg:text-4xl font-light text-on-surface mb-4 md:mb-6">
                  {item.title}
                </h3>
                <div className="w-12 h-px bg-primary/40 mx-auto md:mx-0 mb-4"></div>
                <p className="font-body text-sm md:text-base text-on-surface-variant opacity-70 leading-relaxed">
                  Handcrafted with meticulous attention to detail, each piece represents hours of dedication and artistry.
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-24 md:mt-32 text-center relative py-16 md:py-20 px-6 bg-surface-container-low rounded-xl overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-headline text-3xl md:text-4xl mb-5">Experience the Atelier</h3>
          <p className="font-body text-on-surface-variant mb-8 max-w-lg mx-auto">
            Book a private consultation to begin your journey of bespoke modesty and unmatched craftsmanship.
          </p>
          <Link to="/contact">
            <button className="liquid-gold-bg text-on-primary px-10 py-4 rounded shadow-gold hover:scale-105 transition-transform font-label tracking-widest text-xs uppercase">
              Inquire for Bespoke
            </button>
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container opacity-20 blur-3xl -mr-32 -mt-32 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-fixed-dim opacity-10 blur-3xl -ml-32 -mb-32 rounded-full"></div>
      </div>
      
      <WhatsAppFAB />
    </main>
  );
};

export default Gallery;
