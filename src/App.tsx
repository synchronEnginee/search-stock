import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StockList from './components/StockList';
import Header from './templates/Header';
import ComparisonPage from './pages/ComparisonPage';
import Footer from './templates/Footer';
import Sidebar from './templates/Sidebar';

const App = () => (
  <>
    <Router>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={<StockList />} />
        <Route path="/compare" element={<ComparisonPage />} />
      </Routes>
    </Router>
    <Footer />
  </>
);

export default App;
