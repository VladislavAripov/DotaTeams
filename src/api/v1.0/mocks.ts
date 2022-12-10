import { ICommand } from 'api/types/v1.0/command';
import { IPlayer } from 'api/types/v1.0/player';

export const commandsList: ICommand[] = [
    { id: 1, avatar: 'https://dota2.ru/img/heroes/morphling/ability2.jpg?1588056311', title: 'minain command', region: 'EU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13, playersList: [
            { id: 1, avatar: 'https://dota2.ru/img/heroes/juggernaut/portrait.jpg ', name: 'minain', region: 'RU', winsRate: 50, winsMatchesCount: 12, loseMatchesCount: 12, totalMatchesCount: 24 } as IPlayer,
            { id: 2, avatar: 'https://preview.redd.it/0klpbmmgnl151.jpg?auto=webp&s=df3c9bc543042b3ff7f87c80192f20fd948f499d', name: 'california', region: 'EU', winsRate: 51, winsMatchesCount: 13, loseMatchesCount: 12, totalMatchesCount: 25 } as IPlayer,
            { id: 3, avatar: 'https://i.etsystatic.com/22064231/r/il/1a1493/3442226519/il_340x270.3442226519_2zum.jpg', name: 'pirat', region: 'RU', winsRate: 56, winsMatchesCount: 15, loseMatchesCount: 13, totalMatchesCount: 28 } as IPlayer,
            { id: 4, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAw4ZNGwvHAmzDAgYnFC6Zdt1wg-idzIFxw&usqp=CAU', name: 'teamka', region: 'RU', winsRate: 57, winsMatchesCount: 10, loseMatchesCount: 4, totalMatchesCount: 14 } as IPlayer,
    ] } as ICommand,
    { id: 2, avatar: 'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/2163.png', title: 'not minain command', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13,  playersList: [
            { id: 5, avatar: 'https://avatars.akamai.steamstatic.com/66410dcdf47936050ff49ea90dc9ddd9538bda8e_full.jpg', name: 'human', region: 'RU', winsRate: 56, winsMatchesCount: 14, loseMatchesCount: 13, totalMatchesCount: 27 } as IPlayer,
            { id: 6, avatar: 'https://avatars.akamai.steamstatic.com/ecc900f53c2aa7f26a9ea3d1bb7d51f9e5511067_full.jpg', name: 'man', region: 'AZ', winsRate: 48, winsMatchesCount: 23, loseMatchesCount: 12, totalMatchesCount: 35 } as IPlayer,
    ] } as ICommand,
    { id: 3, avatar: 'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/1838315.png', title: 'winners', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 4, avatar: 'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/15.png', title: 'losers', region: 'AZ', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13,  playersList: [
            { id: 7, avatar: 'https://avatars.akamai.steamstatic.com/c8304511d8e6f5327427b6b06bb30b1f8071d823.jpg', name: 'super man', region: 'EU', winsRate: 46, winsMatchesCount: 21, loseMatchesCount: 15, totalMatchesCount: 36 } as IPlayer,
    ] } as ICommand,
    { id: 5, avatar: 'https://api.opendota.com/ugc/1629730253163462144/FEF15B2B4528E81103DD693E37FD7B6C9BE6B471/', title: 'the best', region: 'EU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 6, avatar: 'https://api.opendota.com/ugc/1839179120711951766/CD7E0885CB527334205CC7885E9C101B7BC17702/', title: 'mans', region: 'AZ', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13,  playersList: [
            { id: 12, avatar: 'https://dota2.ru/img/heroes/juggernaut/portrait.jpg ', name: 'minain', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
            { id: 13, avatar: 'https://preview.redd.it/0klpbmmgnl151.jpg?auto=webp&s=df3c9bc543042b3ff7f87c80192f20fd948f499d', name: 'california', region: 'EU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as IPlayer,
    ] } as ICommand,
    { id: 7, avatar: 'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/2586976.png', title: 'best europe', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13, playersList: [
            { id: 8, avatar: 'https://avatars.akamai.steamstatic.com/0ad3adc739e8a60a877687c24ffc3b41cb3494a9.jpg', name: 'gigachad', region: 'RU', winsRate: 57, winsMatchesCount: 22, loseMatchesCount: 15, totalMatchesCount: 37 } as IPlayer,
            { id: 9, avatar: 'https://avatars.akamai.steamstatic.com/fbf83dec31e71c56b2e1cb8c4dc26ca470979c59.jpg', name: 'heroe', region: 'EU', winsRate: 48, winsMatchesCount: 13, loseMatchesCount: 19, totalMatchesCount: 31 } as IPlayer,
            { id: 10, avatar: 'https://avatars.akamai.steamstatic.com/8ce2648b577494cf6761f49fbe8ab74a2ae71697.jpg', name: 'microchel', region: 'RU', winsRate: 49, winsMatchesCount: 12, loseMatchesCount: 12, totalMatchesCount: 24 } as IPlayer,
            { id: 11, avatar: 'https://avatars.akamai.steamstatic.com/322d988864ae87a5d8ea58e3b2bc9ce48e87ca61.jpg', name: 'lover', region: 'RU', winsRate: 51, winsMatchesCount: 9, loseMatchesCount: 13, totalMatchesCount: 21 } as IPlayer,
    ] } as ICommand,
    { id: 8, avatar: 'https://api.opendota.com/ugc/1816635640278661784/C77C3FA0D190002E17524596E5C62083994E2535/', title: 'fighters', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 9, avatar: 'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/39.png', title: 'MAIN', region: 'EU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 10, avatar: 'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/6209804.png', title: 'major winners', region: 'AZ', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 11, avatar: 'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/6209804.png', title: 'русские', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 12, avatar: 'https://api.opendota.com/ugc/2008072595679478968/A080A63C70A5DEA039FBC1AE798EE2570E194606/', title: 'sticky boys', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 13, avatar: 'https://api.opendota.com/ugc/1827904737028788458/3C13F25AEFBE885A67EE515D055CCE87B3CD4ECF/', title: 'били боба', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 14, avatar: 'https://api.opendota.com/ugc/1822272203102401273/0DDED0FB4C6EA41DCE3C3DDB25B3D42A40C3C6BB/', title: 'завоеватели', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 15, avatar: 'https://api.opendota.com/ugc/1822272203102401273/0DDED0FB4C6EA41DCE3C3DDB25B3D42A40C3C6BB/', title: 'nice try', region: 'EU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 16, avatar: 'https://api.opendota.com/ugc/768365068750604173/EF3216F4B02A0DA2327AC3190A369349C7BF3A24/', title: 'bros', region: 'AZ', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 17, avatar: 'https://api.opendota.com/ugc/1850419664501191993/5DAAB68FB5604D29E1792A0F35E74B3FE3F3A026/', title: 'englishmen', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 18, avatar: 'https://api.opendota.com/ugc/1818886756398782872/1DA3D79899C2200A5B0B9DF361BC278D572CE314/', title: 'топики', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 19, avatar: 'https://api.opendota.com/ugc/1845922937363804366/B718AFD0F76379ACDDE28F7512FC91B76C478985/', title: 'one tap', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 20, avatar: 'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/726228.png', title: 'ez gamers', region: 'AZ', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 21, avatar: 'https://api.opendota.com/ugc/2023835418754383891/3449F2F94858E332CE6FAD2C1160E3657EF33ACD/', title: 'caraul', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 22, avatar: 'https://api.opendota.com/ugc/1827894588975105240/421C0D8318D71D5DD31FD08A7933AB622AE26590/', title: 'hipers', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
    { id: 23, avatar: 'https://api.opendota.com/ugc/1831290045925630948/400C4E5FD779D964D9BEC5E44D414073ADC03790/', title: 'happy men', region: 'RU', winsRate: 94, winsMatchesCount: 12, loseMatchesCount: 1, totalMatchesCount: 13 } as ICommand,
];

export const playersList: IPlayer[] = [
    { id: 1, avatar: 'https://dota2.ru/img/heroes/juggernaut/portrait.jpg ', name: 'minain', region: 'RU', winsRate: 50, winsMatchesCount: 12, loseMatchesCount: 12, totalMatchesCount: 24 } as IPlayer,
    { id: 2, avatar: 'https://preview.redd.it/0klpbmmgnl151.jpg?auto=webp&s=df3c9bc543042b3ff7f87c80192f20fd948f499d', name: 'california', region: 'EU', winsRate: 51, winsMatchesCount: 13, loseMatchesCount: 12, totalMatchesCount: 25 } as IPlayer,
    { id: 3, avatar: 'https://i.etsystatic.com/22064231/r/il/1a1493/3442226519/il_340x270.3442226519_2zum.jpg', name: 'pirat', region: 'RU', winsRate: 56, winsMatchesCount: 15, loseMatchesCount: 13, totalMatchesCount: 28 } as IPlayer,
    { id: 4, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAw4ZNGwvHAmzDAgYnFC6Zdt1wg-idzIFxw&usqp=CAU', name: 'teamka', region: 'RU', winsRate: 57, winsMatchesCount: 10, loseMatchesCount: 4, totalMatchesCount: 14 } as IPlayer,
    { id: 5, avatar: 'https://avatars.akamai.steamstatic.com/66410dcdf47936050ff49ea90dc9ddd9538bda8e_full.jpg', name: 'human', region: 'RU', winsRate: 56, winsMatchesCount: 14, loseMatchesCount: 13, totalMatchesCount: 27 } as IPlayer,
    { id: 6, avatar: 'https://avatars.akamai.steamstatic.com/ecc900f53c2aa7f26a9ea3d1bb7d51f9e5511067_full.jpg', name: 'man', region: 'AZ', winsRate: 48, winsMatchesCount: 23, loseMatchesCount: 12, totalMatchesCount: 35 } as IPlayer,
    { id: 7, avatar: 'https://avatars.akamai.steamstatic.com/c8304511d8e6f5327427b6b06bb30b1f8071d823.jpg', name: 'super man', region: 'EU', winsRate: 46, winsMatchesCount: 21, loseMatchesCount: 15, totalMatchesCount: 36 } as IPlayer,
    { id: 8, avatar: 'https://avatars.akamai.steamstatic.com/0ad3adc739e8a60a877687c24ffc3b41cb3494a9.jpg', name: 'gigachad', region: 'RU', winsRate: 57, winsMatchesCount: 22, loseMatchesCount: 15, totalMatchesCount: 37 } as IPlayer,
    { id: 9, avatar: 'https://avatars.akamai.steamstatic.com/fbf83dec31e71c56b2e1cb8c4dc26ca470979c59.jpg', name: 'heroe', region: 'EU', winsRate: 48, winsMatchesCount: 13, loseMatchesCount: 19, totalMatchesCount: 31 } as IPlayer,
    { id: 10, avatar: 'https://avatars.akamai.steamstatic.com/8ce2648b577494cf6761f49fbe8ab74a2ae71697.jpg', name: 'microchel', region: 'RU', winsRate: 49, winsMatchesCount: 12, loseMatchesCount: 12, totalMatchesCount: 24 } as IPlayer,
    { id: 11, avatar: 'https://avatars.akamai.steamstatic.com/322d988864ae87a5d8ea58e3b2bc9ce48e87ca61.jpg', name: 'lover', region: 'RU', winsRate: 51, winsMatchesCount: 9, loseMatchesCount: 13, totalMatchesCount: 21 } as IPlayer,
    { id: 12, avatar: 'https://avatars.akamai.steamstatic.com/7fa7cdbc61b37b40fd4f8992df2dc053657cc6f1.jpg', name: 'mirsa', region: 'EU', winsRate: 54, winsMatchesCount: 17, loseMatchesCount: 14, totalMatchesCount: 31 } as IPlayer,
    { id: 13, avatar: 'https://avatars.akamai.steamstatic.com/476fa775b911d618f6b64d2a44f22d19742111cd.jpg', name: 'важная персона', region: 'RU', winsRate: 45, winsMatchesCount: 21, loseMatchesCount: 18, totalMatchesCount: 39 } as IPlayer,
];
