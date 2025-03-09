import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface CryptoPrice {
  id: string;
  symbol: string;
  price: number;
  change_24h: number;
}

export default function CryptoTicker() {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,polkadot,chainlink,uniswap,aave,compound,maker&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();
        const newPrices = Object.entries(data).map(([id, details]: [string, any]) => ({
          id,
          symbol: id.toUpperCase(),
          price: details.usd,
          change_24h: details.usd_24h_change || 0
        }));
        setPrices(newPrices);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="crypto-slider w-full py-4 overflow-hidden"
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="max-w-6xl mx-auto"
      >
        {prices.map((crypto) => (
          <SwiperSlide key={crypto.id}>
            <motion.div
              className="glass-effect rounded-lg p-4 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-bold text-primary block">{crypto.symbol}</span>
              <span className="text-white block">${crypto.price.toLocaleString()}</span>
              <span className={`text-sm ${crypto.change_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {crypto.change_24h.toFixed(2)}%
              </span>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}