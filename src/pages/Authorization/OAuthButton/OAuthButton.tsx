import React from 'react';
import './OAuthButton.less';
import { redirect } from 'utils/browser';

export interface IProps {
    icon: string;
    label: string;
    redirectUri: string;
}

const OAuthButton: React.FC<IProps> = (props) => {
    const handleClick = () => {
        redirect(props.redirectUri);
    };

    return (
        <div
            className={'oauth-button'}
            onClick={handleClick}
        >
            <div className={'icon-wrapper'}>
                <img className={'icon'} src={props.icon} alt={''} />
            </div>
            <div className={'label'}>
                {props.label}
            </div>
        </div>
    );
};

export default OAuthButton;
