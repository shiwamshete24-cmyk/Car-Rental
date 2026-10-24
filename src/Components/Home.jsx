import React from 'react'
import Hero_section from './Hero_section'
import '../Components/Myhero.css'
import Card from './Card'
import Mycard from './Mycard'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Mycard2 from './Mycard2'
import Section4 from './Section4'
import Mycard3 from './Mycard3'


const Home = () => {
  return (
    <div>
      <Hero_section />
      <Mycard />
      <Section1 />
      <Section2 />
      <Section3 />
      <Mycard2 />
      <Section4 />
      <Mycard3 />
    </div>
  )
}

export default Home