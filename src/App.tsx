import React from 'react'
import Navbar from './components/Navbar'
import MyAvatar from './components/MyAvatar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
// 追記
import Contact from './components/Contact'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <MyAvatar />
      <About />
      <Skills />
      <Works />
      // 追記
      <Contact />
    </>
  );
}

export default App;
