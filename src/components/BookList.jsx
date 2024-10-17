import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookCard from './BookCard';

const BookList = () => {
  const { books, loading, error, searchTerm, selectedGenre } = useContext(BookContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const filteredBooks = books.filter(book => {
    const matchesSearchTerm = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre ? book.subjects.some(subject => subject.toLowerCase().includes(selectedGenre.toLowerCase())) : true;
    return matchesSearchTerm && matchesGenre;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-opacity duration-300">
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
