// TrendingCoinsTable.jsx
'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Composant Popup
const Popup = ({ coin, onClose }) => {
  if (!coin) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-2">{coin.name}</h2>
        <p className="text-gray-700 mb-2"><strong>Symbol:</strong> {coin.symbol}</p>
        <div className="mb-2">
          <strong>Sparkline:</strong>
          <img src={coin.sparkline} alt="Sparkline" className="w-full h-24 mt-2" />
        </div>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Composant Principal
const TrendingCoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState(null);

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

        setCoins(formattedCoins);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  const handleRowClick = (coin) => {
    setSelectedCoin(coin);
  };

  const handleClosePopup = () => {
    setSelectedCoin(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Trending Coins</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap Rank</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Volume</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sparkline</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td
                className="px-6 py-4 whitespace-nowrap cursor-pointer text-blue-600 hover:underline"
                onClick={() => handleRowClick(coin)}
              >
                {coin.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.symbol}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.market_cap_rank}</td>
              <td className="px-6 py-4 whitespace-nowrap">${coin.price.toFixed(2)}</td>
              <td
                className={`px-6 py-4 whitespace-nowrap ${
                  coin.price_change_percentage_24h < 0 ? 'text-red-600 bg-red-100' : 'text-green-600 bg-green-100'
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap">${coin.market_cap}</td>
              <td className="px-6 py-4 whitespace-nowrap">${coin.total_volume}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={coin.image} alt={coin.name} className="w-12 h-12" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={coin.sparkline} alt="Sparkline" className="w-24 h-12" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render the Popup if a coin is selected */}
      <Popup coin={selectedCoin} onClose={handleClosePopup} />
    </div>
  );
};

export default TrendingCoinsTable;
