import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RoleSelectionModal } from "@/components/RoleSelectionModal";
import { Link } from "react-router-dom";

const Landing = () => {
  const [showRoleModal, setShowRoleModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-success/10">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-bold text-primary">VidyaAI</span>
          </div>
          <Link to="/login">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Login
            </Button>
          </Link>
        </header>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your AI Teaching Partner for{" "}
              <span className="text-primary">Multi-Grade</span>{" "}
              <span className="text-success">Classrooms</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              VidyaAI is a free AI assistant built to help India's teachers. Save hours on preparation, 
              create lessons in your local language, and give every child the attention they deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-success hover:bg-success/90 text-success-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg"
                onClick={() => setShowRoleModal(true)}
              >
                Join for Free
              </Button>
              <Link to="/login">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-6 text-lg font-semibold rounded-xl border-2"
                >
                  Already have an account? Login
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                    <span className="text-xs font-semibold text-primary">T</span>
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium">
                <span className="text-success font-bold">10,000+</span> students improved their grades
              </span>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              {/* Main illustration container */}
              <div className="bg-gradient-to-br from-primary/10 to-success/10 rounded-3xl p-8 shadow-xl">
                <div className="relative">
                  {/* Teacher figure */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-2">
                      <span className="text-2xl">👩‍🏫</span>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-2 bg-success rounded-full mb-2"></div>
                      <div className="w-16 h-1 bg-primary/50 rounded-full"></div>
                    </div>
                  </div>

                  {/* Books and charts */}
                  <div className="flex justify-around items-end mb-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-10 bg-primary/80 rounded-md mb-1"></div>
                      <div className="w-6 h-8 bg-primary/60 rounded-md mb-1"></div>
                      <div className="w-4 h-6 bg-primary/40 rounded-md"></div>
                    </div>
                    
                    <div className="text-4xl">📚</div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-success/80 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-white text-xl">📊</span>
                      </div>
                      <div className="w-8 h-1 bg-success rounded-full"></div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-sm">⭐</span>
                  </div>
                  <div className="absolute top-8 left-2 w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-3 h-3 bg-pink-400 rounded-full"></div>
                </div>
              </div>

              {/* Floating success badge */}
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                AI Powered ✨
              </div>
            </div>
          </div>
        </div>
      </div>

      <RoleSelectionModal 
        isOpen={showRoleModal} 
        onClose={() => setShowRoleModal(false)} 
      />
    </div>
  );
};

export default Landing;