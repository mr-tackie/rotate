import React from "react";

type CuboidIconProps = React.SVGProps<SVGSVGElement>;

const CuboidIcon = (props: CuboidIconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_127_123)">
        <path
          d="M8.80116 3.01868L2.99866 8.81934H11.2065L17.009 3.01868H8.80116Z"
          fill="currentColor"
        />
        <path
          d="M11.5387 17.3593L17.3394 11.5587V3.35083L11.5387 9.1515V17.3593Z"
          fill="#A3A9B6"
        />
        <path
          d="M11.0732 9.28699H2.66919V17.6855H11.0732V9.28699Z"
          fill="#A3A9B6"
        />
      </g>
      <defs>
        <clipPath id="clip0_127_123">
          <rect
            width="14.6703"
            height="14.6667"
            fill="white"
            transform="translate(2.6665 3.01904)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CuboidIcon;
