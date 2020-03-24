import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCartHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selector'

import "./header.style.scss";

// o createStructuresdSelector funciona para em vez de passar o state para cada selector, chamamos essa função que recebe os selectors e já passa o state pra
const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden: selectCartHidden
})

const Header = ({currentUser, hidden}) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option sign in">
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
        :
        <Link className='option' to='/signin'> SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {
      hidden ? null : <CartDropdown /> 
    }
  </div>
);


export default connect(mapStateToProps)(Header);
