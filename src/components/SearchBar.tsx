import { useState } from 'react';

interface SearchBarProps {
  handleSearch: (e: React.FormEvent<HTMLFormElement>, term: string) => void;
}

function SearchBar({ handleSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form onSubmit={(e) => handleSearch(e, searchTerm)}>
      <input
        type="text"
        placeholder="Search Here"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default SearchBar;
