import { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";
import '../css/Home.css'

export const Home = () => {
    
  // Brindamos contexto del tema
  const { theme } = useContext(ThemeContext);
  // Brindamos contexto de los datos de la API
  const {data} = useContext(DataContext)

  return (
    <div className={`home ${theme}`}>
      <h2>HOME</h2>
      <div className='doctorsContainer'>
        {data.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            name={data.name}
            city={data.address.city}
          />
        ))}
      </div>
    </div>
  )
}

