import 'antd/dist/antd.css';
import './index.css';
import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile';
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
import BlogType from './pages/BlogType';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path ="/login" element = {<LoginPage/>} />
        <Route path ="/register" element = {<RegisterPage/>} />
        <Route path ="/blog/:blogId" element = {<Blog/>}/>
        <Route path ="/type/:blogtype" element = {<BlogType/>} />
      </Routes>
    </Router>
  )
};

export default App;