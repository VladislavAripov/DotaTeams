import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ResponsiveBreakpointProvider from 'ui-kit/ResponsiveBreakpointProvider';
import ViewportHeightProvider from 'ui-kit/ViewportHeightProvider';
import AuthorizationPage from 'pages/Authorization';
import CommandsPage from 'pages/Commands';
import PlayerProfilePage from 'pages/PlayerProfile';
import PlayersPage from 'pages/Players';
import TournamentsPage from 'pages/Tournaments';
import ProfilePage from 'pages/Profile';
import MainPage from 'pages/Main';
import CommandProfilePage from 'pages/CommandProfile';
import { Pages } from 'constants/links';
import './App.less';

const App: React.FC = () => {
    return (
        <ResponsiveBreakpointProvider>
            <ViewportHeightProvider>
                <Switch>
                    <Route path={Pages.Authorization.url} component={AuthorizationPage} />
                    <Route path={`${Pages.Commands.url}/:commandId`} component={CommandProfilePage} />
                    <Route path={Pages.Commands.url} component={CommandsPage} />
                    <Route path={`${Pages.Players.url}/:playerId`} component={PlayerProfilePage} />
                    <Route path={Pages.Players.url} component={PlayersPage} />
                    <Route path={Pages.Tournaments.url} component={TournamentsPage} />
                    <Route path={Pages.Profile.url} component={ProfilePage} />
                    <Route path={Pages.Main.url} component={MainPage} />
                </Switch>
            </ViewportHeightProvider>
        </ResponsiveBreakpointProvider>
    );
};

export default App;
