import { addPlayer, deletePlayer, getPlayer } from "../players";

describe('test', () =>  {
    test('testing the test file', () => {
        expect(1+1).toBe(2);
    });
});

// reset database after each test
// neither of these tests work

describe('getting a player info', () =>  {
    test('grab test user', () => {
        const info = getPlayer(Promise.resolve(String(420)))
        console.log("---------")
        console.log(info)
        expect(1).toBe(1);
        // deletePlayer(id)
    });
});

describe('adding a player', () =>  {
    test('simple add', () => {
        const id: Promise<string> = addPlayer("VorteX")
        const info = getPlayer(id)
        expect(info).not.toBeNull();
        // deletePlayer(id)
    });
});
