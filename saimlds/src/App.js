import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import TeamMember from './components/TeamMember';
import TeamCore from './components/TeamCore';
import About from './components/About';
import Domain from './components/Domain';
import Timeline from './components/Timeline';
import Footer2 from './components/Footer2';
import Stats from './components/Stats';
import Faculty from './components/Faculty';
import Counter from './components/Counter';

function App() {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(()=>setLoading(false), 2000)
  // }, [])
  // if(loading){
  //   return <div>
  //     <Loader/>
  //   </div>
  // }
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Stats />
      <Domain />
      <Timeline />
      <Faculty />
      <TeamCore />
      <TeamMember />
      <Contact />
      <Footer2 />
      <div className="counter-container navbar-text">
        <Counter />
      </div>
    </div>
  );
}

export default App;
