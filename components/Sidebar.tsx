
import React from 'react';
import type { CourseData } from '../types';

interface SidebarProps {
  courseData: CourseData;
  currentLessonId: string;
  onSelectLesson: (lessonId: string) => void;
}

const CheckmarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


export const Sidebar: React.FC<SidebarProps> = ({ courseData, currentLessonId, onSelectLesson }) => {
  return (
    <aside className="w-64 lg:w-72 bg-light-navy h-screen sticky top-0 p-4 md:p-6 flex flex-col">
      <h1 className="text-xl lg:text-2xl font-bold text-lightest-slate mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        {courseData.title}
      </h1>
      <nav className="flex-1 overflow-y-auto">
        {courseData.modules.map(module => (
          <div key={module.id} className="mb-6">
            <h2 className="text-xs uppercase text-slate font-bold tracking-wider mb-3 px-2">{module.title}</h2>
            <ul>
              {module.lessons.map(lesson => (
                <li key={lesson.id}>
                  <button
                    onClick={() => onSelectLesson(lesson.id)}
                    className={`w-full text-left px-4 py-2 text-sm rounded-md transition-colors duration-200 flex items-center justify-between ${
                      currentLessonId === lesson.id
                        ? 'bg-lightest-navy text-green font-semibold'
                        : 'text-light-slate hover:bg-lightest-navy hover:text-white'
                    }`}
                  >
                    <span>{lesson.id}. {lesson.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className="mt-4 text-xs text-center text-slate">
        <p>Feito com ❤️ e React.</p>
      </div>
    </aside>
  );
};
