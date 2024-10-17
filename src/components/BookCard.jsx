import React from 'react';

const BookCard = ({ book }) => {
  const author = book.authors[0]?.name;
  const coverImage = book.formats['image/jpeg'];
  const genres = book.subjects.join(', ');

  return (
    <div className="max-w-sm p-4 rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 bg-yellow-50 hover:bg-yellow-100">
      <img
        className="w-full h-48 object-cover transition-transform transform hover:scale-80 duration-300"
        src={coverImage}
        alt={`Cover of ${book.title}`}
      />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2 text-yellow-600">{book.title}</h2>
        <p className="text-yellow-600 text-base ">Author: {author}</p>
        <p className="text-yellow-600 text-sm line-clamp-2">Genres: {genres}</p>
        <p className="text-yellow-600 text-xs">ID: {book.id}</p>
      </div>
    </div>
  );
}

export default BookCard;
