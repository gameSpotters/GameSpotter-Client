import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import "./Home.css"
import Available from '../components/Available/Available'
import Information from '../components/Information/Information'
import GameCreator from '../components/GameCreator/GameCreator'
import Introduction from '../components/Introduction/Introduction'
import Community from '../components/Community/Community'
import Team from '../components/Team/Team'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className='Home'>
       <div>
        <Navbar/>
       </div>
       <div>
        <Hero/>
       </div>
       <div>
        <Available/>
       </div>
       <div>
        <Information/>
       </div>
       <div>
        <GameCreator/>
       </div>
       <div>
        <Introduction/>
       </div>
       <div>
        <Community/>
       </div>
       <div>
        <Team/>
       </div>
       <div>
        <Footer/>
       </div>
    </div>
  )
}

export default Home