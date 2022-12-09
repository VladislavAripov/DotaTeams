import {
    ICommandsListRequest,
    ICommandsListResponse,
} from 'api/types/v1.0/command';
import { commandsList } from './mocks';

export const getCommandsList = ({ searchName, ...pagination }: ICommandsListRequest): ICommandsListResponse => {
    const filteredCommandsList = searchName ?
        commandsList
            .filter((command) =>
                command.title.toLowerCase().includes(searchName.toLowerCase()))
        : commandsList;

    return {
        data: filteredCommandsList.slice(pagination.skip, pagination.skip + pagination.take),
        totalCount: filteredCommandsList.length,
    };
};
