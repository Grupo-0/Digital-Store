import React from 'react';
import ProductOptions from "./ProductOptions";
import Gallery from "../Gallery";
import Stars from "./Stars.jsx"
import ProductItens from '../../database/ProductItens.js';
import { useParams } from 'react-router-dom';

const BuyBox = () => {
  let { id } = useParams();  
  console.log(id)

  let produto = ProductItens.find(p => p.id.toString() === id);

  return (
    <>
      <div className="flex justify-center p-12 gap-8 w-4/5">
        <div className="w-full h-full">
          <Gallery
            slides={[
              produto.image,
              produto.image          
            ]}
          />
        </div>
        <div className="flex flex-col gap-y-1 ml-12">
          <h3 className="font-bold text-3xl text-dark-gray">{produto.name}</h3>
          <p className="text-dark-gray-3">Casual | Nike | REF: {produto.referencia}</p>
          <div className="flex gap-2 align-baseline">                
            <Stars />
            <span className='mt-2 p-4 py-1 bg-warning rounded-lg'>4,7</span>
            {/* Avaliações */}
            <span className='mt-2'>({produto.avaliacao}) Avaliações</span>
          </div>

          <h3 className="text-dark-gray-2 text-2xl">
            <span className="text-base">R$</span>{produto.priceDiscount}<s className="ligth-gray-2 text-base">{ProductItens[0].price},00</s>
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