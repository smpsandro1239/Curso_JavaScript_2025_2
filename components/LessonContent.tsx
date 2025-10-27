
import React from 'react';
import type { Lesson } from '../types';
import { Quiz } from './Quiz';
import { CodeBlock } from './CodeBlock';

interface LessonContentProps {
  lesson: Lesson;
}

export const LessonContent: React.FC<LessonContentProps> = ({ lesson }) => {
  return (
    <article className="text-light-slate leading-relaxed">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-2">{lesson.title}</h1>
        <div className="w-24 h-1 bg-green"></div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-lightest-slate mb-4 border-l-4 border-green pl-4">Teoria (com Analogia)</h2>
        <div className="prose prose-invert max-w-none text-light-slate">
          {lesson.theory}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-lightest-slate mb-4 border-l-4 border-green pl-4">Prática (Orientada)</h2>
        <p className="mb-4">{lesson.practice.description}</p>
        <CodeBlock code={lesson.practice.code} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-lightest-slate mb-4 border-l-4 border-green pl-4">Exercício Rápido</h2>
        <p className="mb-6">Testa o teu conhecimento com a questão seguinte.</p>
        <Quiz key={lesson.id} questions={lesson.quiz} />
      </section>
    </article>
  );
};
