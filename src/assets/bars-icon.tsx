import React from "react";

type BarsIconProps = React.SVGProps<SVGSVGElement>;

const BarsIcon = (props: BarsIconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.66663 4.51904H8.33329V2.01904H9.99996V18.6857H8.33329V15.3524H4.99996V12.8524H8.33329V11.1857H3.33329V8.68571H8.33329V7.01904H1.66663V4.51904ZM11.6666 4.51904H14.1666V7.01904H11.6666V4.51904ZM11.6666 8.68571H15.8333V11.1857H11.6666V8.68571ZM11.6666 12.8524H18.3333V15.3524H11.6666V12.8524Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BarsIcon;
