import Header from "./components/Header/Header.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Companies from "./components/Companies/Companies.jsx"
import Residencies from "./components/Residencies/Residencies.jsx"
import Value from "./components/Value/Value.jsx";
import Contact from "./components/Contacts/Contact.jsx";
import GetStarted from "./components/GetStarted/GetStarted.jsx";

import "./App.css"
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App
