
'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {

  const searchParams = useSearchParams(); //Access the current URL query params it's Read only
  const pathname = usePathname();
  const { replace } = useRouter();

// 👇 Create a debounced version of handleSearch
  const handleSearch = useDebouncedCallback((term: string) => {

    // console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams); // Create an editable copy
     params.set('page', '1'); // reset the page number to 1

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);

  }, 300); // 👈 runs after 300ms of no typing



  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
