import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, CheckCircle, TrendingUp } from "lucide-react";

export const QuickStats = () => {
  const stats = [
    {
      icon: Users,
      label: "Students",
      value: "45",
      change: "+3 this week",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      label: "Lessons",
      value: "28",
      change: "7 pending",
      color: "text-secondary"
    },
    {
      icon: CheckCircle,
      label: "Completed",
      value: "92%",
      change: "+5% from last week",
      color: "text-success"
    },
    {
      icon: TrendingUp,
      label: "Progress",
      value: "78%",
      change: "Class average",
      color: "text-accent"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="border-border bg-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-muted-foreground truncate">
                  {stat.label}
                </p>
                <p className="text-xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {stat.change}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};