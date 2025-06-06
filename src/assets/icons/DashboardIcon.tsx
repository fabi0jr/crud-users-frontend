import type React from "react";
interface IconProps {
  isActive?: boolean;
}

export const DashboardIcon: React.FC<IconProps> = ({ isActive = false }) => {
  const fillColor = isActive ? "#021B1A" : "#FFFFFF";

  return (
    <svg
      id="Group_48166"
      data-name="Group 48166"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_8364"
            data-name="Rectangle 8364"
            width="24"
            height="24"
            fill={fillColor}
          />
        </clipPath>
      </defs>
      <g id="Group_48162" data-name="Group 48162" clipPath="url(#clip-path)">
        <path
          id="Path_35365"
          data-name="Path 35365"
          d="M9.984,8.241c0,1.533-.018,3.067.016,4.6a1.386,1.386,0,0,0,.355.859c1.98,2.017,3.987,4.008,5.984,6.007.587.588.556.878-.137,1.347A10.028,10.028,0,1,1,8.954,2.786c.751-.149,1.026.075,1.029.855,0,1.534,0,3.067,0,4.6"
          fill={fillColor}
        />
        <path
          id="Path_35366"
          data-name="Path 35366"
          d="M12.121,11.278c-.014-.241-.033-.42-.033-.6q0-4.184,0-8.369c0-.821.218-1.031,1.015-1a9.322,9.322,0,0,1,8.85,8.075,10.178,10.178,0,0,1,.1,1.156.643.643,0,0,1-.7.737c-3.048,0-6.1,0-9.222,0"
          fill={fillColor}
        />
        <path
          id="Path_35367"
          data-name="Path 35367"
          d="M12.887,13.393c.277-.015.452-.033.627-.034q4.3,0,8.59,0a5.345,5.345,0,0,1,.607.037.58.58,0,0,1,.575.721,9.447,9.447,0,0,1-3.068,5.858c-.383.348-.7.116-1-.186q-2.971-2.984-5.953-5.96c-.112-.111-.207-.239-.376-.437"
          fill={fillColor}
        />
      </g>
    </svg>
  );
};