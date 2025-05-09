import type React from "react";
interface IconProps {
  isActive?: boolean;
}

export const AcessIcon: React.FC<IconProps> = ({ isActive = false }) => {
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
            id="Rectangle_8111"
            data-name="Rectangle 8111"
            width="24"
            height="24"
            fill={fillColor}
          />
        </clipPath>
      </defs>
      <g
        id="Group_47406"
        data-name="Group 47406"
        opacity={isActive ? "1" : "0.6"}
      >
        <g id="Group_47383" data-name="Group 47383" clipPath="url(#clip-path)">
          <path
            id="Path_34816"
            data-name="Path 34816"
            d="M3.986,12.018q0-3.865,0-7.73a2.728,2.728,0,0,1,2.947-2.97q5.052-.007,10.1,0A2.71,2.71,0,0,1,20,4.212Q20.03,12,20,19.792a2.679,2.679,0,0,1-2.948,2.892H6.887a2.688,2.688,0,0,1-2.9-2.876c-.006-2.6,0-5.194,0-7.79M12,18.752c1.258,0,2.516.007,3.773,0,.772,0,1.007-.286.925-1.061a3.258,3.258,0,0,0-3.249-3.011c-.871-.022-1.744-.008-2.616-.005A3.272,3.272,0,0,0,7.3,17.645c-.133.778.128,1.1.926,1.1,1.258.009,2.516,0,3.773,0m-.051-5.388a2.694,2.694,0,1,0-2.655-2.68,2.678,2.678,0,0,0,2.655,2.68m.071-9.41c-.648,0-1.3,0-1.945,0-.417,0-.72.144-.768.6a.638.638,0,0,0,.637.793c1.376.028,2.753.022,4.128-.008a.626.626,0,0,0,.627-.743c-.025-.453-.315-.631-.734-.635-.648-.006-1.3,0-1.945,0"
            fill={fillColor}
          />
        </g>
      </g>
    </svg>
  );
};