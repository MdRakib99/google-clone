import Link from 'next/link';
import PaginationButton from './PaginationButton';

export default function ImageSearchResults({ results }) {
  return (
    <div className="md:pb-28 pb-40  mt-4">
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items.map((result) => {
          return (
            <div className="mb-8" key={result.link}>
              <div className="group">
                <Link href={result.image.contextLink}>
                  <img
                    src={result.link}
                    alt={result.title}
                    className="h-60 group-hover:shadow-xl transition-shadow w-full object-contain"
                  />
                </Link>
                <Link href={result.image.contextLink}>
                  <h2 className="group-hover:underline truncate text-xl">
                    {result.title}
                  </h2>
                </Link>
                <Link href={result.image.contextLink}>
                  <p className="group-hover:underline text-gray-600">
                    {result.displayLink}{' '}
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ml-16">
        <PaginationButton />
      </div>
    </div>
  );
}
