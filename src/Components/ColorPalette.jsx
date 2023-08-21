import { useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';

export default function ColorPalette(props) {
  const rgb = props.color.rgb;
  const value = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  const [r, g, b] = rgb;

  const type = props.color.type;

  function rgbToHex(r, g, b) {
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    const hexCode = `#${hexR}${hexG}${hexB}`;
    return hexCode.toUpperCase();
  }

  const copiedCode = () =>
    toast.success(`${hexCode} Copied to clipboard `, { duration: 1500 });

  function copyCode() {
    navigator.clipboard.writeText(hexCode);
    copiedCode();
  }

  const hexCode = rgbToHex(r, g, b);

  return (
    <>
      <div
        className="h-32 max-w-32 border cursor-pointer font-semibold text-lg relative group select-none"
        style={{ background: value }}
        onClick={copyCode}
      >
        <span
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          style={{ color: type == 'tint' ? '#232323' : 'white' }}
        >
          {hexCode}
        </span>
        <span className="opacity-0 flex group-hover:opacity-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] backdrop-blur-sm h-full w-full justify-center items-center duration-500  active:scale-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-clipboard-fill"
            viewBox="0 0 16 16"
            style={{ fill: type == 'tint' ? '#232323' : 'white' }}
          >
            <path
              fill-rule="evenodd"
              d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z"
            />
          </svg>
        </span>
      </div>
    </>
  );
}
