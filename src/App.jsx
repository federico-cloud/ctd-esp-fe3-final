import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ThemeProvider } from "./context/ThemeContext"
import { DataProvider } from "./context/DataContext"

export const App = () => {
  return (
    <ThemeProvider>
      <DataProvider>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </DataProvider>
    </ThemeProvider>
  )
}
