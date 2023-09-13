import { useEffect, useState } from "react";
import Card from "../components/Card";
import '../css/Home.css'

export const Home = () => {
    
  const getDoctors = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/users';
    const resp = await fetch(URL);
    const data = await resp.json();
    return data;
  }

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {

    //Obtenemos los doctores
    const fetchData = async () => {
      const data = await getDoctors();
      setDoctors(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <h2>HOME</h2>
      <div className='doctorsContainer'>
        {doctors.map(({id, name, address }) => {
          return ( 
              <Card 
                key={id} 
                id={id} 
                name={name} 
                city={address.city} 
              />
            )})}
      </div>
    </>
  )
}

