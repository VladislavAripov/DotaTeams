import React, { useEffect, useState } from 'react';
import { Table, Input } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { SearchOutlined } from '@ant-design/icons';
import { Page } from 'components/Layout/Page';
import { PageContent } from 'components/Layout/PageContent';
import ContentWrapper from 'ui-kit/ContentWrapper';
import './CommandsPage.less';
import { ICommand, ICommandsListResponse } from 'api/types/v1.0/command';
import { getCommandsList } from 'api/v1.0/commands';
import TextButton from 'ui-kit/TextButton';
import browserHistory from 'App/root/browserHistory';
import { Pages } from 'constants/links';

const columns: ColumnsType<ICommand> = [
    {
        title: '#',
        dataIndex: 'number',
        key: 'number',
        align: 'center',
        width: '5%',
        render: (_, __, index) => index + 1,
    },
    {
        title: 'Название команды',
        dataIndex: 'title',
        key: 'title',
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
        key: 'winsCount',
        align: 'center',
        width: '12%',
    },
    {
        title: 'Поражений',
        dataIndex: 'loseMatchesCount',
        key: 'loseCount',
        align: 'center',
        width: '12%',
    },
    {
        title: 'Всего',
        dataIndex: 'totalMatchesCount',
        key: 'matchesCount',
        align: 'center',
        width: '12%',
    },
];

const CommandsPage: React.FC = () => {
    const [searchString, setSearchString] = useState<string>();
    const [commandsList, setCommandsList] = useState<ICommandsListResponse>(
        getCommandsList({
            searchName: searchString,
            skip: 0,
            take: 10,
        })
    );

    useEffect(() => {
        setCommandsList(getCommandsList({
            searchName: searchString,
            skip: 0,
            take: 10,
        }));
    }, [searchString]);

    const loadMore = () => {
        const moreCommandsList = getCommandsList({
            searchName: searchString,
            skip: commandsList.data.length,
            take: 10,
        });
        setCommandsList({
            data: [
                ...commandsList.data,
                ...moreCommandsList.data,
            ],
            totalCount: moreCommandsList.totalCount,
        });
    };

    return (
        <Page>
            <PageContent>
                <div className={'CommandsPage'}>
                    <ContentWrapper widthMode={'FillParent'}>
                        <div className={'search-wrapper'}>
                            <div className={'search-label'}>Поиск</div>
                            <Input.Search
                                placeholder='Введите название или id команды'
                                allowClear
                                enterButton={<SearchOutlined />}
                                size='large'
                                style={{ width: '40%' }}
                                onSearch={(value) => {
                                    setSearchString(value);
                                }}
                                onChange={(value) => {
                                    setSearchString(value.target.value);
                                }}
                            />
                        </div>
                        <Table
                            style={{ minHeight: 250 }}
                            pagination={false}
                            dataSource={commandsList.data}
                            columns={columns}
                            onRow={(item, _) => {
                                return {
                                    onClick: () => {
                                        browserHistory.push(`${Pages.Commands.url}/${item.id}`);
                                    },
                                };
                            }}
                        />
                        {
                            commandsList.data.length < commandsList.totalCount &&
                            <div className={'load-more-wrapper'}>
                                <TextButton onClick={loadMore}>Загрузить еще</TextButton>
                            </div>
                        }
                    </ContentWrapper>
                </div>
            </PageContent>
        </Page>
    );
};

export default CommandsPage;
