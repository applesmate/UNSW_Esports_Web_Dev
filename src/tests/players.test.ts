import { addPlayer, deletePlayer, getPlayerID, getPlayerAll, updatePlayerUserName, updatePlayerRealName, updatePlayerDescription } from "../players";
import sql from '../../db';

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

describe('getting all player info', () =>  {
    test('grab test user', async () => {
        const data = await getPlayerAll("0");
        //console.log(data)
        expect(data).toStrictEqual({
            playerid: "0",
            teamid: "0",
            playerusername: 'DKC',
            playerdesc: 'Cool',
            playerrealname: 'Damon',
            playerpassword: 'password'
        });
    });
});

describe('adding a player and deleting them', () =>  {
    test('simple add', async () => {
        const result = await addPlayer("VorteX", "password")

        const info = await getPlayerID(String(result))

        expect(info).not.toBeNull();

        deletePlayer(result)

        const deletedID = await getPlayerID(String(result))
        expect(deletedID).toBe("-1");

        const deletedInfo = await getPlayerAll(String(result))
        expect(deletedInfo.playerid).toBe("-1");
    });
});

describe('updating player details in the database', () => {
    test('username', async () => {
        const result = await addPlayer("VorteX", "password")
        
        const info = await getPlayerID(String(result))
        expect(info).not.toBe("-1");

        const newName = await updatePlayerUserName(String(result), "winter")
        // console.log(newName)
        expect(newName).toBe("winter");

        deletePlayer(result)
    });
    test('realname', async () => {
        const result = await addPlayer("VorteX", "password")
        
        const info = await getPlayerID(String(result))
        expect(info).not.toBe("-1");

        const newName = await updatePlayerRealName(String(result), "Bruno")
        // console.log(newName)
        expect(newName).toBe("Bruno");

        deletePlayer(result)
    });
    test('description', async () => {
        const result = await addPlayer("VorteX", "password")
        
        const info = await getPlayerID(String(result))
        expect(info).not.toBe("-1");

        const newDesc = await updatePlayerDescription(String(result), "the real buzz lightyear")
        // console.log(newName)
        expect(newDesc).toBe("the real buzz lightyear");

        deletePlayer(result)
    });
})
