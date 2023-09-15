export const validateForm = (email, name) => {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let error = false
  
  emailRegex.test(email) ? '' : error = true
  name.length > 4 ? '' : error = true
  
  return error
  
}