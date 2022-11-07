import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Part1 from './Components/part1/Part1';
import Part2 from './Components/part2/Part2';
import Projects from './Components/Projets/Projects';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Part1/>
      <Part2/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
