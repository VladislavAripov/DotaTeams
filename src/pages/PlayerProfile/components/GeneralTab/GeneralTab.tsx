import React from 'react';
import { List } from 'antd';
import InfoBlock from '../InfoBlock';
import './GeneralTab.less';

interface IHeroRowInfo {
    icon: string;
    name: string;
    matchesNumber: number;
    winsNumber: number;
    loseNumber: number;
    winsRate: number;
    kda: number;
}

interface IGeneralPlayerInfo {
    popularHeroes: IHeroRowInfo[];
}

export interface IProps {
    playerId: number;
}

const GeneralTab: React.FC<IProps> = () => {
    const data: IGeneralPlayerInfo = {
        popularHeroes: [
            {
                icon: 'https://dota2.ru/img/heroes/shadow_fiend/portrait.jpg',
                name: 'Shadow Fiend',
                matchesNumber: 500,
                winsNumber: 345,
                loseNumber: 256,
                winsRate: 65,
                kda: 5,
            },
            {
                icon: 'https://dota2.ru/img/heroes/anti_mage/portrait.jpg',
                name: 'Anti-Mage',
                matchesNumber: 500,
                winsNumber: 345,
                loseNumber: 256,
                winsRate: 65,
                kda: 5,
            },
            {
                icon: 'https://dota2.ru/img/heroes/invoker/portrait.jpg',
                name: 'Invoker',
                matchesNumber: 500,
                winsNumber: 345,
                loseNumber: 256,
                winsRate: 65,
                kda: 5,
            },
        ],
    };

    const renderHeroRow = (item: IHeroRowInfo, index: number) => {
        return (
            <div className={'hero-row'} key={index}>
                <div className={'icon'}>
                    <img src={item.icon} alt={''} />
                </div>
                <div className={'hero-name'}>
                    {item.name}
                </div>
                <div className={'matches field-with-label'}>
                    <div className={'label'}>
                        Количество матчей
                    </div>
                    <div className={'value'}>
                        {item.matchesNumber}
                    </div>
                </div>
                <div className={'wins field-with-label'}>
                    <div className={'label'}>
                        Победы
                    </div>
                    <div className={'value'}>
                        {item.winsNumber}
                    </div>
                </div>
                <div className={'lose field-with-label'}>
                    <div className={'label'}>
                        Поражения
                    </div>
                    <div className={'value'}>
                        {item.loseNumber}
                    </div>
                </div>
                <div className={'wins-rate field-with-label'}>
                    <div className={'label'}>
                        Доля побед
                    </div>
                    <div className={'value'}>
                        {item.winsRate}
                    </div>
                </div>
                <div className={'kda field-with-label'}>
                    <div className={'label'}>
                        КДА
                    </div>
                    <div className={'value'}>
                        {item.kda}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={'GeneralTab'}>
            <InfoBlock label={'Самые популярные герои'}>
                <List<IHeroRowInfo>
                    renderItem={renderHeroRow}
                    dataSource={data.popularHeroes}
                    split={false}
                />
            </InfoBlock>
            <InfoBlock label={'Последние матчи'}>
                Список последних матчей
            </InfoBlock>
        </div>
    );
};

export default GeneralTab;
