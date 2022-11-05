import React from 'react';
import OpportunityItem from '../OpportunityItem';
import './OpportunitiesPanel.scss';
import communicate from './assets/communicate.svg';
import training from './assets/training.svg';
import statistics from './assets/statistics.svg';
import calendar from './assets/calendar.svg';
import ai from './assets/ai.svg';
import progress from './assets/progress.svg';

const OpportunitiesPanel: React.FC = () => {
    return (
        <div className={'opportunities-wrapper'}>
            <div className={'opportunities-panel'}>
                <OpportunityItem
                    icon={communicate}
                    label={'Общайтесь'}
                />
                <OpportunityItem
                    icon={training}
                    label={'Тренируйтесь'}
                />
                <OpportunityItem
                    icon={statistics}
                    label={'Изучайте статистику матчей'}
                />
                <OpportunityItem
                    icon={calendar}
                    label={'Будьте профи - планируйте свое игровое время'}
                />
                <OpportunityItem
                    icon={ai}
                    label={'Получайте детальную статистику по своим матчам'}
                />
                <OpportunityItem
                    icon={progress}
                    label={'Становитесь лучше'}
                />
            </div>
        </div>
    );
};

export default OpportunitiesPanel;
