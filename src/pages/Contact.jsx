import { useState } from 'react';
import WhatsAppFAB from '../components/WhatsAppFAB';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <main className="min-h-screen pb-32">
      <section className="relative h-[353px] md:h-[442px] overflow-hidden mb-16">
        <div className="absolute inset-0 bg-secondary-container opacity-30"></div>
        <img 
          alt="High-end studio background" 
          className="w-full h-full object-cover object-top filter brightness-95" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUuFatVZCg2rJZh6WIdQA_wQ3XAPYKVBYdtPcwTtnVQCgozeOtHj3BoTs9nVQyzFvSPmDniqUYgVmvERUFLPMDNQnONkVjwo28Wq82zmdLnt7RAoT-ApuMU7wYrLcvk-lWqBuvjlo4ezBYz4bK1aK4RcVLYQEKBrWM0SMeuudr15jh_kWcoaT-lL4pctNK2xrHrFhaiMkkCGTL_LUm6XeoniGqtXMboXpEhKwGR-6UqflCdXnDffqtcz7jDo3R0SbAxiHCGJYMpEEw" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-headline text-4xl md:text-6xl text-white tracking-tight mb-4">
            Connect With Us
          </h2>
          <p className="font-body text-white/80 max-w-md mx-auto uppercase tracking-[0.2em] text-xs">
            The Atelier Experience Awaits
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <h3 className="font-headline text-2xl text-primary italic">Inquiries & Consultations</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Whether you are seeking a bespoke fit or exploring our latest collection, we are here to assist with refined attention to detail.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-outline-variant/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="font-label text-xs uppercase tracking-widest text-outline mb-1">Our Atelier</p>
                  <p className="text-lg font-headline">Akkaraipattu</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-outline-variant/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="font-label text-xs uppercase tracking-widest text-outline mb-1">Speak with us</p>
                  <a href="tel:0751355284" className="text-lg font-headline hover:text-primary transition-colors">
                    0751355284
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary hover:scale-110 transition-transform" href="#">
                  <span className="material-symbols-outlined text-sm">share</span>
                </a>
                <p className="font-label text-xs uppercase tracking-widest text-outline">Instagram & Facebook</p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-6 md:p-8 rounded-xl shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-primary text-5xl mb-4">check_circle</span>
                <h3 className="font-headline text-2xl mb-4">Message Sent</h3>
                <p className="text-on-surface-variant">Thank you for reaching out. We'll be in touch soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary font-label uppercase tracking-widest text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="relative">
                  <input
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 px-0 focus:ring-0 focus:border-primary transition-all text-on-surface"
                    id="name"
                    placeholder=" "
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label 
                    className="absolute left-0 top-3 text-on-surface-variant transition-all duration-300 pointer-events-none font-label uppercase text-[10px] tracking-widest peer-focus:-top-4 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 px-0 focus:ring-0 focus:border-primary transition-all text-on-surface"
                    id="phone"
                    placeholder=" "
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label 
                    className="absolute left-0 top-3 text-on-surface-variant transition-all duration-300 pointer-events-none font-label uppercase text-[10px] tracking-widest peer-focus:-top-4 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 px-0 focus:ring-0 focus:border-primary transition-all text-on-surface resize-none"
                    id="message"
                    placeholder=" "
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label 
                    className="absolute left-0 top-3 text-on-surface-variant transition-all duration-300 pointer-events-none font-label uppercase text-[10px] tracking-widest peer-focus:-top-4 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4"
                    htmlFor="message"
                  >
                    Message
                  </label>
                </div>

                <div className="space-y-4 pt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full liquid-gold-bg text-on-primary py-4 font-label uppercase tracking-[0.2em] text-xs font-bold hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <WhatsAppFAB />
    </main>
  );
};

export default Contact;
