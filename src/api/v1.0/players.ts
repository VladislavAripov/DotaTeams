import {
    IPlayersListRequest,
    IPlayer,
    IPlayersListResponse,
} from 'api/types/v1.0/player';

const playersList: IPlayer[] = [
    {
        id: 1,
        preview: '',
        name: 'minain command',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as IPlayer,
    {
        id: 1,
        preview: '',
        name: 'california team',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as IPlayer,
    {
        id: 1,
        preview: '',
        name: 'pride',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as IPlayer,
    {
        id: 1,
        preview: '',
        name: 'dotateams',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as IPlayer,
    {
        id: 1,
        preview: '',
        name: 'huanan',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as IPlayer,
    {
        id: 1,
        preview: '',
        name: 'let\'s do it',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as IPlayer,
    {
        id: 1,
        preview: '',
        name: 'super puper',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as IPlayer,
    {
        id: 1,
        preview: '',
        name: 'mega team',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as IPlayer,
    {
        id: 1,
        preview: '',
        name: 'heroes',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as IPlayer,
    {
        id: 1,
        preview: '',
        name: 'not minain command',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as IPlayer,
    {
        id: 1,
        preview: '',
        name: 'not minain command',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as IPlayer,
    {
        id: 1,
        preview: '',
        name: 'not minain command',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as IPlayer,
    {
        id: 1,
        preview: '',
        name: 'not minain command',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as IPlayer,
];

export const getPlayersList = ({ searchName, ...pagination }: IPlayersListRequest): IPlayersListResponse => {
    const filteredPlayersList = searchName ?
        playersList
            .filter((command) =>
                command.name.toLowerCase().includes(searchName.toLowerCase()))
            .slice(pagination.skip, pagination.skip + pagination.take)
        : playersList
            .slice(pagination.skip, pagination.skip + pagination.take);

    return {
        data: filteredPlayersList,
        totalCount: playersList.length,
    };
};
