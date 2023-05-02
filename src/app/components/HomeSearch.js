/* eslint-disable @next/next/no-img-element */
'use client';

import { data } from 'autoprefixer';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const res = await fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!res) return;
    router.push(`/search/web?searchTerm=${res}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full border mx-auto max-w-[90%] border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl mt-5"
      >
        <AiOutlineSearch
          className="text-xl text-gray-500
      mr-3
      "
        />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-grow
      focus:outline-none
      "
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center items-center sm:flex-row mt-6">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex justify-center items-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <img
              src="/spinner.svg"
              alt="Loading..."
              className="h-7 text-center"
            />
          ) : (
            "i'm feeling lucky"
          )}
        </button>
      </div>
    </>
  );
}
