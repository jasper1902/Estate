import About from "./pages/About"
import Home from "./pages/Home"
import Sales from "./pages/Sales"
import Features from "./pages/Features"
import Service from "./pages/Service"
import Demo from "./pages/Demo"
import OurClients from "./pages/OurClients"
import ContactUs from "./pages/ContactUs"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

function App() {

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Features />
      <Sales />
      <Service />
      <Demo />
      <OurClients />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
