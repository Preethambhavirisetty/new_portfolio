import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Works, Experience, Navbar, Hero, Tech, StarsCanvas} from './components';


const App = () => {

  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-gradient-to-r from-stone-900 to-stone-700">
        {/* <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        <div className = "">
          <Navbar />
          <Hero />

        </div>
          <Tech />
      </div>
    </BrowserRouter>
  )
}

export default App
