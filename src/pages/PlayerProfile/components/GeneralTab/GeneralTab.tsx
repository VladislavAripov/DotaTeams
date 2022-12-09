import React from 'react';
import { List } from 'antd';
import InfoBlock from '../InfoBlock';
import './GeneralTab.less';
import { PlayerHeroInfo } from 'api/types/v1.0/playerProfile';

interface IGeneralPlayerInfo {
    popularHeroes: PlayerHeroInfo[];
}

export interface IProps {
    playerId: number;
}

const GeneralTab: React.FC<IProps> = () => {
    const data: IGeneralPlayerInfo = {
        popularHeroes: [
            {
                preview: 'https://dota2.ru/img/heroes/shadow_fiend/portrait.jpg',
                name: 'Shadow Fiend',
                totalMatchesCount: 500,
                winsMatchesCount: 345,
                loseMatchesCount: 256,
                winsRate: 65,
                kda: 5,
            },
            {
                preview: 'https://dota2.ru/img/heroes/anti_mage/portrait.jpg',
                name: 'Anti-Mage',
                totalMatchesCount: 500,
                winsMatchesCount: 345,
                loseMatchesCount: 256,
                winsRate: 65,
                kda: 5,
            },
            {
                preview: 'https://dota2.ru/img/heroes/invoker/portrait.jpg',
                name: 'Invoker',
                totalMatchesCount: 500,
                winsMatchesCount: 345,
                loseMatchesCount: 256,
                winsRate: 65,
                kda: 5,
            },
        ],
    };

    const renderHeroRow = (item: PlayerHeroInfo, index: number) => {
        return (
            <div className={'hero-row'} key={index}>
                <div className={'icon'}>
                    <img src={item.preview} alt={''} />
                </div>
                <div className={'hero-name'}>
                    {item.name}
                </div>
                <div className={'matches field-with-label'}>
                    <div className={'label'}>
                        Количество матчей
                    </div>
                    <div className={'value'}>
                        {item.totalMatchesCount}
                    </div>
                </div>
                <div className={'wins field-with-label'}>
                    <div className={'label'}>
                        Победы
                    </div>
                    <div className={'value'}>
                        {item.winsMatchesCount}
                    </div>
                </div>
                <div className={'lose field-with-label'}>
                    <div className={'label'}>
                        Поражения
                    </div>
                    <div className={'value'}>
                        {item.loseMatchesCount}
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
                <List<PlayerHeroInfo>
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
