import React from "react";
import './App.css';
import Work from "./components/Work";
import HomeMade from "./components/HomeMade";
import HappyCooking from "./components/HappyCooking";
import SimplifyCooking from './components/SimplifyCooking';
import CookingComunity from './components/CookingComunity';
import Download from "./components/Download"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {

  const [imgDimen, setImgDimen] = React.useState({ height: '', width: '' });

  return (
    <div className="App">
      <Header />
      <Work />
      <HappyCooking />
      <SimplifyCooking imgDimen={imgDimen} />
      <HomeMade setImgDimen={setImgDimen} imgDimen={imgDimen} />
      <CookingComunity />
      <Download />
      <Footer />
    </div>
  );
}

export default App;

