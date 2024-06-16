import React from 'react'

import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Post from './components/userpost/Post'
import Tabs from './components/Tabs/Tabs'

const App = () => {
  return (
    <div>
     <Navbar/>
   <Hero/>
   <Tabs/>
     <Post/>
    </div>
  )
}

export default App
