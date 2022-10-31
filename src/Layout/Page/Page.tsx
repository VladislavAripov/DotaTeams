import React from 'react';
import './Page.scss';

export interface IPageProps {
}

export const Page: React.FC<React.PropsWithChildren<IPageProps>> = (props) => {
    return (
        <div className={'page'}>
            <div className={'header'}>
                Шапка
            </div>
            <div className={'body'}>
                {
                    props.children
                }
            </div>
            <div className={'footer'}>
                Футер
            </div>
        </div>
    );
};
