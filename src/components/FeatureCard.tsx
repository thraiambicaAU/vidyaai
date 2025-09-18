import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  action: string;
  onClick: () => void;
  isOfflineAvailable?: boolean;
}

export const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  action, 
  onClick,
  isOfflineAvailable = false 
}: FeatureCardProps) => {
  return (
    <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border bg-card">
      {isOfflineAvailable && (
        <div className="absolute top-3 right-3 w-2 h-2 bg-success rounded-full" 
             title="Available offline" />
      )}
      <CardHeader className="space-y-2">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={onClick}
          className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-medium transition-all duration-200"
        >
          {action}
        </Button>
      </CardContent>
    </Card>
  );
};