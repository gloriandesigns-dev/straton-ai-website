import React from 'react';

// Reusable isometric cube component
export const Cube = ({ 
  x, y, 
  size = 40, 
  filled = false, 
  glowing = false,
  dashed = true,
  opacity = 1
}: { 
  x: number, y: number, 
  size?: number, 
  filled?: boolean, 
  glowing?: boolean,
  dashed?: boolean,
  opacity?: number
}) => {
  const h = size * 0.866; // height of a triangle (sqrt(3)/2)
  const s = size / 2;

  const topFace = `M0,${-h} L${size},0 L0,${h} L${-size},0 Z`;
  const leftFace = `M0,${h} L${-size},0 L${-size},${size} L0,${h+size} Z`;
  const rightFace = `M0,${h} L${size},0 L${size},${size} L0,${h+size} Z`;

  const strokeColor = glowing ? '#FF4D2E' : '#4A251D';
  const fillColor = glowing ? '#FF4D2E' : (filled ? '#3A1A12' : 'transparent');
  const strokeDash = dashed && !glowing ? '4,4' : 'none';

  return (
    <g transform={`translate(${x}, ${y})`} opacity={opacity}>
      <path d={topFace} fill={fillColor} stroke={strokeColor} strokeWidth="1" strokeDasharray={strokeDash} />
      <path d={leftFace} fill={fillColor} stroke={strokeColor} strokeWidth="1" strokeDasharray={strokeDash} />
      <path d={rightFace} fill={fillColor} stroke={strokeColor} strokeWidth="1" strokeDasharray={strokeDash} />
      {glowing && (
        <path d={topFace} fill="#FF4D2E" filter="blur(10px)" opacity="0.6" />
      )}
    </g>
  );
};

export const HeroCubes = () => {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full opacity-80" preserveAspectRatio="xMidYMid slice">
      <g transform="translate(400, 250) scale(1.5)">
        {/* Background grid of cubes */}
        <Cube x={-120} y={-69} dashed={true} opacity={0.3} />
        <Cube x={0} y={-138} dashed={true} opacity={0.3} />
        <Cube x={120} y={-69} dashed={true} opacity={0.3} />
        
        <Cube x={-240} y={0} dashed={true} opacity={0.4} />
        <Cube x={-120} y={69} dashed={true} opacity={0.6} />
        <Cube x={0} y={0} dashed={true} opacity={0.5} />
        <Cube x={120} y={69} dashed={true} opacity={0.5} />
        <Cube x={240} y={0} dashed={true} opacity={0.3} />

        <Cube x={-120} y={207} dashed={true} opacity={0.4} />
        <Cube x={0} y={138} dashed={true} opacity={0.8} />
        <Cube x={120} y={207} dashed={true} opacity={0.4} />
        
        {/* The glowing active cube */}
        <Cube x={-60} y={34.5} size={60} glowing={true} dashed={false} />
      </g>
    </svg>
  );
};

export const BFSICubes = () => {
  return (
    <svg viewBox="0 0 600 500" className="w-full h-full">
      <g transform="translate(300, 200) scale(1.2)">
        {/* Large container wireframe */}
        <path d="M0,-120 L150,-33 L150,140 L0,227 L-150,140 L-150,-33 Z" fill="none" stroke="#4A251D" strokeWidth="1" strokeDasharray="4,4" />
        <path d="M-150,-33 L0,53 L150,-33" fill="none" stroke="#4A251D" strokeWidth="1" strokeDasharray="4,4" />
        <path d="M0,53 L0,227" fill="none" stroke="#4A251D" strokeWidth="1" strokeDasharray="4,4" />

        {/* Internal modules */}
        <Cube x={-50} y={-20} size={30} filled={true} opacity={0.8} />
        <Cube x={30} y={-60} size={30} filled={true} opacity={0.6} />
        <Cube x={60} y={20} size={30} filled={true} opacity={0.7} />
        <Cube x={-20} y={60} size={30} glowing={true} dashed={false} />
        
        {/* Labels */}
        <text x={160} y={40} fill="#FFFFFF" fontSize="12" fontFamily="monospace" transform="rotate(-30 160 40)" letterSpacing="2">YOUR BUSINESS</text>
        
        {/* Connection line */}
        <path d="M-20,90 L-20,180" stroke="#FF4D2E" strokeWidth="1" />
        <rect x="-22" y="180" width="4" height="4" fill="#FF4D2E" />
        <text x="-10" y="185" fill="#FFFFFF" fontSize="10" fontFamily="monospace">OUR AI SOLUTION</text>
      </g>
    </svg>
  );
};

export const CardCube = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24 absolute right-8 top-1/2 -translate-y-1/2 opacity-40">
      <g transform="translate(50, 40) scale(0.4)">
        <Cube x={0} y={-34} size={40} dashed={true} />
        <Cube x={-40} y={34} size={40} dashed={true} />
        <Cube x={40} y={34} size={40} dashed={true} />
      </g>
    </svg>
  );
};
