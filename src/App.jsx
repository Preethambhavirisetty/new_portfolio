import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


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

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
        <div className=''>
          <Navbar />
          <Hero />
        </div>
        {/* <About /> */}
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0 bg-gray-100'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
