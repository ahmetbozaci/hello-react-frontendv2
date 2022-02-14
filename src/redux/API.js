import  { loadGreetingAction } from './greeting';

const baseURL = `${process.env.REACT_APP_API_URL}/greetings`;
console.log(baseURL)
const getGreetingData = async (dispatch) => {
  const response = await fetch(baseURL);
  const data = await response.json();
  dispatch(loadGreetingAction(data));
  
}
export default getGreetingData;