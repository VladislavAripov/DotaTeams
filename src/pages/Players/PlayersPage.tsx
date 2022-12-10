import React, { useEffect, useState } from 'react';
import { Input, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { SearchOutlined } from '@ant-design/icons';
import { Page } from 'components/Layout/Page';
import { PageContent } from 'components/Layout/PageContent';
import ContentWrapper from 'ui-kit/ContentWrapper';
import './PlayersPage.less';
import browserHistory from 'App/root/browserHistory';
import { Pages } from 'constants/links';
import { IPlayer, IPlayersListResponse } from 'api/types/v1.0/player';
import { getPlayersList } from 'api/v1.0/players';
import TextButton from 'ui-kit/TextButton';

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

const PlayersPage: React.FC = () => {
    const [searchString, setSearchString] = useState<string>();
    const [playersList, setPlayersList] = useState<IPlayersListResponse>(
        getPlayersList({
            searchName: searchString,
            skip: 0,
            take: 10,
        })
    );

    useEffect(() => {
        setPlayersList(getPlayersList({
            searchName: searchString,
            skip: 0,
            take: 10,
        }));
    }, [searchString]);

    const loadMore = () => {
        const morePlayersList = getPlayersList({
            searchName: searchString,
            skip: playersList.data.length,
            take: 10,
        });
        setPlayersList({
            data: [
                ...playersList.data,
                ...morePlayersList.data,
            ],
            totalCount: morePlayersList.totalCount,
        });
    };

    return (
        <Page>
            <PageContent>
                <div className={'PlayersPage'}>
                    <ContentWrapper widthMode={'FillParent'}>
                        <div className={'search-wrapper'}>
                            <div className={'search-label'}>Поиск</div>
                            <Input.Search
                                placeholder='Введите название или id команды'
                                allowClear
                                enterButton={<SearchOutlined />}
                                style={{ width: '40%' }}
                                size='large'
                                onSearch={(value) => { setSearchString(value); }}
                                onChange={(value) => { setSearchString(value.target.value); }}
                            />
                        </div>
                        <Table
                            style={{ minHeight: 250 }}
                            pagination={false}
                            dataSource={playersList.data}
                            columns={columns}
                            onRow={(item, _) => {
                                return {
                                    onClick: () => {
                                        browserHistory.push(`${Pages.Players.url}/${item.id}`);
                                    },
                                };
                            }}
                        />
                        {
                            playersList.data.length < playersList.totalCount
                            && <div className={'load-more-wrapper'}>
                                <TextButton onClick={loadMore}>Загрузить еще</TextButton>
                            </div>
                        }
                    </ContentWrapper>
                </div>
            </PageContent>
        </Page>
    );
};

export default PlayersPage;
