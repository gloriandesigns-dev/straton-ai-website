import React from 'react';

export interface FrameData {
  id: string;
  content: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export interface FrameContainerProps {
  frames: FrameData[];
  parentClassName?: string;
}

export const FrameContainer: React.FC<FrameContainerProps> = ({ frames, parentClassName = '' }) => {
  return (
    <div className={`flex flex-col gap-[10px] w-full ${parentClassName}`}>
      {frames.map((frame) => {
        const Component = frame.as || 'section';
        return (
          <Component
            key={frame.id}
            className={`rounded-[20px] border-2 border-brand-orange shadow-lg overflow-hidden ${frame.className || 'bg-[#1A0905]'}`}
          >
            {frame.content}
          </Component>
        );
      })}
    </div>
  );
};
