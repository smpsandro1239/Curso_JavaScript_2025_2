import type { ReactNode } from 'react';

export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface PracticeExample {
  title: string;
  description: ReactNode;
  code: string;
}

export interface Challenge {
  description: string;
  starterCode: string;
  solution: string;
}

export interface Lesson {
  id: string;
  title: string;
  illustration?: ReactNode;
  // Fix: Use ReactNode directly to avoid module-level conflicts.
  theory: ReactNode;
  practice: {
    examples: PracticeExample[];
  };
  quiz: Question[];
  challenge?: Challenge;
  glossary?: ReactNode;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface CourseData {
  title: string;
  modules: Module[];
}