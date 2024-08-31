import sql from '../db'
import { Player } from './types'

const crypto = require('crypto');

// look at https://www.w3schools.com/js/js_promise.asp for help with promises

let salt = crypto.randomBytes(16).toString('hex');

async function addPlayer(playerName: string, password: string) {
    let playerid: string = String(Date.now())
    let playerusername: string = playerName
    const encryptedPassword = crypto.createHash('sha256').update(password + salt).digest('hex');
    const player: Player = {
        playerid: playerid,
        playerusername: playerusername, 
        currteamid: '',
        playerdesc: '',
        playerrealname: '',
        playerpassword: encryptedPassword
    }
    await sql`
        insert into devschema.players ${
            sql(player, "playerusername", "playerdesc", "playerrealname", "playerid", "currteamid", "playerpassword")
        }
    `

    return playerid
}

/**
 * gets all player info from a single player id
 * @param playerID 
 * @returns 
 */
async function getPlayerAll(playerID: string): Promise<Player> {
    
    const playerInfo = await sql<Player[]>`
        SELECT
            *
        FROM
            devschema.players
        WHERE
            playerid = ${playerID}
    `
    
    if (playerInfo.length == 0) {
        const errorInfo: Player = {
            playerusername: '',
            playerdesc: '',
            playerrealname: '',
            playerid: '-1',
            currteamid: '',
            playerpassword: ''
        }
        return errorInfo
    }
    return playerInfo[0];
}

/**
 * checks if player exists, return -1 if empty
 * @param playerID
 * @returns 
 */
async function getPlayerID(playerID: string) {
    const player = await sql`
        SELECT
            playerid
        FROM
            devschema.players
        WHERE
            playerid = ${playerID}
    `

    if (typeof player[0] == 'undefined' || Object.keys(player[0]).length == 0) {
        return "-1"
    } else {
        const id: string = player[0].playerid
        return id
    }
}

async function deletePlayer(playerID: string) {
    //console.log(playerID + " deleted")
    await sql`
        delete from devschema.players
        where playerid = ${playerID}
    `

    await sql`
        delete from devschema.teamplayers
        where playerid = ${playerID}
    `
}

async function updatePlayerUserName(playerID: string, newName: string) {
    const info = await getPlayerAll(playerID)
    const player = {
        playerusername: newName,
        playerdesc: info.playerdesc,
        playerrealname: info.playerrealname,
        playerid: playerID,
        currteamid: info.currteamid,
        playerpassword: info.playerpassword
    }
    const updatedPlayer = await sql`
        UPDATE
            devschema.players
        SET
            ${
                sql(player, 'playerusername', 'playerdesc', 'playerrealname', 'playerid', 'currteamid', 'playerpassword')
            }
        WHERE
            playerid = ${playerID}
    `
    return newName
}

async function updatePlayerRealName(playerID: string, newName: string) {
    const info = await getPlayerAll(playerID)
    const player = {
        playerusername: info.playerusername,
        playerdesc: info.playerdesc,
        playerrealname: newName,
        playerid: playerID,
        currteamid: info.currteamid,
        playerpassword: info.playerpassword
    }
    const updatedPlayer = await sql`
        UPDATE
            devschema.players
        SET
            ${
                sql(player, 'playerusername', 'playerdesc', 'playerrealname', 'playerid', 'currteamid', 'playerpassword')
            }
        WHERE
            playerid = ${playerID}
    `
    return newName
}

async function updatePlayerDescription(playerID: string, newDesc: string) {
    const info = await getPlayerAll(playerID)
    const player = {
        playerusername: info.playerusername,
        playerdesc: newDesc,
        playerrealname: info.playerrealname,
        playerid: playerID,
        currteamid: info.currteamid,
        playerpassword: info.playerpassword
    }
    await sql`
        UPDATE
            devschema.players
        SET
            ${
                sql(player, 'playerusername', 'playerdesc', 'playerrealname', 'playerid', 'currteamid', 'playerpassword')
            }
        WHERE
            playerid = ${playerID}
    `
    return newDesc
}

async function updatePlayerPassword(playerID: string, newPassword: string) {
    const info = await getPlayerAll(playerID)
    const player = {
        playerusername: info.playerusername,
        playerdesc: info.playerdesc,
        playerrealname: info.playerrealname,
        playerid: playerID,
        currteamid: info.currteamid,
        playerpassword: newPassword
    }
    await sql`
        UPDATE
            devschema.players
        SET
            ${
                sql(player, 'playerusername', 'playerdesc', 'playerrealname', 'playerid', 'currteamid', 'playerpassword')
            }
        WHERE
            playerid = ${playerID}
    `
    return newPassword
}

export { addPlayer, deletePlayer, getPlayerID, getPlayerAll, updatePlayerUserName, updatePlayerDescription, updatePlayerRealName, updatePlayerPassword };