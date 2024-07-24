import React from 'react';
import Imgs from './Imgs';

const ProductCards = () => {
    return (
        <>
            <div className="">
                
                <div className="flex ">
                    {Imgs.map((imagem, index) => (
                        <div key={index} className="mx-3 mb-8 bg-white rounded-lg">
                            <div className="relative">
                                <img
                                    src={imagem.imagem}
                                    className="w-full h-auto rounded-t-lg"
                                    alt="Imagem do produto"
                                />
                                <button className="ml-5 absolute bottom-4 mx-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-5 rounded">
                                    Comprar
                                </button>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                {/* Outros conteúdos podem ser adicionados aqui */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductCards;