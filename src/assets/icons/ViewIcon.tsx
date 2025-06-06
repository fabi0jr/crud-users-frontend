import type React from "react"

interface ViewIconProps {
  isHovered?: boolean
}

export const ViewIcon: React.FC<ViewIconProps> = ({ isHovered = false }) => {
  const fillColor = isHovered ? "#FFFFFF" : "#0b2b25"

  return (
    <svg
      id="Group_47625"
      data-name="Group 47625"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <clipPath id="clip-path">
          <rect id="Rectangle_8197" data-name="Rectangle 8197" width="24" height="24" fill={fillColor} />
        </clipPath>
      </defs>
      <g id="Group_47624" data-name="Group 47624" clipPath="url(#clip-path)">
        <path
          id="Path_35064"
          data-name="Path 35064"
          d="M12.013,20.209a10.993,10.993,0,0,1-7.494-3.5A12.662,12.662,0,0,1,1.7,12.518a1.447,1.447,0,0,1-.051-1.011c1.532-3.441,3.9-6.1,7.565-7.252,3.615-1.138,6.825-.115,9.613,2.349a13.637,13.637,0,0,1,3.445,4.714,1.462,1.462,0,0,1,.09,1.054A12.677,12.677,0,0,1,14.9,19.607a22.5,22.5,0,0,1-2.889.6m.354-1.761a15.6,15.6,0,0,0,2.309-.548,11.033,11.033,0,0,0,5.93-5.695.821.821,0,0,0-.065-.626,11.858,11.858,0,0,0-2.879-3.763c-2.5-2.166-5.324-2.975-8.494-1.766a10.982,10.982,0,0,0-5.794,5.629.791.791,0,0,0,.065.675,28.7,28.7,0,0,0,2.291,3.16,8.878,8.878,0,0,0,6.637,2.934"
          fill={fillColor}
        />
        <path
          id="Path_35065"
          data-name="Path 35065"
          d="M7.379,11.981a4.563,4.563,0,0,1,4.612-4.654,4.64,4.64,0,1,1-4.612,4.654m1.678-.048a2.935,2.935,0,1,0,5.831-.43,2.728,2.728,0,0,0-2.925-2.421,2.491,2.491,0,0,1-2.906,2.851"
          fill={fillColor}
        />
      </g>
    </svg>
  )
}

