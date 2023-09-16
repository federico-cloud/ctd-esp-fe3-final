import { createContext, useEffect, useState } from 'react';
import { getDoctors } from '../helpers/getDoctors';

export const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export function DataProvider({ children }) {

  let memorizedfavs = localStorage.getItem("favs")
  const [favs, setFavs] = useState(JSON.parse(memorizedfavs));

  // Establecemos un arreglo vacio para la data
  const [data, setData] = useState([]);

  useEffect(() => {
    setFavs(memorizedfavs)
    if(memorizedfavs === null){
      localStorage.setItem("favs", JSON.stringify([]))
    }
  }, [])
  

  // Obtenemos los datos de la API https://jsonplaceholder.typicode.com/users
  useEffect(() => {
    async function fetchDoctors() {
      try {
        const data = await getDoctors();
        setData(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    }
    fetchDoctors();
  }, [data]);


  return (
    <DataContext.Provider value={{ data, favs, setFavs }}>
      {children}
    </DataContext.Provider>
  );
}