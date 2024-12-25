import React from 'react';
import { Pencil, Mouse, Camera } from 'lucide-react';

interface InputModeSelectorProps {
  mode: 'hand' | 'mouse' | 'camera';
  onModeChange: (mode: 'hand' | 'mouse' | 'camera') => void;
}

export default function InputModeSelector({ mode, onModeChange }: InputModeSelectorProps) {
  return (
    <div className="flex justify-center gap-4 mb-6">
      <button
        onClick={() => onModeChange('mouse')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          mode === 'mouse'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <Mouse size={20} />
        Mouse
      </button>
      <button
        onClick={() => onModeChange('hand')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          mode === 'hand'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <Pencil size={20} />
        Touch/Pen
      </button>
      <button
        onClick={() => onModeChange('camera')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          mode === 'camera'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <Camera size={20} />
        Camera
      </button>
    </div>
  );
}