import React from 'react';
import Imgs from '/src/database/Imgs.js';

const ProductCards = () => {
    return (
            <div className="max-w-[1440px] h-[303px] w-full pb-5 relative group">
                <div className='flex'>
                    {Imgs.map((imagem, index) => (
                        <div key={index} className="mx-3 bg-white rounded-lg">
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
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default ProductCards;