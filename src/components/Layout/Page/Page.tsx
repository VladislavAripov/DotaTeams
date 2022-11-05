import React from 'react';
import './Page.scss';
import browserHistory from 'App/root/browserHistory';
import { Pages } from 'constants/links';

export interface IProps {
    solidBackground?: boolean;
}

export const Page: React.FC<React.PropsWithChildren<IProps>> = (props) => {
    return (
        <div className={`page ${props.solidBackground ? 'solid-background' : ''}`}>
            <div className={'header'}>
                <div
                    className={'header-control logo'}
                    onClick={() => browserHistory.push(Pages.Main.url)}
                >
                    DotaTeams
                </div>
                <div className={'nav-bar'}>
                    <div
                        className={'header-control nav-item'}
                        onClick={() => browserHistory.push(Pages.Commands.url)}
                    >
                        Команды
                    </div>
                    <div
                        className={'header-control nav-item'}
                        onClick={() => browserHistory.push(Pages.Players.url)}
                    >
                        Игроки
                    </div>
                    <div
                        className={'header-control nav-item'}
                        onClick={() => browserHistory.push(Pages.Tournaments.url)}
                    >
                        Турниры
                    </div>
                    <div className={'divider'} />
                    <div
                        className={'header-control nav-item'}
                        onClick={() => browserHistory.push(Pages.Authorization.url)}
                    >
                        ВОЙТИ
                    </div>
                </div>
            </div>
            <div className={'body'}>
                {
                    props.children
                }
            </div>
            <div className={'footer'}>
                <div className={'footer-gradient'} />
                <div className={'footer-info'}>
                    <div className={'left-panel'}>
                        <div className={'command-info'}>
                            <div className={'title'}>
                                Команда разработки:
                            </div>
                            <div className={'member-info'}>
                                Игорь Вячеславович - igorsimonov2548@gmail.com
                            </div>
                            <div className={'member-info'}>
                                Владислав Сергеевич - vlad.aripov.007@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className={'right-panel'}>
                        <div className={'funding-info'}>
                            Поддержать проект
                        </div>
                        <div className={'feedback'}>
                            Обратная связь: help@dota.teams
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
