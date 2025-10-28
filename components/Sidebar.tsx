import React from 'react';
import type { CourseData } from '../types';

interface SidebarProps {
  courseData: CourseData;
  currentLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ courseData, currentLessonId, onSelectLesson, isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop for mobile */}
      <div 
        className={`fixed inset-0 bg-navy/70 z-30 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <aside className={`fixed top-0 left-0 h-full w-64 lg:w-72 bg-light-navy p-4 md:p-6 flex flex-col z-40 transition-transform duration-300 ease-in-out md:sticky md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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
    </>
  );
};
