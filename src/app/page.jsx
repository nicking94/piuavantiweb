import Button from "@/components/Button/Button";
import Divider from "@/components/Divider/Divider";
import HeroHome from "@/components/HeroHome/HeroHome";
import Homevideo from "@/components/sections/homeVideo";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col jutify-center pt-30">
        <HeroHome />
        <div className="w-full h-full overflow-hidden rounded-full flex justify-center mt-14 md:mt-0">
          <video
            src="/videos/gifPiu.mp4"
            autoPlay
            loop
            muted
            className="w-30 md:w-60 h-30 md:h-60 object-cover rounded-full"
          ></video>
        </div>
      </div>
      <Divider />
      <Homevideo />
    </>
  );
}
