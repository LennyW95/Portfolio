import React from 'react';
import { Route } from 'react-router-dom';
import { Footer } from '../components/Footer';
import Header from '../components/Header';

const PublicRoute = ({
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        <div>
            <Header />
            <Component {...props} />
            <Footer />
        </div>
    )} />
);

export default PublicRoute;