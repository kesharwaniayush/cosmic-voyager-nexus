
import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlanetInfo } from '@/lib/planetData';

interface PlanetCardProps {
  planet: PlanetInfo;
  onClose: () => void;
}

const PlanetCard = ({ planet, onClose }: PlanetCardProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'moons'>('overview');
  
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div 
        className="glass-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <div className="relative p-6">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
            <div className="w-32 h-32 flex-shrink-0">
              <img 
                src={planet.image || `/planets/${planet.id}.png`} 
                alt={planet.name} 
                className="w-full h-full object-contain animate-float"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-space-aqua text-glow mb-2">{planet.name}</h2>
              <p className="text-space-teal italic">{planet.nickname || `The ${planet.type}`}</p>
              
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 rounded bg-space-navy text-xs text-space-teal">
                  {planet.type.charAt(0).toUpperCase() + planet.type.slice(1)}
                </span>
                {planet.rings && (
                  <span className="px-2 py-1 rounded bg-space-navy text-xs text-space-teal">
                    Has Rings
                  </span>
                )}
                <span className="px-2 py-1 rounded bg-space-navy text-xs text-space-teal">
                  {planet.position} from Sun
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex border-b border-white/10 mb-4">
            <TabButton 
              active={activeTab === 'overview'} 
              onClick={() => setActiveTab('overview')}
              label="Overview"
            />
            <TabButton 
              active={activeTab === 'details'} 
              onClick={() => setActiveTab('details')}
              label="Details"
            />
            {planet.moons && planet.moons.length > 0 && (
              <TabButton 
                active={activeTab === 'moons'} 
                onClick={() => setActiveTab('moons')}
                label={`Moons (${planet.moons.length})`}
              />
            )}
          </div>
          
          <div className="space-y-4">
            {activeTab === 'overview' && (
              <>
                <p className="text-gray-300 leading-relaxed">{planet.description}</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                  <Stat label="Distance from Sun" value={`${formatNumber(planet.distanceFromSun)} km`} />
                  <Stat label="Orbital Period" value={`${planet.orbitalPeriod} days`} />
                  <Stat label="Diameter" value={`${formatNumber(planet.diameter)} km`} />
                </div>
                
                {planet.funFact && (
                  <div className="mt-4 p-3 bg-space-navy/50 rounded-lg">
                    <h4 className="font-semibold text-space-teal mb-1">Fun Fact</h4>
                    <p className="text-sm text-gray-300">{planet.funFact}</p>
                  </div>
                )}
              </>
            )}
            
            {activeTab === 'details' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Stat label="Mass" value={`${planet.mass} kg`} />
                  <Stat label="Volume" value={`${planet.volume} km³`} />
                  <Stat label="Gravity" value={`${planet.gravity} m/s²`} />
                  <Stat label="Rotation Period" value={`${planet.rotationPeriod} hours`} />
                  <Stat label="Average Temp" value={`${planet.temperature}°C`} />
                  <Stat label="Atmosphere" value={planet.atmosphere || 'None'} />
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-space-teal mb-2">Composition</h4>
                  <p className="text-gray-300">{planet.composition}</p>
                </div>
                
                {planet.discovery && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-space-teal mb-2">Discovery</h4>
                    <p className="text-gray-300">{planet.discovery}</p>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'moons' && planet.moons && (
              <div>
                <p className="text-gray-300 mb-4">{planet.name} has {planet.moons.length} known {planet.moons.length === 1 ? 'moon' : 'moons'}.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {planet.moons.slice(0, 8).map((moon, index) => (
                    <div key={index} className="p-3 bg-space-navy/50 rounded-lg">
                      <h4 className="font-semibold text-space-teal">{moon.name}</h4>
                      <p className="text-xs text-gray-400 mt-1">{moon.diameter} km diameter</p>
                      {moon.discovery && (
                        <p className="text-xs text-gray-400">Discovered: {moon.discovery}</p>
                      )}
                    </div>
                  ))}
                </div>
                
                {planet.moons.length > 8 && (
                  <p className="text-center text-sm text-gray-400 mt-3">
                    + {planet.moons.length - 8} more moons
                  </p>
                )}
              </div>
            )}
          </div>
          
          <div className="mt-6 pt-4 border-t border-white/10 flex justify-between">
            <Button 
              variant="outline" 
              className="text-space-teal border-space-teal hover:bg-space-teal/20"
              onClick={onClose}
            >
              Close
            </Button>
            
            <Button 
              variant="outline" 
              className="text-space-aqua border-space-aqua hover:bg-space-aqua/20"
              asChild
            >
              <a href={`/planets/${planet.id}`} className="flex items-center gap-1">
                <span>Learn More</span>
                <ExternalLink size={16} />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TabButton = ({ 
  active, 
  onClick, 
  label 
}: { 
  active: boolean; 
  onClick: () => void; 
  label: string;
}) => (
  <button
    className={`px-4 py-2 text-sm font-medium transition-colors ${
      active 
        ? 'text-space-aqua border-b-2 border-space-aqua' 
        : 'text-gray-400 hover:text-gray-300'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-space-navy/30 p-2 rounded">
    <p className="text-xs text-gray-400">{label}</p>
    <p className="text-sm font-medium text-white">{value}</p>
  </div>
);

export default PlanetCard;
