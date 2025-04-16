import { useEffect, useState } from 'react';
import About from './About';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import StarAnimation from './components/StarAnimation';
import { motion } from 'framer-motion';
import Starfield from './components/StarField';

const messages = [
 "Hello, Welcome",  // English
  "नमस्ते, स्वागत है", // Hindi
  "ನಮಸ್ಕಾರ, ಸ್ವಾಗತ", // Kannada
  "வணக்கம், வரவேற்கின்றேன்", // Tamil
  "హలో, స్వాగతం", // Telugu
  "നമസ്കാരം, സ്വാഗതം", // Malayalam
];

function App() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 1200); // Switch message every 1.2 seconds for better readability
  
    const portfolioTimeout = setTimeout(() => {
      setShowPortfolio(true);
    }, messages.length * 1200 + 490); // Show portfolio just after last message
  
    return () => {
      clearInterval(messageInterval);
      clearTimeout(portfolioTimeout);
    };
  }, []);

  return (
    <div className={`${showPortfolio ? '':'app-container'}`}>
     {!showPortfolio ? (
  <div className="hello-container">
     <Starfield />
    {currentMessage === 0 ? (
      <div className="hello-typewriter">
        <span className="dot-prefix">•</span>
        <span className="typewriter-text">{messages[0]}</span>
      </div>
    ) : (
      <motion.div
        key={currentMessage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="hello-fade"
      >
        <span className="dot-prefix">•</span> {messages[currentMessage]}
      </motion.div>
    )}
  </div>
) : (
  <>
    <StarAnimation />
    <Navbar />
    <Header />
    <div className="relative">
      <About />
    </div>
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </>
)}

    </div>
  );
}

export default App;
