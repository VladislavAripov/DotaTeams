import React, { PropsWithChildren } from 'react';
import './ContentWrapper.scss';

export type WidthMode = 'FitContent' | 'FillParent';

export interface IProps {
    widthMode: WidthMode;
}

const ContentWrapper: React.FC<PropsWithChildren<IProps>> = ({ widthMode = 'FillParent', children }) => {
    return (
        <div className={`content-wrapper ${widthMode === 'FitContent' ? 'fit-content' : 'fill-parent'}`}>
            {children}
        </div>
    );
};

export default ContentWrapper;
