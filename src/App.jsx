import Header from "./Components/Header"
import Footer from "./Components/Footer" 
import "./index.css"
import { Outlet } from "react-router-dom";  
function App() { 
  return (
    <div className="app" >
      <Header/> 
      {/** if my path = "/" body component will load in this outlet */}
      {/** if my path = "/about" about component will load  in this outlet*/}
      <Outlet/>
      <Footer/>
    </div>
  )
}
   
export default App
