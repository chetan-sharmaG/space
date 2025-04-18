import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import About from "./About";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Starfield from "./components/StarField";

const messages = [
  "Hello", // English
  "नमस्ते", // Hindi
  "ನಮಸ್ಕಾರ", // Kannada
  "வணக்கம்", // Tamil
  "నమస్కారం", // Telugu
  "السلام علیکم", // Urdu/Malayalam style
];

function App() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showLastMessage, setShowLastMessage] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const skillsSectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setShowLastMessage(false);
            setTimeout(() => setShowPortfolio(true), 800);
          }, 10);
        }
        return prev;
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  // Observe when Skills section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollToTop(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.3, // 30% visible
      }
    );

    const el = skillsSectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const isLast = currentMessage === messages.length - 1;

  return (
    <div className={`${showPortfolio ? "" : "app-container"}`}>
      <Starfield />
      {!showPortfolio ? (
        <div className="hello-container">
          {isLast ? (
            <AnimatePresence mode="wait">
              {showLastMessage && (
                <motion.div
                  key={currentMessage}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: -300,
                    scale: 0.3,
                    color: "white",
                    filter: "blur(2px) brightness(1.5)",
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  {messages[currentMessage]}
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {messages[currentMessage]}
            </motion.div>
          )}
        </div>
      ) : (
        <>
          <Navbar showPortfolio={showPortfolio} />
          <Header />
          <div className="relative">
            <About />
          </div>

          <div className="relative" ref={skillsSectionRef}>
            <Skills />
          </div>

          <Projects />
          <Contact />
          <Footer />

          {showScrollToTop && (
            <div className="vert-move md:flex z-10 bottonToTop mr-3 w-full cursor-pointer fixed bottom-5 md:bottom-6 hidden items-center justify-end">
              <div
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                <img src="/up-arrow.png" width={35} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
