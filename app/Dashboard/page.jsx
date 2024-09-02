import React from 'react';
import Layout from '../components/Layout';
import TrendOverView from '../components/TrendOverView';
import Search from '../components/Search';
import MarketView from '../components/MarketView';
import DetailsPopup from '../components/DetailsPopup';

function Page() {
  return (
    <Layout title="Dashboard">
      <div className='flex flex-col gap-10'>
        <TrendOverView />
        <Search />
        <MarketView />
      </div>
      <DetailsPopup />
    </Layout>
  );
}

export default Page;
