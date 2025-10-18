import Layout from './components/layout/Layout.jsx';
import { LocaleProvider } from './context/LocaleContext.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';

const AppContent = () => (
  <Layout>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);

const App = () => (
  <LocaleProvider>
    <AppContent />
  </LocaleProvider>
);

export default App;
