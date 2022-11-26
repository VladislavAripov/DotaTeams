import {
    ICommand,
    ICommandsListRequest,
    ICommandsListResponse,
} from 'api/types/v1.0/command';

const commandsList: ICommand[] = [
    {
        id: 1,
        preview: '',
        title: 'minain command',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as ICommand,
    {
        id: 1,
        preview: '',
        title: 'california team',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as ICommand,
    {
        id: 1,
        preview: '',
        title: 'pride',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as ICommand,
    {
        id: 1,
        preview: '',
        title: 'dotateams',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as ICommand,
    {
        id: 1,
        preview: '',
        title: 'huanan',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as ICommand,
    {
        id: 1,
        preview: '',
        title: 'let\'s do it',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as ICommand,
    {
        id: 1,
        preview: '',
        title: 'super puper',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as ICommand,
    {
        id: 1,
        preview: '',
        title: 'mega team',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as ICommand,
    {
        id: 1,
        preview: '',
        title: 'heroes',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as ICommand,
    {
        id: 1,
        preview: '',
        title: 'not minain command',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as ICommand,
    {
        id: 1,
        preview: '',
        title: 'not minain command',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as ICommand,
    {
        id: 1,
        preview: '',
        title: 'not minain command',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as ICommand,
    {
        id: 1,
        preview: '',
        title: 'not minain command',
        region: 'RU',
        winsRate: 94,
        winsMatchesCount: 12,
        loseMatchesCount: 1,
        totalMatchesCount: 13,
    } as ICommand,
];

export const getCommandsList = ({ searchName, ...pagination }: ICommandsListRequest): ICommandsListResponse => {
    const filteredCommandsList = searchName ?
        commandsList
            .filter((command) =>
                command.title.toLowerCase().includes(searchName.toLowerCase()))
            .slice(pagination.skip, pagination.skip + pagination.take)
        : commandsList
            .slice(pagination.skip, pagination.skip + pagination.take);

    return {
        data: filteredCommandsList,
        totalCount: commandsList.length,
    };
};