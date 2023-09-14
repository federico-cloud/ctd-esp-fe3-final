import { useContext, useState } from 'react';
import '../css/Card.css'
import '../main.css'
import { Link } from 'react-router-dom';
import { ThemeContext } from "../context/ThemeContext";


// eslint-disable-next-line react/prop-types, no-unused-vars
export const Card = ({id, name, city}) => {

  const [like, setLike] = useState(false);
  const { theme } = useContext(ThemeContext)

  const addFav = () => {
    setLike(!like)
  }

  return (
    <div className={`card ${theme}`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      <div className='card__content'>

        {/* Imagen de la card */}
        <div className="card__doctor-img">
          <img src="src/assets/doctor.jpg" alt="Foto del doctor" />
          
          {/* Boton de like */}
          <button className="card__btn-fav" onClick={addFav}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill={ like ? '#EB2E0E' : '#00000' } strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill='none'/>
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
          </button>

        </div>
        
        {/* Detalles de la card */}
        <div className="card__doctor-details">
          <span>Name</span>
          <p>{name}</p>
          <span>City</span>
          <p>{city}</p>
        </div>

        {/* Boton para ver mas informacion */}
        <Link className="card__btn-details" to={`/details/${id}`}>More</Link>  
      </div>
      

    </div>
  );
};

export default Card;