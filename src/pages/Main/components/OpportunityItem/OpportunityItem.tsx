import './OpportunityItem.less';
import React from 'react';

export interface IProps {
    label: string;
    icon: string;
}

const OpportunityItem: React.FC<IProps> = ({ label, icon }: IProps) => {
    return (
        <div className={'opportunity-item'}>
            <div className={'opportunity-icon'}>
                <img alt={''} src={icon} />
            </div>
            <div className={'opportunity-label'}>
                {label}
            </div>
        </div>
    );
};

export default OpportunityItem;
