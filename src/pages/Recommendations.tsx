
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { 
  getCompletedSubjects, 
  getSubjectRecommendations 
} from '@/services/subjectService';
import { SubjectSuggestion } from '@/types';
import RecommendationCard from '@/components/RecommendationCard';
import { Search } from 'lucide-react';

const Recommendations: React.FC = () => {
  const studentId = "ITCSIU21001"; // Default student ID
  const completedSubjects = getCompletedSubjects(studentId);
  
  // State for form inputs
  const [targetGPA, setTargetGPA] = useState<string>('75'); // Default target GPA
  const [minCredits, setMinCredits] = useState<number>(12);
  const [maxCredits, setMaxCredits] = useState<number>(18);
  const [maxSubjects, setMaxSubjects] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);
  const [recommendations, setRecommendations] = useState<SubjectSuggestion[]>([]);
  
  const handleGenerateRecommendations = () => {
    const targetGPANumber = parseFloat(targetGPA);
    
    if (isNaN(targetGPANumber) || targetGPANumber <= 0) {
      toast.error('Please enter a valid GPA target');
      return;
    }
    
    if (minCredits > maxCredits) {
      toast.error('Minimum credits cannot be greater than maximum credits');
      return;
    }
    
    setLoading(true);
    
    // Simulate some processing time
    setTimeout(() => {
      const results = getSubjectRecommendations(
        studentId,
        targetGPANumber,
        minCredits,
        maxCredits,
        maxSubjects
      );
      
      if (results.length === 0) {
        toast.error("Could not generate recommendations with these criteria. Try adjusting your parameters.");
      } else {
        toast.success(`Generated ${results.length} subject recommendations`);
        setRecommendations(results);
      }
      
      setLoading(false);
    }, 1000);
  };
  
  // Calculate the total credits in the recommendations
  const totalRecommendedCredits = recommendations.reduce(
    (sum, subject) => sum + subject.SoTinChi, 
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6 px-4 sm:px-6">
        <Header activeTab="recommendations" />
        
        <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - Advanced criteria form */}
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl green-gradient-text">Course Recommendation Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="target-gpa">Target GPA</Label>
                  <Input
                    id="target-gpa"
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    placeholder="e.g., 75.5"
                    value={targetGPA}
                    onChange={(e) => setTargetGPA(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Your target score for the next semester
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Label>Credit Range: {minCredits} - {maxCredits}</Label>
                  <div className="flex gap-4">
                    <div className="grow">
                      <Slider 
                        value={[minCredits]} 
                        min={3} 
                        max={30} 
                        step={1}
                        onValueChange={(values) => setMinCredits(values[0])}
                      />
                      <p className="text-xs text-muted-foreground mt-1">Min Credits</p>
                    </div>
                    <div className="grow">
                      <Slider 
                        value={[maxCredits]} 
                        min={3} 
                        max={30} 
                        step={1}
                        onValueChange={(values) => setMaxCredits(values[0])}
                      />
                      <p className="text-xs text-muted-foreground mt-1">Max Credits</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Maximum Number of Subjects: {maxSubjects}</Label>
                  <Slider 
                    value={[maxSubjects]} 
                    min={1} 
                    max={10} 
                    step={1}
                    onValueChange={(values) => setMaxSubjects(values[0])}
                  />
                </div>
                
                <Button 
                  type="button"
                  onClick={handleGenerateRecommendations}
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={loading}
                >
                  <Search className="mr-2 h-4 w-4" />
                  {loading ? "Finding courses..." : "Find Recommended Courses"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Right column - spans 2 columns on medium screens and above */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <h2 className="text-xl font-bold green-gradient-text mb-4 md:mb-0">
                Recommended Subjects
              </h2>
              
              {recommendations.length > 0 && (
                <div className="text-sm">
                  <span className="text-muted-foreground">Total Credits: </span>
                  <span className="font-bold text-green-600">{totalRecommendedCredits}</span>
                </div>
              )}
            </div>
            
            {recommendations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommendations.map((recommendation) => (
                  <RecommendationCard 
                    key={recommendation.MaMH}
                    recommendation={recommendation} 
                  />
                ))}
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <h3 className="text-lg font-medium mb-2">No Recommendations Yet</h3>
                <p className="text-muted-foreground">
                  Adjust the criteria and click "Find Recommended Courses" to get personalized suggestions
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
