const LeftChevron = ({ ...props }) => {
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
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LeftChevron;
