import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '@containers/Layout';
import Home from "@pages/Home";
import SendEmail from "@pages/SendEmail"
import PasswordRecovery from '@pages/PasswordRecovery';
import NewPassword from '@pages/NewPassword';
import CreateAccount from '@pages/CreateAccount';
import MyAccount from '@pages/MyAccount';
import Login from "@pages/Login";
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from "@pages/NotFound";
import AppContext from "@context/AppContext";
import useInitialState from '@hooks/useInitialState';
import "@styles/global.css";


const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path = "/" element = {<Home />} />
                        <Route exact path ="/SendEmail" element = {<SendEmail />} />
                        <Route exact path = "/PasswordRecovery" element = {<PasswordRecovery />} />
                        <Route exact path = "/NewPassword" element = {<NewPassword />} />
                        <Route exact path = "/CreateAccount" element = {<CreateAccount />} />
                        <Route exact path = "/MyAccount" element = {<MyAccount />} />
                        <Route exact path = "/Login" element = {<Login />} />
                        <Route exact path = "/Checkout" element = {<Checkout />} />
                        <Route exact path = "/Orders" element = {<Orders />} />
                        <Route path ="*" element = {<NotFound />} />
                    </Routes>
                </Layout>            
            </BrowserRouter>
        </AppContext.Provider>    
    );
}

export default App;