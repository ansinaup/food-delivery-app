import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from './TopNav'
import Featured from './component/Featured'
import Delivery from './component/Delivery'
import TopPics from './component/TopPics'
import Meal from './component/Meal'
function App() {
  

 return(
  <>
  <TopNav/>
  <Featured/>
  <Delivery/>
  <TopPics/>
  <Meal/>
  </>
 )
}

export default App
