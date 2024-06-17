import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import { Suspense } from 'react';
import {Loader} from './components/Loader';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Team = lazy(() => import('./pages/Team'));


function App() {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter></Suspense>
    </div>
  );
}

export default App;
