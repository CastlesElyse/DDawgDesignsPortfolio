import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import HomePage from './components/home';
import AboutPage from './components/about';
import PortfolioPage from './components/portfolio';
import ContactPage from './components/contact';
import ResumePage from './components/resume';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import portfolio from "./assets/content/portfolio.json";
import ContentPage from './components/contentPage';
import PageNotFound from './components/404';

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

    <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<PrivateRoute>
            <MagicBox />
          </PrivateRoute>} />
          <Route path="/box" element={<PrivateRoute>
            <BoxView />
          </PrivateRoute>} />
          <Route path="/search" element={<PrivateRoute>
            <SearchPage />
          </PrivateRoute>} />
          <Route path="*" element={<PageNotFound />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage width={windowSize.width} />} />
          <Route path="/portfolio" element={<PortfolioPage width={windowSize.width} />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {portfolio.map((section) => (
            section.content.map((piece) => (
              <Route path={`/${piece.slug}`} element={<ContentPage data={piece} />} />
            ))
          ))}
          <Route path='/404' element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
