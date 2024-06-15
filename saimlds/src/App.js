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
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader';
import Footer2 from './components/Footer2';
import Stats from './components/Stats';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=>setLoading(false), 2000)
  }, [])
  if(loading){
    return <h1>
      <Loader/>
    </h1>
  }
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About/>
      <Skills />
      <Stats/>
      <Domain/>
      <Timeline/>
      {/* <Projects />  */}
      <TeamCore/>
      <TeamMember/>
      <Contact />
      {/* <Footer /> */}
      <Footer2/>
    </div>
  );
}

export default App;
