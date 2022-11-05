import React, { ComponentProps } from 'react';
import useResponsiveBreakpoint from 'hooks/useResponsiveBreakpoint';
import HeightAdjuster, { ICalculationResult } from 'components/HeightAdjuster';
import {
    LAYOUT_HEADER_HEIGHT_XXL,
    LAYOUT_HEADER_HEIGHT_XL,
    LAYOUT_HEADER_HEIGHT_LG,
    LAYOUT_HEADER_HEIGHT_MD,
    LAYOUT_BOTTOM_MENU_HEIGHT,
} from 'constants/styles';

interface IProps extends Omit<ComponentProps<typeof HeightAdjuster>, 'calculate'> {
    calculate?: (layoutHeight: number) => ICalculationResult;
}

const LayoutHeightAdjuster: React.FC<IProps> = ({ calculate, ...tail }) => {
    const responsiveBreakpoint = useResponsiveBreakpoint();

    const viewportHeightToLayoutHeight = (viewportHeight: number): number => {
        if (responsiveBreakpoint.isDesktop) {
            return viewportHeight - LAYOUT_HEADER_HEIGHT_XXL;
        } else if (responsiveBreakpoint.isLaptop) {
            return viewportHeight - LAYOUT_HEADER_HEIGHT_XL;
        } else if (responsiveBreakpoint.isTablet) {
            return viewportHeight - LAYOUT_HEADER_HEIGHT_LG;
        } else {
            return viewportHeight - (LAYOUT_HEADER_HEIGHT_MD + LAYOUT_BOTTOM_MENU_HEIGHT);
        }
    };

    const calculateHeight = (viewportHeight: number) => {
        const layoutHeight = viewportHeightToLayoutHeight(viewportHeight);
        return calculate ? calculate(layoutHeight) : { minHeight: layoutHeight };
    };

    return <HeightAdjuster calculate={calculateHeight} {...tail} />;
};

export default LayoutHeightAdjuster;
