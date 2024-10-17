import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookCard from '../components/BookCard';

const Wishlist = () => {
  const { books, wishlist } = useContext(BookContext);

  const wishlistedBooks = books.filter(book => wishlist.includes(book.id));

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Wish List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {wishlistedBooks.length > 0 ? (
          wishlistedBooks.map(book => <BookCard key={book.id} book={book} />)
        ) : (
          <p className="text-gray-500">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;