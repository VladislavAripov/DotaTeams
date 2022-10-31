import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollingToHash = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const elementId = location.hash.replace('#', '');
            document.getElementById(elementId)?.scrollIntoView();
        }
    }, [location]);
};

export default useScrollingToHash;
