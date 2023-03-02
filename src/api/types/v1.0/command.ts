import { IPlayer } from "./player";

export interface ICommandsListRequest {
    searchName?: string;
    skip: number;
    take: number;
}

export interface ICommand {
    id: number;
    avatar: string;
    title: string;
    region: string;
    winsRate: number;
    winsMatchesCount: number;
    loseMatchesCount: number;
    totalMatchesCount: number;
    playersList?: IPlayer[];
}

export interface ICommandsListResponse {
    data: ICommand[];
    totalCount: number;
}
