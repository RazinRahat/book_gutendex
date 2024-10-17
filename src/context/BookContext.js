import React, { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('https://gutendex.com/books/');
                const data = await response.json();
                setBooks(data.results);

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

    return (
        <BookContext.Provider value={{
            books,
            loading,
            error,
            searchTerm,
            setSearchTerm,
            selectedGenre,
            setSelectedGenre,
            genres
        }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;
