import axios from "axios";


const baseURL = process.env.REACT_APP_API
const signIn_API = async (username, password) => {
  const datos = {
    username: username,
    password: password
  };
  
  const result = await axios.post(`${baseURL}/user/signin`, datos);
  return result;
}

const saveToken = async (token) => {
    
  localStorage.setItem("token", token);
  console.log(await readToken());
}
const readToken = async () => {
  return localStorage.getItem("token");
}

const signIn = async (username, password) => {

  const result = await signIn_API(username, password);
 
  if (result) {
   
    saveToken(result.data.token);
    return true;
  }
  return false;
}

export { signIn, readToken };