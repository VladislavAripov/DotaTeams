import React from 'react';
import './Page.less';
import browserHistory from 'App/root/browserHistory';
import { Pages } from 'constants/links';
import TextButton from 'ui-kit/TextButton';

export interface IProps {
    solidBackground?: boolean;
}

export const Page: React.FC<React.PropsWithChildren<IProps>> = (props) => {
    return (
        <div className={`page ${props.solidBackground ? 'solid-background' : ''}`}>
            <div className={'header'}>
                <TextButton
                    className={'logo'}
                    onClick={() => browserHistory.push(Pages.Main.url)}
                >
                    DotaTeams
                </TextButton>
                <div className={'nav-bar'}>
                    <TextButton
                        className={'nav-item'}
                        onClick={() => browserHistory.push(Pages.Commands.url)}
                    >
                        Команды
                    </TextButton>
                    <TextButton
                        className={'nav-item'}
                        onClick={() => browserHistory.push(Pages.Players.url)}
                    >
                        Игроки
                    </TextButton>
                    <TextButton
                        className={'nav-item'}
                        onClick={() => browserHistory.push(Pages.Tournaments.url)}
                    >
                        Турниры
                    </TextButton>
                    <div className={'divider'} />
                    <TextButton
                        className={'nav-item'}
                        onClick={() => browserHistory.push(Pages.Authorization.url)}
                    >
                        ВОЙТИ
                    </TextButton>
                </div>
            </div>
            <div className={'body'}>
                {
                    props.children
                }
            </div>
            <div className={'footer'}>
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
