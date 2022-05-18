import 'antd/dist/antd.css';
import './index.css';
import LoginPage from './pages/LoginPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Homepage from './pages/Homepage';
import RegisterPage from './pages/RegisterPage';
import Blog from './pages/Blog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path ="/login" element = {<LoginPage/>} />
        <Route path ="/register" element = {<RegisterPage/>} />
        <Route path ="/blog/:blogId" element = {<Blog/>}/>
      </Routes>
    </Router>
  )
};

export default App;