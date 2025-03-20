import React from "react";
import Button from "../Button/Button";
import { Link } from "lucide-react";

const About = () => {
  return (
    <div className="w-full h-[700px] flex flex-col items-center justify-center text-center space-y-10">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/WG9YaMKpUvE?si=nXMp3_Ii6quvPFur&amp;start=3"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="p-5 md:p-10">
        <a href="/canciones">
          <Button text="Descubre más canciones" icon={true} />
        </a>
      </div>
    </div>
  );
};

export default About;
