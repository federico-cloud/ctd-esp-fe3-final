export const getDoctors = async () => {
  const URL = 'https://jsonplaceholder.typicode.com/users';
  const resp = await fetch(URL);
  const data = await resp.json();
  return data;
}