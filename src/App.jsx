import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from './TopNav'
import Featured from './component/Featured'
import Delivery from './component/Delivery'
import TopPics from './component/TopPics'
import Meal from './component/Meal'
import NewsLetter from './component/NewsLetter'
import Footer from './component/Footer'
function App() {
  

 return(
  <>
  <TopNav/>
  <Featured/>
  <Delivery/>
  <TopPics/>
  <Meal/>
  <NewsLetter/>
  <Footer/>
  </>
 )
}

export default App
