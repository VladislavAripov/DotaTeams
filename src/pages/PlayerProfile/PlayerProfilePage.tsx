import React from 'react';
import { Tabs } from 'antd';
import { Page } from 'components/Layout/Page';
import { PageContent } from 'components/Layout/PageContent';
import ContentWrapper from 'ui-kit/ContentWrapper';
import './PlayerProfilePage.less';
import GeneralTab from './components/GeneralTab';
import InfoBlock from './components/InfoBlock';

const PlayerProfilePage: React.FC = () => {
    return (
        <Page>
            <PageContent>
                <div className={'PlayerProfilePage'}>
                    <ContentWrapper widthMode={'FillParent'}>
                        <InfoBlock>
                            <div className={'player-info'}>
                                <div className={'player-avatar'}>
                                    <img src={'https://dota2.ru/img/heroes/juggernaut/portrait.jpg'} alt={''} />
                                </div>
                                <div className={'rate-row'}>
                                    <div className={'wins field-with-label'}>
                                        <div className={'label'}>
                                            Победы
                                        </div>
                                        <div className={'value'}>
                                            {345}
                                        </div>
                                    </div>
                                    <div className={'lose field-with-label'}>
                                        <div className={'label'}>
                                            Поражения
                                        </div>
                                        <div className={'value'}>
                                            {256}
                                        </div>
                                    </div>
                                    <div className={'wins-rate field-with-label'}>
                                        <div className={'label'}>
                                            Доля побед
                                        </div>
                                        <div className={'value'}>
                                            {65}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </InfoBlock>
                        <Tabs
                            items={[
                                {
                                    key: 'general',
                                    label: 'Обзор',
                                    tabKey: 'general',
                                    children: <GeneralTab playerId={1} />,
                                },
                                {
                                    key: 'heroes',
                                    label: 'Герои',
                                    tabKey: 'heroes',
                                },
                                {
                                    key: 'matches',
                                    label: 'Матчи',
                                    tabKey: 'matches',
                                },
                            ]}
                            defaultActiveKey={'general'}
                        />
                    </ContentWrapper>
                </div>
            </PageContent>
        </Page>
    );
};

export default PlayerProfilePage;
