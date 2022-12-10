export interface IPlayersListRequest {
    searchName?: string;
    skip: number;
    take: number;
}

export interface IPlayer {
    id: number;
    avatar: string;
    name: string;
    region: string;
    winsRate: number;
    winsMatchesCount: number;
    loseMatchesCount: number;
    totalMatchesCount: number;
}

export interface IPlayersListResponse {
    data: IPlayer[];
    totalCount: number;
}
