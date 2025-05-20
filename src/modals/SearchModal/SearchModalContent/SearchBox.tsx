import { RiSearchLine } from "react-icons/ri";

interface SearchBoxProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBox = ({ searchQuery, setSearchQuery }: SearchBoxProps) => {
  return (
    <div className="h-12 border rounded-lg shadow-sm flex items-center">
      <div className="shrink-0 ms-3 mb-[3px] me-1">
        <RiSearchLine className="text-xl text-uiBlack/30" />
      </div>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="What would you like to eat today?"
        className="w-full p-1 outline-hidden text-sm font-medium placeholder:text-uiBlack/30"
      />
    </div>
  );
};

export default SearchBox;
