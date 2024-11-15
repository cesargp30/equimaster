import Image from "next/image";
import React from "react";

export const Product = () => {
  return (
    <div className="flex flex-col max-w-w-[900px] mt-40 justify-center items-center">
      <h2 className="font-bold text-5xl mb-2">PRODUCTO</h2>
      <div className="flex">
        <div className=" w-32 md:w-96 h-4 bg-black"></div>
        <div className=" w-32 md:w-96 h-4 bg-yellow-600"></div>
      </div>
        <Image
            src={'/Logo.jpg'}
            alt='Equimaster'
            width={400}
            height={400}
        />
      <div className="flex flex-col md:flex-row w-full items-center justify-center mt-4 gap-x-10">
        <div className="text-center">
            <h3 className="text-xl mb-3 font-bold">Repelente anti moscas a base  de: </h3>
            <ul className="text-lg">
                <li> - Agua</li>
                <li> - Vinagre de manzana</li>
                <li> - Jabón para caballo</li>
                <li> - Alcohol</li>
                <li> - Escencia de Eucalipto</li>
            </ul>
        </div>
        <div className="">
            <Image
                src={'/mosktop.jpg'}
                alt='Equimaster'
                width={ 300 }
                height={ 300 }
            />
        </div>
      </div>
    </div>
  );
};
