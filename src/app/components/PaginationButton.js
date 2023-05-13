'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import React from 'react';
import Link from 'next/link';

export default function PaginationButton() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = +searchParams.get('start') || 1;
  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 2 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 1}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <MdArrowBackIos className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 1}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <MdArrowForwardIos className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
