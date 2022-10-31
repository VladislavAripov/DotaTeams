import { AxiosRequestConfig, AxiosInstance } from 'axios';

// https://www.itworld.com/article/2693447/ajax-requests-not-executing-or-updating-in-internet-explorer-solution.html#:~:text=Internet%20Explorer%2C%20in%20its%20wisdom,cache%20expires%20on%20that%20object
const injectCacheBuster = (config: AxiosRequestConfig) => {
    if (config.method === 'GET' || config.method === 'get') {
        const params = (config.params as Record<string, unknown>) || {};
        config.params = {
            ...params,
            'cache-buster': Date.now(),
        };
    }

    return config;
};

const addInterceptors = (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.request.use(injectCacheBuster);
};

export default addInterceptors;
