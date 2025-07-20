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
      className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800"
      aria-label="Main header"
    >
      <div className="flex items-center gap-2">
        <img src={logo} alt="Wortionary Logo" className="w-10 h-10" />
        <span className="text-white font-semibold text-lg">Wortionary</span>
      </div>
      <div className="flex items-center gap-4">
        <HeaderSearchBar />
        <Avatar style={{ width: "32px", height: "32px" }}>
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
