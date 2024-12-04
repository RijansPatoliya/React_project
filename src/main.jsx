import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav.jsx'
import Banner from './Banner.jsx'
import Body from "./Body.jsx"
import Footer from './Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Banner />
    <Body />
    <Footer />
  </StrictMode>
)
