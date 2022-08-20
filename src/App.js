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
  return (
    <div className="App">
      <Header />
      <Work />
      <HappyCooking />
      <SimplifyCooking />
      <HomeMade />
      <CookingComunity />
      <Download />
      <Footer />
    </div>
  );
}

export default App;

