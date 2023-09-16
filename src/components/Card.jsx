import { useContext, useEffect, useState } from 'react';
import '../css/Card.css'
import '../main.css'
import { Link } from 'react-router-dom';
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from '../context/DataContext';
import { Heart } from './Heart';


// eslint-disable-next-line react/prop-types, no-unused-vars
export const Card = ({id, name, city}) => {

  // Configuramos el contexto del tema
  const { theme } = useContext(ThemeContext)

  // Configuramos el contexto de la data
  const { setFavs } = useContext(DataContext)

  // Establecemos el estado like para hacer las operaciones dentro del storage y la UI 
  const [like, setLike] = useState(false)

    
  // Obtén los favoritos actuales del localStorage y conviértelos en un arreglo si existen
  let existingFavs = JSON.parse(localStorage.getItem('favs'));

  useEffect(() => {
    
    // Pintamos el like si ya existe en favoritos
    existingFavs.map(docFav => {
      docFav.id === id
      ? setLike(!like)
      : ''
    })

  }, [])
  
  // Creamos el objeto para insertar en el storage
  const addFav = () => {

    const newFav = {
      'id': id,
      'name': name,
      'city': city
    };
  
    // Si no hay favoritos existentes, inicializa existingFavs como un arreglo vacio
    if (!Array.isArray(existingFavs)) {
      existingFavs = [];
    }
  
    if (!like) {
      // Verifica si el objeto ya esta en la lista de favoritos
      const isAlreadyLiked = existingFavs.some((fav) => 
        fav.id === newFav.id
      );
  
      if (!isAlreadyLiked) {
        // Agrega el nuevo favorito al arreglo existente
        const updatedFavs = [...existingFavs, newFav];
        // Actualiza el estado local con el nuevo arreglo que contiene todos los favoritos
        setFavs(updatedFavs);
        // Guarda el nuevo arreglo completo en el localStorage
        localStorage.setItem("favs", JSON.stringify(updatedFavs));
      }
      setLike(!like);
    } else {
      // Si el objeto ya está en la lista de favoritos, lo eliminamos
      const updatedFavs = existingFavs.filter((fav) => fav.id !== newFav.id);
      // Actualiza el estado local con el nuevo arreglo que excluye el objeto eliminado
      setFavs(updatedFavs);
      // Guarda el nuevo arreglo completo en el localStorage
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      setLike(!like);
    }
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
            <Heart
              like={like}
            />
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
        <Link 
          className="card__btn-details" 
          to={`/details/${id}`}
          id={id}>
            More
        </Link>  
      </div>
    </div>
  );
};

export default Card;