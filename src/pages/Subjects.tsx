
import React from 'react';
import Header from '@/components/Header';
import SubjectTable from '@/components/SubjectTable';
import { getCompletedSubjects } from '@/services/subjectService';
import { subjects } from '@/services/subjectService';

const Subjects: React.FC = () => {
  const studentId = "ITCSIU21001"; // Default student ID
  const completedSubjects = getCompletedSubjects(studentId);
  const allSubjects = subjects.filter(subject => subject.MaSV === studentId);
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6 px-4 sm:px-6">
        <Header activeTab="subjects" />
        
        <div className="my-6 space-y-6">
          <SubjectTable 
            subjects={completedSubjects} 
            title="Completed Subjects" 
          />
          
          <SubjectTable 
            subjects={allSubjects.filter(s => 
              !completedSubjects.some(cs => 
                cs.MaMH === s.MaMH && cs.NHHK === s.NHHK
              )
            )} 
            title="In Progress & Failed Subjects" 
          />
        </div>
      </div>
    </div>
  );
};

export default Subjects;
