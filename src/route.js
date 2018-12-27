import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './component/Header/header';
import ShopPage from './component/Shop/shop.js';
import Login from './component/Login/Login';
import ShopSinglePage from './component/shopsingle/ShopSingle';
import Addtocart from './component/addtocart/AddtoCart';
import Home from './component/Home/home.js'

const PageNotFound = () => (
    <div>
        <h1>404 !</h1><p>Page not Found</p>
    </div>
)



const Routes = () => {
    return (

        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/shop" component={ShopPage} exact ></Route>
                    <Route path="/shop/:id" component={ShopSinglePage} ></Route>


                    <Route path="/addtocart" component={Addtocart}></Route>

                    <Route path="/Login" component={Login} ></Route>


                    <Route component={PageNotFound}></Route>
                </Switch>
            </div>
        </BrowserRouter>

    )

}
export default Routes;