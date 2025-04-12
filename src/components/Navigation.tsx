
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Planet, Info, Rocket, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Sun className="h-6 w-6 text-space-aqua animate-pulse-glow" />
          <span className="text-xl font-bold cosmic-gradient-text">Cosmic Voyager</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" icon={<Home size={18} />} label="Home" />
          <NavLink to="/planets" icon={<Planet size={18} />} label="Planets" />
          <NavLink to="/about" icon={<Info size={18} />} label="About" />
          <NavLink to="/missions" icon={<Rocket size={18} />} label="Missions" />
        </div>

        {/* Mobile Navigation Button */}
        <Button 
          variant="ghost" 
          className="md:hidden text-space-aqua hover:text-space-teal hover:bg-space-navy/50"
          onClick={toggleNavbar}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel mt-1 animate-fade-in">
          <div className="flex flex-col space-y-3 p-4">
            <MobileNavLink to="/" icon={<Home size={18} />} label="Home" onClick={toggleNavbar} />
            <MobileNavLink to="/planets" icon={<Planet size={18} />} label="Planets" onClick={toggleNavbar} />
            <MobileNavLink to="/about" icon={<Info size={18} />} label="About" onClick={toggleNavbar} />
            <MobileNavLink to="/missions" icon={<Rocket size={18} />} label="Missions" onClick={toggleNavbar} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 px-3 py-2 rounded-md text-space-aqua hover:text-space-teal hover:bg-space-navy/50 transition-colors"
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const MobileNavLink = ({ 
  to, 
  icon, 
  label, 
  onClick 
}: { 
  to: string; 
  icon: React.ReactNode; 
  label: string;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="flex items-center space-x-2 px-4 py-3 rounded-md text-space-aqua hover:text-space-teal hover:bg-space-navy/50 transition-colors"
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default Navigation;
