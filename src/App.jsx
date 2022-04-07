import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
import Header from "./Components/header/Header"
import Home from './Components/home/Home'
import ButtonTop from './Components/ui/ButtonTop';
import Footer from './Components/footer/Footer';
import Projects from './Components/projects/Projects';

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ButtonTop/>
    </>
  )
}

export default App
