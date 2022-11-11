import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Page } from 'components/Layout/Page';
import { PageContent } from 'components/Layout/PageContent';
import ContentWrapper from 'ui-kit/ContentWrapper';
import './CommandsPage.less';

interface ICommandItem {
    key: number;
    number: number;
    title: string;
    region: string;
    winsRate: number;
    winsNumber: number;
    loseNumber: number;
    matchesNumber: number;
}

const columns: ColumnsType<ICommandItem> = [
    {
        title: '#',
        dataIndex: 'number',
        key: 'number',
        align: 'center',
        width: '5%',
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

const data: ICommandItem[] = [
    {
        key: 1,
        number: 1,
        title: 'minain comand',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 2,
        number: 2,
        title: 'minain comand',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 3,
        number: 3,
        title: 'minain comand',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 4,
        number: 4,
        title: 'minain comand',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 5,
        number: 5,
        title: 'minain comand',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 6,
        number: 6,
        title: 'minain comand',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 7,
        number: 7,
        title: 'minain comand',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 8,
        number: 8,
        title: 'minain comand',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
    {
        key: 8,
        number: 8,
        title: 'minain comand',
        region: 'RU',
        winsRate: 94,
        winsNumber: 12,
        loseNumber: 1,
        matchesNumber: 13,
    },
];

const CommandsPage: React.FC = () => {
    return (
        <Page>
            <PageContent>
                <div className={'CommandsPage'}>
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

export default CommandsPage;
