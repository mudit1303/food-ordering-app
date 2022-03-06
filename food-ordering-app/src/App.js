import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom' 
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/menu" element={<Menu></Menu>} ></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
