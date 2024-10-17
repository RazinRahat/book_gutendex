import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookList from '../components/BookList';
import SearchFilter from '../components/SearchFilter';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

const Home = () => {
  const { books, loading, error } = useContext(BookContext);

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Book List</h1>
      <SearchFilter />
      <BookList />
      <Pagination />
    </div>
  );
};

export default Home;
