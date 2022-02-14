import { useEffect } from "react";
import { useSelector } from "react-redux";
import getGreetingData from "../redux/API";
import store from "../redux/configureStore";

store.dispatch(getGreetingData)
const Greeting = () =>{
  const greeting = useSelector((state) => state.greetingData);
  return(
    <div>{greeting}</div>
  )
}

export default Greeting;