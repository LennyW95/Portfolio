import React from 'react';
import { Route } from 'react-router-dom';
import { Footer } from '../components/Footer';
import Header from '../components/Header';

const PublicRoute = ({
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        <div class="page-container">
            <div class="content-wrap">
                <Header />
                <Component {...props} />
            </div>
            <Footer />
        </div>
    )} />
);

export default PublicRoute;