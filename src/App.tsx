import React, { useState } from 'react';
import { HandMetal, Mouse, Brain, Sparkles } from 'lucide-react';
import DrawingCanvas from './components/DrawingCanvas';
import Solution from './components/Solution';
import Header from './components/Header';
import ModeSwitcher from './components/ModeSwitcher';
import Footer from './components/Footer';

export default function App() {
  const [mode, setMode] = useState<'hand' | 'mouse'>('mouse');
  const [solution, setSolution] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (imageData: string) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageData }),
      });
      const data = await response.json();
      setSolution(data.solution);
    } catch (error) {
      console.error('Error:', error);
      setSolution('Error processing the image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Header />
        
        <div className="mt-12 space-y-8">
          <ModeSwitcher mode={mode} setMode={setMode} />

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="p-6">
              {mode === 'mouse' ? (
                <DrawingCanvas mode={mode} onSubmit={handleSubmit} />
              ) : (
                <div className="text-center p-8 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
                  <div className="relative inline-block">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30" />
                    <HandMetal size={48} className="relative text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold mt-6 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Air Canvas Mode
                  </h3>
                  <p className="text-gray-600 mb-4 max-w-md mx-auto">
                    Draw in the air using hand gestures! The camera feed will appear in a separate window.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm">
                    <Brain size={16} />
                    Python backend required on port 5000
                  </div>
                </div>
              )}
            </div>
          </div>

          <Solution solution={solution} loading={loading} />
        </div>

        <Footer />
      </div>
    </div>
  );
}