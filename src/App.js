import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import BookDetails from './pages/BookDetails';
import Navbar from './components/Navbar';
import BookProvider from './context/BookContext';

function App() {
  return (
    <BookProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/book-details" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
  );
}

export default App;
