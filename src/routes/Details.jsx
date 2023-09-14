import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const Details = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${theme}`}>Details</div>
  )
}
