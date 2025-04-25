
export interface Subject {
  MaSV: string;
  NHHK: string;
  MaMH: string;
  TenMH: string;
  SoTinChi: number;
  B1: number;
  K1: number;
  T1: number;
  DiemHP: number;
  DiemChuHP: string;
  SoTCTL: number;
  DTBTK: number;
}

export interface SubjectSuggestion {
  MaMH: string;
  TenMH: string;
  SoTinChi: number;
  expectedScore: number;
  difficulty: string;
}

export interface StudentProfile {
  studentId: string;
  name: string;
  totalCredits: number;
  currentGPA: number;
}

export interface PrerequisiteMap {
  [subjectCode: string]: string[];
}
