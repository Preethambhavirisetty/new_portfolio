import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const onButtonClick = () => {
     
    // using Java Script method to get PDF file
    fetch("SamplePDF.pdf").then((response) => {
        response.blob().then((blob) => {
         
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "SamplePDF.pdf";
            alink.click();
        });
    });
};
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
/*
Navbar, Hero section - font:color
ABout
Experience
  font:color
  Expiriance line + icon border
  Resume button
  dates
Projects
  card bg: color
  git hub links + photoes
Contact
logo change



*/