'use client';

import Image from 'next/image';
import FindTripForm from '@/components/home/search-form/search-form';

export default function HeroBanner() {
  return (
    <div className="relative flex min-h-full items-end justify-center px-4 pb-28 pt-48 overflow-hidden before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-1/4 before:w-full before:bg-gradient-to-b before:from-black/60 sm:flex-none sm:justify-start sm:px-0 sm:pb-20 sm:pl-6 sm:pt-[120px] md:pl-16 3xl:pb-[132px] 3xl:pt-[142px] 4xl:pl-[200px]">
      
      <svg  version="1.1" viewBox="0 0 508 254" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="absolute top-0 inset-x-0 aspect-[2/1] h-fit min-h-full bg-gray-lighter object-cover">
        <defs>
          <linearGradient id="linearGradient1763">
          <stop stop-color="#9d9fa2" stop-opacity=".92929" offset="0"/>
          <stop stop-color="#9d9fa2" stop-opacity="0" offset="1"/>
          </linearGradient>
          <linearGradient id="linearGradient867" x1="411.49" x2="329.17" y1="141.08" y2="60.89" gradientTransform="matrix(.80288 0 0 .80288 62.895 15.388)" gradientUnits="userSpaceOnUse"/>
          <linearGradient id="linearGradient1737" x1="348.86" x2="312.46" y1="169.41" y2="147.63" gradientTransform="matrix(.80279 -.012068 .012068 .80279 102.82 -40.75)" gradientUnits="userSpaceOnUse"/>
          <linearGradient id="linearGradient1767" x1="411.49" x2="329.17" y1="141.08" y2="60.89" gradientTransform="matrix(.80288 0 0 .80288 -33.363 96.977)" gradientUnits="userSpaceOnUse"/>
          <linearGradient id="linearGradient1769" x1="348.86" x2="312.46" y1="169.41" y2="147.63" gradientTransform="matrix(.80279 -.012068 .012068 .80279 6.5577 40.84)" gradientUnits="userSpaceOnUse"/>
          <linearGradient id="linearGradient1783" x1="411.49" x2="329.17" y1="141.08" y2="60.89" gradientTransform="matrix(.80288 0 0 .80288 -93.014 -49.276)" gradientUnits="userSpaceOnUse"/>
          <linearGradient id="linearGradient1785" x1="348.86" x2="312.46" y1="169.41" y2="147.63" gradientTransform="matrix(.80279 -.012068 .012068 .80279 -53.093 -105.41)" gradientUnits="userSpaceOnUse"/>
          <linearGradient id="linearGradient1799" x1="411.49" x2="329.17" y1="141.08" y2="60.89" gradientTransform="matrix(.80288 0 0 .80288 -276.16 22.269)" gradientUnits="userSpaceOnUse"/>
          <linearGradient id="linearGradient1801" x1="348.86" x2="312.46" y1="169.41" y2="147.63" gradientTransform="matrix(.80279 -.012068 .012068 .80279 -236.24 -33.869)" gradientUnits="userSpaceOnUse"/>
          <linearGradient id="linearGradient1815" x1="411.49" x2="329.17" y1="141.08" y2="60.89" gradientTransform="matrix(.80288 0 0 .80288 193.29 -30.511)" gradientUnits="userSpaceOnUse"/>
          <linearGradient id="linearGradient1817" x1="348.86" x2="312.46" y1="169.41" y2="147.63" gradientTransform="matrix(.80279 -.012068 .012068 .80279 233.21 -86.649)" gradientUnits="userSpaceOnUse"/>
          <linearGradient id="linearGradient1831" x1="411.49" x2="329.17" y1="141.08" y2="60.89" gradientTransform="matrix(.80288 0 0 .80288 155.15 84.22)" gradientUnits="userSpaceOnUse"/>
          <linearGradient id="linearGradient1833" x1="348.86" x2="312.46" y1="169.41" y2="147.63" gradientTransform="matrix(.80279 -.012068 .012068 .80279 195.07 28.082)" gradientUnits="userSpaceOnUse"/>
          <linearGradient id="linearGradient1782" x1="328.08" x2="285.2" y1="287.17" y2="199.59" gradientUnits="userSpaceOnUse">
          <stop stop-color="#282f3a" offset="0"/>
          <stop stop-color="#434b5a" offset="1"/>
          </linearGradient>
        </defs>
        <g transform="translate(0 -43)">
          <rect x="-3.0238" y="40.732" width="517.83" height="262.32" ry="0" fill="url(#linearGradient1782)" stroke="#353638" stroke-linecap="round" stroke-width=".365" style={{paintOrder: 'markers stroke fill'}}/>
        </g>
        <g>
          <g stroke-linecap="round" className="animate-linear-moveBl">
          <g fill="#f7f6f5" stroke-width="2.12">
            <rect x="324.99" y="79.559" width="56.437" height="74.78" ry="2.1458" stroke="url(#linearGradient867)" style={{paintOrder: 'markers stroke fill'}}/>
            <path d="m366.75 79.559 0.18837 12.541c0.0178 1.1887 0.98915 2.1314 2.1778 2.1135l12.311-0.18504-4.6136-4.6523c-1.5232-1.536-4.662-4.531-6.062-5.9011z" stroke="url(#linearGradient1737)" stroke-linejoin="round" style={{paintOrder: 'markers stroke fill'}}/>
            <rect x="324.99" y="79.559" width="56.437" height="74.78" ry="2.1458" stroke="url(#linearGradient867)" style={{paintOrder: 'markers stroke fill'}}/>
            <path d="m366.75 79.559 0.18837 12.541c0.0178 1.1887 0.98915 2.1314 2.1778 2.1135l12.311-0.18504-4.6136-4.6523c-1.5232-1.536-4.662-4.531-6.062-5.9011z" stroke="url(#linearGradient1737)" stroke-linejoin="round" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          <g fill="none" stroke="#636569" stroke-width="1.4731">
            <path d="m367.83 111.47a15.454 15.454 0 0 1-6.1968 17.931 15.454 15.454 0 0 1-18.905-1.5858" stroke-dashoffset="16.4" style={{paintOrder: 'markers stroke fill'}}/>
            <path d="m352.83 122.06-0.0442-9.9196 8.6127 4.9215z" stroke-linejoin="round" style={{paintOrder: 'markers stroke fill'}}/>
            <rect x="348.61" y="112.09" width="2.1311" height="9.9451" ry="5.6633e-7" stroke-linejoin="round" style={{paintOrder: 'markers stroke fill'}}/>
            <g stroke-dashoffset="16.4">
            <path d="m338.18 120.11a15.454 15.454 0 0 1 6.6631-16.659 15.454 15.454 0 0 1 17.921 0.86743" style={{paintOrder: 'markers stroke fill'}}/>
            <path d="m365.29 106.83a15.454 15.454 0 0 1 0.87353 1.2134" style={{paintOrder: 'markers stroke fill'}}/>
            <path d="m340.65 125.47a15.454 15.454 0 0 1-1.3464-2.2576" style={{paintOrder: 'markers stroke fill'}}/>
            </g>
          </g>
          <circle cx="353.34" cy="85.657" r="2.2886" fill="#636569" stroke="#5a5c60" stroke-dashoffset="61.984" stroke-linejoin="round" stroke-width="1.3229" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          <g className="animate-linear-moveR">
          <g fill="#f7f6f5" stroke-linecap="round" stroke-width="2.12">
            <rect x="228.73" y="161.15" width="56.437" height="74.78" ry="2.1458" stroke="url(#linearGradient1767)" style={{paintOrder: 'markers stroke fill'}}/>
            <path d="m270.49 161.15 0.18837 12.541c0.0178 1.1887 0.98914 2.1314 2.1778 2.1135l12.311-0.18504-4.6136-4.6523c-1.5232-1.536-4.662-4.531-6.062-5.9011z" stroke="url(#linearGradient1769)" stroke-linejoin="round" style={{paintOrder: 'markers stroke fill'}}/>
            <rect x="228.73" y="161.15" width="56.437" height="74.78" ry="2.1458" stroke="url(#linearGradient1767)" style={{paintOrder: 'markers stroke fill'}}/>
            <path d="m270.49 161.15 0.18837 12.541c0.0178 1.1887 0.98914 2.1314 2.1778 2.1135l12.311-0.18504-4.6136-4.6523c-1.5232-1.536-4.662-4.531-6.062-5.9011z" stroke="url(#linearGradient1769)" stroke-linejoin="round" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          <g fill="none" stroke="#c62d0b">
            <path d="m248.97 189.87s2.2129 0 4.668 1.2275c2.4551 1.2276 2.4551 2.6577 2.4551 2.6577v13.3s2e-5 -1.2276-2.4551-2.4551c-2.4551-1.2275-4.668-1.4301-4.668-1.4301v0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2457" style={{paintOrder: 'markers stroke fill'}}/>
            <path d="m258.54 193.76s0-1.4301 2.4551-2.6577c2.4551-1.2275 4.668-1.2275 4.668-1.2275v13.3s-2.2129 0.2026-4.668 1.4301c-2.4551 1.2276-2.4551 2.4551-2.4551 2.4551v0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2457" style={{paintOrder: 'markers stroke fill'}}/>
            <g stroke-width="1.2275">
            <path d="m249.95 189.87 1.2275-1.2275s1.2276-1e-5 3.6826 1.2275c2.4551 1.2275 2.4551 2.4551 2.4551 2.4551s0-1.2276 2.4551-2.4551c2.4551-1.2275 3.6826-1.2275 3.6826-1.2275l1.2275 1.2275"/>
            <path d="m256.09 193.56h2.4551"/>
            <path d="m256.09 207.06h2.4551"/>
            </g>
            <g stroke-dashoffset="16.4" stroke-linecap="round" stroke-width="1.4731">
            <path transform="rotate(-60.779)" d="m-31.491 315.62a15.454 15.454 0 0 1-6.1968 17.931 15.454 15.454 0 0 1-18.905-1.5858" style={{paintOrder: 'markers stroke fill'}}/>
            <path transform="rotate(-60.779)" d="m-61.136 324.26a15.454 15.454 0 0 1 6.6631-16.659 15.454 15.454 0 0 1 17.921 0.86743" style={{paintOrder: 'markers stroke fill'}}/>
            <path transform="rotate(-60.779)" d="m-34.03 310.98a15.454 15.454 0 0 1 0.87353 1.2135" style={{paintOrder: 'markers stroke fill'}}/>
            <path transform="rotate(-60.779)" d="m-58.673 329.62a15.454 15.454 0 0 1-1.3464-2.2576" style={{paintOrder: 'markers stroke fill'}}/>
            </g>
          </g>
          <circle cx="256.5" cy="166.49" r="2.2886" fill="#c62d0b" stroke="#b12c0b" stroke-dashoffset="61.984" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3229" style={{paintOrder: 'markers stroke fill'}}/>
          </g>

          <g className="animate-linear-moveB">
          <g fill="#f7f6f5" stroke-linecap="round" stroke-width="2.12">
          <rect x="169.08" y="14.896" width="56.437" height="74.78" ry="2.1458" stroke="url(#linearGradient1783)" style={{paintOrder: 'markers stroke fill'}}/>
          <path d="m210.84 14.896 0.18837 12.541c0.0178 1.1887 0.98915 2.1314 2.1778 2.1135l12.311-0.18504-4.6136-4.6523c-1.5232-1.536-4.662-4.5311-6.062-5.9011z" stroke="url(#linearGradient1785)" stroke-linejoin="round" style={{paintOrder: 'markers stroke fill'}}/>
          <rect x="169.08" y="14.896" width="56.437" height="74.78" ry="2.1458" stroke="url(#linearGradient1783)" style={{paintOrder: 'markers stroke fill'}}/>
          <path d="m210.84 14.896 0.18837 12.541c0.0178 1.1887 0.98915 2.1314 2.1778 2.1135l12.311-0.18504-4.6136-4.6523c-1.5232-1.536-4.662-4.5311-6.062-5.9011z" stroke="url(#linearGradient1785)" stroke-linejoin="round" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          <g fill="none" stroke="#104a97" stroke-dashoffset="61.984" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2275">
          <rect x="189.83" y="45.597" width="9.8203" height="9.8203" ry=".73652" style={{paintOrder: 'markers stroke fill'}}/>
          <path d="m199.87 45.597 3.2957-3.0011c0.3017-0.27473 0.96158-0.46941 0.96158-0.06138v7.3853c0 0.40803-0.43152 0.83185-0.70922 1.1308l-3.8215 4.1141c-0.27768 0.29896 0.0483-0.07597 0.0483-0.484v-8.4087c0-0.40803-0.082-0.40645 0.22504-0.67515z" style={{paintOrder: 'markers stroke fill'}}/>
          <path d="m195.86 42.303 8.106-0.0065c0.18649-1.5e-4 -0.74133 0.39168-1.055 0.65263l-2.9128 2.423c-0.31369 0.26094-0.67629 0.22505-1.0843 0.22505h-8.3473c-0.11871 0-0.79498 0.32678-0.453 0.10418l4.7337-3.0813c0.21799-0.1419 0.74893-0.31713 0.94112-0.31711z" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          <g fill="#104a97">
          <circle cx="192.43" cy="48.42" r="1.3503" style={{paintOrder: 'markers stroke fill'}}/>
          <circle cx="194.74" cy="50.712" r="1.3503" style={{paintOrder: 'markers stroke fill'}}/>
          <circle cx="197.23" cy="52.901" r="1.3503" style={{paintOrder: 'markers stroke fill'}}/>
          <ellipse cx="202.14" cy="48.235" rx=".85927" ry="1.3503" style={{paintOrder: 'markers stroke fill'}}/>
          <ellipse cx="199.01" cy="43.249" rx="1.3503" ry=".51148" style={{paintOrder: 'markers stroke fill'}}/>
          <ellipse cx="195.25" cy="44.218" rx="1.3503" ry=".51148" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          <g fill="none" stroke="#104a97" stroke-dashoffset="16.4" stroke-linecap="round" stroke-width="1.4731">
          <path transform="rotate(264.38)" d="m-53.559 186.13a15.454 15.454 0 0 1-6.1968 17.931 15.454 15.454 0 0 1-18.905-1.5858" style={{paintOrder: 'markers stroke fill'}}/>
          <path transform="rotate(264.38)" d="m-83.204 194.77a15.454 15.454 0 0 1 6.6631-16.659 15.454 15.454 0 0 1 17.921 0.86742" style={{paintOrder: 'markers stroke fill'}}/>
          <path transform="rotate(264.38)" d="m-56.098 181.49a15.454 15.454 0 0 1 0.87353 1.2134" style={{paintOrder: 'markers stroke fill'}}/>
          <path transform="rotate(264.38)" d="m-80.74 200.13a15.454 15.454 0 0 1-1.3464-2.2576" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          <circle cx="197.5" cy="19.51" r="2.2886" fill="#104a97" stroke="#104082" stroke-dashoffset="61.984" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3229" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          
          <g className="animate-linear-moveY">
          <g fill="#f7f6f5" stroke-linecap="round" stroke-width="2.12">
          <rect x="-14.071" y="86.44" width="56.437" height="74.78" ry="2.1458" stroke="url(#linearGradient1799)" style={{paintOrder: 'markers stroke fill'}}/>
          <path d="m27.688 86.44 0.18836 12.541c0.01782 1.1887 0.98915 2.1314 2.1778 2.1135l12.311-0.18505-4.6136-4.6523c-1.5232-1.536-4.662-4.5311-6.0621-5.9011z" stroke="url(#linearGradient1801)" stroke-linejoin="round" style={{paintOrder: 'markers stroke fill'}}/>
          <rect x="-14.071" y="86.44" width="56.437" height="74.78" ry="2.1458" stroke="url(#linearGradient1799)" style={{paintOrder: 'markers stroke fill'}}/>
          <path d="m27.688 86.44 0.18836 12.541c0.01782 1.1887 0.98915 2.1314 2.1778 2.1135l12.311-0.18505-4.6136-4.6523c-1.5232-1.536-4.662-4.5311-6.0621-5.9011z" stroke="url(#linearGradient1801)" stroke-linejoin="round" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          <g transform="matrix(.5564 .88531 -.88531 .5564 117.79 46.76)">
          <path d="m2.4673 114.51c-0.48499 0-0.65781 0.3856-0.65781 0.8706v3.2829c0 0.48498 0.17282 0.88026 0.65781 0.88026h0.65658c0.48499 0 1.0931-0.39528 1.0931-0.88026v-0.21887c0 0.60623 0.48806 1.0943 1.0943 1.0943h5.4715c0.60624 0 1.0943-0.48805 1.0943-1.0943v0.21887c0 0.48498 0.60968 0.87865 1.0947 0.87865h0.43772c0.48499 0 0.6562-0.39367 0.6562-0.87865v-3.2829c0-0.485-0.1712-0.87222-0.6562-0.87222h-0.43772c-0.48499 0-1.0947 0.38722-1.0947 0.87222v0.21885c0-0.60623-0.48806-1.0943-1.0943-1.0943h-5.4715c-0.60624 0-1.0943 0.48806-1.0943 1.0943v-0.21885c0-0.485-0.60807-0.8706-1.0931-0.8706zm5.2514 5.4666c-0.48499 0-0.87544 0.39044-0.87544 0.87544v0.87544c0 0.48497 0.39044 0.87542 0.87544 0.87542h0.43772c0.48499 0 0.87544-0.39045 0.87544-0.87542v-0.87544c0-0.485-0.39044-0.87544-0.87544-0.87544zm0.21886 2.6263c-0.60624 0-1.0943 0.48805-1.0943 1.0943v9.4109c0 0.60623 0.48806 1.0943 1.0943 1.0943s1.0943-0.48806 1.0943-1.0943v-9.4109c0-0.60625-0.48806-1.0943-1.0943-1.0943z" fill="none" stroke="#e8cd08" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1105" style={{paintOrder: 'markers stroke fill'}}/>
          <rect x="5.9678" y="114.51" width="3.9395" height="5.0337" ry=".43772" fill="#e8cd08" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          <g fill="none" stroke="#e8cd08" stroke-dashoffset="16.4" stroke-linecap="round" stroke-width="1.4731">
          <path transform="rotate(229.92)" d="m-87.022-72.854a15.454 15.454 0 0 1-6.1968 17.931 15.454 15.454 0 0 1-18.905-1.5858" style={{paintOrder: 'markers stroke fill'}}/>
          <path transform="rotate(229.92)" d="m-116.67-64.217a15.454 15.454 0 0 1 6.6631-16.659 15.454 15.454 0 0 1 17.921 0.86743" style={{paintOrder: 'markers stroke fill'}}/>
          <path transform="rotate(229.92)" d="m-89.561-77.498a15.454 15.454 0 0 1 0.87353 1.2135" style={{paintOrder: 'markers stroke fill'}}/>
          <path transform="rotate(229.92)" d="m-114.2-58.857a15.454 15.454 0 0 1-1.3464-2.2576" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          <circle cx="12.835" cy="91.615" r="2.2886" fill="#e8cd08" stroke="#d2b708" stroke-dashoffset="61.984" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3229" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          
          <g className="animate-linear-moveP">
          <g fill="#f7f6f5" stroke-linecap="round" stroke-width="2.12">
          <rect x="417.25" y="148.39" width="56.437" height="74.78" ry="2.1458" stroke="url(#linearGradient1831)" style={{paintOrder: 'markers stroke fill'}}/>
          <path d="m459.01 148.39 0.18837 12.541c0.0178 1.1887 0.98915 2.1314 2.1778 2.1135l12.311-0.18504-4.6136-4.6523c-1.5232-1.536-4.662-4.5311-6.062-5.9011z" stroke="url(#linearGradient1833)" stroke-linejoin="round" style={{paintOrder: 'markers stroke fill'}}/>
          <rect x="417.25" y="148.39" width="56.437" height="74.78" ry="2.1458" stroke="url(#linearGradient1831)" style={{paintOrder: 'markers stroke fill'}}/>
          <path d="m459.01 148.39 0.18837 12.541c0.0178 1.1887 0.98915 2.1314 2.1778 2.1135l12.311-0.18504-4.6136-4.6523c-1.5232-1.536-4.662-4.5311-6.062-5.9011z" stroke="url(#linearGradient1833)" stroke-linejoin="round" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          <path d="m443.24 174.72v1.2276h1.2276v6.0782l-5.9632 10.436 14.556-0.0648-6.1377-10.523v-5.9262h1.2276v-1.2275z" fill="none" stroke="#752d95" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2457" style={{paintOrder: 'markers stroke fill'}}/>
          <path d="m438.82 192.16 3.1916-5.4012h7.6108l3.1916 5.1557z" fill="#752d95"/>
          <g fill="none" stroke="#752d95" stroke-dashoffset="16.4" stroke-linecap="round" stroke-width="1.4731">
          <path transform="rotate(201.92)" d="m-467.67-8.6924a15.454 15.454 0 0 1-6.1968 17.931 15.454 15.454 0 0 1-18.905-1.5858" style={{paintOrder: 'markers stroke fill'}}/>
          <path transform="rotate(201.92)" d="m-497.31-0.055505a15.454 15.454 0 0 1 6.6631-16.659 15.454 15.454 0 0 1 17.921 0.86743" style={{paintOrder: 'markers stroke fill'}}/>
          <path transform="rotate(201.92)" d="m-470.21-13.337a15.454 15.454 0 0 1 0.87353 1.2135" style={{paintOrder: 'markers stroke fill'}}/>
          <path transform="rotate(201.92)" d="m-494.85 5.304a15.454 15.454 0 0 1-1.3464-2.2576" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          <circle cx="445.2" cy="154.85" r="2.2886" fill="#752d95" stroke="#6a2b81" stroke-dashoffset="61.984" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3229" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          
          <g stroke-linecap="round" className="animate-linear-moveG">
          <g fill="#f7f6f5" stroke-width="2.12">
            <path d="m457.53 33.66h52.145c1.1888 0 2.1458 0.95705 2.1458 2.1458v70.488c0 1.1888-0.95704 2.1458-2.1458 2.1458h-52.145c-1.1888 0-2.1458-0.95705-2.1458-2.1458v-70.488c0-1.1888 0.95704-2.1458 2.1458-2.1458z" stroke="url(#linearGradient1815)" style={{paintOrder: 'markers stroke fill'}}/>
            <path d="m497.14 33.66 0.18836 12.541c0.0178 1.1887 0.98915 2.1314 2.1778 2.1135l12.311-0.18504-4.6136-4.6523c-1.5232-1.536-4.662-4.5311-6.062-5.9011z" stroke="url(#linearGradient1817)" stroke-linejoin="round" style={{paintOrder: 'markers stroke fill'}}/>
            <path d="m457.53 33.66h52.145c1.1888 0 2.1458 0.95705 2.1458 2.1458v70.488c0 1.1888-0.95704 2.1458-2.1458 2.1458h-52.145c-1.1888 0-2.1458-0.95705-2.1458-2.1458v-70.488c0-1.1888 0.95704-2.1458 2.1458-2.1458z" stroke="url(#linearGradient1815)" style={{paintOrder: 'markers stroke fill'}}/>
            <path d="m497.14 33.66 0.18836 12.541c0.0178 1.1887 0.98915 2.1314 2.1778 2.1135l12.311-0.18504-4.6136-4.6523c-1.5232-1.536-4.662-4.5311-6.062-5.9011z" stroke="url(#linearGradient1817)" stroke-linejoin="round" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
          <g fill="none" stroke="#2e9f23">
            <path d="m493.09 60.564-5.4012 2.9461v2.7006l2.2096 1.2275 4.4192-1.9641v2.4551l-4.1736 2.9461-3.9281-0.98204-7.8563 7.8563s-1.2275 1.2275-2.4551 1e-6c-1.2275-1.2275 0-2.4551 0-2.4551l7.8563-7.8563-0.73652-3.4371 2.9461-4.1736 3.6826-0.49102z" stroke-linejoin="round" stroke-width="1.2275"/>
            <g stroke-dashoffset="16.4" stroke-width="1.4731">
            <path transform="rotate(130.56)" d="m-248.15-418.46a15.454 15.454 0 0 1-6.1968 17.931 15.454 15.454 0 0 1-18.905-1.5858" style={{paintOrder: 'markers stroke fill'}}/>
            <path transform="rotate(130.56)" d="m-277.8-409.83a15.454 15.454 0 0 1 6.6631-16.659 15.454 15.454 0 0 1 17.921 0.86743" style={{paintOrder: 'markers stroke fill'}}/>
            <path transform="rotate(130.56)" d="m-250.69-423.11a15.454 15.454 0 0 1 0.87353 1.2134" style={{paintOrder: 'markers stroke fill'}}/>
            <path transform="rotate(130.56)" d="m-275.33-404.47a15.454 15.454 0 0 1-1.3464-2.2576" style={{paintOrder: 'markers stroke fill'}}/>
            </g>
          </g>
          <path d="m487.21 38.812a2.2886 2.2886 0 0 1-2.2886 2.2886 2.2886 2.2886 0 0 1-2.2886-2.2886 2.2886 2.2886 0 0 1 2.2886-2.2886 2.2886 2.2886 0 0 1 2.2886 2.2886z" fill="#2e9f23" stroke="#2b8723" stroke-dashoffset="61.984" stroke-linejoin="round" stroke-width="1.3229" style={{paintOrder: 'markers stroke fill'}}/>
          </g>
        </g>
        </svg>

      
      
      {/*
      <Image
        src="/images/banner/imgHome1.svg"
        alt="Home banner 1"
        fill
        priority
        className="aspect-[2/1] h-full bg-gray-lighter object-cover"
      />
      */}

      <FindTripForm />
    </div>
  );
}
