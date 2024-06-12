
import { Link } from 'react-router-dom'
import Button from '../Butoon/Button'
import './Header.css'
import Sidebar from './Sidebar'
const Header = () => {
  return (
    <>
    <div className='navbar'>
    <div>
      <h1 className='header'>Crypto Tracker</h1>
    </div>
    <div className='nav-components'>
    <Link to="/">
            <p className="link">Home</p></Link>
          <Link to="/compare"><p className="link">Compare</p></Link>
          <Link to="/watchlist"><p className="link">Watchlist</p></Link>
          <Link to="/dashboard"><Button text={"Dashboard"} onClick={()=>console.log("clicked")}/></Link>
    </div>
   
    <div className='sidebar'>
       <Sidebar/>
    </div>
    </div>
    </>
  )
}

export default Header
