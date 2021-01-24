import React, {useContext} from 'react'
import { Switch, Route } from 'react-router-dom';
import {GlobalState} from '../../GlobalState';
import About from './About/About';
import Products from './Products/Products';
import NotFound from './Utils/Not-found/NotFound';
import Login from './Auth/Login';
import Register from './Auth/Register';
import CreateProduct from './CreateProduct/CreateProduct';

function Pages() {

    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    return (
        <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/about" component={About} />

            <Route path="/login" component={ isLogged ? NotFound : Login} />
            <Route path="/register" component={ isLogged ? NotFound : Register} />

            <Route path="/create_product" component={ isAdmin ? CreateProduct : NotFound } />
            <Route path="/edit_product/:id" component={ isAdmin ? CreateProduct : NotFound } />

            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Pages
