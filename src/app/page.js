import Image from 'next/image';
import React from 'react';
import HomeHeader from './components/HomeHeader';
import HomeSearch from './components/HomeSearch';

export default function page() {
  return (
    <>
      {/* {header} */}
      <HomeHeader />
      {/* {body} */}
      <div className="flex flex-col items-center mt-24">
        <Image
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png'
          }
          alt={'google'}
          width={300}
          height={100}
        />

        <HomeSearch />
      </div>
    </>
  );
}
