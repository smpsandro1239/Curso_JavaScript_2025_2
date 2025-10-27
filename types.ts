
import type React from 'react';

export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  theory: React.ReactNode;
  practice: {
    description: string;
    code: string;
  };
  quiz: Question[];
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
