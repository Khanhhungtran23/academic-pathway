
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StudentProfile } from '@/types';

interface StudentInfoCardProps {
  profile: StudentProfile;
}

const StudentInfoCard: React.FC<StudentInfoCardProps> = ({ profile }) => {
  return (
    <Card className="hover-scale dashboard-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl green-gradient-text">Student Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">ID:</span>
            <span className="font-medium">{profile.studentId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Name:</span>
            <span className="font-medium">{profile.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Completed Credits:</span>
            <span className="font-medium">{profile.totalCredits}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Current GPA:</span>
            <span className="font-bold text-green-600">{profile.currentGPA.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentInfoCard;
