import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './data.js'



function App() {
  const cards =  data.map(element => <Card 
                                        key={element.id}
                                        img={element.coverImg}
                                        rating={element.stats.rating}
                                        reviewCount={element.stats.reviewCount}
                                        location={element.location}
                                        title={element.title}
                                        price={element.price}
                                      />)

  return (
    <>
      <NavBar />
      <Hero />      
      <section className='cards-list'>
        {cards}
      </section>

    </>
  )
}

export default App
