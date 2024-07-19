import Footer from "./created/footer";
import Menu from "./created/menu";
import About from "./created/about";
import Home from "./created/home";
import VehicleList from "./created/vehicleList";
import { Route,Routes } from "react-router-dom";
import Services from "./created/services";



function App() {
  return (
    <>

    <Menu/>
    <Routes>

      <Route path='/' element ={<Home/>} />
      <Route path='/about' element ={<About/>} />
      <Route path='/vehicle-List' element ={<VehicleList/>}/>
      <Route path='/services' element ={<Services/>}/>
   
   
    </Routes>
    <Footer/>
    
    
  
    </>
  )
}

export default App;