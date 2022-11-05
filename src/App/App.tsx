import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ResponsiveBreakpointProvider from 'ui-kit/ResponsiveBreakpointProvider';
import ViewportHeightProvider from 'ui-kit/ViewportHeightProvider';
import MainPage from 'pages/Main';
import CommandsPage from 'pages/Commands';
import { Pages } from 'constants/links';
import './App.scss';

const App: React.FC = () => {
    return (
        <ResponsiveBreakpointProvider>
            <ViewportHeightProvider>
                <Switch>
                    <Route path={Pages.Commands.url} component={CommandsPage} />
                    <Route path={Pages.Main.url} component={MainPage} />
                </Switch>
            </ViewportHeightProvider>
        </ResponsiveBreakpointProvider>
    );
};

export default App;
