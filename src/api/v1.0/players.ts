import {
    IPlayersListRequest,
    IPlayersListResponse,
} from 'api/types/v1.0/player';
import { playersList } from './mocks';

export const getPlayersList = ({ searchName, ...pagination }: IPlayersListRequest): IPlayersListResponse => {
    const filteredPlayersList = searchName ?
        playersList
            .filter((player) =>
                player.name.toLowerCase().includes(searchName.toLowerCase()))
        : playersList;

    return {
        data: filteredPlayersList.slice(pagination.skip, pagination.skip + pagination.take),
        totalCount: filteredPlayersList.length,
    };
};
