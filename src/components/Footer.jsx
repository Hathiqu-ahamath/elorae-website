const Footer = () => {
  return (
    <footer className="w-full py-10 md:py-12 px-4 md:px-6 bg-stone-100 mt-16">
      <div className="flex flex-col items-center space-y-5 w-full text-center max-w-7xl mx-auto">
        <div className="font-headline text-lg tracking-widest text-primary uppercase">
          ELORAE.MODEST
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-stone-600 font-headline text-sm italic hover:text-primary transition-opacity" href="tel:0751355284">
            0751355284
          </a>
          <a className="text-stone-600 font-headline text-sm italic hover:text-primary transition-opacity" href="#">
            Akkaraipattu
          </a>
          <a className="text-stone-600 font-headline text-sm italic hover:text-primary transition-opacity" href="#">
            Instagram
          </a>
          <a className="text-stone-600 font-headline text-sm italic hover:text-primary transition-opacity" href="#">
            Facebook
          </a>
        </div>
        <p className="text-stone-500 font-headline text-xs italic">
          © 2024 ELORAE.MODEST. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
