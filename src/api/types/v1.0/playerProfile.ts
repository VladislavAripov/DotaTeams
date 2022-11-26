export enum PlayerProfileRang {
    beginner = 1,
    middle,
    expert,
}

export interface IPlayerProfile {
    id: number;
    name: string;
    winsMatchesCount: number;
    loseMatchesCount: number;
    winsRate: number;
    rang: PlayerProfileRang;
}

export interface PlayerHeroInfo {
    preview: string;
    name: string;
    totalMatchesCount: number;
    winsMatchesCount: number;
    loseMatchesCount: number;
    winsRate: number;
    kda: number;
}

export interface PlayerMatchInfo {
    heroPreview: string;
    heroName: string;
    isWinningMatch: boolean;
    isRadiantSide: boolean;
    duration: {
        minutes: number;
        seconds: number;
    }
    kills: number;
    dies: number;
    assist: number;
}
