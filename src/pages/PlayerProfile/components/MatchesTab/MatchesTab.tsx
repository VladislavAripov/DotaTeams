import React from 'react';
import { List } from 'antd';
import { PlayerHeroInfo, PlayerMatchInfo } from 'api/types/v1.0/playerProfile';
import InfoBlock from '../InfoBlock';
import './MatchesTab.less';

interface IGeneralPlayerInfo {
    popularHeroes: PlayerHeroInfo[];
    lastMatches: PlayerMatchInfo[];
}

export interface IProps {
    playerId: number;
}

const MatchesTab: React.FC<IProps> = () => {
    const data: IGeneralPlayerInfo = {
        popularHeroes: [],
        lastMatches: [
            {
                heroName: 'Earthshaker',
                heroPreview: 'https://dota2.ru/img/heroes/earthshaker/icon.jpg',
                isRadiantSide: true,
                isWinningMatch: true,
                duration: {
                    minutes: 12,
                    seconds: 13,
                },
                kills: 1,
                dies: 0,
                assist: 15,
            },
            {
                heroName: 'Earthshaker',
                heroPreview: 'https://dota2.ru/img/heroes/earthshaker/icon.jpg',
                isRadiantSide: true,
                isWinningMatch: false,
                duration: {
                    minutes: 12,
                    seconds: 13,
                },
                kills: 1,
                dies: 0,
                assist: 15,
            },
            {
                heroName: 'Earthshaker',
                heroPreview: 'https://dota2.ru/img/heroes/earthshaker/icon.jpg',
                isRadiantSide: false,
                isWinningMatch: false,
                duration: {
                    minutes: 12,
                    seconds: 13,
                },
                kills: 1,
                dies: 0,
                assist: 15,
            },
            {
                heroName: 'Earthshaker',
                heroPreview: 'https://dota2.ru/img/heroes/earthshaker/icon.jpg',
                isRadiantSide: true,
                isWinningMatch: true,
                duration: {
                    minutes: 12,
                    seconds: 13,
                },
                kills: 1,
                dies: 0,
                assist: 15,
            },
        ],
    };

    const renderMatchRow = (item: PlayerMatchInfo, index: number) => {
        return (
            <div className={'hero-row'} key={index}>
                <div className={'icon'}>
                    <img src={item.heroPreview} alt={''} />
                </div>
                <div className={'hero-name'}>
                    {item.heroName}
                </div>
                <div className={`field-with-label ${item.isWinningMatch ? 'wins' : 'lose'}`}>
                    <div className={'label'}>
                        Исход
                    </div>
                    <div className={'value'}>
                        {item.isWinningMatch ? 'Победа' : 'Поражение'}
                    </div>
                </div>
                <div className={'kda field-with-label'}>
                    <div className={'label'}>
                        Сторона
                    </div>
                    <div className={'value'}>
                        {item.isRadiantSide ? 'Свет' : 'Тьма'}
                    </div>
                </div>
                <div className={'matches field-with-label'}>
                    <div className={'label'}>
                        Продолжительность
                    </div>
                    <div className={'value'}>
                        {`${item.duration.minutes}:${item.duration.seconds}`}
                    </div>
                </div>
                <div className={'wins field-with-label'}>
                    <div className={'label'}>
                        Убийст
                    </div>
                    <div className={'value'}>
                        {item.kills}
                    </div>
                </div>
                <div className={'lose field-with-label'}>
                    <div className={'label'}>
                        Смертей
                    </div>
                    <div className={'value'}>
                        {item.dies}
                    </div>
                </div>
                <div className={'wins-rate field-with-label'}>
                    <div className={'label'}>
                        Помощи
                    </div>
                    <div className={'value'}>
                        {item.assist}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={'MatchesTab'}>
            <InfoBlock>
                <List<PlayerMatchInfo>
                    renderItem={renderMatchRow}
                    dataSource={data.lastMatches}
                    split={false}
                />
            </InfoBlock>
        </div>
    );
};

export default MatchesTab;
