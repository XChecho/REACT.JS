import React, { useState, useContext} from 'react';
import "@styles/Header.scss";
import MenuProfile from "@components/MenuProfile";
import AppContext from "@context/AppContext";
import MyOrder from "@containers/MyOrder";
import menu from "@icons/icon_menu.svg"
import logo from'@logos/logo_yard_sale.svg';
import shoppingcart from "@icons/icon_shopping_cart.svg";

const Header = () => {
    const [toggle, setToggle] = useState (false);
    const [toogleOrders, setToogleOrders] =  useState(false);
    const {state} = useContext(AppContext);
    
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav>
        <img src={menu} alt="menu" className="menu" />  
        <div className="navbar-left">
            <img src={logo} alt="logo" className="nav-logo" /> 
            <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div className="navbar-right">
            <ul>
                <li className="navbar-email" onClick={handleToggle}>
                    checho@example.com
                </li>
                <li className="navbar-shopping-car" onClick={() => setToogleOrders(!toogleOrders)}>
                    <img src={shoppingcart} alt="shopping cart" />
                    {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                </li>
            </ul>  
        </div>
        {toggle && <MenuProfile/>}   
        {toogleOrders && <MyOrder />} 
    </nav>
    );
}

export default Header;