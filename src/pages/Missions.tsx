
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import StarBackground from '@/components/StarBackground';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ExternalLink, Info, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';

// Mission Data
const missions = [
  {
    id: "voyager",
    name: "Voyager",
    launched: "1977",
    status: "Active",
    category: "deep-space",
    description: "The Voyager spacecraft are the third pair of spacecraft to fly by both Jupiter and Saturn. Voyager 2 is the only spacecraft to fly by all four outer planets - Jupiter, Saturn, Uranus and Neptune.",
    highlights: [
      "First spacecraft to provide detailed images of Jupiter and Saturn's moons",
      "Voyager 1 is the most distant human-made object from Earth",
      "Still operational after over 45 years in space",
      "Carries the Golden Record, a message from Earth to potential extraterrestrial civilizations"
    ],
    link: "https://voyager.jpl.nasa.gov/",
    image: "https://www.nasa.gov/wp-content/uploads/2018/09/voyager2-spacecraft-2002-full.jpg"
  },
  {
    id: "new-horizons",
    name: "New Horizons",
    launched: "2006",
    status: "Active",
    category: "deep-space",
    description: "New Horizons is an interplanetary space probe that was launched as a part of NASA's New Frontiers program. Engineered by the Johns Hopkins University Applied Physics Laboratory and the Southwest Research Institute, with a team led by Alan Stern, the spacecraft was launched in 2006 with the primary mission to perform a flyby study of the Pluto system in 2015, and a secondary mission to fly by and study one or more other Kuiper belt objects in the decade to follow.",
    highlights: [
      "First mission to explore Pluto and its moons up close",
      "Revealed Pluto's complex surface features and atmosphere",
      "Successfully conducted a flyby of Kuiper Belt object Arrokoth",
      "Continues to study the outer reaches of our solar system"
    ],
    link: "https://www.nasa.gov/mission/new-horizons/",
    image: "https://www.nasa.gov/wp-content/uploads/2023/03/pia19857-new-horizons-2015-approach.jpg"
  },
  {
    id: "cassini",
    name: "Cassini-Huygens",
    launched: "1997",
    status: "Completed (2017)",
    category: "planetary",
    description: "The Cassini-Huygens mission was a collaboration between NASA, the European Space Agency, and the Italian Space Agency to send a probe to study the planet Saturn, its rings, and its natural satellites. The Cassini–Huygens spacecraft comprised both the Cassini orbiter and the Huygens probe. It launched on October 15, 1997, and ended its mission with a plunge into Saturn's atmosphere on September 15, 2017.",
    highlights: [
      "Discovered liquid methane seas on Saturn's moon Titan",
      "Found evidence of subsurface oceans on Enceladus",
      "Studied Saturn's rings and atmosphere in unprecedented detail",
      "The Huygens probe successfully landed on Titan in 2005"
    ],
    link: "https://solarsystem.nasa.gov/missions/cassini/overview/",
    image: "https://solarsystem.nasa.gov/system/resources/detail_files/2490_IMG003328.jpg"
  },
  {
    id: "parker",
    name: "Parker Solar Probe",
    launched: "2018",
    status: "Active",
    category: "solar",
    description: "The Parker Solar Probe is a NASA space probe launched in 2018 with the mission of making observations of the outer corona of the Sun. It will approach to within 9.86 solar radii (6.9 million km) from the center of the Sun and by 2025 will travel at a speed of 690,000 km/h, or 0.064% the speed of light.",
    highlights: [
      "Will fly closer to the Sun than any spacecraft before it",
      "Designed to withstand extreme heat and radiation",
      "Studies the solar wind and the Sun's outer atmosphere",
      "Will help understand how solar events affect Earth"
    ],
    link: "https://www.nasa.gov/mission/parker-solar-probe/",
    image: "https://www.nasa.gov/wp-content/uploads/2018/08/humainimage1-psp-pre-launch-1032018.jpg"
  },
  {
    id: "juno",
    name: "Juno",
    launched: "2011",
    status: "Active",
    category: "planetary",
    description: "Juno is a NASA space probe orbiting the planet Jupiter. It was launched from Cape Canaveral Air Force Station on August 5, 2011, as part of the New Frontiers program. Juno entered a polar orbit of Jupiter on July 5, 2016, to begin a scientific investigation of the planet.",
    highlights: [
      "Studies Jupiter's composition, gravity field, magnetic field, and polar magnetosphere",
      "Investigates Jupiter's formation and evolution",
      "Provides spectacular images of Jupiter's cloud formations",
      "First spacecraft to orbit Jupiter's poles"
    ],
    link: "https://www.nasa.gov/mission/juno/",
    image: "https://www.nasa.gov/wp-content/uploads/2017/12/juno20170525-16.jpg"
  },
  {
    id: "perseverance",
    name: "Mars Perseverance",
    launched: "2020",
    status: "Active",
    category: "mars",
    description: "The Mars 2020 mission is delivering the Perseverance rover to the Red Planet. The rover is designed to better understand the geology of Mars and seek signs of ancient life. The mission will collect and store a set of rock and soil samples that could be returned to Earth in the future.",
    highlights: [
      "Searching for signs of ancient microbial life on Mars",
      "Collecting rock and soil samples for potential return to Earth",
      "Carries the Ingenuity helicopter, the first aircraft to fly on another planet",
      "Testing oxygen production from the Martian atmosphere"
    ],
    link: "https://mars.nasa.gov/mars2020/",
    image: "https://www.nasa.gov/wp-content/uploads/2020/07/perseverance-rover-artist-concept-full2.jpg"
  },
  {
    id: "james-webb",
    name: "James Webb Space Telescope",
    launched: "2021",
    status: "Active",
    category: "observatory",
    description: "The James Webb Space Telescope (JWST) is a space telescope designed primarily to conduct infrared astronomy. As the largest optical telescope in space, its high resolution and sensitivity allow it to view objects too old, distant, or faint for the Hubble Space Telescope.",
    highlights: [
      "Observes galaxies formed shortly after the Big Bang",
      "Studies the formation of stars and planetary systems",
      "Examines the atmospheres of exoplanets",
      "Features a 6.5-meter primary mirror and operates at cryogenic temperatures"
    ],
    link: "https://webb.nasa.gov/",
    image: "https://www.nasa.gov/wp-content/uploads/2022/05/jwst-primary-mirror.jpg"
  }
];

const Missions = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const filteredMissions = selectedCategory === "all" 
    ? missions 
    : missions.filter(mission => mission.category === selectedCategory);
  
  return (
    <div className="min-h-screen cosmos-bg flex flex-col">
      <StarBackground starCount={150} />
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-4 text-center cosmic-gradient-text">
          Space Missions
        </h1>
        
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Discover the remarkable missions that have expanded our understanding of the solar system, from planetary exploration to deep space voyages.
        </p>
        
        {/* Category Filter */}
        <Tabs 
          defaultValue="all"
          className="w-full max-w-3xl mx-auto mb-12"
          onValueChange={setSelectedCategory}
        >
          <TabsList className="glass-panel grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="planetary">Planetary</TabsTrigger>
            <TabsTrigger value="mars">Mars</TabsTrigger>
            <TabsTrigger value="deep-space">Deep Space</TabsTrigger>
            <TabsTrigger value="solar">Solar</TabsTrigger>
            <TabsTrigger value="observatory">Observatory</TabsTrigger>
          </TabsList>
        </Tabs>
        
        {/* Missions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMissions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
        
        {filteredMissions.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No missions found in this category.
          </div>
        )}
      </main>
      
      <footer className="py-6 glass-panel z-10">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Cosmic Voyager. An interactive solar system exploration tool.</p>
        </div>
      </footer>
    </div>
  );
};

interface MissionCardProps {
  mission: {
    id: string;
    name: string;
    launched: string;
    status: string;
    category: string;
    description: string;
    highlights: string[];
    link: string;
    image: string;
  };
}

const MissionCard = ({ mission }: MissionCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Fallback images from Unsplash based on mission category
  const getFallbackImage = () => {
    switch(mission.category) {
      case 'mars':
        return 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81';
      case 'deep-space':
        return 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6';
      case 'solar':
        return 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b';
      case 'observatory':
        return 'https://images.unsplash.com/photo-1519389950473-47ba0277781c';
      case 'planetary':
      default:
        return 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7';
    }
  };
  
  return (
    <div className="glass-panel overflow-hidden flex flex-col">
      <div className="h-48 overflow-hidden relative">
        {!imageLoaded && !imageError && (
          <Skeleton className="w-full h-full absolute inset-0" />
        )}
        
        {imageError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-space-navy/50">
            <AlertTriangle className="h-10 w-10 text-space-teal mb-2" />
            <p className="text-sm text-space-teal">{mission.name} Image Unavailable</p>
            <img 
              src={getFallbackImage()} 
              alt={`${mission.name} fallback`}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ) : (
          <img 
            src={mission.image} 
            alt={mission.name} 
            className={`w-full h-full object-cover transition-transform hover:scale-105 duration-500 ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-semibold text-space-aqua">{mission.name}</h2>
          <div className={`px-2 py-1 rounded-full text-xs ${
            mission.status === "Active" 
              ? "bg-green-900/50 text-green-300" 
              : "bg-yellow-900/50 text-yellow-300"
          }`}>
            {mission.status}
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <Calendar size={16} className="mr-1" />
          <span>Launched: {mission.launched}</span>
        </div>
        
        <p className="text-gray-300 mb-4">
          {expanded 
            ? mission.description 
            : `${mission.description.substring(0, 150)}${mission.description.length > 150 ? '...' : ''}`
          }
        </p>
        
        {expanded && (
          <div className="mb-4">
            <h3 className="text-space-teal font-medium mb-2">Mission Highlights</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
              {mission.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-auto pt-4 flex justify-between items-center">
          <Button 
            variant="ghost" 
            className="text-space-teal hover:text-space-aqua p-0"
            onClick={() => setExpanded(!expanded)}
          >
            <Info size={16} className="mr-1" />
            {expanded ? "Show Less" : "Read More"}
          </Button>
          
          <a 
            href={mission.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-space-aqua hover:text-space-teal transition-colors text-sm"
          >
            Official Website
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Missions;
