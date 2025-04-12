
import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { OrbitControls, Stars, Html, useTexture, Text } from '@react-three/drei';
import { Vector3 } from 'three';
import { planetData, PlanetInfo } from '@/lib/planetData';
import PlanetCard from './PlanetCard';

// Scale factors to make the visualization more manageable
const DISTANCE_SCALE = 0.0000002; // Scale down the distance
const SIZE_SCALE = 0.0001; // Scale down the sizes
const MIN_SIZE = 0.1; // Minimum size to keep small planets visible
const MAX_SIZE = 3; // Maximum size to keep the sun from being too dominant
const TIME_SPEED = 0.1; // Initial time speed

// Calculate normalized planet size based on diameter
const getNormalizedSize = (diameter: number) => {
  const scaledSize = diameter * SIZE_SCALE;
  return Math.min(Math.max(scaledSize, MIN_SIZE), MAX_SIZE);
};

// Calculate orbit radius based on distance from Sun
const getOrbitRadius = (distance: number) => {
  return distance * DISTANCE_SCALE;
};

interface PlanetProps {
  planet: PlanetInfo;
  timeSpeed: number;
  onClick: () => void;
  selected: boolean;
}

const Planet = ({ planet, timeSpeed, onClick, selected }: PlanetProps) => {
  const orbitRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);
  const size = getNormalizedSize(planet.diameter);
  const orbitRadius = getOrbitRadius(planet.distanceFromSun);
  
  // Skip the Sun
  if (planet.id === 'sun') {
    return null;
  }
  
  // Calculate orbit period in seconds (adjusted for visualization)
  const orbitSpeed = (Math.PI * 2) / (planet.orbitalPeriod * 24 * 60) * timeSpeed;
  
  // Update the planet's position each frame
  useFrame(({ clock }) => {
    if (orbitRef.current) {
      // Rotate the orbit group
      orbitRef.current.rotation.y = clock.getElapsedTime() * orbitSpeed;
    }
    
    if (planetRef.current) {
      // Rotate the planet itself
      planetRef.current.rotation.y += 0.001 * timeSpeed;
    }
  });
  
  return (
    <group>
      {/* Orbit Path */}
      <mesh rotation-x={Math.PI / 2}>
        <ringGeometry args={[orbitRadius, orbitRadius + 0.02, 120]} />
        <meshBasicMaterial color="#ffffff" opacity={0.07} transparent={true} />
      </mesh>
      
      {/* Orbit Group */}
      <group ref={orbitRef}>
        {/* Planet */}
        <mesh 
          ref={planetRef}
          position={[orbitRadius, 0, 0]} 
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial 
            color={planet.color} 
            emissive={planet.color}
            emissiveIntensity={selected ? 0.5 : 0.2}
          />
          
          {/* Planet Label */}
          <Html
            position={[0, size + 0.3, 0]}
            center
            distanceFactor={15}
            occlude
          >
            <div className={`px-2 py-1 rounded-full text-center ${
              selected ? 'bg-space-teal text-space-dark font-bold' : 'bg-space-navy/80 text-white'
            }`}>
              {planet.name}
            </div>
          </Html>
        </mesh>
      </group>
    </group>
  );
};

const Sun = ({ size, selected, onClick }: { size: number, selected: boolean, onClick: () => void }) => {
  return (
    <mesh 
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <sphereGeometry args={[size, 48, 48]} />
      <meshBasicMaterial color="#FDB813" />
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#FFF9E3" />
      
      {/* Sun Label */}
      <Html
        position={[0, size + 0.4, 0]}
        center
        distanceFactor={15}
        occlude
      >
        <div className={`px-2 py-1 rounded-full text-center ${
          selected ? 'bg-space-teal text-space-dark font-bold' : 'bg-space-navy/80 text-white'
        }`}>
          Sun
        </div>
      </Html>
    </mesh>
  );
};

interface SolarSystemControlsProps {
  setTimeSpeed: (speed: number) => void;
  timeSpeed: number;
  resetCamera: () => void;
}

const SolarSystemControls = ({ setTimeSpeed, timeSpeed, resetCamera }: SolarSystemControlsProps) => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glass-panel p-3 flex items-center gap-3 z-10">
      <button 
        className="text-space-teal hover:text-space-aqua"
        onClick={() => setTimeSpeed(0)}
        aria-label="Pause"
      >
        {timeSpeed === 0 ? '▶' : '⏸️'}
      </button>
      
      <div className="flex items-center gap-2">
        <button 
          className="text-space-teal hover:text-space-aqua px-2"
          onClick={() => setTimeSpeed(Math.max(0.01, timeSpeed / 2))}
          aria-label="Slow down"
        >
          ⏪
        </button>
        
        <div className="w-20 text-center text-xs text-space-teal">
          {timeSpeed === 0 
            ? 'Paused' 
            : `Speed: ${timeSpeed.toFixed(1)}x`
          }
        </div>
        
        <button 
          className="text-space-teal hover:text-space-aqua px-2"
          onClick={() => setTimeSpeed(timeSpeed * 2)}
          aria-label="Speed up"
        >
          ⏩
        </button>
      </div>
      
      <button 
        className="text-space-teal hover:text-space-aqua ml-2 text-sm"
        onClick={resetCamera}
        aria-label="Reset view"
      >
        🔄 Reset
      </button>
    </div>
  );
};

const SolarSystemCanvas = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetInfo | null>(null);
  const [timeSpeed, setTimeSpeed] = useState(TIME_SPEED);
  const controlsRef = useRef<any>(null);
  
  const handlePlanetClick = (planet: PlanetInfo) => {
    setSelectedPlanet(planet);
  };
  
  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };
  
  return (
    <div className="w-full h-full relative">
      <Canvas 
        camera={{ position: [0, 15, 30], fov: 50 }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.1} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        
        <Suspense fallback={null}>
          {/* Sun */}
          <Sun 
            size={getNormalizedSize(planetData[0].diameter)}
            selected={selectedPlanet?.id === 'sun'}
            onClick={() => handlePlanetClick(planetData[0])}
          />
          
          {/* Planets */}
          {planetData.slice(1).map((planet) => (
            <Planet 
              key={planet.id}
              planet={planet}
              timeSpeed={timeSpeed}
              onClick={() => handlePlanetClick(planet)}
              selected={selectedPlanet?.id === planet.id}
            />
          ))}
        </Suspense>
        
        <OrbitControls 
          ref={controlsRef}
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.5}
          zoomSpeed={0.8}
          minDistance={5}
          maxDistance={100}
        />
      </Canvas>
      
      <SolarSystemControls 
        setTimeSpeed={setTimeSpeed}
        timeSpeed={timeSpeed}
        resetCamera={resetCamera}
      />
      
      {/* Planet Info Card */}
      {selectedPlanet && (
        <PlanetCard 
          planet={selectedPlanet} 
          onClose={() => setSelectedPlanet(null)} 
        />
      )}
    </div>
  );
};

export default SolarSystemCanvas;
