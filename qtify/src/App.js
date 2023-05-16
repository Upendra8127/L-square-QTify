import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import { fetchTopSongs } from './api/api';

function App() { 
  return (
   <>
   <Navbar />
   <Hero/>
   {/* <Section title= "Top Albums" dataSource={fetchTopSongs}/> */}
   </>
  )
}

export default App