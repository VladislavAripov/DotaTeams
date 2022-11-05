import React from 'react';
import './Page.scss';

export interface IPageProps {
}

export const Page: React.FC<React.PropsWithChildren<IPageProps>> = (props) => {
    return (
        <div className={'page'}>
            <div className={'header'}>
                <div className={'header-control logo'}>
                    DotaTeams
                </div>
                <div className={'nav-bar'}>
                    <div className={'header-control nav-item'}>
                        Команды
                    </div>
                    <div className={'header-control nav-item'}>
                        Игроки
                    </div>
                    <div className={'header-control nav-item'}>
                        Турниры
                    </div>
                    <div className={'header-control nav-item'}>
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
