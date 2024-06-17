import React from 'react'
import { NavBar } from '../components/NavBar'
import { Banner } from '../components/Banner'
import About from '../components/About'
import { Skills } from '../components/Skills'
import Stats from '../components/Stats'
import Domain from '../components/Domain'
import Timeline from '../components/Timeline'
import Faculty from '../components/Faculty'
import TeamCore from '../components/TeamCore'
import TeamMember from '../components/TeamMember'
import { Contact } from '../components/Contact'
import Footer2 from '../components/Footer2'
import Counter from '../components/Counter'

const Home = () => {
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
  )
}

export default Home