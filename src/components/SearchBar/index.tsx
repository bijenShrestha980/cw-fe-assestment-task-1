import { useEffect, useState, useCallback } from "react";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import type { SearchBarPropsType } from "./types";

const SearchBar = (props: SearchBarPropsType) => {
  const { initialValue, onSearch } = props;
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);

  const handleSearch = useCallback(() => {
    onSearch(innerValue);
  }, [innerValue, onSearch]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <form
      className="flex items-center bg-black px-4 py-2 rounded-full w-full max-w-xl mt-6 shadow-lg"
      role="search"
      aria-label="Search"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>
      <Search className="text-gray-400 mr-3" aria-hidden="true" />
      <Input
        id="search-input"
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0"
        aria-label="Search input"
        autoComplete="off"
      />
      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white ml-4"
        aria-label="Submit search"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
