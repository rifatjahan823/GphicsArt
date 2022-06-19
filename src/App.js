import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Services from './Components/Pages/Services/Services';
import Portfolio from './Components/Pages/Portfolio/Portfolio';
import HowItsWork from './Components/Pages/HowItsWork/HowItsWork';
import Review from './Components/Pages/Review/Review';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Contact from './Components/Pages/Contact/Contact';
import Navebar from './Components/Pages/Shared/Navebar/Navebar';
import NotFound from './Components/Pages/Shared/NotFound/NotFound';
import AllLogo from './Components/Catagory/AllLogo';
import Bisiness from './Components/Catagory/Bisiness ';
import Flat from './Components/Catagory/Flat';
import Logo from './Components/Catagory/Logo';


function App() {
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/portfolio" element={<Portfolio/>} >
    
      
        </Route>
        <Route path="/howitswork" element={<HowItsWork/>} />
        <Route path="/review" element={<Review/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
