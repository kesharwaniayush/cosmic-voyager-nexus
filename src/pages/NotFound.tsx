
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import StarBackground from "@/components/StarBackground";
import Navigation from "@/components/Navigation";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen cosmos-bg flex flex-col">
      <StarBackground starCount={200} />
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="glass-panel max-w-md p-8 text-center">
          <h1 className="text-8xl font-bold text-space-aqua mb-4">404</h1>
          <p className="text-2xl text-gray-300 mb-6">Lost in Space</p>
          <p className="text-gray-400 mb-8">
            The cosmic coordinates you're looking for don't seem to exist in our universe.
          </p>
          
          <Button asChild className="bg-space-teal hover:bg-space-teal/80 text-space-dark">
            <Link to="/" className="flex items-center gap-2">
              <Home size={18} />
              <span>Return to Home Planet</span>
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
