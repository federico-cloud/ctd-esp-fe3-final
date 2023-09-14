import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ThemeProvider } from "./context/ThemeContext"

export const App = () => {
  return (
    <ThemeProvider>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </ThemeProvider>
  )
}
