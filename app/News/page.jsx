import React from 'react'
import New from '../components/New'
import { ArrowDownIcon } from 'lucide-react'
import Layout from '../components/Layout'


function page() {
  const news = [
    {
      title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem  consectetur adipisicin...'
    },
    {
      title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem  consectetur adipisicin...'
    },
    {
      title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem  consectetur adipisicin...'
    },
    {
      title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem  consectetur adipisicin...'
    },
    {
      title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem  consectetur adipisicin...'
    },
    {
      title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem  consectetur adipisicin...'
    },
    {
      title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem  consectetur adipisicin...'
    },
    {
      title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem  consectetur adipisicin...'
    },
  
  ]
  return (
    <Layout  title="News">
        <section className='w-full'>
        <div className='mt-5'>
          <h1 className='font-mono-sans-bold text-xl lg:text-2xl '>Latest Crypto News</h1>

          {/* Affichage et Mapping des News grace au composant News */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              news.map((nouvelle, index) =>(
                <New key={index} nouvelle={nouvelle} />
              ))
            }
          </div>
          <button className="flex justify-center gap-5 border border-gris1 hover:scale-95 duration-200 bg-gray-100 mt-5 mx-auto w-[150px] items-center p-3 rounded-full">
             <h1>Load More</h1>
              <ArrowDownIcon/>
          </button>
        </div>
        {/* <TrendingCoinsTable/> */}
    </section>
    </Layout>
  )
}

export default page