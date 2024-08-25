import sql from '../db'

// look at https://www.w3schools.com/js/js_promise.asp for help with promises

async function addPlayer(playerName: string): Promise<string> {
    let playerid: string = "P-1"// + Date.now())
    const player: Player = {
        playerid: playerid,
        playerusername: String("DKC")
    }

    await sql`
        insert into devschema.players ${
            sql(player, "playerid", "playerusername")
        }
    `
    return playerid
}

async function getPlayerAll(playerID: string) {
    const playerInfo = await sql`
        SELECT
            *
        FROM
            devschema.players
        WHERE
            playerid = ${playerID}
    `
    
    await sql.end();
    return playerInfo.length != 0 ? playerInfo[0] : "error";
}

async function getPlayer(playerID: string) {
    await sql`
        SELECT
            playerid
        FROM
            devschema.players
        WHERE
            playerid = ${playerID}
    `.then((playerInfo) => {
        //console.log(playerInfo)
        return playerInfo
    })
}

async function deletePlayer(playerID: string) {
    const playerIDstr: string = String(playerID)
    console.log("------------")
    const players = await sql`
        delete from devschema.players
        where playerid = ${playerIDstr}
    `
    console.log(playerID + " deleted")
}

export { addPlayer, deletePlayer, getPlayer, getPlayerAll };