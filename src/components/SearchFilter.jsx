import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const SearchFilter = () => {
  const { searchTerm, setSearchTerm, selectedGenre, setSelectedGenre, genres } = useContext(BookContext);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-4 p-4 bg-yellow-100 hover:bg-yellow-200 rounded">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow border rounded p-3 mb-2 md:mb-0 md:mr-2 text-yellow-500 placeholder:text-yellow-500"
      />
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        className="border rounded p-3 text-yellow-500"
      >
        <option value="">All Genres</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
