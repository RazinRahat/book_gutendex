import React from 'react';
import BookList from '../components/BookList';
import SearchFilter from '../components/SearchFilter';

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Book List</h1>
      <SearchFilter />
      <BookList />
    </div>
  );
};

export default Home;
