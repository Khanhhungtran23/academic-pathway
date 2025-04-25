
import { Subject, SubjectSuggestion, PrerequisiteMap } from "../types";

// Sample dataset from the image
export const subjects: Subject[] = [
  { MaSV: "ITCSIU21001", NHHK: "01 2021", MaMH: "PT001IU", TenMH: "Physical Training 1", SoTinChi: 3, B1: 0, K1: 52, T1: 36, DiemHP: 32, DiemChuHP: "F", SoTCTL: 3, DTBTK: 31.6 },
  { MaSV: "ITCSIU21001", NHHK: "01 2021", MaMH: "IT116IU", TenMH: "C/C++ Programming", SoTinChi: 4, B1: 82, K1: 91, T1: 0, DiemHP: 0, DiemChuHP: "N/A", SoTCTL: 3, DTBTK: 31.6 },
  { MaSV: "ITCSIU21001", NHHK: "01 2021", MaMH: "EN007IU", TenMH: "Writing AE1", SoTinChi: 2, B1: 89, K1: 60, T1: 96, DiemHP: 80, DiemChuHP: "B", SoTCTL: 5, DTBTK: 50.8 },
  { MaSV: "ITCSIU21001", NHHK: "01 2021", MaMH: "CH012IU", TenMH: "Chemistry Laboratory", SoTinChi: 1, B1: 77, K1: 46, T1: 80, DiemHP: 66, DiemChuHP: "C+", SoTCTL: 6, DTBTK: 53.2 },
  { MaSV: "ITCSIU21001", NHHK: "01 2012", MaMH: "MA023IU", TenMH: "Calculus 3", SoTinChi: 4, B1: 73, K1: 0, T1: 32, DiemHP: 0, DiemChuHP: "N/A", SoTCTL: 6, DTBTK: 53.2 },
  { MaSV: "ITCSIU21001", NHHK: "01 2012", MaMH: "EN012IU", TenMH: "Speaking AE2", SoTinChi: 2, B1: 46, K1: 64, T1: 52, DiemHP: 55, DiemChuHP: "C", SoTCTL: 8, DTBTK: 53.7 },
  { MaSV: "ITCSIU21001", NHHK: "01 2012", MaMH: "PH012IU", TenMH: "Physics 4", SoTinChi: 2, B1: 93, K1: 69, T1: 37, DiemHP: 67, DiemChuHP: "C+", SoTCTL: 10, DTBTK: 56.3 },
  { MaSV: "ITCSIU21001", NHHK: "01 2012", MaMH: "PT002IU", TenMH: "Physical Training 2", SoTinChi: 3, B1: 51, K1: 56, T1: 78, DiemHP: 61, DiemChuHP: "C", SoTCTL: 13, DTBTK: 57.4 },
  { MaSV: "ITCSIU21001", NHHK: "01 2012", MaMH: "EN011IU", TenMH: "Writing AE2", SoTinChi: 2, B1: 100, K1: 54, T1: 0, DiemHP: 0, DiemChuHP: "N/A", SoTCTL: 13, DTBTK: 57.4 },
  { MaSV: "ITCSIU21001", NHHK: "01 2012", MaMH: "EE053IU", TenMH: "Digital Logic Design and Lab", SoTinChi: 3, B1: 94, K1: 77, T1: 88, DiemHP: 85, DiemChuHP: "A", SoTCTL: 16, DTBTK: 62.6 },
  { MaSV: "ITCSIU21001", NHHK: "01 2012", MaMH: "PH015IU", TenMH: "Physics 3 Laboratory", SoTinChi: 1, B1: 76, K1: 35, T1: 25, DiemHP: 44, DiemChuHP: "D", SoTCTL: 17, DTBTK: 61.5 },
  { MaSV: "ITCSIU21001", NHHK: "01 2021", MaMH: "IT069IU", TenMH: "Object Oriented Programming", SoTinChi: 4, B1: 89, K1: 91, T1: 91, DiemHP: 90, DiemChuHP: "A+", SoTCTL: 21, DTBTK: 67 },
  { MaSV: "ITCSIU21001", NHHK: "01 2021", MaMH: "EE053IU", TenMH: "Digital Logic Design and Lab", SoTinChi: 3, B1: 76, K1: 73, T1: 55, DiemHP: 69, DiemChuHP: "C+", SoTCTL: 24, DTBTK: 67.2 },
  { MaSV: "ITCSIU21001", NHHK: "01 2021", MaMH: "PE008IU", TenMH: "Marxist – Leninist Political Economy", SoTinChi: 2, B1: 98, K1: 57, T1: 26, DiemHP: 60, DiemChuHP: "C", SoTCTL: 26, DTBTK: 66.7 },
  { MaSV: "ITCSIU21001", NHHK: "01 2021", MaMH: "PH012IU", TenMH: "Physics 4", SoTinChi: 2, B1: 65, K1: 53, T1: 75, DiemHP: 63, DiemChuHP: "C", SoTCTL: 28, DTBTK: 66.4 },
  { MaSV: "ITCSIU21002", NHHK: "01 2011", MaMH: "IT116IU", TenMH: "C/C++ Programming", SoTinChi: 4, B1: 53, K1: 44, T1: 48, DiemHP: 48, DiemChuHP: "D", SoTCTL: 4, DTBTK: 47.9 },
  { MaSV: "ITCSIU21002", NHHK: "01 2011", MaMH: "CH012IU", TenMH: "Chemistry Laboratory", SoTinChi: 1, B1: 55, K1: 51, T1: 44, DiemHP: 50, DiemChuHP: "D+", SoTCTL: 5, DTBTK: 48.3 },
  { MaSV: "ITCSIU21002", NHHK: "01 2011", MaMH: "EN007IU", TenMH: "Writing AE1", SoTinChi: 2, B1: 43, K1: 77, T1: 22, DiemHP: 50, DiemChuHP: "D+", SoTCTL: 7, DTBTK: 48.9 }
];

// Fulfill the computer science required list (these are subjects students haven't taken yet)
export const availableSubjects: Subject[] = [
  { MaSV: "", NHHK: "", MaMH: "IT067IU", TenMH: "Database Systems", SoTinChi: 4, B1: 0, K1: 0, T1: 0, DiemHP: 0, DiemChuHP: "", SoTCTL: 0, DTBTK: 0 },
  { MaSV: "", NHHK: "", MaMH: "IT068IU", TenMH: "Software Engineering", SoTinChi: 4, B1: 0, K1: 0, T1: 0, DiemHP: 0, DiemChuHP: "", SoTCTL: 0, DTBTK: 0 },
  { MaSV: "", NHHK: "", MaMH: "IT070IU", TenMH: "Mobile Application Development", SoTinChi: 3, B1: 0, K1: 0, T1: 0, DiemHP: 0, DiemChuHP: "", SoTCTL: 0, DTBTK: 0 },
  { MaSV: "", NHHK: "", MaMH: "IT071IU", TenMH: "Web Application Development", SoTinChi: 3, B1: 0, K1: 0, T1: 0, DiemHP: 0, DiemChuHP: "", SoTCTL: 0, DTBTK: 0 },
  { MaSV: "", NHHK: "", MaMH: "IT072IU", TenMH: "Network Security", SoTinChi: 3, B1: 0, K1: 0, T1: 0, DiemHP: 0, DiemChuHP: "", SoTCTL: 0, DTBTK: 0 },
  { MaSV: "", NHHK: "", MaMH: "IT073IU", TenMH: "Computer Networks", SoTinChi: 4, B1: 0, K1: 0, T1: 0, DiemHP: 0, DiemChuHP: "", SoTCTL: 0, DTBTK: 0 },
  { MaSV: "", NHHK: "", MaMH: "IT074IU", TenMH: "Operating Systems", SoTinChi: 4, B1: 0, K1: 0, T1: 0, DiemHP: 0, DiemChuHP: "", SoTCTL: 0, DTBTK: 0 },
  { MaSV: "", NHHK: "", MaMH: "IT075IU", TenMH: "Data Structures and Algorithms", SoTinChi: 4, B1: 0, K1: 0, T1: 0, DiemHP: 0, DiemChuHP: "", SoTCTL: 0, DTBTK: 0 },
  { MaSV: "", NHHK: "", MaMH: "MA024IU", TenMH: "Calculus 4", SoTinChi: 4, B1: 0, K1: 0, T1: 0, DiemHP: 0, DiemChuHP: "", SoTCTL: 0, DTBTK: 0 },
  { MaSV: "", NHHK: "", MaMH: "MA022IU", TenMH: "Calculus 2", SoTinChi: 4, B1: 0, K1: 0, T1: 0, DiemHP: 0, DiemChuHP: "", SoTCTL: 0, DTBTK: 0 },
  { MaSV: "", NHHK: "", MaMH: "MA021IU", TenMH: "Calculus 1", SoTinChi: 4, B1: 0, K1: 0, T1: 0, DiemHP: 0, DiemChuHP: "", SoTCTL: 0, DTBTK: 0 },
  { MaSV: "", NHHK: "", MaMH: "PH013IU", TenMH: "Physics 5", SoTinChi: 2, B1: 0, K1: 0, T1: 0, DiemHP: 0, DiemChuHP: "", SoTCTL: 0, DTBTK: 0 },
  { MaSV: "", NHHK: "", MaMH: "PH014IU", TenMH: "Physics 5 Laboratory", SoTinChi: 1, B1: 0, K1: 0, T1: 0, DiemHP: 0, DiemChuHP: "", SoTCTL: 0, DTBTK: 0 }
];

// Define subject prerequisite relationships
export const prerequisites: PrerequisiteMap = {
  "MA022IU": ["MA021IU"], // Calculus 2 requires Calculus 1
  "MA023IU": ["MA022IU"], // Calculus 3 requires Calculus 2
  "MA024IU": ["MA023IU"], // Calculus 4 requires Calculus 3
  "PT002IU": ["PT001IU"], // Physical Training 2 requires Physical Training 1
  "PH013IU": ["PH012IU"], // Physics 5 requires Physics 4
  "PH014IU": ["PH013IU"], // Physics 5 Lab requires Physics 5
  "EN011IU": ["EN007IU"], // Writing AE2 requires Writing AE1
  "EN012IU": ["EN011IU"], // Speaking AE2 requires Writing AE2
  "IT075IU": ["IT116IU"], // Data Structures requires C/C++ Programming
  "IT069IU": ["IT116IU"], // OOP requires C/C++ Programming
  "IT070IU": ["IT069IU"], // Mobile App Dev requires OOP
  "IT071IU": ["IT069IU"], // Web App Dev requires OOP
  "IT073IU": ["IT116IU"], // Computer Networks requires C/C++ Programming
  "IT074IU": ["IT116IU"], // Operating Systems requires C/C++ Programming
  "IT067IU": ["IT075IU"], // Database Systems requires Data Structures
  "IT072IU": ["IT073IU"], // Network Security requires Computer Networks
  "IT068IU": ["IT067IU", "IT069IU"] // Software Engineering requires Database Systems and OOP
};

// Get a student's completed subjects
export const getCompletedSubjects = (studentId: string): Subject[] => {
  return subjects.filter(subject => 
    subject.MaSV === studentId && 
    subject.DiemChuHP !== "N/A" && 
    subject.DiemChuHP !== "F"
  );
};

// Calculate DiemHP based on B1, K1, T1 scores
export const calculateDiemHP = (b1: number, k1: number, t1: number): number => {
  return Math.round((0.3 * b1 + 0.3 * k1 + 0.4 * t1) * 10) / 10;
};

// Calculate letter grade based on numeric score
export const getLetterGrade = (score: number): string => {
  if (score >= 90) return "A+";
  if (score >= 85) return "A";
  if (score >= 80) return "B+";
  if (score >= 70) return "B";
  if (score >= 65) return "C+";
  if (score >= 60) return "C";
  if (score >= 55) return "D+";
  if (score >= 50) return "D";
  return "F";
};

// Calculate GPA based on completed subjects
export const calculateGPA = (completedSubjects: Subject[]): number => {
  if (completedSubjects.length === 0) return 0;
  
  let totalWeightedScore = 0;
  let totalCredits = 0;
  
  for (const subject of completedSubjects) {
    if (subject.DiemHP > 0) {
      totalWeightedScore += subject.DiemHP * subject.SoTinChi;
      totalCredits += subject.SoTinChi;
    }
  }
  
  return totalCredits > 0 ? Math.round((totalWeightedScore / totalCredits) * 100) / 100 : 0;
};

// Check if student has completed prerequisites for a subject
export const hasCompletedPrerequisites = (
  subjectCode: string,
  completedSubjects: Subject[]
): boolean => {
  const required = prerequisites[subjectCode] || [];
  if (required.length === 0) return true;
  
  const completedCodes = completedSubjects.map(s => s.MaMH);
  return required.every(code => completedCodes.includes(code));
};

// Get subjects a student can take based on prerequisites
export const getEligibleSubjects = (studentId: string): Subject[] => {
  const completedSubjects = getCompletedSubjects(studentId);
  const completedCodes = completedSubjects.map(s => s.MaMH);
  
  return availableSubjects.filter(subject => 
    !completedCodes.includes(subject.MaMH) && 
    hasCompletedPrerequisites(subject.MaMH, completedSubjects)
  );
};

// Calculate expected score needed to achieve target GPA
export const calculateRequiredScore = (
  currentSubjects: Subject[],
  targetGPA: number,
  suggestedSubject: Subject
): number => {
  if (currentSubjects.length === 0) return targetGPA;
  
  const totalCredits = currentSubjects.reduce((sum, s) => sum + s.SoTinChi, 0);
  const totalWeightedScore = currentSubjects.reduce((sum, s) => sum + (s.DiemHP * s.SoTinChi), 0);
  
  // Calculate required score using the formula from the image
  const newTotalCredits = totalCredits + suggestedSubject.SoTinChi;
  const requiredWeightedScore = targetGPA * newTotalCredits;
  const requiredScore = (requiredWeightedScore - totalWeightedScore) / suggestedSubject.SoTinChi;
  
  return Math.min(100, Math.max(0, Math.round(requiredScore)));
};

// Get subject difficulty level based on scores
export const getDifficultyLevel = (subject: Subject): string => {
  // Define difficulty based on average scores across all students
  // This is a simplified approach - in a real system you'd use historical data
  const subjectScores = subjects.filter(s => s.MaMH === subject.MaMH && s.DiemHP > 0);
  if (subjectScores.length === 0) return "Medium";
  
  const avgScore = subjectScores.reduce((sum, s) => sum + s.DiemHP, 0) / subjectScores.length;
  
  if (avgScore >= 80) return "Easy";
  if (avgScore >= 65) return "Medium";
  return "Hard";
};

// Get subject recommendations based on GPA goal
export const getSubjectRecommendations = (
  studentId: string,
  targetGPA: number,
  minTotalCredits: number = 12,
  maxTotalCredits: number = 22,
  maxSubjects: number = 5
): SubjectSuggestion[] => {
  const completedSubjects = getCompletedSubjects(studentId);
  const eligibleSubjects = getEligibleSubjects(studentId);
  const currentGPA = calculateGPA(completedSubjects);
  
  // If target GPA is too high, return empty array
  if (targetGPA > 100) return [];
  
  // Calculate required scores for each eligible subject
  const subjectRecommendations = eligibleSubjects.map(subject => {
    const expectedScore = calculateRequiredScore(completedSubjects, targetGPA, subject);
    const difficulty = getDifficultyLevel(subject);
    
    return {
      MaMH: subject.MaMH,
      TenMH: subject.TenMH,
      SoTinChi: subject.SoTinChi,
      expectedScore,
      difficulty
    };
  });
  
  // Sort by most achievable (expected score not too high)
  subjectRecommendations.sort((a, b) => {
    // Prioritize subjects with achievable expected scores
    if (a.expectedScore <= 90 && b.expectedScore > 90) return -1;
    if (a.expectedScore > 90 && b.expectedScore <= 90) return 1;
    return a.expectedScore - b.expectedScore;
  });
  
  // Select a balanced mix of subjects based on difficulty
  let selectedSubjects: SubjectSuggestion[] = [];
  let totalCredits = 0;
  let difficultyCount = { Easy: 0, Medium: 0, Hard: 0 };
  
  // First pass: try to select a balanced mix of subjects
  for (const subject of subjectRecommendations) {
    // Skip if adding would exceed max credits
    if (totalCredits + subject.SoTinChi > maxTotalCredits) continue;
    
    // Skip if already have too many of this difficulty
    if (difficultyCount[subject.difficulty as keyof typeof difficultyCount] >= 2) continue;
    
    // Skip if expected score is too high (> 90) and we have alternatives
    if (subject.expectedScore > 90 && selectedSubjects.length > 0) continue;
    
    // Add subject to recommendations
    selectedSubjects.push(subject);
    totalCredits += subject.SoTinChi;
    difficultyCount[subject.difficulty as keyof typeof difficultyCount]++;
    
    // Check if we have enough subjects and credits
    if (selectedSubjects.length >= maxSubjects || totalCredits >= maxTotalCredits) break;
  }
  
  // Second pass: if we don't have enough credits, add more subjects
  if (totalCredits < minTotalCredits && selectedSubjects.length < maxSubjects) {
    for (const subject of subjectRecommendations) {
      // Skip if already selected
      if (selectedSubjects.some(s => s.MaMH === subject.MaMH)) continue;
      
      // Skip if adding would exceed max credits
      if (totalCredits + subject.SoTinChi > maxTotalCredits) continue;
      
      // Add subject to recommendations
      selectedSubjects.push(subject);
      totalCredits += subject.SoTinChi;
      
      // Check if we have enough subjects and credits
      if (selectedSubjects.length >= maxSubjects || totalCredits >= maxTotalCredits) break;
    }
  }
  
  // Return empty array if can't meet minimum credits
  if (totalCredits < minTotalCredits) return [];
  
  return selectedSubjects;
};
