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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Services/>} />
        <Route path="/" element={<Portfolio/>} />
        <Route path="/" element={<HowItsWork/>} />
        <Route path="/" element={<Review/>} />
        <Route path="/" element={<AboutUs/>} />
        <Route path="/" element={<Contact/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
