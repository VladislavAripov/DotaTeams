import React, { createContext, useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

export enum ResponsiveBreakpointType {
    xs = 1,
    sm,
    md,
    lg,
    xl,
    xxl,
}

const calculateResponsiveBreakpoint = (width: number): ResponsiveBreakpointType => {
    if (width <= 576) {
        return ResponsiveBreakpointType.xs;
    } else if (width >= 576 && width <= 767) {
        return ResponsiveBreakpointType.sm;
    } else if (width >= 768 && width <= 991) {
        return ResponsiveBreakpointType.md;
    } else if (width >= 992 && width <= 1199) {
        return ResponsiveBreakpointType.lg;
    } else if (width >= 1200 && width <= 1599) {
        return ResponsiveBreakpointType.xl;
    } else {
        return ResponsiveBreakpointType.xxl;
    }
};

export const ResponsiveBreakpointContext = createContext<ResponsiveBreakpointType>(
    calculateResponsiveBreakpoint(window.innerWidth)
);

const ResponsiveBreakpointProvider: React.FC = ({ children }) => {
    const [breakpoint, setBreakpoint] = useState<ResponsiveBreakpointType>(
        calculateResponsiveBreakpoint(window.innerWidth)
    );

    useEffect(() => {
        const handleResize = throttle(() => setBreakpoint(calculateResponsiveBreakpoint(window.innerWidth)), 200, {
            leading: false,
        });

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <ResponsiveBreakpointContext.Provider value={breakpoint}>{children}</ResponsiveBreakpointContext.Provider>;
};

export default ResponsiveBreakpointProvider;
