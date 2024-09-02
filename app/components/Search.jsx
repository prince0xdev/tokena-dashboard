import { ChevronDown, SearchIcon } from 'lucide-react'
import React from 'react'

function Search() {
  return (
    <div className='flex justify-between gap-5 flex-wrap w-full'>
        <div className="flex w-full gap-3 lg:w-auto items-center border rounded-lg border-gris2 p-3">
            <SearchIcon/>
            <input type="text"
            className='outline-none border-none bg-transparent'
            placeholder='Search crypto...' />
        </div>

        <div className="flex w-full lg:w-[220px] items-center justify-between border rounded-lg border-gris2 p-3">
            <h1>Categories</h1>
            <ChevronDown className='cursor-pointer'/>
        </div>

    </div>
  )
}

export default Search