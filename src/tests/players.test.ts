import { addPlayer, deletePlayer, getPlayerID, getPlayerAll } from "../players";
import sql from '../../db';

describe('test', () =>  {
    test('testing the test file', () => {
        expect(1+1).toBe(2);
    });
});

// reset database after each test
// neither of these tests work

describe('getting all player info', () =>  {
    test('grab test user', async () => {
        const data = await getPlayerAll(String(0));
        console.log(data)
        expect(data).toStrictEqual({
            playerid: "0",
            teamid: "0",
            playerusername: 'DKC',
            playerdesc: 'Cool',
            playerrealname: 'Damon'
        });
    });
});

// describe('getting a player info', () =>  {
//     test('grab test user', async () => {
//         const data = await getPlayer(String(0));
//         // expect(data).toBe([{

//         // }]);
//         expect(data).not.toBeNull();
//         const data2 = await getPlayer(String(0));
//         expect(data2).not.toBeNull();
//     });
// });

// const data = await sql`SELECT ${ sql('aTest', 'bTest') } FROM table`

// console.log(data) // [ { aTest: 1, bTest: '1' } ]

// NOT WORKING
describe('adding a player', () =>  {
    test('simple add', async () => {
        const result = await addPlayer("VorteX", "1")
        console.log(result)
        const info = await getPlayerAll(String(result))
        console.log(info)
        expect(info.playerusername).toBe("VorteX");
        deletePlayer(result)
        expect(getPlayerID(String(result))).not.toBe(result);
    });
});
