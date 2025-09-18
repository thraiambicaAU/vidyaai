import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Menu, Settings, User, Wifi, WifiOff } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              VidyaAI
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Teaching Assistant</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Badge variant={isOnline ? "default" : "secondary"} className="hidden sm:flex">
            {isOnline ? (
              <>
                <Wifi className="w-3 h-3 mr-1" />
                Online
              </>
            ) : (
              <>
                <WifiOff className="w-3 h-3 mr-1" />
                Offline
              </>
            )}
          </Badge>

          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>

          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>

          <Button variant="ghost" size="sm" className="sm:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};