import { useContext, useEffect } from "react"
import "../css/Favs.css"
import Card from "../components/Card"
import { ThemeContext } from "../context/ThemeContext"

export const Favs = () => {

  const {theme} = useContext(ThemeContext)

  const doctorsFav = JSON.parse(localStorage.getItem("favs"))

  useEffect(() => {
    

  }) 

  return (
    <>
      <div className={`favs ${theme}`}>
        {doctorsFav.map(({city, id, name}) => (
          <Card
            key={id}
            id={id}
            name={name}
            city={city}
          />
        ))}
      </div>
    </>
  )
}
