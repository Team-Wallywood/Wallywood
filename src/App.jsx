import { Main } from './Components/Main/Main'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Nav } from './Components/Nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/HomePage'
import { About } from './Pages/AboutPage'
import { Services } from './Pages/ServicesPage'
import { Contact } from './Pages/ContactPage'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
