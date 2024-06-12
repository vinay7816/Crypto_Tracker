
import './App.css';
import Dashboard from './Pages/DashboardPage/Dashboard';
import Home from './Pages/Homepage/Home';
import Header from './components/Common/Header/Header';
import Sidebar from './components/Common/Header/Sidebar';
import Landingpage from './components/LandingPage/Landingpage';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Loader from './components/Common/Loader/Loader';
import Coins from './Pages/Coins/Coins';
import Comparepage from './Pages/Comparepage/Comparepage';
import Watchlist from './Pages/Watchlist';

function App() {
  return (
   
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/dashboard" element={ <Dashboard/>}/>
          <Route exact path="/coin/:id" element={<Coins/>} />
          <Route exact path="/compare" element={<Comparepage/>}/>
          <Route exact path="/watchlist" element={<Watchlist/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
