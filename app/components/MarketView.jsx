'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MarketViewRow from './MarketViewRow'
import { EllipsisVertical } from 'lucide-react'

function MarketView() {
    const [tableauStatistique, setTableauStatistique] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/search/trending', {
                    headers: {
                        'accept': 'application/json',
                        'x-cg-demo-api-key': 'CG-NNSXV4mFKgojHKMv3gRmtPjf', 
                    },
                });

                const items = response.data.coins;
                const formattedCoins = items.map((item) => ({
                    id: item.item.id,
                    name: item.item.name,
                    symbol: item.item.symbol,
                    market_cap_rank: item.item.market_cap_rank,
                    image: item.item.large,
                    price: item.item.data.price,
                    market_cap: item.item.data.market_cap,
                    total_volume: item.item.data.total_volume,
                    sparkline: item.item.data.sparkline,
                    price_change_percentage_24h: item.item.data.price_change_percentage_24h.usd,
                    description: item.item.data.content ? item.item.data.content.description : 'No description available',
                
                }));

                 // Trier les données par rang croissant
                const sortedCoins = formattedCoins.sort((a, b) => a.market_cap_rank - b.market_cap_rank);

                setTableauStatistique(sortedCoins);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCoins();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='border border-gris1 overflow-auto w-full rounded-lg'>
            <div className="flex items-center mb-5 p-3 justify-between">
                <h1>Market</h1>
                <div className='p-2 border border-gris1 rounded-lg'>
                    <EllipsisVertical />
                </div>
            </div>
            {/* l'entete du tableau */}
            <div className="w-full overflow-auto">
            <div className="grid overflow-auto grid-cols-7 top-0 sticky w-[1200px] lg:w-full font-bold text-noir bg-gray-100 p-3 border-b-2 rounded- border-gris1 rounded-xl rounded-b-none">
                <div className='place-self-start'>#</div>
                <div className='place-self-start'>Coins</div>
                <div className='place-self-center'>Price</div>
                <div className='place-self-center'>24H</div>
                <div className='place-self-start'>24 Volume</div>
                <div className='place-self-start'>Market Cap</div>
                <div className='place-self-end'>Latest 7 Days</div>
            </div>
            </div>
            {/* le mapping pour avoir les lignes du tableau */}
            <MarketViewRow data={tableauStatistique} />
        </div>
    );
}

export default MarketView;
