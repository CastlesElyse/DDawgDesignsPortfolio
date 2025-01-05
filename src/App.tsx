import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import HomePage from './components/home';
import AboutPage from './components/about';
import PortfolioPage from './components/PortfolioPage/portfolio';
import ContactPage from './components/ContactPage/contact';
import ResumePage from './components/ResumePage/resume';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import portfolio from "./assets/content/portfolio.json";
import ContentPage from './components/ContentPage/contentPage';
import PageNotFound from './components/404';
import { HelmetProvider } from 'react-helmet-async';

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      if (typeof window !== "undefined") {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


function App() {
  const windowSize = useWindowSize();
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route caseSensitive path="/" element={<HomePage />} />
          <Route caseSensitive path="/about" element={<><Header /><AboutPage width={windowSize.width} /></>} />
          <Route caseSensitive path="/portfolio" element={<><Header /><PortfolioPage width={windowSize.width} /></>} />
          <Route caseSensitive path="/resume" element={<><Header /><ResumePage /></>} />
          <Route caseSensitive path="/contact" element={<><Header /><ContactPage /></>} />
          {portfolio.map((section) => (
            section.content.map((piece) => (
              <Route caseSensitive path={`/${piece.slug}`} element={<><Header /><ContentPage data={piece} /></>} />
            ))
          ))}
          <Route path='/404' element={<><Header /><PageNotFound /></>} />
          <Route path="*" element={<><Header /><Navigate to="/404" /></>} />
        </Routes>

    </BrowserRouter>
    </HelmetProvider>
    
  );
}

export default App;
