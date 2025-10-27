
import React, { useState } from 'react';
import type { Question } from '../types';
import { CheckIcon, XIcon } from './icons';

interface QuizProps {
  questions: Question[];
}

export const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectAnswer = (questionIndex: number, answerIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
  };

  const handleSubmit = () => {
    // Basic validation to ensure an answer is selected for all questions
    if (Object.keys(selectedAnswers).length !== questions.length) {
      alert("Por favor, responde a todas as perguntas antes de submeter.");
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  return (
    <div className="bg-light-navy p-6 rounded-lg shadow-lg">
      {questions.map((q, qIndex) => {
        const selectedAnswer = selectedAnswers[qIndex];
        const isCorrect = selectedAnswer === q.correctAnswerIndex;

        return (
          <div key={qIndex} className="mb-6 last:mb-0">
            <p className="font-bold text-lightest-slate mb-4">{qIndex + 1}. {q.question}</p>
            <div className="space-y-3">
              {q.options.map((option, oIndex) => {
                const isSelected = selectedAnswer === oIndex;
                let optionClass = 'bg-lightest-navy hover:bg-slate/20';
                let icon = null;

                if (isSubmitted) {
                    if (oIndex === q.correctAnswerIndex) {
                        optionClass = 'bg-green/10 text-green ring-2 ring-green';
                        icon = <CheckIcon />;
                    } else if (isSelected && oIndex !== q.correctAnswerIndex) {
                        optionClass = 'bg-red-500/10 text-red-400 ring-2 ring-red-500';
                        icon = <XIcon />;
                    }
                } else if (isSelected) {
                    optionClass = 'bg-slate/30 ring-2 ring-green';
                }

                return (
                  <button
                    key={oIndex}
                    onClick={() => handleSelectAnswer(qIndex, oIndex)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-3 rounded-md transition-all duration-200 flex items-center justify-between ${optionClass} ${!isSubmitted ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                  >
                    <span>{option}</span>
                    {icon}
                  </button>
                );
              })}
            </div>
            {isSubmitted && !isCorrect && (
              <div className="mt-4 p-4 bg-lightest-navy rounded-md text-sm text-light-slate border-l-4 border-yellow-400">
                <p><strong className="font-bold text-yellow-300">Explicação:</strong> {q.explanation}</p>
              </div>
            )}
            {isSubmitted && isCorrect && (
                 <div className="mt-4 p-4 bg-lightest-navy rounded-md text-sm text-light-slate border-l-4 border-green">
                    <p><strong className="font-bold text-green">Muito bem!</strong> {q.explanation}</p>
              </div>
            )}
          </div>
        );
      })}
      <div className="mt-6 flex justify-end">
        {isSubmitted ? (
            <button
            onClick={handleReset}
            className="bg-green/80 hover:bg-green text-navy font-bold py-2 px-6 rounded-md transition-colors"
          >
            Tentar Novamente
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green text-navy font-bold py-2 px-6 rounded-md hover:bg-opacity-80 transition-colors"
          >
            Submeter
          </button>
        )}
      </div>
    </div>
  );
};
