import Link from 'next/link';
import { TbGridDots } from 'react-icons/tb';

export default function HomeHeader() {
  return (
    <header className="text-sm">
      <div className="flex items-center justify-end space-x-4 pr-2">
        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>

        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>

        <TbGridDots className="hover:bg-gray-200 bg-transparent rounded-full text-4xl p-2" />

        <button
          className="bg-blue-500 text-white
        px-6 py-2 font-medium rounded-md hover:brightness-105
        hover:shadow-md

        "
        >
          Sign in
        </button>
      </div>
    </header>
  );
}
