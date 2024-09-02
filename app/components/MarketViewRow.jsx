import { TrendingDown, TrendingUp } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';
import DetailsPopup from './DetailsPopup';

const MarketViewRow = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const handleRowClick = (coin) => {
    setSelectedCoin(coin);
    setShowPopup(true);
  };

  return (
    <>
      <div className="overflow-auto ">
        {data.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-7 w-[1200px] lg:w-full text-gris2 p-3 border-b border-gris1 cursor-pointer"
            onClick={() => handleRowClick(item)}
          >
            <div className="place-self-start">{item.market_cap_rank}</div>
            <div className="place-self-start">
              <div className="flex items-center gap-3 hover:scale-95 duration-200">
                <Image src={item.image} height={30} width={30} alt="icone-coin" className="rounded-full" />
                <h1>{`${item.name} - ${item.symbol.toUpperCase()}`}</h1>
              </div>
            </div>
            <div className="place-self-center">${item.price.toFixed(3)}</div>
            <div className="place-self-center">
              <h1 className={`p-1 ${item.price_change_percentage_24h < 0 ? 'bg-red-100 text-rouge' : 'bg-green-100 text-vert'} rounded-full hover:scale-95 duration-200 cursor-pointer`}>
                {item.price_change_percentage_24h.toFixed(2)}%
              </h1>
            </div>
            <div className="place-self-start">{item.total_volume.toLocaleString()}</div>
            <div className="place-self-start">{item.market_cap.toLocaleString()}</div>
            <Image src={item.sparkline} height={100} width={100} alt="icone-coin" className="rounded-full place-self-end" />
          </div>
        ))}
      </div>
      
      {showPopup && selectedCoin && (
        <DetailsPopup coin={selectedCoin} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
};

export default MarketViewRow;
