
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import StarBackground from '@/components/StarBackground';
import SolarSystem from '@/components/SolarSystem';
import VideoBackground from '@/components/VideoBackground';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen cosmos-bg flex flex-col">
      <StarBackground starCount={150} />
      <VideoBackground videoSrc="/planets/solar-system-video.mp4" fallbackImage="/planets/solar-system-poster.jpg" />
      <Navigation />
      
      <main className="flex-1 flex flex-col mt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in cosmic-gradient-text">
            Explore Our Cosmic Neighborhood
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Journey through an interactive 3D model of our solar system. 
            Discover planets, moons, and other celestial wonders of space.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="bg-space-teal hover:bg-space-teal/80 text-space-dark font-semibold"
              size="lg"
              asChild
            >
              <a href="#explore">
                Explore Now
                <ChevronDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-space-aqua text-space-aqua hover:bg-space-aqua/20"
              size="lg"
              asChild
            >
              <Link to="/planets">
                Planet Guide
                <Rocket className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="w-full max-w-md flex justify-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#explore" 
              className="animate-bounce text-white/50 hover:text-white transition-colors"
              aria-label="Scroll down"
            >
              <ChevronDown size={36} />
            </a>
          </div>
        </section>
        
        {/* Solar System Section */}
        <section 
          id="explore" 
          className="w-full flex-1 min-h-[70vh] pt-6 pb-24 z-10"
        >
          {isLoaded ? (
            <SolarSystem />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-space-teal text-xl">Loading Solar System...</div>
            </div>
          )}
        </section>
      </main>
      
      <footer className="py-6 glass-panel z-10">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Cosmic Voyager. An interactive solar system exploration tool.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
