
import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from './icons';

interface CodeBlockProps {
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="bg-lightest-navy rounded-lg relative group">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-slate/20 rounded-md text-light-slate hover:bg-slate/40 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copiar código"
      >
        {isCopied ? <CheckIcon /> : <ClipboardIcon />}
      </button>
      <pre className="p-4 rounded-lg overflow-x-auto">
        <code className="language-javascript text-sm text-lightest-slate">
          {code}
        </code>
      </pre>
    </div>
  );
};
