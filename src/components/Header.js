import React from 'react'
import './Header.css'
import { Search } from '@material-ui/icons'
import { ShoppingBasket } from '@material-ui/icons'
import {Link} from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { auth } from '../firebase'
// import Amazon from './../images/amazon-logo.jpg'
const Header = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication = ()=>{
        if(user){
            auth.signOut();
        }else{

        }
    }
  return (
    <div className='header'>
        <Link to="/">

    <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="amazon-logo" className='header__logo' />
        </Link>
    <div className="header__search">
    <input type="text" className='header__searchInput' />
        <Search className='header__searchIcon'/>
    </div>
    
    
    <div className="header__nav">

    <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="header_option">
        <span className="header__optionLine1">
            Hello {!user ? 'Guest': user.email}
        </span>
        <span className='header__optionLine2'>
            {user ? 'Sign Out':'Sign In'}
        </span>
        </div>
    </Link>
    <Link to="/orders">

        <div className="header_option">
        <span className="header__optionLine1">
            Returns
        </span>
        <span className='header__optionLine2'>
            Orders
        </span>
        </div>
       </Link>
        <div className="header_option">
        <span className="header__optionLine1">
            Your
        </span>
        <span className='header__optionLine2'>
            Prime
        </span>
        </div>

        <Link to="/checkout">

        <div className="header__optionBasket">
        <ShoppingBasket/>
            <span className='header__optionLine2 header__basketCount'>{basket?.length}</span>

        </div>
        </Link>



    </div>
    </div>
  )
}

export default Header