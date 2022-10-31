import React, { HTMLAttributes } from 'react';
import useViewportHeight from 'hooks/useViewportHeight';

export interface ICalculationResult {
    height?: number | string;
    minHeight?: number | string;
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
    calculate?: (viewportHeight: number) => ICalculationResult;
    onSetRef?: () => React.RefObject<HTMLDivElement>;
}

const HeightAdjuster: React.FC<IProps> = ({ calculate, onSetRef, style, ...tail }) => {
    const viewportHeight = useViewportHeight();
    const calculatedStyles = calculate ? calculate(viewportHeight) : ({ height: viewportHeight });

    return (
        <div
            className="HeightAdjuster"
            style={{ ...style, ...calculatedStyles }}
            ref={onSetRef && onSetRef()}
            {...tail}
        />
    );
};

export default HeightAdjuster;
