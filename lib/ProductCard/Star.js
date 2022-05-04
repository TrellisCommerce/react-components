const Star = ({ ...props }) => {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m8.693.953 1.577 4.894 4.928.06c.424.005.6.572.26.837l-3.954 3.084 1.469 4.931c.126.425-.333.774-.68.517l-4.02-2.988-4.02 2.988c-.345.257-.805-.093-.679-.517l1.469-4.931-3.954-3.085c-.34-.265-.165-.831.26-.836l4.927-.06L7.853.952a.437.437 0 0 1 .84 0Z"
      />
    </svg>
  );
};

export default Star;
