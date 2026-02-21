
import './App.css'
import Navbar from './components/navbar'
import { Routes, Route } from "react-router-dom"
import Organick from './components/organick'
import Page from './pages/page/page'
import Shop from './pages/shop/shop'
import Projects from './pages/project/project'
import News from './pages/news/news'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import NOTFOUND from './components/404'
import axios from 'axios'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
       <Route path='/contact' element={<Contact/>}/>
      <Route path="/" element={<Organick/>}/>
       <Route path="/page" element={<Page/>}/>
        <Route path="/shop" element={<Shop/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/news" element={<News/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/*" element={<NOTFOUND />} />
     
    </Routes>
    </>
  )
}

export default App
