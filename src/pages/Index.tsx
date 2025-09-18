import { FeatureCard } from "@/components/FeatureCard";
import { Header } from "@/components/Header";
import { QuickStats } from "@/components/QuickStats";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  BookOpen, 
  FileText, 
  Image, 
  Calendar, 
  ScanLine, 
  Target, 
  Headphones, 
  Eye, 
  Cloud, 
  ClipboardList,
  BarChart3,
  Sparkles
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();

  const handleFeatureClick = (featureName: string) => {
    toast({
      title: "Coming Soon!",
      description: `${featureName} will be available once Supabase is connected for AI processing.`,
    });
  };

  const aiFeatures = [
    {
      title: "Hyper-Local Content Generator",
      description: "Create culturally relevant stories and examples in regional languages based on your prompts.",
      icon: Sparkles,
      action: "Generate Content",
      isOfflineAvailable: false
    },
    {
      title: "Multi-Grade Worksheet Generator", 
      description: "Generate worksheets tailored to multi-grade classrooms with difficulty tiers.",
      icon: FileText,
      action: "Create Worksheets",
      isOfflineAvailable: true
    },
    {
      title: "Blackboard Visual Aids",
      description: "Create simple line-art diagrams you can easily replicate on chalkboards.",
      icon: Image,
      action: "Generate Diagrams",
      isOfflineAvailable: false
    },
    {
      title: "Weekly Lesson Planner",
      description: "Adaptive lesson plans using attendance, mastery, and progress data.",
      icon: Calendar,
      action: "Plan Lessons",
      isOfflineAvailable: true
    },
    {
      title: "Auto Worksheet Correction",
      description: "OCR-powered handwriting analysis with detailed feedback and explanations.",
      icon: ScanLine,
      action: "Scan & Correct",
      isOfflineAvailable: false
    },
    {
      title: "Weak Topic Tracker",
      description: "Automatically identify topics where multiple students struggle.",
      icon: Target,
      action: "Track Progress",
      isOfflineAvailable: true
    },
    {
      title: "Adaptive Remediation",
      description: "Generate customized follow-up quizzes and tutorials for weak areas.",
      icon: BookOpen,
      action: "Create Remediation",
      isOfflineAvailable: false
    },
    {
      title: "Dyslexia-Aware Feedback",
      description: "Early detection of reading disabilities from audio/text samples.",
      icon: Eye,
      action: "Analyze Reading",
      isOfflineAvailable: false
    },
    {
      title: "Government Form Auto-Fill",
      description: "Convert brief notes into completed digital government forms (UDISE+, HMIS).",
      icon: ClipboardList,
      action: "Fill Forms",
      isOfflineAvailable: false
    },
    {
      title: "Performance Segmentation",
      description: "Automatic student segmentation into achievement bands for targeted insight.",
      icon: BarChart3,
      action: "View Analytics",
      isOfflineAvailable: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-8">
        {/* Welcome Section */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Welcome to <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">VidyaAI</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your intelligent teaching assistant for managing multi-grade classes with AI-powered tools designed for rural Indian educators.
          </p>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Badge variant="secondary" className="text-xs">
              <Cloud className="w-3 h-3 mr-1" />
              Progressive Web App
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <BookOpen className="w-3 h-3 mr-1" />
              Offline Ready
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered
            </Badge>
          </div>
        </section>

        {/* Quick Stats */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Class Overview</h2>
          <QuickStats />
        </section>

        {/* AI Features */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">AI-Powered Teaching Tools</h2>
            <Button variant="outline" size="sm">
              View All Features
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                action={feature.action}
                onClick={() => handleFeatureClick(feature.title)}
                isOfflineAvailable={feature.isOfflineAvailable}
              />
            ))}
          </div>
        </section>

        {/* Installation Prompt */}
        <section className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Install VidyaAI on Your Device
          </h3>
          <p className="text-muted-foreground mb-4">
            Access your teaching tools instantly, even without internet connection.
          </p>
          <Button className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90">
            Install Now
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Index;
