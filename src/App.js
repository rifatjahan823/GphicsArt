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
import Flat from './Components/Pages/Portfolio/Catagory/Flat';
import Mascot from './Components/Pages/Portfolio/Catagory/Mascot ';
import Bisiness from './Components/Pages/Portfolio/Catagory/Bisiness ';
import Fiyer from './Components/Pages/Portfolio/Catagory/Fiyer';
import Tshart from './Components/Pages/Portfolio/Catagory/Tshart';
import DataEntry from './Components/Pages/Portfolio/Catagory/DataEntry';
import Digital from './Components/Pages/Portfolio/Catagory/Digital';
import Photo from './Components/Pages/Portfolio/Catagory/Photo';
import Website from './Components/Pages/Portfolio/Catagory/Website';
import Ux from './Components/Pages/Portfolio/Catagory/Ux';
import Logo from './Components/Pages/Portfolio/Catagory/Logo';
import AllLogo from './Components/Pages/Portfolio/Catagory/AllLogo';



function App() {
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
       <Route path="/portfolio" element={<Portfolio />}>
            <Route index element={<AllLogo></AllLogo>} ></Route>
            <Route path="flat" element={<Flat/>}></Route>
            <Route path="logo" element={<Logo/>}></Route>
            <Route path="moscot" element={<Mascot></Mascot>}></Route>
            <Route path="bisiness" element={<Bisiness></Bisiness>}></Route>
            <Route path="fiyer" element={<Fiyer></Fiyer>}></Route>
            <Route path="tshirt" element={<Tshart></Tshart>}></Route>
            <Route path="dataentry" element={<DataEntry></DataEntry>}></Route>
            <Route path="digital" element={<Digital></Digital>}></Route>
            <Route path="photo" element={<Photo></Photo>}></Route>
            <Route path="ux" element={<Ux></Ux>}></Route>
            <Route path="website" element={<Website></Website>}></Route>
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
