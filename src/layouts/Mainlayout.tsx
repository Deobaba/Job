import { Outlet } from "react-router"
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'
import Navbar from "../components/Navbar" 

const Mainlayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <ToastContainer/>

    </>
  )
}

export default Mainlayout

