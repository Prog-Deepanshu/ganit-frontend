import React from 'react';
import { Mouse, HandMetal } from 'lucide-react';

interface ModeSwitcherProps {
  mode: 'hand' | 'mouse';
  setMode: (mode: 'hand' | 'mouse') => void;
}

export default function ModeSwitcher({ mode, setMode }: ModeSwitcherProps) {
  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={() => setMode('mouse')}
        className={`group relative px-6 py-3 rounded-xl transition-all duration-200 ${
          mode === 'mouse'
            ? 'bg-white shadow-lg shadow-blue-500/20 scale-105'
            : 'bg-white/50 hover:bg-white hover:shadow-md'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${
            mode === 'mouse' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
          }`}>
            <Mouse size={20} />
          </div>
          <span className={`font-medium ${
            mode === 'mouse' ? 'text-gray-900' : 'text-gray-600'
          }`}>
            Mouse Draw
          </span>
        </div>
      </button>

      <button
        onClick={() => setMode('hand')}
        className={`group relative px-6 py-3 rounded-xl transition-all duration-200 ${
          mode === 'hand'
            ? 'bg-white shadow-lg shadow-purple-500/20 scale-105'
            : 'bg-white/50 hover:bg-white hover:shadow-md'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${
            mode === 'hand' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-600'
          }`}>
            <HandMetal size={20} />
          </div>
          <span className={`font-medium ${
            mode === 'hand' ? 'text-gray-900' : 'text-gray-600'
          }`}>
            Air Canvas
          </span>
        </div>
      </button>
    </div>
  );
}