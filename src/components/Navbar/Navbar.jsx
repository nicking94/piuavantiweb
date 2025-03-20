"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../../public/images/logoPiu.jpeg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    setIsMenuOpen(false);

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
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Canciones", path: "canciones" },
    { name: "Contáctanos", path: "https://wa.me/542613077147" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header>
      <nav className=" px-5 md:px-10 py-2 fixed top-0 left-0 w-full backdrop-blur-sm bg-white/10 z-50 shadow-gray_m shadow-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-lg font-bold">
            <Link href="/">
              <Image
                className="rounded-full"
                src={logo}
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
            <h1 className={`text-md md:text-lg font-tangerine`}>Piu Avanti</h1>
          </div>

          <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <ul className="text-xs hidden lg:flex lg:items-center lg:space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.path.startsWith("https") ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block cursor-pointer px-3 text-white py-2 rounded hover:scale-105 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ) : (
                  <a
                    href={link.path}
                    className="inline-block cursor-pointer px-3 text-white py-2 rounded hover:scale-105 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Menú móvil */}
        <div
          className={`min-h-screen fixed inset-0 bg-black/95  text-white flex flex-col p-6  z-50 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center gap-1 font-semibold">
            <Link href="/">
              <Image src={logo} alt="Logo" width={50} height={50} />
            </Link>
            <h1 className="font-tangerine text-md">Piu Avanti</h1>
          </div>

          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 focus:outline-none"
            aria-label="Cerrar menú"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex items-center py-10">
            <ul className="text-xs space-y-4 lg:hidden">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.path.startsWith("https") ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block cursor-pointer px-3 text-white py-2 rounded hover:scale-105 transition-all duration-300"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleNavigation(link.path)}
                      className="inline-block cursor-pointer px-3 text-white py-2 rounded hover:scale-105 transition-all duration-300"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
