import { Navbar } from 'react-bootstrap';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from "./components/NavBar.js";
import Header from "./components/Header.js";
import About from "./components/About.js";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Header />
      <header className="App-header">

    <About />
      </header>
    </div>
  );
}

export default App;
