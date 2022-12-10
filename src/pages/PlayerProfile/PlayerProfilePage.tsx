import React from 'react';
import { Tabs } from 'antd';
import { useParams } from 'react-router-dom';
import { Page } from 'components/Layout/Page';
import { PageContent } from 'components/Layout/PageContent';
import ContentWrapper from 'ui-kit/ContentWrapper';
import './PlayerProfilePage.less';
import { playersList } from 'api/v1.0/mocks';
import GeneralTab from './components/GeneralTab';
import InfoBlock from './components/InfoBlock';
import HeroesTab from './components/HeroesTab';
import MatchesTab from './components/MatchesTab';
import ChatTab from './components/ChatTab';

const PlayerProfilePage: React.FC = () => {
    const playerId = Number(useParams<{ playerId: string }>().playerId);
    const playerInfo = playersList.find((player) => player.id === playerId) ?? null;

    if (playerInfo == null) {
        return (
            <div>
                Страница игрока не найдена
            </div>
        );
    }

    return (
        <Page>
            <PageContent>
                <div className={'PlayerProfilePage'}>
                    <ContentWrapper widthMode={'FillParent'}>
                        <InfoBlock>
                            <div className={'player-info'}>
                                <div className={'player-avatar'}>
                                    <img src={playerInfo.avatar} alt={''} />
                                </div>
                                <div className={'player-name-and-buttons'}>
                                    <div className={'player-name'}>
                                        {
                                            playerInfo.name
                                        }
                                    </div>
                                    <div className={'player-buttons'}>
                                    </div>
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
                                <div className={'rang-icon'}>
                                    <img src={'https://s.starladder.com/uploads/discipline_tier/icon/39/c0a26c07db26684d848a5b3f6365d3e8.png'} alt={''} />
                                </div>
                            </div>
                        </InfoBlock>
                        <Tabs
                            items={[
                                {
                                    key: 'general',
                                    label: 'Обзор',
                                    tabKey: 'general',
                                    children: <GeneralTab playerId={playerId} />,
                                },
                                {
                                    key: 'heroes',
                                    label: 'Герои',
                                    tabKey: 'heroes',
                                    children: <HeroesTab playerId={playerId} />,
                                },
                                {
                                    key: 'matches',
                                    label: 'Матчи',
                                    tabKey: 'matches',
                                    children: <MatchesTab playerId={playerId} />,
                                },
                                {
                                    key: 'chat',
                                    label: 'Чат',
                                    tabKey: 'chat',
                                    children: <ChatTab playerId={playerId} />,
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
