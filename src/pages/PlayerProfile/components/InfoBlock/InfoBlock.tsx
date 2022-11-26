import React from 'react';
import './InfoBlock.less';

export interface IProps {
    label?: string;
}

const InfoBlock: React.FC<React.PropsWithChildren<IProps>> = (props) => {
    return (
        <div className={'InfoBlock'}>
            {props.label && <div className={'info-block-label'}>{props.label}</div>}
            <div className={'info-block-info'}>{props.children}</div>
        </div>
    );
};

export default InfoBlock;
