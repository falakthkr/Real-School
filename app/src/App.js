import './App.css';
import Navbar from './Components/Navbar';
import TripContainer from "./Components/TripContainer"
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <TripContainer />
      <Footer />
    </div>
  );
}

export default App;