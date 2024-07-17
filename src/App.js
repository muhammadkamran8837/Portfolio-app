
import Aos from 'aos';
import './App.css';
import { useEffect } from 'react';
import Footers from './components/Footers';
import Headers from './components/Headers';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolios from './components/Portfolios';


function App() {


  useEffect(()=>{
    Aos.init();

  },[])

  
  return (
    <div className="App ">
     
     <Headers />
     <main>
      <Hero/>
      <Services/>
      <Portfolios/>
      </main>     
    <Footers />
    </div>
  );
}

export default App;
