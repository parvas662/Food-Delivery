import Header from "./Components/Header"
import Footer from "./Components/Footer"
import "./index.css"
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utlils/appStore";  
   

function App() {
  return (
    <div className="app h-full w-full" >
      
      <Provider store={appStore}> 
        <Header />
        {/** if my path = "/" body component will load in this outlet */}
        {/** if my path = "/about" about component will load  in this outlet*/}
        <div className="w-full h-max">
          <Outlet /> 
        </div>
          <Footer />

      </Provider> 
    </div>
  )
}


export default App
