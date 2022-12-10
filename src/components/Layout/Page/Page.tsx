import React from 'react';
import './Page.less';
import { Link } from 'react-router-dom';
import browserHistory from 'App/root/browserHistory';
import { Pages } from 'constants/links';
import TextButton from 'ui-kit/TextButton';
import { redirect } from 'utils/browser';

export interface IProps {
    solidBackground?: boolean;
}

export const Page: React.FC<React.PropsWithChildren<IProps>> = (props) => {
    const isCurrentPage = (path: string) => window.location.pathname === path;

    return (
        <div className={`page ${props.solidBackground ? 'solid-background' : ''}`}>
            <div className={'header'}>
                <TextButton
                    className={'logo'}
                    active={isCurrentPage(Pages.Main.url)}
                    onClick={() => browserHistory.push(Pages.Main.url)}
                >
                    DotaTeams
                </TextButton>
                <div className={'nav-bar'}>
                    <TextButton
                        className={'nav-item'}
                        active={isCurrentPage(Pages.Commands.url)}
                        onClick={() => browserHistory.push(Pages.Commands.url)}
                    >
                        Команды
                    </TextButton>
                    <TextButton
                        className={'nav-item'}
                        active={isCurrentPage(Pages.Players.url)}
                        onClick={() => browserHistory.push(Pages.Players.url)}
                    >
                        Игроки
                    </TextButton>
                    <div className={'divider'} />
                    <TextButton
                        className={'nav-item'}
                        active={isCurrentPage(Pages.Authorization.url)}
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
                                Игорь Вячеславович - <Link to={'#'} onClick={() => redirect('mailto:igorsimonov2548@gmail.com', true)}>igorsimonov2548@gmail.com</Link>
                            </div>
                            <div className={'member-info'}>
                                Владислав Сергеевич - <Link to={'#'} onClick={() => redirect('mailto:vlad.aripov.007@gmail.com', true)}>vlad.aripov.007@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                    <div className={'right-panel'}>
                        <div className={'funding-info'}>
                            <Link to={'#'} onClick={() => redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ', true)}>Поддержать проект</Link>
                        </div>
                        <div className={'feedback'}>
                            Обратная связь: <Link to={'#'} onClick={() => redirect('mailto:help@dota.teams', true)}>help@dota.teams</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
