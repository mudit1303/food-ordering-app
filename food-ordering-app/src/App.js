import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom' 
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Home></Home>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
