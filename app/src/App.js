import './App.css';
import Navbar from './Components/Navbar';
import TripContainer from "./Components/TripContainer"
import Footer from "./Components/Footer";
import MobileContainer from "./Components/MobileContainer"
import AboutContainer from "./Components/AboutContainer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <TripContainer />
      <br />
      <br />
      <AboutContainer />
      <MobileContainer />
    </div>
  );
}

export default App;