import { useSelector } from 'react-redux';
import getGreetingData from '../redux/API';
import store from '../redux/configureStore';
import './Greeting.css';

store.dispatch(getGreetingData);
const Greeting = () => {
  const greeting = useSelector((state) => state.greetingData);
  return <p>{greeting}</p>;
};

export default Greeting;
