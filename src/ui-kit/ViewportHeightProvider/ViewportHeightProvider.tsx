import React, { useEffect, useState, createContext } from 'react';
import throttle from 'lodash/throttle';

export const ViewportHeightContext = createContext(window.innerHeight);

const ViewportHeightProvider: React.FC = ({ children }) => {
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = throttle(() => setViewportHeight(window.innerHeight), 200, { leading: false });
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <ViewportHeightContext.Provider value={viewportHeight}>{children}</ViewportHeightContext.Provider>;
};

export default ViewportHeightProvider;
