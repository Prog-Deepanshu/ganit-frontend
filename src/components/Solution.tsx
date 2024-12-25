import React from 'react';
import { CheckCircle2, Brain } from 'lucide-react';

interface SolutionProps {
  solution: string | null;
  loading: boolean;
}

export default function Solution({ solution, loading }: SolutionProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-20 animate-pulse" />
            <Brain className="w-12 h-12 text-blue-500 relative animate-bounce" />
          </div>
          <p className="text-gray-600 font-medium">Processing your math problem...</p>
        </div>
      </div>
    );
  }

  if (!solution) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-1 bg-gradient-to-r from-green-500 to-emerald-500" />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-green-100">
            <CheckCircle2 className="text-green-500" size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Solution Found</h3>
        </div>
        <p className="text-gray-700 text-lg">{solution}</p>
      </div>
    </div>
  );
}