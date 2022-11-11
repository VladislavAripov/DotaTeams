import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Page } from 'components/Layout/Page';
import { PageContent } from 'components/Layout/PageContent';
import ContentWrapper from 'ui-kit/ContentWrapper';
import './PlayersPage.less';

interface IPlayerItem {
    key: number;
    number: number;
    name: string;
    region: string;
    winsRate: number;
    winsNumber: number;
    loseNumber: number;
    matchesNumber: number;
}

const columns: ColumnsType<IPlayerItem> = [
    {
        title: '#',
        dataIndex: 'number',
        key: 'number',
        align: 'center',
        width: '5%',
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
        dataIndex: 'winsNumber',
        key: 'winsNumber',
        align: 'center',
        width: '12%',
    },
    {
        title: 'Поражений',
        dataIndex: 'loseNumber',
        key: 'loseNumber',
        align: 'center',
        width: '12%',
    },
    {
        title: 'Всего',
        dataIndex: 'matchesNumber',
        key: 'matchesNumber',
        align: 'center',
        width: '12%',
    },
];

const data: IPlayerItem[] = [
    {
        key: 1,
        number: 1,
        name: 'minain',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 2,
        number: 2,
        name: 'looser',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 3,
        number: 3,
        name: 'winner',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 4,
        number: 4,
        name: 'minain comand',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 5,
        number: 5,
        name: 'best player',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 6,
        number: 6,
        name: 'my bad',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 7,
        number: 7,
        name: 'helper',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 8,
        number: 8,
        name: 'ruslan',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 8,
        number: 8,
        name: 'the best',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
];

const PlayersPage: React.FC = () => {
    return (
        <Page>
            <PageContent>
                <div className={'PlayersPage'}>
                    <ContentWrapper widthMode={'FillParent'}>
                        <Table
                            style={{ minHeight: 250 }}
                            pagination={false}
                            dataSource={data}
                            columns={columns}
                        />
                    </ContentWrapper>
                </div>
            </PageContent>
        </Page>
    );
};

export default PlayersPage;
