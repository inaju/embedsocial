import logo from './logo.svg';
import './App.css';
import Navbar from './container/Navbar';
import Hero from './container/Hero';
import Partners from './container/Partners';
import Widgets from './container/Widgets';
import Socials from './container/Socials';
import Conversions from './container/Conversions';
import Footer from './container/Footer';
import Templates from './container/Templates';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     {/* <Partners /> */}
     <Widgets />
     <Socials />
     <Conversions />
     {/* <Templates /> */}
     <Footer />
    </div>
  );
}

export default App;
