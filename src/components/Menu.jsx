import React from 'react';
import "@styles/Menu.scss";

const Menu = () => {
    return (
        <div class="mobile-menu">
        <ul>
            <li>
                <a href="/">CATEGORIES</a>
            </li>        
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
        <ul>
            <li>
                <a href="/">My orders</a>
            </li>        
            <li>
                <a href="/">My account</a>
            </li>   
        </ul>
        <ul>
            <li>
                <a href="/" class="email">camilayokoo@gmail.com</a>
            </li>        
            <li>
                <a href="/" class="sign-out">Sign out</a>
            </li>   
        </ul>
    </div>
    );
}

export default Menu;