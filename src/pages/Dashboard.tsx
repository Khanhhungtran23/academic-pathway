
import React, { useState } from 'react';
import Header from '@/components/Header';
import StudentInfoCard from '@/components/StudentInfoCard';
import ProgressStats from '@/components/ProgressStats';
import GPACalculator from '@/components/GPACalculator';
import RecommendationCard from '@/components/RecommendationCard';
import { SubjectSuggestion } from '@/types';
import { getCompletedSubjects } from '@/services/subjectService';

const Dashboard: React.FC = () => {
  const studentId = "ITCSIU21001"; // Default student ID
  const completedSubjects = getCompletedSubjects(studentId);
  
  // Student profile data
  const studentProfile = {
    studentId: studentId,
    name: "John Smith",
    totalCredits: completedSubjects.reduce((sum, subject) => sum + subject.SoTinChi, 0),
    currentGPA: completedSubjects.reduce((sum, subject) => sum + subject.DiemHP, 0) / 
               (completedSubjects.length || 1)
  };
  
  // Progress statistics
  const progressStats = {
    completedCredits: studentProfile.totalCredits,
    totalRequiredCredits: 150, // Example: total credits required to graduate
    completedCourses: completedSubjects.length,
    totalCourses: 45 // Example: total courses required to graduate
  };
  
  // State to store recommendations
  const [recommendations, setRecommendations] = useState<SubjectSuggestion[]>([]);
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6 px-4 sm:px-6">
        <Header activeTab="dashboard" />
        
        <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="space-y-6">
            <StudentInfoCard profile={studentProfile} />
            <GPACalculator 
              studentId={studentId} 
              completedSubjects={completedSubjects}
              onRecommendationsGenerated={setRecommendations} 
            />
          </div>
          
          {/* Right column - spans 2 columns on medium screens and above */}
          <div className="md:col-span-2 space-y-6">
            <ProgressStats {...progressStats} />
            
            {recommendations.length > 0 ? (
              <>
                <h2 className="text-xl font-semibold green-gradient-text mt-6">Recommended Subjects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recommendations.map((recommendation) => (
                    <RecommendationCard 
                      key={recommendation.MaMH}
                      recommendation={recommendation} 
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-medium mb-2">Need Course Recommendations?</h3>
                <p className="text-muted-foreground mb-4">
                  Enter your target GPA in the calculator to get personalized course suggestions
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
