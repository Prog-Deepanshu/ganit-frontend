import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Created with ❤️ by Deepanshu Jha
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/deepanshujha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/deepanshujha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/deepanshujha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}