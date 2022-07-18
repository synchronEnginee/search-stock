import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppErrorBoundary from './provider/AppErrorBoundary';
import MainContent from './templates/MainContent';
import FallStockPage from './pages/FallStockPage';
import FetchButton from './components/FetchButton';
import Header from './templates/Header';
import ComparisonPage from './pages/ComparisonPage';
import Footer from './templates/Footer';
import Sidebar from './templates/Sidebar';

const App = () => (
  <AppErrorBoundary>
    <Router>
      <Sidebar />
      <MainContent>
        <Header />
        <Routes>
          <Route path="/" element={<FallStockPage />} />
          <Route path="/compare" element={<ComparisonPage />} />
          <Route path="/_suspense" element={<FetchButton />} />
        </Routes>
        <Footer />
      </MainContent>
    </Router>
  </AppErrorBoundary>
);

export default App;
