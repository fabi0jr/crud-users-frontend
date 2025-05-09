import type React from "react";
interface IconProps {
  isActive?: boolean;
}

export const UserIcon: React.FC<IconProps> = ({ isActive = false }) => {
  const fillColor = isActive ? "#021B1A" : "#FFFFFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_8135"
            data-name="Rectangle 8135"
            width="24"
            height="24"
            fill={fillColor}
          />
        </clipPath>
      </defs>
      <g
        id="Group_48110"
        data-name="Group 48110"
        opacity={isActive ? "1" : "0.9"}
      >
        <g id="Group_47432" data-name="Group 47432" clipPath="url(#clip-path)">
          <path
            id="Path_34837"
            data-name="Path 34837"
            d="M11.987,22.785q-3.995,0-7.99,0a1.292,1.292,0,0,1-1.423-1.56,7.237,7.237,0,0,1,6.346-7A18.276,18.276,0,0,1,16,14.4a7.335,7.335,0,0,1,5.427,7.029,1.251,1.251,0,0,1-1.393,1.351q-4.026,0-8.052,0M4.591,20.8H19.367a1.535,1.535,0,0,0,.014-.279,5.462,5.462,0,0,0-5.034-4.451c-1.434-.025-2.868.009-4.3-.01a5.3,5.3,0,0,0-4.323,2.083A4.849,4.849,0,0,0,4.591,20.8"
            fill={fillColor}
          />
          <path
            id="Path_34838"
            data-name="Path_34838"
            d="M17.33,6.647a5.284,5.284,0,0,1-5.352,5.317A5.349,5.349,0,0,1,6.634,6.55a5.4,5.4,0,0,1,5.382-5.335A5.349,5.349,0,0,1,17.33,6.647m-5.342,3.38a3.474,3.474,0,0,0,3.437-3.445,3.428,3.428,0,0,0-6.856.039,3.484,3.484,0,0,0,3.419,3.406"
            fill={fillColor}
          />
        </g>
      </g>
    </svg>
  );
};