'use client'
import { AlignJustify, ChevronsUpDownIcon, LucideWalletMinimal, Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'

function Header({ title, toggleSidebar }) {
  const [isLight, setIsLight] = useState(true);

  const handleChangeTheme = () => {
    setIsLight(!isLight);
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Pour garder la préférence de l'utilisateur
  };

  return (
    <div className='flex items-center w-full justify-between border-b border-gris1 p-5'>
      <div className='flex items-center gap-2'>
        <div onClick={toggleSidebar} id='hamburger' className='p-3 border border-gris1 rounded-xl lg:hidden cursor-pointer hover:scale-95 duration-200'>
          <AlignJustify />
        </div>

        <div className='flex flex-col justify-center'>
          <h1 className='font-mono-sans-bold text-xl'>{title}</h1>
          <p className="text-gris2 sm:text-sm">Welcome back, Joe Doe</p>
        </div>
        <button className='items-center justify-center p-3 rounded-lg text-blanc1 bg-bleu1 gap-2 hidden md:flex'>
          <LucideWalletMinimal />
          <h3>Connect Wallet</h3>
        </button>
      </div>

      <div className='flex items-center justify-between gap-0 md:gap-3 text-gris2'>
        <div className="border border-gris2 rounded-xl cursor-pointer hover:scale-95 duration-200 flex gap-3 items-center justify-between p-3">
          USD
          <span>
            <ChevronsUpDownIcon />
          </span>
        </div>
        <div className='border border-gris2 cursor-pointer hover:scale-95 duration-200 rounded-xl p-3' onClick={handleChangeTheme}>
          {isLight ? <Moon /> : <Sun />}
        </div>
      </div>
    </div>
  );
}

export default Header;
