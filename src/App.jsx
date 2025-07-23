import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Navbar from './nav'
import {Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>My Portfolio</header>
      <div><Navbar/></div>
      <Routes>
        <Route path='/' element={<div class="n"><div><h2>Shanmukh Jaswanth Kandregula</h2>
        <h3>Actor, Youtuber and Social media influencer</h3>
        <div class="i"><a href="https://www.instagram.com/shannu_7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src="https://th.bing.com/th/id/R.735dda68880a385ce8cc5be4f3c5fcd6?rik=qSxRw2lCZYy9Mw&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG11.png&ehk=QVCbfkCKi8pJLF08bRkS%2fLeMqLTnJQf402WRaIdN6jE%3d&risl=&pid=ImgRaw&r=0" alt="sdfgh" /></a><a href="https://youtube.com/@shanmukhjaswanth?si=DqsFGvRwvUBJ0uxO"><img src="https://www.freeiconspng.com/uploads/logo-youtube-png-clipart-11.png" alt="sdfgh" /></a></div></div>
        <div><img src="https://www.gethucinema.com/wp-content/uploads/2022/10/ShanmukhJaswanthKandregula-89.jpg" alt="" /></div></div>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<p>Invalid</p>}></Route>
      </Routes>
    </>
  )
}
export default App
