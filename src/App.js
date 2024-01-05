
import '../src/assets/css/style.css';

import Artisan from './component/artisan/Artisan';
// import Advert from './component/advert/Advert'
// import Navbar from './component/navbar/Navbar';
import Navbar from './container/Navbar';
import "./App.css"
// import Hero from './component/hero/Hero';
// import About from './component/about/About';
import About from './container/About'
import Hero from './container/Hero'
import "../src/main"
import Value from './container/Value';
import Counts from './container/Counts';
import Feature from './container/Feature';
import Service from './container/Service';
import Faq from './container/Faq';
import Advert from './container/Advert';
import Client from "./component/client/Client"
import Team from './container/Team';
import Blog from './container/Blog';
import Contact from './container/Contact';
import Footer from './container/Footer';
// import Artisan from './container/Artisan';

function App() {
  return (
   <div>
     <Navbar/>
     <Hero/>
     <main id="main">
     <About/>
     <Value/>
     <Counts/>
     <Feature/>
     <Service/>
     <Faq/>
     <Advert/>
     <Artisan/>
     <Team/>
     <Client/>
     <Blog/>
     <Contact/>
     </main>
     <Footer/>
   </div>
 
    
    
    
  );
}

export default App;
