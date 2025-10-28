import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { LessonContent } from './components/LessonContent';
import { courseData } from './course-data';
import type { Lesson } from './types';

const HamburgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const App: React.FC = () => {
  const [currentLessonId, setCurrentLessonId] = useState<string>('1.1');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentLesson = useMemo(() => {
    for (const module of courseData.modules) {
      const foundLesson = module.lessons.find(lesson => lesson.id === currentLessonId);
      if (foundLesson) {
        return foundLesson;
      }
    }
    return courseData.modules[0].lessons[0]; // Fallback to the first lesson
  }, [currentLessonId]);

  const handleSelectLesson = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    setIsSidebarOpen(false); // Fecha a sidebar ao selecionar uma lição
  };

  return (
    <div className="flex min-h-screen font-sans text-slate">
      <Sidebar 
        courseData={courseData} 
        currentLessonId={currentLessonId} 
        onSelectLesson={handleSelectLesson}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto">
        <header className="md:hidden flex items-center mb-4">
          <button 
            onClick={() => setIsSidebarOpen(true)} 
            className="p-2 rounded-md text-lightest-slate hover:bg-lightest-navy"
            aria-label="Abrir menu"
          >
            <HamburgerIcon />
          </button>
          <h1 className="text-lg font-bold text-lightest-slate ml-4">
            {courseData.title}
          </h1>
        </header>
        <div className="max-w-4xl mx-auto">
           {currentLesson && <LessonContent key={currentLesson.id} lesson={currentLesson} />}
        </div>
      </main>
    </div>
  );
};

export default App;
