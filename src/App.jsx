import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LabPage from './pages/LabPage';
import DetectorPage from './pages/DetectorPage';
import QuizPage from './pages/QuizPage';
import SummaryPage from './pages/SummaryPage';
import TeacherPage from './pages/TeacherPage';

export default function App() {
  // Sync page state with URL hash
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').trim();
    const validPages = ['home', 'lab', 'detector', 'quiz', 'summary', 'teacher'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (pageId) => {
    const targetHash = pageId === 'home' ? '#/' : `#/${pageId}`;
    window.location.hash = targetHash;
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans selection:bg-[#6C5CE7] selection:text-white">
      {/* Top Floating Glass Navbar */}
      <Navbar currentPage={currentPage} navigate={navigate} />

      {/* Main Page Content (Full Screen Airy Width) */}
      <main className="flex-grow w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-2">
        {currentPage === 'home' && <HomePage navigate={navigate} />}
        {currentPage === 'lab' && <LabPage navigate={navigate} />}
        {currentPage === 'detector' && <DetectorPage navigate={navigate} />}
        {currentPage === 'quiz' && <QuizPage navigate={navigate} />}
        {currentPage === 'summary' && <SummaryPage navigate={navigate} />}
        {currentPage === 'teacher' && <TeacherPage navigate={navigate} />}
      </main>

      {/* Bottom Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}
