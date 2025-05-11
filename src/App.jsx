import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Products from "./Components/Products"
import Feedbacks from "./Components/Feedbacks"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
function App() {
 useEffect(()=>{
  Aos.init({
    duration:500,
    easing:'ease-in-sine',
  })
 },[])
  return (
    <>
     <Navbar/>
     <Hero />
     <About />
     <Products />
     <Feedbacks />
     <Contact />
     <Footer/>
    </>
  )
}

export default App
