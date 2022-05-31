import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from './templates/MainContent';
import FallStockPage from './pages/FallStockPage';
import Header from './templates/Header';
import ComparisonPage from './pages/ComparisonPage';
import Footer from './templates/Footer';
import Sidebar from './templates/Sidebar';

const App = () => (
  <Router>
    <Sidebar />
    <MainContent>
      <Header />
      <Routes>
        <Route path="/" element={<FallStockPage />} />
        <Route path="/compare" element={<ComparisonPage />} />
      </Routes>
      <Footer />
    </MainContent>
  </Router>
);

export default App;
