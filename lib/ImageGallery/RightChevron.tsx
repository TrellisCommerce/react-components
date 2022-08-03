import React from 'react';

interface Props {
  className: string;
  viewBox?: string;
  onClick?: () => void;
}
const RightChevron: React.FC<Props> = (props) => {
  return (
    <svg
      width="16"
      height="34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m1.5 2 12.692 15L1.5 32"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightChevron;
