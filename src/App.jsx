import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Certifications } from "./components/Certifications/Certifications";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Footer } from "./components/Footer/Footer";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />      
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
