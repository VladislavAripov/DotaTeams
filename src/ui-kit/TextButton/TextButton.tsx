import React, { HTMLAttributes } from 'react';
import './TextButton.less';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
    active?: boolean;
}

const TextButton: React.FC<IProps> = ({ className, active, children, ...tail }) => {
    return (
        <div
            className={`text-button ${className ? className : ''}`}
            {...tail}
        >
            <span className={`text ${active ? 'text-active' : ''}`}>
                {children}
            </span>
        </div>
    );
};

export default TextButton;
