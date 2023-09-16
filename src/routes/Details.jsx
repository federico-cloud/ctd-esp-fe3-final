import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import "../css/Details.css"
import { DataContext } from "../context/DataContext"

export const Details = () => {

  const { theme } = useContext(ThemeContext)
  const { data } = useContext(DataContext)
  const [doctor, setDoctor] = useState({})
  const idUrl = parseInt(location.pathname.split("/").pop())
  
  useEffect(() => {
    data.map(doctor =>{
      if (doctor.id === idUrl) {
        setDoctor(doctor)
      }
    })
  },[data])

  return (
    <div className={`details ${theme}`}>
      <h2>User Info</h2>
      <div className="card-details">
        <p><strong>ID:</strong>{doctor.id}</p>
        <p><strong>Name:</strong>{doctor.name}</p>
        <p><strong>Email:</strong>{doctor.email}</p>
        <p><strong>Phone:</strong>{doctor.phone}</p>
        <p><strong>Web site:</strong>{doctor.website}</p>
      </div>
    </div>
  )
}
