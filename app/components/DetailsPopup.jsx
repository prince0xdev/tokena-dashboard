import { Star, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function DetailsPopup({ coin, onClose }) {
  if (!coin) {
    return null;
  }

  return (
    <div className="top-0 w-full h-full inset-0 overflow-auto fixed scrollbar-hidden mx-auto bg-gray-800 bg-opacity-50 z-50">
      <div className="flex flex-col rounded-xl overflow-auto scrollbar-hidden mt-5 sticky top-0 bg-blanc1 h-full w-[300px] md:w-[400px] mx-auto p-5">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-mono-sans-bold text-xl">{coin.name}</h1>
          <div
            className="p-3 border-gris1 border rounded-xl cursor-pointer hover:scale-95 duration-200"
            onClick={onClose}
          >
            <X />
          </div>
        </div>

        <div className="bg-gray-200 flex justify-center items-center min-h-[200px] mt-5">
          Chart Is In Labo...
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center gap-3">
            <Image src={coin.image} width={20} height={20} className="rounded-full" alt={coin.name} />
            <h1 className="font-mono-sans-bold text-xl">
              {coin.name} ({coin.symbol.toUpperCase()}/USD)
            </h1>
          </div>
          <h1 className="font-mono-sans-bold text-xl">${coin.price.toFixed(3)}</h1>
        </div>

        <div className="mt-5 flex-col flex gap-3">
          <div className="flex items-center justify-between">
            <h1 className="font-mono-sans-bold">Crypto Market Rank</h1>
            <h1 className="font-mono-sans-bold">Rank #{coin.market_cap_rank.toFixed(0)}</h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="font-mono-sans-bold">Market Cap</h1>
            <h1 className="font-mono-sans-bold">{coin.market_cap.toLocaleString()}</h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="font-mono-sans-bold">Circulating Supply</h1>
            <h1 className="font-mono-sans-bold">$3452,768,665</h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="font-mono-sans-bold">24 Hour High</h1>
            <h1 className="font-mono-sans-bold">$3452,768</h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="font-mono-sans-bold">24 Hour Low</h1>
            <h1 className="font-mono-sans-bold">$452,768</h1>
          </div>
        </div>

        <div className="mt-5">
          <h1 className="font-mono-sans-bold text-xl">Description</h1>
          <p className="mt-5">
           {coin.description}
          </p>
        </div>

        <div className="mt-8 flex items-center w-full justify-center cursor-pointer md:hover:scale-95 duration-200">
          <div className="flex items-center gap-3 w-full p-3 justify-center text-bleu1 rounded-xl bg-blue-200">
            <Star />
            <h3>Add to favorite</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPopup;
