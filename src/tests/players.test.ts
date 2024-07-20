import { addPlayer, deletePlayer, getPlayer, getPlayerAll } from "../players";

describe('test', () =>  {
    test('testing the test file', () => {
        expect(1+1).toBe(2);
    });
});

// reset database after each test
// neither of these tests work

describe('getting a player info', () =>  {
    test('grab test user', () => {
        getPlayerAll(String(0)).then(info => {
            expect(info).not.toBeNull();
        })
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
