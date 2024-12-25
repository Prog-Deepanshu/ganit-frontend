import React, { useRef, useEffect, useState } from 'react';
import { Pencil, Mouse, Eraser, RotateCcw } from 'lucide-react';

interface DrawingCanvasProps {
  mode: 'hand' | 'mouse';
  onSubmit: (imageData: string) => void;
}

export default function DrawingCanvas({ mode, onSubmit }: DrawingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    canvas.style.width = `${canvas.offsetWidth}px`;
    canvas.style.height = `${canvas.offsetHeight}px`;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    contextRef.current = context;
  }, []);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas || !contextRef.current) return;

    setIsDrawing(true);
    const { offsetX, offsetY } = getCoordinates(e);
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !contextRef.current) return;

    const { offsetX, offsetY } = getCoordinates(e);
    if (isErasing) {
      contextRef.current.clearRect(offsetX - 10, offsetY - 10, 20, 20);
    } else {
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    if (contextRef.current) {
      contextRef.current.closePath();
    }
  };

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { offsetX: 0, offsetY: 0 };

    if ('touches' in e) {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      return {
        offsetX: touch.clientX - rect.left,
        offsetY: touch.clientY - rect.top,
      };
    } else {
      return {
        offsetX: e.nativeEvent.offsetX,
        offsetY: e.nativeEvent.offsetY,
      };
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSubmit = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const imageData = canvas.toDataURL('image/png');
    onSubmit(imageData);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <button
          onClick={() => setIsErasing(false)}
          className={`p-2 rounded ${
            !isErasing ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          <Pencil size={20} />
        </button>
        <button
          onClick={() => setIsErasing(true)}
          className={`p-2 rounded ${
            isErasing ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          <Eraser size={20} />
        </button>
        <button
          onClick={clearCanvas}
          className="p-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          <RotateCcw size={20} />
        </button>
      </div>
      <canvas
        ref={canvasRef}
        className="border-2 border-gray-300 rounded-lg touch-none bg-white"
        style={{ width: '100%', height: '400px' }}
        onMouseDown={mode === 'mouse' ? startDrawing : undefined}
        onMouseMove={mode === 'mouse' ? draw : undefined}
        onMouseUp={mode === 'mouse' ? stopDrawing : undefined}
        onMouseLeave={mode === 'mouse' ? stopDrawing : undefined}
        onTouchStart={mode === 'hand' ? startDrawing : undefined}
        onTouchMove={mode === 'hand' ? draw : undefined}
        onTouchEnd={mode === 'hand' ? stopDrawing : undefined}
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Solve Math Problem
      </button>
    </div>
  );
}