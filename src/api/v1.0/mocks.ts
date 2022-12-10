import { ICommand } from 'api/types/v1.0/command';
import { IPlayer } from 'api/types/v1.0/player';

export const commandsList: ICommand[] = [
    { id: 1, avatar: 'https://dota2.ru/img/heroes/morphling/ability2.jpg?1588056311', title: 'minain command', region: 'EU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13, playersList: [
            { id: 1, avatar: 'https://dota2.ru/img/heroes/juggernaut/portrait.jpg ', name: 'minain', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
            { id: 2, avatar: 'https://preview.redd.it/0klpbmmgnl151.jpg?auto=webp&s=df3c9bc543042b3ff7f87c80192f20fd948f499d', name: 'california', region: 'EU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
            { id: 3, avatar: 'https://i.etsystatic.com/22064231/r/il/1a1493/3442226519/il_340x270.3442226519_2zum.jpg', name: 'pirat', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
            { id: 4, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAw4ZNGwvHAmzDAgYnFC6Zdt1wg-idzIFxw&usqp=CAU', name: 'teamka', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
    ] } as ICommand,
    { id: 2, avatar: '', title: 'not minain command', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 3, avatar: '', title: 'winners', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 4, avatar: '', title: 'losers', region: 'AZ', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 5, avatar: '', title: 'the best', region: 'EU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 6, avatar: '', title: 'mans', region: 'AZ', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 7, avatar: '', title: 'best europe', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 8, avatar: '', title: 'fighters', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 9, avatar: '', title: 'MAIN', region: 'EU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 10, avatar: '', title: 'major winners', region: 'AZ', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 11, avatar: '', title: 'русские', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 12, avatar: '', title: 'sticky boys', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 13, avatar: '', title: 'били боба', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 14, avatar: '', title: 'завоеватели', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 15, avatar: '', title: 'nice try', region: 'EU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 16, avatar: '', title: 'bros', region: 'AZ', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 17, avatar: '', title: 'englishmen', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 18, avatar: '', title: 'топики', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 19, avatar: '', title: 'one tap', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 20, avatar: '', title: 'ez gamers', region: 'AZ', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 21, avatar: '', title: 'caraul', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 22, avatar: '', title: 'hipers', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 23, avatar: '', title: 'happy men', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
];

export const playersList: IPlayer[] = [
    { id: 1, avatar: 'https://dota2.ru/img/heroes/juggernaut/portrait.jpg ', name: 'minain', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
    { id: 2, avatar: 'https://preview.redd.it/0klpbmmgnl151.jpg?auto=webp&s=df3c9bc543042b3ff7f87c80192f20fd948f499d', name: 'california', region: 'EU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
    { id: 3, avatar: 'https://i.etsystatic.com/22064231/r/il/1a1493/3442226519/il_340x270.3442226519_2zum.jpg', name: 'pirat', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
    { id: 4, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAw4ZNGwvHAmzDAgYnFC6Zdt1wg-idzIFxw&usqp=CAU', name: 'teamka', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
    { id: 5, avatar: '', name: 'human', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
    { id: 6, avatar: '', name: 'man', region: 'AZ', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
    { id: 7, avatar: '', name: 'super man', region: 'EU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
    { id: 8, avatar: '', name: 'gigachad', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
    { id: 9, avatar: '', name: 'heroe', region: 'EU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
    { id: 10, avatar: '', name: 'microchel', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
    { id: 11, avatar: '', name: 'lover', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
    { id: 12, avatar: '', name: 'mirsa', region: 'EU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
    { id: 13, avatar: '', name: 'важная персона', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
];
