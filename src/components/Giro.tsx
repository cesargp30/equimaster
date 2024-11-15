import Image from "next/image";
import React from "react";

export const Giro = () => {
  return (
    <div className="flex flex-col max-w-[900px] mt-40 justify-center items-center">
      <h2 className="font-bold text-5xl mb-2">GIRO</h2>
      <div className="flex">
        <div className="w-44 md:w-56 h-4 bg-black"></div>
        <div className="w-44 md:w-56 h-4 bg-yellow-600"></div>
      </div>
        <p className="mt-4 text-lg max-w-[400px] text-center">Elaboración y comercialización de productos de calidad 
        para la salud e higiene de los equinos. </p>

        <span className="mt-5 font-bold text-xl text-center">“Resultados visibles en cada aplicación”</span>
    </div>
  );
};