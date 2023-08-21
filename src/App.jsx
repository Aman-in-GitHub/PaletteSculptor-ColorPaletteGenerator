import { useEffect, useState } from 'react';
import Values from 'values.js';
import ColorPalette from './Components/ColorPalette';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [color, setColor] = useState('#000000');
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    handleClick({ preventDefault: () => {} });
  }, []);

  function handleClick(e) {
    e.preventDefault();
    try {
      const values = new Values(color).all(10);
      setList(values);
      setError(false);
    } catch (error) {
      setError(true);
      notifyError();
    }
  }

  const notifyError = () =>
    toast.error('Invalid Color Code', { duration: 2000 });

  return (
    <>
      <div>
        <Toaster />
      </div>

      <div className="mx-5 md:mx-20">
        <div className="flex justify-between  items-center py-5 pb-5 md:pb-8 font-serif">
          <a href="" className="w-9 md:w-12">
            <img src="/logo.png" alt="" />
          </a>
          <h1
            className="text-2xl md:text-5xl font-black text-center "
            style={{ color: color ? color : 'black' }}
            contentEditable={true}
          >
            Palette Sculptor
          </h1>
          <a href="https://github.com/Aman-in-GitHub" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
              style={{ fill: color }}
              className="duration-300 hover:scale-110 md:scale-125 md:hover:scale-[1.3]"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
        <div
          className="mx-auto max-w-[40rem] text-center md:text-lg text-sm font-semibold"
          style={{ color: color }}
          contentEditable={true}
        >
          Selecting a color for your website is hard enough, thinking of a color
          palette too will be like hitting a nail in the coffin. We solve that
          problem.
        </div>
        <div
          className="mx-auto max-w-[40rem] text-center md:text-lg pt-2 pb-5 text-sm font-semibold"
          style={{ color: color }}
          contentEditable={true}
        >
          Type out the color you selected for your website. And explore various
          color palettes according to your liking and click on the color to copy
          the code to your clipboard.
        </div>
      </div>
      <div>
        <form className="flex flex-col md:flex-row items-center gap-4 pb-7 justify-center md:pb-10 md:pt-5">
          <div className="flex justify-center items-center gap-4">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-[2.8rem] w-[4rem] bg-transparent"
            />
            <input
              type="text"
              className="border border-black py-0.5 px-2 text-lg outline-none h-9"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={{ border: error ? '1px solid red' : null }}
            />
          </div>
          <button
            className=" text-lg px-5 py-0.5 font-semibold text-[#f4f4f4] h-9 duration-300 active:scale-95 border hover:shadow-md"
            onClick={handleClick}
            style={{ background: color }}
          >
            Palettize
          </button>
        </form>
      </div>
      <div className="paletteContainer">
        {list.map((color, index) => {
          return <ColorPalette key={index} color={color} />;
        })}
      </div>
    </>
  );
}

export default App;
