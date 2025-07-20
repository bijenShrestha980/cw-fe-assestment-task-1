import { useCallback, useState } from "react";
import { Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { IMAGES } from "@/constants/images";

const { logo } = IMAGES;

const HeaderSearchBar = () => {
  const [search, setSearch] = useState("");

  const onSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  return (
    <div className="relative w-full max-w-xs" aria-label="Search">
      <span className="absolute left-3 top-1.5 pointer-events-none">
        <Search className="text-gray-400 text-sm" aria-hidden="true" />
      </span>
      <Input
        type="text"
        value={search}
        onChange={onSearch}
        placeholder="Search..."
        aria-label="Search words"
        className="pl-10 bg-gray-800 text-white border-none focus:ring-0 rounded-full placeholder:text-gray-400"
      />
    </div>
  );
};

const Header = () => {
  return (
    <header
      className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-black border-b border-gray-800 gap-4 md:gap-0"
      aria-label="Main header"
    >
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Wortionary Logo"
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <span className="text-white font-semibold text-base md:text-lg">
          Wortionary
        </span>
      </div>
      <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
        <div className="flex-1 md:flex-none">
          <HeaderSearchBar />
        </div>
        <Avatar
          style={{ width: "28px", height: "28px" }}
          className="md:w-8 md:h-8"
        >
          <AvatarImage src="/avatar.jpg" alt="User avatar" />
          <AvatarFallback aria-label="User" className="text-gray-800">
            U
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
