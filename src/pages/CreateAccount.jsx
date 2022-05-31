import React from 'react';
import "@styles/CreateAccount.scss"

const MyAccount = () => {
    return (
        <div className="login">
        <div className="form-container">
            <h1 className="title"> My account</h1>
            <form action="/" className="form">
                <div>
                    <label for="name" className="label">Name</label>
                    <input type="text" id="name" placeholder="Ronoroa Zoro" className="input input-name" />
                    <label for="email" className="label">Email Adress</label>
                    <input type="text" id="email" placeholder="example@onepiece.com" className="input input-email" />                
                    <label for="new-password" className="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password" />
                 </div>
                 <input type="submit" value="Create" className="primary-button login-button" />
            </form>
        </div>
    </div>
    );
}

export default MyAccount;