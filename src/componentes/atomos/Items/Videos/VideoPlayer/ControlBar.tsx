import { FiMinimize2 } from "react-icons/fi";
import { FiMaximize2 } from "react-icons/fi";
import { FiPause } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";
import { FiSkipForward } from "react-icons/fi";
import { FiSkipBack } from "react-icons/fi";
import { RefObject, useEffect, useState } from "react";
import { IconB } from "../../IconB/IconB";
import { strTime } from "../../../../../utils/functions";
import "./barAnimation.css";
import Bar from "../BAR/Bar";
export const ControlBar = ({
  type,
  video,
  duration,
  opacidad,
}: {
  type: string;
  video: RefObject<HTMLVideoElement>;
  duration: number | string;
  opacidad: number;
}) => {
  //constantes
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [maximDisplay, setMaximDisplay] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);


  //funciones
  const playFunction = () => {
    if (video.current?.paused) {
      video.current.play();
      setIsPlaying(true);
    } else {
      video.current?.pause();
      setIsPlaying(false);
    }
  };

  const videoTimer = () => {
    return `${strTime(time)} / ${strTime(duration)}`;
  };



  //crear eventos
useEffect(() => {
  const handleTimeUpdate = () => {
    setTime(Math.round(Number(video.current?.currentTime)) || 0);
  };
  video.current?.removeEventListener("timeupdate", handleTimeUpdate);
  video.current?.addEventListener("timeupdate", handleTimeUpdate);
}, [video]);

  useEffect(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error("Error al salir de pantalla completa:", err);
      });
    }else{
      video.current?.parentElement?.requestFullscreen()
    }}, [maximDisplay, video]);


  return (
    <>
      {/*background: "linear-gradient(to bottom, #0000, #000a)"*/}
      <div 
        className={`px-4 `}
        style={{
          width: "100%",
          height: "100px",
          background: "linear-gradient(to bottom, #0000, #000a,#000a)",
          position: "absolute",
          bottom: 0,
          color: "white",
          display: "flex",
          paddingTop: "30px",
          flexDirection: "column",
          overflow: "hidden",
          opacity:opacidad,
          transition:"opacity 300ms ease-in-out",
        }}
      >
        <Bar
          style={{marginBottom:"3px"}}
          duration={duration}
          position={time}
          onChange={(e) => {
            if (video.current) {
              const num = e.target.value;
              video.current.currentTime = Number(num);
              setTime(Number(num));
            }
          }}
        />
        {/*Botones de reproducion*/}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            {type === "pelicula" ? (
              <IconB
                style={{ fontSize: `${window.innerWidth < 768 ? 18 : 24}px` }}
                color="orange"
              >
                <FiSkipBack className="mx-auto d-flex" />
              </IconB>
            ) : (
              <></>
            )}
            <IconB
              style={{ fontSize: `${window.innerWidth < 768 ? 18 : 24}px` }}
              onClick={playFunction}
              bg="orange"
            >
              {isPlaying ? (
                <FiPause className="mx-auto d-flex" />
              ) : (
                <FiPlay className="mx-auto d-flex" />
              )}
            </IconB>
            {type === "pelicula" ? (
              <IconB
                style={{ fontSize: `${window.innerWidth < 768 ? 18 : 24}px` }}
                color="orange"
              >
                <FiSkipForward className="mx-auto d-flex" />
              </IconB>
            ) : (
              <></>
            )}
            <span
              style={{ fontSize: `${window.innerWidth < 768 ? 18 : 24}px` }}
            >
              {videoTimer()}
            </span>
          </div>
          <IconB
            style={{ fontSize: `${window.innerWidth < 768 ? 18 : 24}px` }}
            onClick={() => {
              setMaximDisplay(!maximDisplay);
            }}
          >
            
            {maximDisplay ? <FiMinimize2 /> : <FiMaximize2 />}
          </IconB>
        </div>
      </div>
    </>
  );
};
