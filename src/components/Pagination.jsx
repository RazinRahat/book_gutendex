import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Pagination = () => {
    const { nextPageUrl, previousPageUrl, fetchBooks, totalCount } = useContext(BookContext);
    
    const totalPages = Math.ceil(totalCount / 32);
    const currentPage = new URLSearchParams(new URL(nextPageUrl || previousPageUrl).search).get('page') || 1;

    const pagesToShow = [];
    const current = Number(currentPage);
    const startPage = Math.max(1, current - 2);
    const endPage = Math.min(totalPages, current + 2);

    for (let i = startPage; i <= endPage; i++) {
        if (pagesToShow.length < 5) {
            pagesToShow.push(i);
        }
    }

    return (
        <div className="flex justify-center items-center mt-4">
            <button
                onClick={() => fetchBooks(previousPageUrl)}
                disabled={!previousPageUrl}
                className={`px-4 py-2 border rounded-lg ${!previousPageUrl ? 'opacity-50 cursor-not-allowed' : 'bg-yellow-200 hover:bg-yellow-300 text-yellow-600'}`}
            >
                Previous
            </button>

            <div className="flex mx-4">
                {pagesToShow.map((page) => (
                    <button
                        key={page}
                        onClick={() => fetchBooks(`https://gutendex.com/books/?page=${page}`)}
                        className={`px-3 py-1 border rounded-lg mx-1 ${page === current ? 'bg-yellow-300 text-yellow-600 font-bold' : 'bg-yellow-200 hover:bg-yellow-300 text-yellow-600'}`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                onClick={() => fetchBooks(nextPageUrl)}
                disabled={!nextPageUrl}
                className={`px-4 py-2 border rounded-lg ${!nextPageUrl ? 'opacity-50 cursor-not-allowed' : 'bg-yellow-200 hover:bg-yellow-300 text-yellow-600'}`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
