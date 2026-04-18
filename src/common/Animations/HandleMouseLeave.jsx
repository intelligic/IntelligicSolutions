import { useRef } from "react";

const HandleMouseLeave = ({ src, alt }) => {
  const cardRef = useRef(null);

  const lastPos = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0, y: 0 });

  const SPEED = 0.35; // natural product-viewer speed

  const handleMouseEnter = (e) => {
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;

    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;

    lastPos.current = { x: e.clientX, y: e.clientY };

    rotation.current.y += dx * SPEED;
    rotation.current.x -= dy * SPEED;

    // normalize diagonal movement
    const angle = Math.sqrt(
      rotation.current.x ** 2 + rotation.current.y ** 2
    );

    card.style.transition = "none";
    card.style.transform = `
      perspective(1200px)
      rotate3d(
        ${rotation.current.x},
        ${rotation.current.y},
        0,
        ${angle}deg
      )
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    card.style.transition = "transform 0.6s ease-out";
    card.style.transform = `
      perspective(1200px)
      rotate3d(0, 0, 0, 0deg)
    `;

    rotation.current = { x: 0, y: 0 };
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-[400px] h-[400px] rounded-2xl overflow-hidden cursor-grab"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
};

export default HandleMouseLeave;
