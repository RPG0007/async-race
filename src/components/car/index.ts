import './index.scss';

export function carIcon(color: string): string {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
  viewBox="0 0 4144.48 2608.97"
   xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Layer_x0020_1">
    <metadata id="CorelCorpID_0Corel-Layer"/>
    <g id="_1008669264">
     <g>
      <path style="fill: ${color}" d="M1963.48 2.96c353.61,23.96 666.09,152.19 944.25,387.93 60.88,51.49 154.14,143.45 212.42,209.18 38.54,43.07 78.04,91.31 134.06,162.88 95.85,122.08 162.23,180.04 237.68,207.57 15.22,5.18 60.55,17.16 101.35,26.23 110.09,24.29 155.75,39.18 226.02,72.54 74.15,35.62 119.16,67.35 167.41,117.87 79.33,83.54 127.58,198.5 146.37,350.37 11.98,96.5 15.22,227 6.48,284.31 -19.75,133.74 -102.33,242.86 -234.12,308.92l-30.76 15.54 -58.61 0c-32.38,0 -59.58,-0.65 -60.55,-1.62 -0.97,-0.97 -0.65,-8.42 0.97,-16.19 7.13,-38.21 9.72,-100.06 6.48,-145.07 -8.09,-101.68 -26.87,-171.62 -69.94,-259.7 -37.24,-76.74 -78.37,-133.09 -139.57,-192.67 -106.86,-103.62 -234.76,-167.09 -383.4,-190.08 -51.16,-7.77 -153.17,-7.77 -202.39,0 -210.48,34.32 -381.45,147.66 -492.52,327.05 -77.72,124.99 -113.98,287.87 -96.82,431.32 2.59,21.37 4.85,40.8 4.85,42.74 0,3.24 -83.22,4.21 -404.77,4.21 -222.78,0 -404.77,-0.32 -404.77,-0.97 0,-0.32 2.26,-16.84 4.85,-36.27 5.51,-41.45 6.15,-113.66 1.62,-155.43 -21.05,-187.81 -117.22,-359.44 -266.5,-475.04 -208.54,-161.26 -491.23,-190.08 -729.24,-74.15 -212.1,103.3 -355.87,303.74 -385.66,537.86 -4.21,34.65 -4.85,56.34 -3.24,105.24 1.3,33.68 2.91,67.35 4.21,74.48l1.94 12.95 -17.49 -14.89c-9.71,-8.09 -28.5,-27.52 -42.09,-42.74 -105.57,-118.84 -155.43,-285.93 -138.92,-463.7 9.39,-98.44 39.5,-186.52 89.7,-261.97 23.96,-35.94 71.89,-87.75 99.74,-107.5 17.16,-11.98 17.81,-13.28 16.51,-24.94 -5.18,-45.66 17.49,-154.13 58.29,-278.8 24.29,-74.48 33.03,-95.53 64.12,-155.76 67.35,-131.47 167.41,-267.47 317.01,-431.65 58.61,-64.44 103.62,-96.5 205.63,-147.66 230.23,-115.28 529.76,-184.25 881.42,-202.71 71.56,-3.56 170.98,-3.56 227.97,0.32l-0 0zm-54.72 269.42c-66.38,18.78 -123.05,66.06 -152.19,126.61 -21.7,45.66 -22.02,48.57 -23.31,189.76 -1.62,137.3 2.26,233.15 10.36,272 10.04,48.57 33.35,83.87 63.14,96.82l15.87 6.8 506.12 -0.65 506.13 -0.97 18.46 -7.45c20.07,-8.09 48.57,-31.73 56.34,-46.63 9.39,-18.13 11.66,-42.09 6.15,-68 -9.71,-46.31 -40.48,-99.41 -100.06,-172.27 -194.94,-238 -365.91,-356.84 -562.47,-390.85 -63.46,-10.69 -85.81,-11.98 -208.54,-11.33 -98.12,0.65 -119.81,1.62 -136,6.15zm-680.01 32.7c-57.96,14.25 -143.13,43.39 -175.83,59.91 -57.96,29.14 -129.52,84.84 -175.83,136.65 -102.33,114.96 -177.45,265.53 -178.1,357.49 -0.32,31.41 3.89,48.25 16.19,65.41 12.63,17.16 25.9,26.55 49.54,33.68 18.46,5.83 35.62,6.15 319.28,6.15 295,0 299.85,0 313.46,-6.48 16.52,-8.09 28.5,-24.93 37.89,-52.46 6.8,-20.08 6.8,-25.58 8.09,-245.13 0.97,-238.98 -0.65,-287.55 -12.31,-318.31 -9.07,-24.29 -26.23,-40.15 -47.6,-43.39 -8.42,-1.3 -18.46,-3.56 -22.02,-4.86 -3.56,-1.62 -24.61,-2.27 -46.95,-1.62 -31.74,1.3 -50.19,3.89 -85.81,12.95l0 0z"/>
      <path style="fill: ${color}" d="M3125.33 1450.41c227.97,22.02 422.58,177.13 494.79,394.09 20.72,62.5 26.23,94.23 28.17,165.79 2.91,105.57 -12.63,180.04 -55.7,270.71 -73.18,152.52 -216.31,269.09 -380.81,310.21 -296.94,74.48 -599.06,-91.64 -694.26,-381.78 -31.73,-95.85 -37.56,-198.5 -17.48,-297.59 58.29,-289.17 330.61,-489.93 625.29,-461.44l0 0zm-130.17 313.78c-13.28,3.89 -36.59,13.28 -51.81,21.05 -54.4,28.5 -93.26,68.33 -119.81,123.05 -19.1,39.83 -25.91,64.76 -28.17,106.86 -7.45,136.98 91.31,260.02 227.96,283.66 12.31,2.27 37.89,3.24 60.56,2.27 34,-1.3 43.71,-3.24 72.21,-12.95 72.21,-24.61 124.02,-69.62 158.02,-136.97 21.05,-42.1 28.17,-71.89 28.5,-121.43 0.65,-71.24 -19.43,-125.31 -67.03,-182.63 -35.3,-41.77 -101.03,-79.01 -158.02,-89.37 -28.82,-4.86 -94.55,-1.62 -122.4,6.48l0 0z"/>
      <path style="fill: ${color}" d="M945.41 1450.09c306.98,32.06 536.24,295 523.61,600.68 -13.6,321.87 -283.02,570.89 -602.94,557.61 -124.02,-5.18 -239.63,-47.6 -336.77,-123.37 -34.97,-27.85 -89.05,-84.52 -115.6,-121.76 -121.43,-171.62 -139.89,-397.65 -47.93,-587.72 82.25,-170 244.81,-290.79 430.68,-320.58 38.86,-6.15 113.01,-8.42 148.96,-4.86zm-102.33 307.95c-89.37,15.54 -166.12,74.48 -203.68,156.41 -19.11,41.12 -25.26,73.83 -23.31,124.99 0.97,33.03 3.24,49.22 8.74,66.38 17.16,53.75 50.52,103.3 91.31,136 25.26,20.07 71.56,43.71 101.35,52.13 29.15,8.09 94.88,9.71 125.64,3.24 107.51,-22.02 192.67,-107.83 214.37,-215.34 7.45,-35.62 5.18,-95.52 -4.54,-127.91 -29.79,-99.74 -110.42,-174.54 -210.8,-194.61 -26.23,-5.18 -73.5,-5.83 -99.09,-1.3l0 0z"/>
     </g>
    </g>
   </g>
  </svg>
  `;
}
