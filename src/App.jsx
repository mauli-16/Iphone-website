import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Highlights from "./components/Highlights"
import Model from './components/Model.jsx';
import * as Sentry from '@sentry/react';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Footer from "./components/Footer.jsx";
function App() {
  

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
    
  )
}

export default Sentry.withProfiler(App);
