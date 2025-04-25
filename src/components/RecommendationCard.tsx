
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SubjectSuggestion } from '@/types';
import { CheckCircle } from 'lucide-react';

interface RecommendationCardProps {
  recommendation: SubjectSuggestion;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  const { MaMH, TenMH, SoTinChi, expectedScore, difficulty } = recommendation;
  
  const handleRegister = () => {
    toast.success(`Registered for ${TenMH}`, {
      description: `Subject code: ${MaMH}`,
    });
  };
  
  // Determine background color based on difficulty
  const difficultyColor = 
    difficulty === 'Easy' ? 'bg-green-50 border-green-200' :
    difficulty === 'Medium' ? 'bg-yellow-50 border-yellow-200' :
    'bg-orange-50 border-orange-200';
  
  // Determine text color for the expected score
  const scoreColor = 
    expectedScore >= 85 ? 'text-green-700' :
    expectedScore >= 70 ? 'text-blue-700' :
    expectedScore >= 60 ? 'text-yellow-700' :
    'text-red-700';

  return (
    <Card className={`hover-scale ${difficultyColor}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">{MaMH}</p>
            <CardTitle className="text-base">{TenMH}</CardTitle>
          </div>
          <div className="bg-white rounded-full border p-2 h-10 w-10 flex items-center justify-center shadow-sm">
            <span className="text-sm font-bold">{SoTinChi}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-muted-foreground">Difficulty:</span>
          <span className={`text-sm font-medium ${
            difficulty === 'Easy' ? 'text-green-700' :
            difficulty === 'Medium' ? 'text-yellow-700' :
            'text-red-700'
          }`}>
            {difficulty}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Required Score:</span>
          <span className={`text-sm font-bold ${scoreColor}`}>
            {expectedScore}%
          </span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          onClick={handleRegister} 
          className="w-full bg-green-600 hover:bg-green-700"
          variant="default"
        >
          <CheckCircle className="mr-2 h-4 w-4" /> Register
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecommendationCard;
