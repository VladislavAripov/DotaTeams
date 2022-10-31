import './index.scss';
import './App/init/initAxios';
import './App/init/initDateTime';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import App from 'App';
import browserHistory from 'App/root/browserHistory';
import ErrorBoundary from 'components/ErrorBoundary';
import { initApp } from 'features/app/actionCreators';
import { store } from 'App/root/store';

document.body.classList.add('theme__default');

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <Router history={browserHistory}>
                <App />
            </Router>
        </Provider>
    </ErrorBoundary>,
    document.getElementById('root')
);

store.dispatch(initApp());
