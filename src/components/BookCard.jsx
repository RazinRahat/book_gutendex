import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const BookCard = ({ book }) => {
    const { toggleWishlist, wishlist } = useContext(BookContext);
    const author = book.authors[0]?.name;
    const coverImage = book.formats['image/jpeg'];
    const genres = book.subjects.join(', ');
    const isWishlisted = wishlist.includes(book.id);

    const handleWishlistToggle = () => {
        toggleWishlist(book.id);
    };

    return (
        <div className="max-w-sm p-4 rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 bg-yellow-50 hover:bg-yellow-100">
            <img
                className="w-full h-48 object-cover"
                src={coverImage}
                alt={`Cover of ${book.title}`}
            />
            <div className="p-4">
                <h2 className="font-bold text-xl mb-2 text-yellow-600">{book.title}</h2>
                <p className="text-yellow-600 text-base">Author: {author}</p>
                <p className="text-yellow-600 text-sm line-clamp-2">Genres: {genres}</p>
                <p className="text-yellow-600 text-xs">ID: {book.id}</p>
                <button onClick={handleWishlistToggle} className="mt-2">
                    {isWishlisted ? (
                        <FaHeart className="text-red-500" />
                    ) : (
                        <FaRegHeart className="text-gray-500" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default BookCard;
