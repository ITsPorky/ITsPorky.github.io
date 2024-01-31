import './App.css';
import AboutMe from './components/AboutMe.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import DrawerMenu from './components/common/DrawerMenu.jsx';

function App() {
  return (
    <div className="App" Style="overflow: hidden;">
      <DrawerMenu>
        <a className="nav-link" href="#About">01. About</a>
        <a className="nav-link" href="#Experience">02. Experience</a>
        <a className="nav-link" href="#Projects">03. Projects</a>
        <a className="nav-link" href="#Contact">04. Contact</a>
      </DrawerMenu>
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
