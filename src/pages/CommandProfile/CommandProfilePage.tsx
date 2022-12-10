import React from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Page } from 'components/Layout/Page';
import { PageContent } from 'components/Layout/PageContent';
import ContentWrapper from 'ui-kit/ContentWrapper';
import './CommandProfilePage.less';
import { commandsList } from 'api/v1.0/mocks';
import browserHistory from 'App/root/browserHistory';
import { Pages } from 'constants/links';
import { IPlayer } from 'api/types/v1.0/player';
import InfoBlock from './components/InfoBlock';

const columns: ColumnsType<IPlayer> = [
    {
        title: '#',
        dataIndex: 'number',
        key: 'number',
        align: 'center',
        width: '5%',
        render: (_, __, index) => index + 1,
    },
    {
        title: 'Имя игрока',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        width: '35%',
    },
    {
        title: 'Регион',
        dataIndex: 'region',
        key: 'region',
        align: 'center',
        width: '12%',
    },
    {
        title: 'Доля побед',
        dataIndex: 'winsRate',
        key: 'winsRate',
        align: 'center',
        width: '12%',
    },
    {
        title: 'Побед',
        dataIndex: 'winsMatchesCount',
        key: 'winsMatchesCount',
        align: 'center',
        width: '12%',
    },
    {
        title: 'Поражений',
        dataIndex: 'loseMatchesCount',
        key: 'loseMatchesCount',
        align: 'center',
        width: '12%',
    },
    {
        title: 'Всего',
        dataIndex: 'totalMatchesCount',
        key: 'totalMatchesCount',
        align: 'center',
        width: '12%',
    },
];

const CommandProfilePage: React.FC = () => {
    const commandId = Number(useParams<{ commandId: string }>().commandId);
    const commandInfo = commandsList.find((command) => command.id === commandId) ?? null;

    if (commandInfo == null) {
        return (
            <div>
                Страница команды не найдена
            </div>
        );
    }

    return (
        <Page>
            <PageContent>
                <div className={'CommandProfilePage'}>
                    <ContentWrapper widthMode={'FillParent'}>
                        <InfoBlock>
                            <div className={'player-info'}>
                                <div className={'player-avatar'}>
                                    <img src={commandInfo.avatar} alt={''} />
                                </div>
                                <div className={'player-name-and-buttons'}>
                                    <div className={'player-name'}>
                                        {
                                            commandInfo.title
                                        }
                                    </div>
                                    <div className={'player-buttons'}>
                                    </div>
                                </div>
                            </div>
                        </InfoBlock>
                        <InfoBlock
                            label={'Состав команды'}
                        >
                            <Table
                                style={{ minHeight: 250 }}
                                pagination={false}
                                dataSource={commandInfo.playersList}
                                columns={columns}
                                onRow={(item, _) => {
                                    return {
                                        onClick: () => {
                                            browserHistory.push(`${Pages.Players.url}/${item.id}`);
                                        },
                                    };
                                }}
                            />
                        </InfoBlock>
                    </ContentWrapper>
                </div>
            </PageContent>
        </Page>
    );
};

export default CommandProfilePage;
