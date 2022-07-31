import React from "react";
interface Props {
  className: string
  viewBox?: string
  onClick?: () => void
}
const LeftChevron: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="16"
      height="34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.5 32 1.808 17 14.5 2"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeftChevron;
