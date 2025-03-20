import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Roboto, Tangerine } from "next/font/google";
import Image from "next/image";
import whatsappLogo from "../../public/icons/whatsappLogo.svg";
import Link from "next/link";
import AudioPlayer from "@/components/AudioPlayer";

export const metadata = {
  title: "Piu Avanti",
  description: "Piu Avanti website",
  openGraph: {
    title: "Piu Avanti",
    description: "Piu Avanti website",
    images: [
      {
        url: "/images/logoPiu.jpeg",
        width: 1200,
        height: 630,
        alt: "Piu Avanti Logo",
      },
    ],
    type: "website",
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});
const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tangerine",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`text-white bg-black ${roboto.variable} ${tangerine.variable} min-h-screen`}
      >
        <AudioPlayer />
        <div className="fixed bottom-[2%] left-[82%] md:left-[96%] z-50 animate-pulse">
          <Link href="https://wa.me/542613077147">
            <Image
              className="cursor-pointer hover:scale-105 transition-all duration-300"
              src={whatsappLogo}
              alt="whatsappLogo"
              width={50}
              height={50}
            />
          </Link>
        </div>

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
