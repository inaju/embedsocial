import logo from './logo.svg';
import './App.css';
import Navbar from './container/Navbar';
import Hero from './container/Hero';
import Partners from './container/Partners';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Partners />
    </div>
  );
}

export default App;
