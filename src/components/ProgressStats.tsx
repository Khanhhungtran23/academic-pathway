
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProgressStatsProps {
  completedCredits: number;
  totalRequiredCredits: number;
  completedCourses: number;
  totalCourses: number;
}

const ProgressStats: React.FC<ProgressStatsProps> = ({
  completedCredits,
  totalRequiredCredits,
  completedCourses,
  totalCourses
}) => {
  const creditPercentage = Math.round((completedCredits / totalRequiredCredits) * 100);
  const coursePercentage = Math.round((completedCourses / totalCourses) * 100);
  
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <Card className="hover-scale dashboard-card">
        <CardContent className="pt-6">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-base font-medium">Credit Progress</h3>
            <span className="text-sm text-muted-foreground">{creditPercentage}%</span>
          </div>
          <Progress value={creditPercentage} className="h-2" />
          <p className="mt-2 text-sm text-muted-foreground">
            {completedCredits} of {totalRequiredCredits} credits completed
          </p>
        </CardContent>
      </Card>
      
      <Card className="hover-scale dashboard-card">
        <CardContent className="pt-6">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-base font-medium">Course Progress</h3>
            <span className="text-sm text-muted-foreground">{coursePercentage}%</span>
          </div>
          <Progress value={coursePercentage} className="h-2" />
          <p className="mt-2 text-sm text-muted-foreground">
            {completedCourses} of {totalCourses} courses completed
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressStats;
