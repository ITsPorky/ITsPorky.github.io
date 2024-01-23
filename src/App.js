import './App.css';
import './bootstrap/bootstrap.min.css';
import NavBar from './components/common/NavBar.jsx';
import AboutMe from './components/AboutMe.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
