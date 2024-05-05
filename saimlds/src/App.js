// import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import TeamMember from './components/TeamMember';
import TeamCore from './components/TeamCore';
import About from './components/About';
import Events from './components/Domain';
import Domain from './components/Domain';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About/>
      <Skills />
      <Domain/>
      <Timeline/>
      {/* <Projects />  */}
      <TeamCore/>
      <TeamMember/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
