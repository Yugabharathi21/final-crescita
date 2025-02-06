import React from 'react';

interface NewComponentProps {
  text: string;
  className?: string;
}

const NewComponent: React.FC<NewComponentProps> = ({ text, className = '' }) => {
  return (
    <div className={`glitch-container ${className}`}>
      <h1 className="glitch-text text-6xl font-bold mb-4" data-text={text}>
        {text}
      </h1>
      <style jsx>{`
        .glitch-container {
          position: relative;
        }

        .glitch-text {
          position: relative;
          animation: glitch 2s infinite;
          color: #14fdce;
          text-shadow: 
            0 0 10px #14fdce,
            0 0 20px #14fdce,
            0 0 30px #14fdce;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text::before {
          animation: glitch-top 1s infinite linear alternate-reverse;
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          color: #14fdce;
        }

        .glitch-text::after {
          animation: glitch-bottom 1.5s infinite linear alternate-reverse;
          clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          color: #14fdce;
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes glitch-top {
          0% { transform: translate(0); }
          50% { transform: translate(-2px, 2px); }
          100% { transform: translate(0); }
        }

        @keyframes glitch-bottom {
          0% { transform: translate(0); }
          50% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
};

export default NewComponent;