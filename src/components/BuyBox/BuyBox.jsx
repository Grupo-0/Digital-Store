import React from 'react';
import ProductOptions from "./ProductOptions";
import Gallery from "../Gallery";
import Stars from "./Stars.jsx"
import ProductItens from '../../database/ProductItens.js';

const BuyBox = () => {
  return (
    <>
      <div className="flex justify-center p-12 gap-8 w-4/5">
        <div className="w-full h-full">
          <Gallery
            slides={[
              'https://imgnike-a.akamaihd.net/768x768/01369851A2.jpg',
              'https://imgnike-a.akamaihd.net/768x768/01369851A1.jpg',
              'https://imgnike-a.akamaihd.net/768x768/01369851A4.jpg',
              'https://imgnike-a.akamaihd.net/768x768/01369851A6.jpg'

            ]}
          />
        </div>
        <div className="flex flex-col gap-y-1 ml-12">
          <h3 className="font-bold text-3xl text-dark-gray">{ProductItens[0].name}</h3>
          <p className="text-dark-gray-3">Casual | Nike | REF: {ProductItens[0].referencia}</p>
          <div className="flex gap-2 align-baseline">                
            <Stars />
            <span className='mt-2 p-4 py-1 bg-warning rounded-lg'>4,7</span>
            {/* Avaliações */}
            <span className='mt-2'>({ProductItens[0].avaliacao}) Avaliações</span>
          </div>

          <h3 className="text-dark-gray-2 text-2xl">
            <span className="text-base">R$</span>{ProductItens[0].priceDiscount}<s className="ligth-gray-2 text-base">{ProductItens[0].price},00</s>
          </h3>

          <p className="text-light-gray font-semibold mt-5">Descrição do produto</p>
          <p className="w-80 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <ProductOptions />
          <button className="w-full p-2 bg-warning rounded-xl text-white font-semibold px-12 mt-5">Comprar</button>
        </div>
      </div>

    </>
  );
}

export default BuyBox;