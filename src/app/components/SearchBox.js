'use client';
import { RxCross2 } from 'react-icons/rx';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState(searchTerm || '');

  return (
    <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 items-center ml-10 mr-5 flex-grow  max-w-3xl">
      <input type="text" className="w-full focus:outline-none" value={term} />
      <RxCross2 className="text-2xl text-gray-500 cursor-pointer sm:mr-2" />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300" />
      <AiOutlineSearch className="text-2xl hidden md:inline-flex text-blue-500 cursor-pointer ml-2" />
    </form>
  );
}
