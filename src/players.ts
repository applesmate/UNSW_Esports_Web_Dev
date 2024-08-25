import sql from '../db'
import { Player } from './types'

// look at https://www.w3schools.com/js/js_promise.asp for help with promises

async function addPlayer(playerName: string, teamid: string) {
    let playerid: string = String(Date.now())
    let playerusername: string = "VorteX"
    const player: Player = {
        playerid: playerid,
        playerusername: playerusername, 
        teamid: teamid,
        playerdesc: "",
        playerrealname: ""
    }
    await sql`
        insert into devschema.players ${
            sql(player, "playerusername", "playerdesc", "playerrealname", "playerid", "teamid")
        }
    `

    return playerid
}

/**
 * gets all player info from a single player id
 * @param playerID 
 * @returns 
 */
async function getPlayerAll(playerID: string) {
    
    const player = await sql<Player[]>`
        SELECT
            *
        FROM
            devschema.players
        WHERE
            playerid = ${playerID}
    `
    // .then((playerInfo) => {
    //     console.log(playerInfo[0])
    //     return playerInfo[0]
    // })
    console.log(player)
    return player[0]
}

/**
 * gets the playerid from a given player id, return -1 if empty
 * @param playerID
 * @returns 
 */
async function getPlayerID(playerID: string) {
    const player = await sql`
        SELECT
            playerusername
        FROM
            devschema.players
        WHERE
            playerid = ${playerID}
    `
    return player[0]
}

async function deletePlayer(playerID: string) {
    console.log("------------")
    console.log(playerID + " deleted")
    const players = await sql`
        delete from devschema.players
        where playerid = ${playerID}
    `
}

export { addPlayer, deletePlayer, getPlayerID, getPlayerAll };