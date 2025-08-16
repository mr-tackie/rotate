import React from "react";

type DashboardIconProps = React.SVGProps<SVGSVGElement>;

const DashboardIcon = (props: DashboardIconProps) => {
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
        d="M10.8333 2.85242V7.85242H17.5V2.85242M10.8333 17.8524H17.5V9.51908H10.8333M2.5 17.8524H9.16667V12.8524H2.5M2.5 11.1858H9.16667V2.85242H2.5V11.1858Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DashboardIcon;
