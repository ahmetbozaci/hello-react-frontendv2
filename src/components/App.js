import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Greeting from './Greeting';
import { Provider } from "react-redux";
import store from '../redux/configureStore';

const App = () => (
  <Provider store={store}>
  <Router>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </Router>
  </Provider>
)

export default App;
