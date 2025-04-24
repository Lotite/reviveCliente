import { useEffect, useRef, useState } from "react";
import { playerVideo } from "../../../../../utils/types";
import { ControlBar } from "./ControlBar";
import { TopBar } from "./TopBar";
export default function VideoPlay({ title, src, type }: playerVideo) {
  const video = useRef<HTMLVideoElement>(null);
  const [controlBar, setControlBar] = useState<number>(1);
  const [duration, setDuration] = useState<number>(0);
  let timerControlBar: number | undefined;

  const controlBarFunction = (time: number) => {
    setControlBar(1);
    clearTimeout(timerControlBar);
    timerControlBar = setTimeout(() => {
      setControlBar(0);
    }, time);
  };

  const controlClick = () => {
    if (controlBar == 0) {
      controlBarFunction(5000);
    } else {
      clearTimeout(timerControlBar);
      setControlBar(0);
    }
  };

  useEffect(() => {
    setDuration(video.current?.duration || 0);
  }, [video.current?.src]);

  return (
    <div
      style={{
        width: "80%",
        aspectRatio: "16/9",
        marginInline: "auto",
        position: "relative",
        display: "flex",
        top: 0,
        backgroundColor: "#000",
        overflow:"hidden",borderRadius:10
      }}
    >
      <TopBar title={title} opacidad={controlBar} />
      <video
        style={{ width: "100%", height: "100%"}}
        ref={video}
        src={src}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration);
        }}
        onMouseMove={() => {
          controlBarFunction(5000);
        }}
        onClick={controlClick}
        autoPlay
      />
      <ControlBar
        type={type}
        video={video}
        duration={duration}
        opacidad={controlBar}
      />
    </div>
  );
}
