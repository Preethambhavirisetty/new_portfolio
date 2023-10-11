import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Works, Experience, Navbar, Hero, Tech, StarsCanvas} from './components';


const App = () => {

  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-primary">
        <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />

        </div>
          <Tech />
      </div>
    </BrowserRouter>
  )
}

export default App
