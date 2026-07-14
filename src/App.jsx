import React, { useState, useEffect } from 'react';
import IntroPage from './pages/Intro/IntroPage';
import HomePage from './pages/Home/HomePage';
import CvRequestPage from './pages/CvRequest/CvRequestPage';
import AboutDetailPage from './pages/AboutDetail/AboutDetailPage';
import JourneyDetailPage from './pages/JourneyDetail/JourneyDetailPage';
import AdminDashboard from './pages/Admin/AdminDashboard'; 
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('intro');
  const [detailIndex, setDetailIndex] = useState(0);
  const [journeyIndex, setJourneyIndex] = useState(0);

  const handleBackToAboutMe = () => {
    setCurrentPage('home');
    setTimeout(() => {
      document.getElementById('about-me')?.scrollIntoView({ behavior: 'instant' });
    }, 50);
  };

  const handleBackToJourney = () => {
    setCurrentPage('home');
    setTimeout(() => {
      document.getElementById('journey')?.scrollIntoView({ behavior: 'instant' });
    }, 50);
  };

  useEffect(() => {
  const queryParams = new URLSearchParams(window.location.search);
  if (queryParams.get('RootAdmin') === '0') {
    setCurrentPage('admin');
  }
}, []);

  return (
    <>
      {currentPage === 'admin' && (
        <AdminDashboard />
      )}

      {currentPage === 'intro' && (
        <IntroPage onNavigate={() => setCurrentPage('home')} />
      )}
      
      {currentPage === 'home' && (
        <HomePage 
          onLogoClick={() => setCurrentPage('intro')}
          onDownloadCvClick={() => setCurrentPage('cv_request')}
          onViewDetail={(index) => {
            setDetailIndex(index);
            setCurrentPage('about_detail');
          }}
          onViewJourneyDetail={(index) => {
            setJourneyIndex(index);
            setCurrentPage('journey_detail');
          }}
        />
      )}

      {currentPage === 'cv_request' && (
        <CvRequestPage onBack={() => setCurrentPage('home')} />
      )}

      {currentPage === 'about_detail' && (
        <AboutDetailPage 
          initialIndex={detailIndex} 
          onBack={handleBackToAboutMe} 
        />
      )}

      {currentPage === 'journey_detail' && (
        <JourneyDetailPage 
          initialIndex={journeyIndex} 
          onBack={handleBackToJourney} 
        />
      )}
      <Analytics />
    </>
  );
}
