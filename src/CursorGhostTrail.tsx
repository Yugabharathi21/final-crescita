import { useEffect, useState } from "react";

const CursorGhostTrail: React.FC = () => {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };

      setTrail((prev) => [...prev.slice(-10), newTrail]); // Keeps only the last 10 positions for smooth ghosting
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "hidden" }}>
      {trail.map((t, index) => (
        <div
          key={t.id}
          style={{
            position: "absolute",
            left: `${t.x}px`,
            top: `${t.y}px`,
            width: "12px",
            height: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.6)", // Soft white glow
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            opacity: (index + 1) / trail.length, // Fades out
            transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
          }}
        />
      ))}
    </div>
  );
};

export default CursorGhostTrail;
