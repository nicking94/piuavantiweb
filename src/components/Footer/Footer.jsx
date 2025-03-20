"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logoPiu.jpeg";
import { usePathname, useRouter } from "next/navigation";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path) => {
    if (path.startsWith("#")) {
      setTimeout(() => {
        const section = document.querySelector(path);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      router.push(path);
    }
  };

  return (
    <footer className="pt-6 px-4 lg:px-10 ">
      <div className="flex flex-col md:flex-row justify-end items-center border-b-2 border-gray_m">
        <div className="flex items-center space-x-8 ">
          <div className="flex items-center gap-1 hover:scale-110 transition-all duration-300 cursor-pointer ">
            <Link
              href="https://www.instagram.com/piuavantirock/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <RiInstagramFill className="w-8 h-8 text-pink-500" />
            </Link>
            <h1 className={`text-xs `}>PiuAvantiRock</h1>
          </div>
          <div className="flex items-center gap-1 hover:scale-110 transition-all duration-300 cursor-pointer ">
            <Link
              href="https://www.youtube.com/@piuavantiok"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
            >
              <AiOutlineYoutube className="w-8 h-8 text-red-500 " />
            </Link>
            <h1 className={`text-xs `}>Piu Avanti</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-6">
        <p className="text-center text-xxs">
          © Piu Avanti 2025. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
