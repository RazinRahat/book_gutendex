import React, { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [genres, setGenres] = useState([]);
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('https://gutendex.com/books/');
                const data = await response.json();
                setBooks(data.results);

                // Extract unique genres
                const uniqueGenres = new Set();
                data.results.forEach(book => {
                    book.subjects.forEach(subject => uniqueGenres.add(subject));
                });
                setGenres([...uniqueGenres]);
            } catch (error) {
                setError('Failed to fetch books.');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const toggleWishlist = (bookId) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = prevWishlist.includes(bookId)
                ? prevWishlist.filter(id => id !== bookId)
                : [...prevWishlist, bookId];

            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

    return (
        <BookContext.Provider value={{
            books,
            loading,
            error,
            searchTerm,
            setSearchTerm,
            selectedGenre,
            setSelectedGenre,
            genres,
            wishlist,
            toggleWishlist
        }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;
