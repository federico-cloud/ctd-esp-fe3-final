import { useContext, useState } from "react"
import "../css/Contact.css"
import { ThemeContext } from "../context/ThemeContext"
import { validateForm } from "../helpers/validateForm"
import { Toaster, toast } from "sonner"

export const Contact = () => {
  
  const { theme } = useContext(ThemeContext)
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(true)
  
  const [data, setData] = useState({
    'email': '',
    'name': ''
  })  

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, name } = e.target;
  
    const isFormValid = validateForm(email.value, name.value);
    console.log(isFormValid)

    if (!isFormValid) {
      setError(false);
      setData({
        email: email.value,
        name: name.value,
      });
      toast.success("Message has been sent");
    } else {
      setError(true);
      toast.error("Email is invalid or name is too short");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };  
  

  return (
    <div className={`contact ${theme}`}>
      <h2>Contact</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-data">
          <div className="form-data__form-inputs">
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="text" name="email" id="email" />
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} type="text" name="name" id="name" />
          </div>
        </div>
        <button type="submit">
          Send
          <Toaster/>
        </button>
      </form>
    </div>
  )
}
