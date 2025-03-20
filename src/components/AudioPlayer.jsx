"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const AudioPlayer = ({ src = "/audio/demo.mp3" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch(() => console.error("Error al reproducir audio"));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} className="hidden" />

      {/* Controles */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={togglePlay}
          className="text-xxs md:text-xs cursor-pointer font-semibold flex w-[9rem] justify-center items-center gap-1 p-2 md:p-3  bg-gradient-to-tr from-gray_m to-black rounded-full shadow-lg border-[1px] border-gray_m hover:shadow-xl hover:shadow-gray_m hover:scale-105 transition all duration-300"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6 text-white" />
          ) : (
            <Play className="h-6 w-6 text-white" />
          )}
          {isPlaying ? "Pausar" : "Reproducir"}
        </button>
      </div>
    </>
  );
};

export default AudioPlayer;
