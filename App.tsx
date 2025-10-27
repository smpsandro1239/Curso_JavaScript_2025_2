
import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { LessonContent } from './components/LessonContent';
import { courseData } from './course-data';
import type { Lesson } from './types';

const App: React.FC = () => {
  const [currentLessonId, setCurrentLessonId] = useState<string>('1.1');

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
  };

  return (
    <div className="flex min-h-screen font-sans text-slate">
      <Sidebar 
        courseData={courseData} 
        currentLessonId={currentLessonId} 
        onSelectLesson={handleSelectLesson} 
      />
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
           {currentLesson && <LessonContent key={currentLesson.id} lesson={currentLesson} />}
        </div>
      </main>
    </div>
  );
};

export default App;
