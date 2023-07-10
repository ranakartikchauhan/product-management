import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Product from './pages/Product';
import ProductView from './pages/ProductView';
import SignInPage from './pages/SignInPage';
import RegistrationForm from './pages/RegisterForm';
import Header from './components/Header';
import Auth from './middleware/Auth';
import AboutUsPage from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path='/' element={<HomePage />}></Route>

            <Route exact path='/product' element={<Auth Component={Product}/>} > </Route>
            <Route exact path='/product/view/:productId' element={< ProductView />}></Route>
            <Route exact path='/sign-in' element={< SignInPage />}></Route>
            <Route exact path='/register' element={< RegistrationForm />}></Route>
            <Route exact path='/about-us' element={< AboutUsPage />}></Route>

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
