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
    const [totalCount, setTotalCount] = useState(0);
    const [nextPageUrl, setNextPageUrl] = useState(null); 
    const [previousPageUrl, setPreviousPageUrl] = useState(null);

    const fetchBooks = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setBooks(data.results);
            setTotalCount(data.count);
            setNextPageUrl(data.next);
            setPreviousPageUrl(data.previous);

            // Gather unique genres from the fetched books
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

    useEffect(() => {
        fetchBooks(`https://gutendex.com/books/?page=1`);
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
            toggleWishlist,
            totalCount,
            nextPageUrl,
            previousPageUrl,
            fetchBooks
        }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;