import LayoutCom from './components/LayoutCom'
import LoginPage from './pages/LoginPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path ="/login" element = {<LoginPage/>} />
      </Routes>
    </Router>
  )
};

export default App;