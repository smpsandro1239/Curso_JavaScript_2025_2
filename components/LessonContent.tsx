import React, { useState } from 'react';
import type { Lesson } from '../types';
import { Quiz } from './Quiz';
import { CodeBlock } from './CodeBlock';
import { CheckIcon } from './icons';

interface LessonContentProps {
  lesson: Lesson;
}

const ChallengeBlock: React.FC<{ challenge: NonNullable<Lesson['challenge']> }> = ({ challenge }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="bg-light-navy p-6 rounded-lg shadow-lg">
      <p className="mb-4">{challenge.description}</p>
      <CodeBlock code={challenge.starterCode} />
      <div className="mt-4">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="text-green text-sm font-semibold hover:text-white transition-colors"
        >
          {showSolution ? 'Esconder Solução' : 'Mostrar Solução'}
        </button>
        {showSolution && (
          <div className="mt-4">
            <h4 className="font-bold text-lightest-slate mb-2">Solução Possível:</h4>
            <CodeBlock code={challenge.solution} />
          </div>
        )}
      </div>
    </div>
  );
};


export const LessonContent: React.FC<LessonContentProps> = ({ lesson }) => {
  return (
    <article className="text-light-slate leading-relaxed">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-2">{lesson.title}</h1>
        <div className="w-24 h-1 bg-green"></div>
      </header>
      
      {lesson.illustration && (
        <div className="my-8 p-4 bg-light-navy rounded-lg flex justify-center items-center">
          {lesson.illustration}
        </div>
      )}

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-lightest-slate mb-4 border-l-4 border-green pl-4">Teoria (com Analogia)</h2>
        <div className="prose prose-invert max-w-none text-light-slate">
          {lesson.theory}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-lightest-slate mb-4 border-l-4 border-green pl-4">Prática (Orientada)</h2>
        <div className="space-y-8">
            {lesson.practice.examples.map((example, index) => (
                <div key={index}>
                    <h3 className="text-lg font-bold text-light-slate mb-2">{example.title}</h3>
                    <div className="mb-4 prose prose-invert max-w-none text-light-slate">{example.description}</div>
                    <CodeBlock code={example.code} />
                </div>
            ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-lightest-slate mb-4 border-l-4 border-green pl-4">Verificação de Conhecimento</h2>
        <p className="mb-6">Testa o que aprendeste com as questões seguintes.</p>
        <Quiz key={lesson.id} questions={lesson.quiz} />
      </section>

      {lesson.challenge && (
        <section>
            <h2 className="text-2xl font-bold text-lightest-slate mb-4 border-l-4 border-green pl-4">Desafio Prático</h2>
            <p className="mb-6">A melhor forma de aprender é a praticar. Tenta resolver o seguinte problema.</p>
            <ChallengeBlock challenge={lesson.challenge} />
        </section>
      )}

      {lesson.glossary && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-lightest-slate mb-4 border-l-4 border-green pl-4">Glossário do Módulo</h2>
          {lesson.glossary}
        </section>
      )}

    </article>
  );
};