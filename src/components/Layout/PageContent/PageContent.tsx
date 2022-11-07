import React from 'react';
import './PageContent.less';

export interface IPageContentProps {
}

export const PageContent: React.FC<React.PropsWithChildren<IPageContentProps>> = (props) => {
    return (
        <div className={'page-content-wrapper'}>
            {props.children}
        </div>
    );
};
