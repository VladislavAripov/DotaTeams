export interface ICommandsListRequest {
    searchName?: string;
    skip: number;
    take: number;
}

export interface ICommand {
    id: number;
    preview: string;
    title: string;
    region: string;
    winsRate: number;
    winsMatchesCount: number;
    loseMatchesCount: number;
    totalMatchesCount: number;
}

export interface ICommandsListResponse {
    data: ICommand[];
    totalCount: number;
}
