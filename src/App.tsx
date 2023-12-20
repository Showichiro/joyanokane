import { useAudio, useCounter } from "react-use";
import toast, { Toaster } from "react-hot-toast";
import { container } from "../styled-system/patterns";
import { css } from "../styled-system/css";
import sound from "/sound.mp3";
import joyanokane from "/joyanokane.png";
import { bonnoList } from "./bonno";

function App() {
  const [audio, state, controls] = useAudio({
    src: sound,
    autoPlay: false,
  });

  const [count, { inc: increment }] = useCounter(0, bonnoList.length);

  return (
    <>
      <main className={container()}>
        <h1
          className={css({
            fontSize: "6xl",
            fontWeight: "bold",
          })}
        >
          除夜の鐘
        </h1>
        <div>
          <button
            onClick={() => {
              controls.play();
              toast(
                <div>
                  {count + 1}:{bonnoList[count].name}(
                  {bonnoList[count].pronunciation}):
                  {bonnoList[count].meaning}
                </div>
              );
              increment();
            }}
            disabled={count >= 108 || state.playing}
            className={css({
              cursor: state.playing ? "wait" : "pointer",
            })}
          >
            <img
              src={joyanokane}
              alt="除夜の鐘"
              className={state.playing ? css({ animation: "purupuru" }) : ""}
            />
          </button>
        </div>
        <div className={css({ fontSize: "4xl" })}>
          のこり{bonnoList.length - count}回
        </div>
      </main>
      <Toaster toastOptions={{ duration: 4500, position: "top-center" }} />
      {audio}
    </>
  );
}

export default App;
