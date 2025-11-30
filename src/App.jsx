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
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
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
    // store timer ids so we can cleanup on unmount
    const intervalId = setInterval(() => {
      setCurrentMessage((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(intervalId);
          // schedule the final transitions; store these ids so they can be cleared
          const t1 = setTimeout(() => {
            setShowLastMessage(false);
            const t2 = setTimeout(() => setShowPortfolio(true), 800);
            // attach t2 so cleanup can clear it
            if (typeof window !== 'undefined') window.__portfolioT2 = t2;
          }, 10);
          if (typeof window !== 'undefined') window.__portfolioT1 = t1;
        }
        return prev;
      });
    }, 600);

    return () => {
      clearInterval(intervalId);
      if (typeof window !== 'undefined') {
        clearTimeout(window.__portfolioT1);
        clearTimeout(window.__portfolioT2);
        window.__portfolioT1 = null;
        window.__portfolioT2 = null;
      }
    };
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

          {/* Experience section (POC) shown before Skills */}
          <div className="relative">
            <Experience />
          </div>

          <div className="relative" ref={skillsSectionRef}>
            <Skills />
          </div>

          

          <Projects />
          {/* Testimonials (looping marquee) */}
          <div className="relative">
            <Testimonials />
          </div>
          <Contact />

          <Footer />

          {showScrollToTop && (
            <div className="vert-move md:flex z-10 bottonToTop mr-3 w-full cursor-pointer fixed bottom-5 md:bottom-6 hidden items-center justify-end">
              <div
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                <img src="/up-arrow.png" width={35} alt="Scroll to top" loading="lazy" />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
