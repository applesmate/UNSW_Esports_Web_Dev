import { addPlayer, deletePlayer, getPlayer, getPlayerAll } from "../players";

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    done()
});

describe('test', () =>  {
    test('testing the test file', () => {
        expect(1+1).toBe(2);
    });
});

// reset database after each test
// neither of these tests work

describe('getting a player info', () =>  {
    test('grab test user', async () => {
        const info  = await getPlayerAll('1');
        expect(info).toEqual({"playerdesc": "Cool", "playerid": 0, "playerrealname": "Damon", "playerusername": "DKC", "teamid": 0});
    });
});

// describe('getting a player info', () =>  {
//     test('grab test user', () => {
//         getPlayer(String(0)).then((info) => {
//             console.log(info)
//             expect(info).not.toBeNull();
//         })
//     });
// });

// const data = await sql`SELECT ${ sql('aTest', 'bTest') } FROM table`

// console.log(data) // [ { aTest: 1, bTest: '1' } ]

// NOT WORKING
// describe('adding a player', () =>  {
//     test('simple add', () => {
//         addPlayer("VorteX").then((result: string) => {
//             getPlayer(result).then((info: string) => {
//                 expect(info).not.toBeNull();
//             })
//             deletePlayer(result)
//         })
//     });
// });
