import { useState } from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import Course from './Course'
import Angular from './images/angular.jpg'
import Bootstrap5 from './images/bootstrap5.png'
import Ccsharp from './images/ccsharp.png'
import Kompleweb from './images/kompleweb.jpg'



function App() {
  return (
    <>

<section className="hero is-link">
  <div className="hero-body">
    <p className="title">
     Kurslarım
    </p>
  </div>
</section>

<section className='section'>

<div className="container">

<div className='columns'>
  <div className='column'>  <Course image={Angular} title="Angular" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati velit dicta ducimus, animi sit! Modi molestias voluptate laudantium, tenetur ullam, quae suscipit numquam maxime nostrum accusamus dolorem, expedita ab?"/></div>
  <div className='column'><Course image={Bootstrap5} title="Boostrapt 5" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati velit dicta ducimus, animi sit! Modi molestias voluptate laudantium, tenetur ullam, quae suscipit numquam maxime nostrum accusamus dolorem, expedita ab?"/></div>
  <div className='column'><Course image={Ccsharp} title="React" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati velit dicta ducimus, animi sit! Modi molestias voluptate laudantium, tenetur ullam, quae suscipit numquam maxime nostrum accusamus dolorem, expedita ab?"/></div>
  <div className='column'>  <Course image={Kompleweb} title="Komple Web" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati velit dicta ducimus, animi sit! Modi molestias voluptate laudantium, tenetur ullam, quae suscipit numquam maxime nostrum accusamus dolorem, expedita ab?"/>
              </div>
</div>
</div>
</section>




    </>
  )
}

export default App
