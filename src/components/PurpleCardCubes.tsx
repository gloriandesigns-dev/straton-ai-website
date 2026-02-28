import React from 'react';
import { Cube } from './IsometricCubes';

export const PurpleCardCubes = ({ type }: { type: 1 | 2 | 3 | 4 }) => {
  return (
    <div className="w-full h-40 flex items-center justify-center relative">
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
        <g transform="translate(100, 100) scale(1.2)">
          {type === 1 && (
            <>
              {/* Outer wireframe */}
              <Cube x={0} y={0} size={50} dashed={true} opacity={0.3} glowing={false} />
              {/* Inner glowing cube */}
              <Cube x={0} y={0} size={25} filled={true} glowing={true} dashed={false} />
            </>
          )}
          
          {type === 2 && (
            <>
              {/* Stacked cubes */}
              <Cube x={0} y={20} size={35} dashed={true} opacity={0.4} />
              <Cube x={0} y={-15} size={35} filled={true} glowing={true} dashed={false} />
            </>
          )}

          {type === 3 && (
            <>
              <Cube x={0} y={0} size={40} dashed={true} opacity={0.5} />
              <Cube x={0} y={0} size={20} filled={true} glowing={true} dashed={false} />
              {/* Wrapping check/line */}
              <path d="M-40,10 L-10,30 L40,-10" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </>
          )}

          {type === 4 && (
            <>
              {/* Main cube */}
              <Cube x={10} y={-10} size={40} dashed={true} opacity={0.5} />
              {/* Small cubes */}
              <Cube x={-30} y={20} size={15} filled={true} glowing={true} dashed={false} />
              <Cube x={-10} y={40} size={15} filled={true} glowing={false} dashed={false} />
              <Cube x={30} y={30} size={15} filled={true} glowing={false} dashed={false} opacity={0.7} />
            </>
          )}
        </g>
      </svg>
    </div>
  );
};
