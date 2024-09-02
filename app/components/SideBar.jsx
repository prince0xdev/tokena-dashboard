'use client'
import { Bell, ChartNoAxesColumn, ChevronDown, ClipboardList, CoinsIcon, CreditCard, Headphones, House, LucideShieldEllipsis, NewspaperIcon, Settings, Wallet2 } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'
import Photo from '@/public/images/user.png'
import Image from 'next/image';

function SideBar({ isVisible, onClose, title }) {
  const [selectedMenu, setSelectedMenu] = useState(title);

  return (
    <>
      {/* Sidebar Background Overlay */}
      {isVisible && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={onClose}
        >
          
        </div>
      )}
      
      <section
        className={`fixed left-0 top-0 overflow-auto h-full text-gris2 p-5 left-0 bg-white lg:bg-transparent border-r border-gris1 z-50 lg:relative lg:w-1/5 lg:flex lg:flex-col lg:p-4 ${isVisible ? 'w-4/5 lg:hidden' : '-translate-x-full lg:translate-x-0'} transition-transform duration-300`}
      >
        <div className="flex items-center gap-3 p-3 text-bleu1 bg-blue-100 rounded-xl">
          <CoinsIcon />
          <div>
            <h1 className='font-bold font-mono-sans-bold'>Tokena</h1>
            <p>Financial App</p>
          </div>
        </div>

        {/* Menu */}
        <div className='mt-10'>
          <h1 className='text-gris2'>Menu</h1>

          <ul className='mt-5 flex flex-col'>
            <Link href="/Dashboard">
              <li className={`flex items-center cursor-pointer gap-2 p-3 rounded-lg ${selectedMenu === 'Dashboard' ? 'bg-bleu1 text-white' : ''}`}
                onClick={() => setSelectedMenu('Dashboard')}>
                <House />
                <h3>Dashboard</h3>
              </li>
            </Link>

            <Link href="/News">
              <li className={`flex items-center cursor-pointer gap-2 p-3 rounded-lg ${selectedMenu === 'News' ? 'bg-bleu1 text-white' : ''}`}
                onClick={() => setSelectedMenu('News')}>
                <NewspaperIcon />
                <h3>News</h3>
              </li>
            </Link>

            <Link href="/Activities">
              <li className={`flex items-center cursor-pointer gap-2 p-3 rounded-lg ${selectedMenu === 'Activities' ? 'bg-bleu1 text-white' : ''}`}
                onClick={() => setSelectedMenu('Activities')}>
                <ChartNoAxesColumn />
                <h3>Activities</h3>
              </li>
            </Link>

            <Link href="/Card">
              <li className={`flex items-center cursor-pointer gap-2 p-3 rounded-lg ${selectedMenu === 'Card' ? 'bg-bleu1 text-white' : ''}`}
                onClick={() => setSelectedMenu('Card')}>
                <CreditCard />
                <h3>Card</h3>
              </li>
            </Link>

            <Link href="/Reports">
              <li className={`flex items-center justify-between cursor-pointer gap-2 p-3 rounded-lg ${selectedMenu === 'Reports' ? 'bg-bleu1 text-white' : ''}`}
                onClick={() => setSelectedMenu('Reports')}>
                <div className='flex items-center gap-2'>
                  <ClipboardList />
                  <h3>Reports</h3>
                </div>
                <ChevronDown className='self-end' />
              </li>
            </Link>

            <Link href="/Notifications">
              <li className={`flex items-center cursor-pointer gap-2 p-3 rounded-lg ${selectedMenu === 'Notifications' ? 'bg-bleu1 text-white' : ''}`}
                onClick={() => setSelectedMenu('Notifications')}>
                <Bell />
                <h3>Notifications</h3>
              </li>
            </Link>

            <Link href="/Billing">
              <li className={`flex items-center cursor-pointer gap-2 p-3 rounded-lg ${selectedMenu === 'Billing' ? 'bg-bleu1 text-white' : ''}`}
                onClick={() => setSelectedMenu('Billing')}>
                <Wallet2 />
                <h3>Billing</h3>
              </li>
            </Link>

            <Link href="/Invoices">
              <li className={`flex items-center cursor-pointer gap-2 p-3 rounded-lg ${selectedMenu === 'Invoices' ? 'bg-bleu1 text-white' : ''}`}
                onClick={() => setSelectedMenu('Invoices')}>
                <LucideShieldEllipsis />
                <h3>Invoices</h3>
              </li>
            </Link>

            <Link href="/HelpCenter">
              <li className={`flex items-center cursor-pointer gap-2 p-3 rounded-lg ${selectedMenu === 'Help Center' ? 'bg-bleu1 text-white' : ''}`}
                onClick={() => setSelectedMenu('Help Center')}>
                <Headphones />
                <h3>Help Center</h3>
              </li>
            </Link>

            <Link href="/Settings">
              <li className={`flex items-center cursor-pointer gap-2 p-3 rounded-lg ${selectedMenu === 'Settings' ? 'bg-bleu1 text-white' : ''}`}
                onClick={() => setSelectedMenu('Settings')}>
                <Settings />
                <h3>Settings</h3>
              </li>
            </Link>
          </ul>

          <div className="border border-gris1 rounded-xl p-3 flex items-center justify-between">
            <div className='flex items-center gap-2'>
              <Image src={Photo} width={40} height={40} className='rounded-full' />
              <div>
                <h1>John Doe</h1>
                <p className="text-gris2">
                  johndoe8@gmail.com
                </p>
              </div>
            </div>
            <ChevronDown />
          </div>
        </div>
      </section>
    </>
  );
}

export default SideBar;
