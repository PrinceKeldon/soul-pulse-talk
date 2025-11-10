import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ComingSoonCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ComingSoonCard = ({ icon: Icon, title, description }: ComingSoonCardProps) => {
  return (
    <Card className="relative overflow-hidden opacity-75 hover:opacity-90 transition-opacity border-dashed">
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
          Coming Soon
        </span>
      </div>
      <CardHeader className="pb-3">
        <div className="mb-2">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ComingSoonCard;
