import React from 'react';
import ResponsiveBreakpointProvider from 'ui-kit/ResponsiveBreakpointProvider';
import ViewportHeightProvider from 'ui-kit/ViewportHeightProvider';
import { MainPage } from 'pages/Main';

const App: React.FC = () => {
    return (
        <ResponsiveBreakpointProvider>
            <ViewportHeightProvider>
                <MainPage />
            </ViewportHeightProvider>
        </ResponsiveBreakpointProvider>
    );
};

export default App;
