import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface RoleSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RoleSelectionModal = ({ isOpen, onClose }: RoleSelectionModalProps) => {
  const [selectedRole, setSelectedRole] = useState<'teacher' | 'student' | null>(null);
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (!selectedRole) return;

    try {
      setLoading(true);
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            role: selectedRole,
          },
        },
      });

      if (error) {
        toast({
          title: "Authentication Error",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-foreground mb-2">
            I am a...
          </DialogTitle>
          <p className="text-muted-foreground">
            Choose your role to get started
          </p>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Teacher Card */}
          <Card 
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedRole === 'teacher' 
                ? 'ring-2 ring-primary bg-primary/5' 
                : 'hover:bg-accent/50'
            }`}
            onClick={() => setSelectedRole('teacher')}
          >
            <CardContent className="flex items-center gap-4 p-6">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                selectedRole === 'teacher' ? 'bg-primary text-primary-foreground' : 'bg-muted'
              }`}>
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground">Teacher</h3>
                <p className="text-sm text-muted-foreground">
                  Create lessons, manage classrooms, and track student progress
                </p>
              </div>
              <div className={`w-4 h-4 rounded-full border-2 ${
                selectedRole === 'teacher' 
                  ? 'bg-primary border-primary' 
                  : 'border-muted-foreground'
              }`}>
                {selectedRole === 'teacher' && (
                  <div className="w-full h-full rounded-full bg-primary-foreground scale-50"></div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Student Card */}
          <Card 
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedRole === 'student' 
                ? 'ring-2 ring-primary bg-primary/5' 
                : 'hover:bg-accent/50'
            }`}
            onClick={() => setSelectedRole('student')}
          >
            <CardContent className="flex items-center gap-4 p-6">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                selectedRole === 'student' ? 'bg-primary text-primary-foreground' : 'bg-muted'
              }`}>
                <User className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground">Student</h3>
                <p className="text-sm text-muted-foreground">
                  Access learning materials and track your academic progress
                </p>
              </div>
              <div className={`w-4 h-4 rounded-full border-2 ${
                selectedRole === 'student' 
                  ? 'bg-primary border-primary' 
                  : 'border-muted-foreground'
              }`}>
                {selectedRole === 'student' && (
                  <div className="w-full h-full rounded-full bg-primary-foreground scale-50"></div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button 
            onClick={handleContinue}
            disabled={!selectedRole || loading}
            className="flex-1 bg-success hover:bg-success/90 text-success-foreground"
          >
            {loading ? 'Signing in...' : `Continue as ${selectedRole === 'teacher' ? 'Teacher' : 'Student'}`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};