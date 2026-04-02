import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  const navItems = [
    { path: '/', icon: 'home', label: 'Home' },
    { path: '/services', icon: 'auto_awesome', label: 'Services' },
    { path: '/gallery', icon: 'auto_stories', label: 'Gallery' },
    { path: '/about', icon: 'temp_preferences_custom', label: 'About' },
    { path: '/contact', icon: 'chat_bubble', label: 'Contact' },
  ];
  
  return (
    <div className="md:hidden fixed bottom-0 w-full z-50 bg-stone-50/90 backdrop-blur-md rounded-t-xl shadow-[0_-8px_24px_rgba(119,90,25,0.04)] flex justify-around items-center px-4 py-3">
      {navItems.map((item) => (
        <Link 
          key={item.path}
          to={item.path}
          className={`flex flex-col items-center justify-center rounded-xl px-3 py-1 transition-all duration-200 ${
            isActive(item.path) 
              ? 'bg-secondary-container text-primary scale-105' 
              : 'text-stone-400 hover:text-primary'
          }`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="font-body text-[10px] uppercase tracking-widest mt-1">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
