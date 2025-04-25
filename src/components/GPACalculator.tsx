
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Subject, SubjectSuggestion } from '@/types';
import { getSubjectRecommendations, calculateGPA } from '@/services/subjectService';

interface GPACalculatorProps {
  studentId: string;
  completedSubjects: Subject[];
  onRecommendationsGenerated: (recommendations: SubjectSuggestion[]) => void;
}

const GPACalculator: React.FC<GPACalculatorProps> = ({ 
  studentId, 
  completedSubjects,
  onRecommendationsGenerated 
}) => {
  const [targetGPA, setTargetGPA] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const currentGPA = calculateGPA(completedSubjects);

  const generateRecommendations = () => {
    const targetGPANumber = parseFloat(targetGPA);
    
    if (isNaN(targetGPANumber) || targetGPANumber <= 0) {
      toast.error('Please enter a valid GPA target');
      return;
    }
    
    if (targetGPANumber < currentGPA * 0.8) {
      toast.warning("Your target GPA is significantly lower than your current GPA");
    } else if (targetGPANumber > currentGPA * 1.25) {
      toast.warning("Your target GPA might be hard to achieve");
    }
    
    setLoading(true);
    
    // Simulate some processing time
    setTimeout(() => {
      const recommendations = getSubjectRecommendations(
        studentId,
        targetGPANumber,
        12,   // min credits
        22,   // max credits
        5     // max subjects
      );
      
      if (recommendations.length === 0) {
        toast.error("Could not generate recommendations for this target GPA. Try a lower GPA target.");
      } else {
        toast.success(`Generated ${recommendations.length} subject recommendations`);
        onRecommendationsGenerated(recommendations);
      }
      
      setLoading(false);
    }, 1000);
  };

  return (
    <Card className="hover-scale dashboard-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl green-gradient-text">GPA Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="target-gpa" className="text-sm font-medium">
              Enter your target GPA for next semester
            </label>
            <Input
              id="target-gpa"
              type="number"
              min="0"
              max="100"
              step="0.1"
              placeholder="e.g., 75.5"
              value={targetGPA}
              onChange={(e) => setTargetGPA(e.target.value)}
              className="border-green-200 focus:border-green-500"
            />
            <p className="text-xs text-muted-foreground">
              Your current GPA is {currentGPA.toFixed(2)}
            </p>
          </div>
          
          <Button 
            onClick={generateRecommendations} 
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Recommendations"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GPACalculator;
