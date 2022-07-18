import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppErrorBoundary from './provider/AppErrorBoundary';
import MainContent from './templates/MainContent';
import FallStockPage from './pages/FallStockPage';
import FetchButton from './components/FetchButton';
import Header from './templates/Header';
import ComparisonPage from './pages/ComparisonPage';
import Footer from './templates/Footer';
import Sidebar from './templates/Sidebar';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const App = () => (
  <AppErrorBoundary>
    <Router>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </Router>
  </AppErrorBoundary>
);

export default App;
