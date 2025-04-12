
import Navigation from '@/components/Navigation';
import StarBackground from '@/components/StarBackground';
import { Github, Mail, Twitter } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen cosmos-bg flex flex-col">
      <StarBackground starCount={150} />
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-24">
        <section className="glass-panel max-w-4xl mx-auto p-8">
          <h1 className="text-4xl font-bold mb-6 cosmic-gradient-text">
            About Cosmic Voyager
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              Cosmic Voyager is an interactive educational platform designed to make learning about our solar system engaging and accessible. Our mission is to inspire curiosity about space and astronomy through immersive visualizations and accurate scientific information.
            </p>
            
            <h2 className="text-2xl font-semibold text-space-teal mt-8 mb-4">Our Goals</h2>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide an accurate, visually engaging model of our solar system</li>
              <li>Make astronomy concepts accessible to students, educators, and space enthusiasts</li>
              <li>Inspire the next generation of astronomers, astrophysicists, and space explorers</li>
              <li>Create an inclusive platform for learning about our cosmic neighborhood</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-space-teal mt-8 mb-4">Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FeatureCard 
                title="Interactive 3D Solar System" 
                description="Explore a scaled model of our solar system with realistic orbital mechanics and time controls." 
              />
              <FeatureCard 
                title="Detailed Information" 
                description="Access comprehensive data about planets, moons, and other celestial bodies." 
              />
              <FeatureCard 
                title="Educational Content" 
                description="Learn about astronomical phenomena, space missions, and scientific discoveries." 
              />
              <FeatureCard 
                title="Responsive Design" 
                description="Experience our solar system on any device with touch-friendly controls for mobile users." 
              />
            </div>
            
            <h2 className="text-2xl font-semibold text-space-teal mt-8 mb-4">Technical Implementation</h2>
            
            <p>
              Cosmic Voyager is built using modern web technologies to ensure performance, accessibility, and cross-platform compatibility:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <TechCard name="React" />
              <TechCard name="Three.js" />
              <TechCard name="React Three Fiber" />
              <TechCard name="TypeScript" />
              <TechCard name="Tailwind CSS" />
              <TechCard name="Framer Motion" />
            </div>
            
            <h2 className="text-2xl font-semibold text-space-teal mt-8 mb-4">Contact & Feedback</h2>
            
            <p>
              We welcome your feedback, suggestions, and questions about Cosmic Voyager. Please feel free to reach out to us through any of the following channels:
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <a 
                href="mailto:contact@cosmicvoyager.example.com" 
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-space-navy hover:bg-space-navy/70 text-space-aqua transition-colors"
              >
                <Mail size={18} />
                <span>Email Us</span>
              </a>
              
              <a 
                href="https://twitter.com/cosmicvoyager" 
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-space-navy hover:bg-space-navy/70 text-space-aqua transition-colors"
              >
                <Twitter size={18} />
                <span>Twitter</span>
              </a>
              
              <a 
                href="https://github.com/cosmicvoyager" 
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-space-navy hover:bg-space-navy/70 text-space-aqua transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
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

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-space-navy/30 p-4 rounded-lg">
    <h3 className="text-lg font-medium text-space-aqua mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
);

const TechCard = ({ name }: { name: string }) => (
  <div className="bg-space-navy/50 px-4 py-3 rounded-md text-center text-space-teal">
    {name}
  </div>
);

export default About;
