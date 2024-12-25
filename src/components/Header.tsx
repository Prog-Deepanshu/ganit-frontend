import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <div className="text-center space-y-4">
      <div className="inline-flex items-center justify-center gap-3 text-4xl font-bold">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI Math Solver
        </span>
        <Sparkles className="w-8 h-8 text-blue-500" />
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Experience the future of problem-solving with our AI-powered math assistant.
        Draw equations using your mouse or hand gestures, and watch as AI brings solutions to life.
      </p>
      <div className="flex items-center justify-center gap-8 mt-6">
        <Feature icon={Brain} text="Advanced AI" />
        <Feature icon={Sparkles} text="Instant Solutions" />
      </div>
    </div>
  );
}

function Feature({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <Icon size={20} className="text-blue-500" />
      <span className="font-medium">{text}</span>
    </div>
  );
}