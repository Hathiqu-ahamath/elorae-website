const WhatsAppFAB = () => {
  return (
    <a 
      className="fixed bottom-24 right-8 z-[60] liquid-gold-cta p-4 rounded-full shadow-gold hover:scale-110 transition-transform duration-300 group" 
      href="https://wa.me/0751355284"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="material-symbols-outlined text-on-primary text-3xl">chat_bubble</span>
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-surface text-primary px-4 py-2 rounded-lg text-xs font-label uppercase tracking-widest shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppFAB;
