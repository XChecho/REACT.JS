import React from 'react';
import "@styles/Checkout.scss";
import flechita from "@icons/flechita.svg";
import close from "@icons/icon_close.png";

const Checkout = () => {
    return (
        <aside class="product-detail">
        <div class="title-container">
            <img src={flechita} alt="arrow" />
            <p class="title">My order</p>
        </div>
        <div class="my-order">    
            <div class="my-order-content">
                <div class="shopping-car">
                    <figure>
                        <img src="https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="piece" />
                    </figure>
                    <p>Piece of chess</p>
                    <p>$30,00</p>
                    <img src={close} alt="close" />
                </div>        
                <div class="shopping-car">
                    <figure>
                        <img src="https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="piece" />
                    </figure>
                    <p>Piece of chess</p>
                    <p>$30,00</p>
                    <img src={close} alt="close" />
                </div>        
                <div class="shopping-car">
                    <figure>
                        <img src="https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="piece" />
                    </figure>
                    <p>Piece of chess</p>
                    <p>$30,00</p>
                    <img src={close} alt="close" />
                </div>
                <div class="order">
                        <p>
                            <span>TOTAL</span>
                        </p>
                        <p>$560,00</p>
                </div>                    
                <button class="primary-button">Check Out</button>                    
             </div>
        </div>
    </aside>
    );
}

export default Checkout;