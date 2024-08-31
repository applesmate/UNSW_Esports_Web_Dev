import { addPlayer, deletePlayer } from "../players";
import { addTeam, deleteTeam, getTeamInfo, updateTeamPlayers } from "../teams";

describe('test', () =>  {
    test('testing the test file', () => {
        expect(1+1).toBe(2);
    });
});

describe('getting all team info', () =>  {
    test('grab test user', async () => {
        const data = await getTeamInfo("0");

        expect(data).toStrictEqual({
            teamid: "0",
            teamdesc: "Small",
            teamname: "Clarence Claymores",
            teamplayers: ["DKC"]
        });
    });
});

describe('editing teams', () =>  {
    // test('add and delete team only', async () => {
    //     const id1 = await addPlayer("VorteX", "password")
    //     const id2 = await addPlayer("Laz", "password")
    //     const id3 = await addPlayer("henwe", "password")

    //     const teamid = await addTeam("Broyotech", [id1, id2, id3], "no gr4nnies allowed")
    //     expect(teamid).not.toBe("-1")
    //     const info = await getTeamInfo(teamid)
    //     console.log(info)
    //     expect(info).toStrictEqual({
    //         teamid: info.teamid,
    //         teamdesc: "no gr4nnies allowed",
    //         teamname: "Broyotech",
    //         teamplayers: ["VorteX", "Laz", "henwe"]
    //     });

    //     await deletePlayer(id1)
    //     await deletePlayer(id2)
    //     await deletePlayer(id3)
    //     await deleteTeam(teamid)

    //     const deletedInfo = await getTeamInfo(teamid)
    //     expect(deletedInfo.teamid).toBe("-1");
    // });

    test('update teammembers', async () => {
        const id1 = await addPlayer("VorteX", "password")
        const id2 = await addPlayer("Laz", "password")
        const id3 = await addPlayer("henwe", "password")

        const teamid = await addTeam("Broyotech", [id1, id2, id3], "no gr4nnies allowed")

        const id4 = await addPlayer("silent", "password")

        await updateTeamPlayers(teamid, [id4,id1])

        const info = await getTeamInfo(teamid)

        expect(info).toStrictEqual({
            teamid: info.teamid,
            teamdesc: "no gr4nnies allowed",
            teamname: "Broyotech",
            teamplayers: ["VorteX", "silent"]
        });

        await deletePlayer(id1)
        await deletePlayer(id2)
        await deletePlayer(id3)
        await deletePlayer(id4)
        await deleteTeam(teamid)
    })
});

