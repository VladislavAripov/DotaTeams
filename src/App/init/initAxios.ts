import axios from 'axios';
import addCacheBusterInterceptors from 'api/interceptors/cacheBuster';
import addNetworkErrorHandlerInterceptors from 'api/interceptors/networkErrorHandler';

addNetworkErrorHandlerInterceptors(axios);
addCacheBusterInterceptors(axios);
