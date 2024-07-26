import React from 'react';

const Colecoes = () => {

  const colecoes = [
    { name: 'Camisetas', icon: '👕' },
    { name: 'Calças', icon: '👖' },
    { name: 'Bonés', icon: '🧢' },
    { name: 'Headphones', icon: '🎧' },
    { name: 'Tênis', icon: '👟' }
  ];

  return (
    <div className="text-center p-5 mb-20">
      <h2 className='font-bold text-3xl mb-5'> Coleções em destaque</h2>
      <div className="flex justify-center gap-10">
        {colecoes.map((colecao, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer hover:scale-110">
            <div className="text-4xl mb-3 bg-white rounded-full w-24 h-24 flex justify-center items-center shadow-md">
              {colecao.icon}
            </div>
            <p className="font-bold">{colecao.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colecoes;