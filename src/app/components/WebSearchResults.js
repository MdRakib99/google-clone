import Link from 'next/link';
import parser from 'html-react-parser';
import PaginationButton from './PaginationButton';

export default function WebSearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 md:pb-28 pb-40   sm:pl-[5%] md:pl-[14%] lg:pl-50">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults}results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div className="mb-8 maz-w-xl" key={result.link}>
          <div className="group flex flex-col">
            <Link className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600"> {parser(result.htmlSnippet)}</p>
        </div>
      ))}

      <div>
        <PaginationButton />
      </div>
    </div>
  );
}
