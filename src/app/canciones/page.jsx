import React from "react";

const songs = [
  {
    title: "La roca en el mar",
    url: "https://www.youtube.com/watch?v=Nes9pG2hA_M&list=PLuMkBQ1v4HI-F3iR3C76Nt0TMaY5HURWF&index=1",
    downloadUrl:
      "https://www.mediafire.com/file/jikzpvkvg65w59t/La_roca_en_el_mar.mp3/file",
  },
  {
    title: "Humanos",
    url: "https://www.youtube.com/watch?v=H53_kF8UpU0&list=PLuMkBQ1v4HI-F3iR3C76Nt0TMaY5HURWF&index=2",
    downloadUrl:
      "https://www.mediafire.com/file/etqn3nbdmev120q/humanos.mp3/file",
  },
  {
    title: "Piu Avanti",
    url: "https://www.youtube.com/watch?v=4ogleAu1RoY&list=PLuMkBQ1v4HI-F3iR3C76Nt0TMaY5HURWF&index=3",
    downloadUrl:
      "https://www.mediafire.com/file/k2d3n69spe4b8qq/Piu_avanti.mp3/file",
  },
  {
    title: "Hermana mía",
    url: "https://www.youtube.com/watch?v=c2bmtNc_cBA&list=PLuMkBQ1v4HI-F3iR3C76Nt0TMaY5HURWF&index=4",
    downloadUrl:
      "https://www.mediafire.com/file/vkm6sm7jehks6go/Hermana_m%25C3%25ADa.mp3/file",
  },
  {
    title: "Un viaje de lo más loco",
    url: "https://www.youtube.com/watch?v=jzdDC-qpjgA&list=PLuMkBQ1v4HI-F3iR3C76Nt0TMaY5HURWF&index=5",
    downloadUrl:
      "https://www.mediafire.com/file/o8pt6jfyypfohmk/un_viaje_de_lo_mas_loco.mp3/file",
  },
  {
    title: "La chica del vestido azul",
    url: "https://www.youtube.com/watch?v=jSoDuOjJ-5E&list=PLuMkBQ1v4HI-F3iR3C76Nt0TMaY5HURWF&index=6",
    downloadUrl:
      "https://www.mediafire.com/file/0735esihkktn995/la_chica_del_vestido_azul.mp3/file",
  },
  {
    title: "Si tu cabeza no está aquí",
    url: "https://www.youtube.com/watch?v=aULCV_9fho4&list=PLuMkBQ1v4HI-F3iR3C76Nt0TMaY5HURWF&index=7",
    downloadUrl:
      "https://www.mediafire.com/file/cs6alfaat8mv96w/si_tu_cabeza_no_est%25C3%25A1_aqu%25C3%25AD.mp3/file",
  },
  {
    title: "La chica de fuego",
    url: "https://www.youtube.com/watch?v=xJQF6n4s7Ek&list=PLuMkBQ1v4HI-F3iR3C76Nt0TMaY5HURWF&index=8",
    downloadUrl:
      "https://www.mediafire.com/file/ejsfy7tcd2t3zd5/la_chica_de_fuego.mp3/file",
  },
  {
    title: "Acorralado",
    url: "https://www.youtube.com/watch?v=XLHCBBEqpQ8&list=PLuMkBQ1v4HI-F3iR3C76Nt0TMaY5HURWF&index=9",
    downloadUrl:
      "https://www.mediafire.com/file/s6uka1v0gyz8a5r/acorralado.mp3/file",
  },
  {
    title: "Mi luz en la oscuridad",
    url: "https://www.youtube.com/watch?v=rWZWmVIa2Ao&list=PLuMkBQ1v4HI-F3iR3C76Nt0TMaY5HURWF&index=10",
    downloadUrl:
      "https://www.mediafire.com/file/mh0wvgf48tzwaf6/mi_luz_en_la_oscuridad.mp3/file",
  },
  {
    title: "¿Por qué tiene que ser así?",
    url: "https://www.youtube.com/watch?v=GHdbSCA82I4&list=PLuMkBQ1v4HI-F3iR3C76Nt0TMaY5HURWF&index=11",
    downloadUrl:
      "https://www.mediafire.com/file/74479zlpz7sssf3/porque_tiene_que_ser_asi.mp3/file",
  },
  {
    title: "Ilusión nula",
    url: "https://www.youtube.com/watch?v=hKm_lcj5b7c&list=PLuMkBQ1v4HI-F3iR3C76Nt0TMaY5HURWF&index=12",
    downloadUrl:
      "https://www.mediafire.com/file/fym429wk694w61i/ilusion_nula.mp3/file",
  },
];

const CancionesPage = () => {
  return (
    <section className="py-16 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-tangerine my-8">Canciones</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 p-4 ">
          {songs.map((song, index) => (
            <li
              key={index}
              className="group relative min-h-[8rem] flex flex-col items-center justify-center text-white border-gray_m border-2 p-2 rounded-lg shadow-md shadow-gray_m hover:shadow-xl hover:shadow-gray_m  bg-gradient-to-br from-gray-900 to-gray-800 transform transition-all duration-300 hover:-translate-y-2 "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="z-50 w-full text-center mt-2">
                <h1 className="cursor-default text-[1.6rem] 2xl:text-md font-semibold text-white ">
                  {song.title}
                </h1>
              </div>

              <div className=" z-50 w-full text-center mt-4 space-x-10">
                <a
                  href={song.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" cursor-pointer text-xs 2xl:text-sm text-white hover:text-blue-200 transition-colors duration-300"
                >
                  Escuchar
                </a>
                <a
                  href={song.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" cursor-pointer text-xs 2xl:text-sm text-white hover:text-blue-200 transition-colors duration-300"
                >
                  Descargar
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CancionesPage;
