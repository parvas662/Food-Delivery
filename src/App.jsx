import Header from "./Components/Header"
import Footer from "./Components/Footer"
import "./index.css"
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utlils/appStore";

function App() {
  return (
    <div className="app" >
      <Provider store={appStore}> 
        <Header />
        {/** if my path = "/" body component will load in this outlet */}
        {/** if my path = "/about" about component will load  in this outlet*/}
        <Outlet />
        <Footer />

      </Provider>
    </div>
  )
}


export default App
