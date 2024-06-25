export interface IconProps {
  fill?: string
  width?: string
  height?: string
}

export const GoogleIcon = ({
  fill = 'var(--adm-color-text)',
  width,
  height,
}: IconProps) => (
  <span 
    style={{ fill: fill, verticalAlign: 'middle', lineHeight: 1 }} 
    dangerouslySetInnerHTML={{__html: 
      `<svg style="${width ? `width:${width};` : ''}${height ? `width:${height};` : ''}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>` 
    }} 
  />
)

export const AppleWatchNike = ({
  fill = 'currentColor',
  width,
  height,
}: IconProps) => (
  <span 
    style={{ fill: fill, verticalAlign: 'middle', lineHeight: 1 }} 
    dangerouslySetInnerHTML={{__html: 
      `<svg style="${width ? `width:${width};` : ''}${height ? `width:${height};` : ''}" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	      viewBox="0 0 24 4" style="enable-background:new 0 0 24 4;" xml:space="preserve">
        <g>
          <polygon points="4.55,2.55 4.55,2.55 4.19,1.09 3.77,1.09 3.41,2.55 3.41,2.55 3.08,1.09 2.63,1.09 3.19,3.13 3.61,3.13 3.97,1.73 
            3.98,1.73 4.35,3.13 4.77,3.13 5.33,1.09 4.88,1.09 	"/>
          <path d="M9.84,2.81c-0.29,0-0.43-0.18-0.43-0.57V1.99c0-0.38,0.14-0.58,0.42-0.58c0.27,0,0.39,0.18,0.39,0.38h0.4V1.77
            c0-0.4-0.3-0.72-0.79-0.72c-0.53,0-0.84,0.35-0.84,0.93v0.25c0,0.59,0.31,0.93,0.84,0.93c0.53,0,0.79-0.33,0.79-0.7V2.43h-0.4
            C10.23,2.64,10.13,2.81,9.84,2.81z"/>
          <path d="M5.99,1.09L5.35,3.13h0.41l0.14-0.52h0.63l0.14,0.52h0.44L6.49,1.09H5.99z M6,2.3l0.23-0.81h0L6.46,2.3H6z"/>
          <polygon points="12.3,1.91 11.48,1.91 11.48,1.09 11.07,1.09 11.07,3.13 11.48,3.13 11.48,2.26 12.3,2.26 12.3,3.13 12.72,3.13 
            12.72,1.09 12.3,1.09 	"/>
          <polygon points="7.12,1.44 7.72,1.44 7.72,3.13 8.13,3.13 8.13,1.44 8.73,1.44 8.73,1.09 7.12,1.09 	"/>
          <path d="M1.86,1.86c0-0.35,0.28-0.52,0.29-0.53c-0.16-0.24-0.41-0.27-0.5-0.28C1.43,1.04,1.24,1.18,1.13,1.18
            c-0.11,0-0.27-0.12-0.45-0.12c-0.23,0-0.44,0.14-0.56,0.35c-0.24,0.43-0.06,1.06,0.17,1.41C0.4,2.98,0.54,3.18,0.72,3.17
            c0.17-0.01,0.24-0.11,0.45-0.11c0.21,0,0.27,0.11,0.45,0.11c0.19,0,0.3-0.17,0.42-0.34c0.13-0.2,0.19-0.39,0.19-0.4
            C2.22,2.42,1.86,2.28,1.86,1.86z"/>
          <path d="M1.65,0.38c-0.14,0.01-0.3,0.09-0.4,0.21C1.16,0.7,1.09,0.86,1.11,1.02c0.15,0.01,0.31-0.08,0.4-0.2
            C1.61,0.71,1.67,0.54,1.65,0.38z"/>
          <path d="M21.07,1.17c-1.61,0.43-2.95,0.78-2.98,0.79c-0.39,0.09-0.71,0.08-0.93-0.03c-0.13-0.06-0.24-0.17-0.3-0.3
            c-0.09-0.19-0.1-0.43-0.03-0.71c0.05-0.17,0.14-0.38,0.24-0.55c0.01-0.02,0.02-0.04,0.02-0.04c0,0-0.17,0.19-0.23,0.26
            c-0.39,0.44-0.62,0.76-0.76,1.08c-0.17,0.38-0.22,0.72-0.13,0.98C16,2.75,16.04,2.82,16.1,2.9c0.02,0.03,0.09,0.1,0.12,0.12
            c0.15,0.12,0.35,0.19,0.59,0.2c0.27,0.01,0.6-0.05,0.97-0.18c0.14-0.05,0.23-0.08,0.53-0.22C20.26,2,24,0.4,24,0.4
            C24,0.4,22.68,0.75,21.07,1.17z"/>
          <rect x="14.19" y="0.29" width="0.27" height="3.42"/>
        </g>
      </svg>` 
    }} 
  />
)

export const MenuIcon = ({
  fill = 'currentColor',
  width = '24px',
  height = '24px',
}: IconProps) => (
  <span 
    style={{ fill: fill, verticalAlign: 'middle', lineHeight: 1 }} 
    dangerouslySetInnerHTML={{__html: 
      `<svg style="${width ? `width:${width};` : ''}${height ? `width:${height};` : ''}" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
        <defs>
          <style>
            .cls-1 {
              fill: ${fill};
              stroke-width: 0px;
            }
          </style>
        </defs>
        <rect class="cls-1" x="5" y="15.25" width="14" height="1.5" rx=".75" ry=".75"/>
        <rect class="cls-1" x="5" y="7.25" width="14" height="1.5" rx=".75" ry=".75"/>
      </svg>` 
    }} 
  />
)

export const CircleIcon = ({
  fill = 'currentColor',
  width = '24px',
  height = '24px',
}: IconProps) => (
  <span 
    style={{ fill: fill, verticalAlign: 'middle', lineHeight: 1 }} 
    dangerouslySetInnerHTML={{__html: 
      `<svg style="${width ? `width:${width};` : ''}${height ? `width:${height};` : ''}" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	      viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
        <path d="M12,4c-4.42,0-8,3.58-8,8s3.58,8,8,8s8-3.58,8-8S16.42,4,12,4z M12,18.5c-3.58,0-6.5-2.92-6.5-6.5c0-3.58,2.92-6.5,6.5-6.5
          c3.58,0,6.5,2.92,6.5,6.5C18.5,15.58,15.58,18.5,12,18.5z"/>
      </svg>` 
    }} 
  />
)