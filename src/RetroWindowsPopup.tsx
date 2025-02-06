import React, { useState, useEffect } from 'react';

const RetroWindowsPopup = ({ onClose }) => {
  const [showBluescreen, setShowBluescreen] = useState(true);
  const [showError, setShowError] = useState(false);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    // Show error after "scanning"
    const errorTimeout = setTimeout(() => {
      setShowBluescreen(false);
      setShowError(true);
    }, 4000);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(errorTimeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[999] font-mono">
      {showBluescreen ? (
        <div className="bg-[#000082] p-8 w-full h-full flex flex-col items-center justify-center text-white">
          <div className="text-2xl mb-4">Microsoft Windows</div>
          <div>Scanning system{dots}</div>
        </div>
      ) : showError && (
        <div className="relative w-96 border-2 border-[#c0c0c0] bg-[#c0c0c0]">
          {/* Title Bar */}
          <div className="bg-[#000082] text-white px-2 py-1 flex justify-between items-center">
            <span>C:\WINDOWS\SYSTEM32\</span>
            <button 
              onClick={onClose}
              className="px-2 bg-[#c0c0c0] text-black hover:bg-[#a0a0a0]"
            >
              X
            </button>
          </div>
          
          {/* Content */}
          <div className="p-4 bg-[#c0c0c0] flex gap-4">
            <div className="text-4xl">⚠️</div>
            <div>
              <p className="mb-4">SYSTEM WARNING:</p>
              <p className="mb-4">UNAUTHORIZED ACCESS DETECTED...</p>
              <p className="mb-4 font-bold text-red-600">SECURITY BREACH IN PROGRESS</p>
            </div>
          </div>
          
          {/* Button Container */}
          <div className="p-4 flex justify-center">
            <button
              onClick={onClose}
              className="px-8 py-1 border-2 border-black bg-[#c0c0c0] active:border-t-[#404040] active:border-l-[#404040] active:border-b-white active:border-r-white hover:bg-[#a0a0a0]"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RetroWindowsPopup;