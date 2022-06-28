import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';
import { AboutMePage } from '../components/AboutMePage';
import { ContactMePage } from '../components/ContactMePage';
import { ServicesPage } from '../components/ServicesPage';
import { PortfolioPage } from '../components/PortfolioPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={DashboardPage} exact={true} />
                <PublicRoute path="/about" component={AboutMePage} exact={true} />
                <PublicRoute path="/contact" component={ContactMePage} exact={true} />
                <PublicRoute path="/services" component={ServicesPage} exact={true} />
                <PublicRoute path="/portfolio" component={PortfolioPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;