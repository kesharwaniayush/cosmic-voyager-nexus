
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import StarBackground from '@/components/StarBackground';
import PlanetCard from '@/components/PlanetCard';
import { planetData, PlanetInfo } from '@/lib/planetData';
import { Search, AlertTriangle } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Planets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetInfo | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  
  // Handle image error
  const handleImageError = (planetId: string) => {
    setImageErrors(prev => ({
      ...prev,
      [planetId]: true
    }));
  };
  
  // Filter planets based on search term
  const filteredPlanets = planetData.filter(planet => 
    planet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (planet.nickname && planet.nickname.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div className="min-h-screen cosmos-bg flex flex-col">
      <StarBackground starCount={200} />
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-4 text-center cosmic-gradient-text">
          Planets & Celestial Bodies
        </h1>
        
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
          Explore the various planets and celestial bodies in our solar system. Click on any planet to learn more about its features, composition, and interesting facts.
        </p>
        
        {/* Search Input */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input 
            type="text"
            placeholder="Search planets..."
            className="pl-10 bg-space-navy/30 border-space-navy text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Planet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPlanets.map((planet) => (
            <div 
              key={planet.id}
              className="glass-panel p-5 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedPlanet(planet)}
            >
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 flex items-center justify-center">
                  {imageErrors[planet.id] ? (
                    <div className="text-center">
                      <AlertTriangle className="mx-auto text-space-teal h-10 w-10 mb-1" />
                      <span className="text-xs text-space-teal">{planet.name}</span>
                    </div>
                  ) : (
                    <img 
                      src={planet.image || `/planets/${planet.id}.png`} 
                      alt={planet.name}
                      className="max-w-full max-h-full animate-float"
                      onError={() => handleImageError(planet.id)}
                    />
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-center text-space-aqua mb-2">{planet.name}</h3>
              
              {planet.nickname && (
                <p className="text-gray-400 text-center text-sm mb-3">{planet.nickname}</p>
              )}
              
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                <span className="px-2 py-1 rounded-full bg-space-navy text-xs text-space-teal">
                  {planet.type}
                </span>
                
                <span className="px-2 py-1 rounded-full bg-space-navy text-xs text-space-teal">
                  {planet.position === 0 ? 'Center' : `${planet.position}${getNumberSuffix(planet.position)} planet`}
                </span>
              </div>
              
              <p className="text-gray-300 text-sm text-center line-clamp-3">
                {planet.description.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
        
        {filteredPlanets.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No planets found matching "{searchTerm}"
          </div>
        )}
      </main>
      
      {selectedPlanet && (
        <PlanetCard 
          planet={selectedPlanet} 
          onClose={() => setSelectedPlanet(null)} 
        />
      )}
      
      <footer className="py-6 glass-panel z-10">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Cosmic Voyager. An interactive solar system exploration tool.</p>
        </div>
      </footer>
    </div>
  );
};

// Helper function to add the correct suffix to numbers
const getNumberSuffix = (num: number): string => {
  if (num > 3 && num < 21) return 'th';
  switch (num % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

export default Planets;
