import sql from '../db'

// look at https://www.w3schools.com/js/js_promise.asp for help with promises

async function addPlayer(playerName: string): Promise<string> {
    let playerID : string = String("P-" + Date.now())
    const player: Player = {
        PlayerID: 'P-1',
        PlayerUserName: 'DKC'
    }

    await sql`
        insert into players ${
            sql(player, 'PlayerID', 'PlayerUserName')
        }
    `
    return playerID
}

async function getPlayer(playerID: Promise<string>) {
    const playerIDstr = String(playerID)
    const playerInfo = await sql`
        SELECT
            playerID
        FROM
            players
        WHERE
            playerID == ${playerIDstr}
    `
        // .then(function(value) {
        //     return playerInfo
        // })
    return playerInfo
}

async function deletePlayer(playerID: Promise<string>) {
    const playerIDstr = String(playerID)
    const players = await sql`
        delete from players
        where PlayerID == ${playerIDstr}
    `
    console.log(playerID + " deleted")
}

export { addPlayer, deletePlayer, getPlayer };