import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LivingEnglishTicker from './components/LivingEnglishTicker';
import HomePage from './pages/HomePage';
import OfertasAcademicasPage from './pages/OfertasAcademicasPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    if (page === 'plataforma') {
      window.open('https://idiomasya.talentlms.com/plus/login', '_blank');
      return;
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'ofertas':
        return <OfertasAcademicasPage />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
      <div className="pt-16">
        <LivingEnglishTicker />
      </div>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
