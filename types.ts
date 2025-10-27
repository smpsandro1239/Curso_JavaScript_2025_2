import type { ReactNode } from 'react';

export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface PracticeExample {
  title: string;
  description: string;
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
  // Fix: Use ReactNode directly to avoid module-level conflicts.
  theory: ReactNode;
  practice: {
    examples: PracticeExample[];
  };
  quiz: Question[];
  challenge?: Challenge;
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