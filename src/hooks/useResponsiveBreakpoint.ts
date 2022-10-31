import { useContext } from 'react';
import { ResponsiveBreakpointContext, ResponsiveBreakpointType } from 'ui-kit/ResponsiveBreakpointProvider';

export interface IResponsiveBreakpoint {
    breakpoint: ResponsiveBreakpointType;
    isSmallMobile: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isLaptop: boolean;
    isDesktop: boolean;
}

const useResponsiveBreakpoint = () => {
    const breakpoint = useContext(ResponsiveBreakpointContext);
    const isSmallMobile = breakpoint <= ResponsiveBreakpointType.xs;
    const isMobile = breakpoint <= ResponsiveBreakpointType.sm;
    const isTablet = !isMobile && breakpoint <= ResponsiveBreakpointType.lg;
    const isLaptop = !isMobile && !isTablet && breakpoint === ResponsiveBreakpointType.xl;
    const isDesktop = !isMobile && !isTablet && !isLaptop;

    return { breakpoint, isSmallMobile, isMobile, isTablet, isLaptop, isDesktop };
};

export default useResponsiveBreakpoint;
