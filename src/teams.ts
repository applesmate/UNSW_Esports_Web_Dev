import sql from '../db'
import { Team, TeamFull, TeamPlayerPair } from './types'

async function addTeam(teamName: string, teamPlayers: Array<string>, teamDesc: string): Promise<string> {
    // teamPlayers is filled with player IDs
    
    if (teamPlayers.length == 0) {
        console.log("A team must have at least one player!")
        return '-1'
    }

    let teamID: string = String(Date.now())

    const team: Team = {
        teamid: teamID,
        teamname: teamName,
        teamdesc: teamDesc,
    }

    const dupe = await sql`
        select
            teamname
        from 
            devschema.teams
        where teamid like (${teamID})
    `
    if (!(typeof dupe[0] == 'undefined' || Object.keys(dupe[0]).length == 0)) {
        console.log("dupe is not empty")
        return '-1'
    }

    await sql`
        insert into devschema.teams ${ 
            sql(team, 'teamid', 'teamname', 'teamdesc')
        }
    `
    for (const i in teamPlayers) {
        // console.log(teamPlayers[i])
        const pair: TeamPlayerPair = {
            teamid: teamID,
            playerid: teamPlayers[i]
        }
        await sql`
            insert into devschema.teamplayers ${ 
                sql(pair, 'teamid', 'playerid')
            }
        `
    }

    return teamID
}

async function deleteTeam(teamID: string) {
    // console.log("deleted team " + teamName)
    await sql`
        delete from devschema.teams
        where teamid = ${teamID}
    `

    await sql`
        delete from devschema.teamplayers
        where teamid = ${teamID}
    `
}

async function getTeamInfo(teamID: string): Promise<TeamFull> {
    const teamInfo = await sql`
        SELECT
            *
        FROM
            devschema.teams
        WHERE
            teamid = ${teamID}
    `
    // console.log(teamInfo)
    if (typeof teamInfo[0] == 'undefined' || Object.keys(teamInfo[0]).length == 0) {
        const errorInfo: TeamFull = {
            teamid: '-1',
            teamname: '',
            teamdesc: '',
            teamplayers: [],
        }
        return errorInfo
    }

    // console.log(JSON.stringify(teamID))

    const teamPlayers = await sql`
        SELECT
            playerusername
        FROM
            devschema.players as p
        INNER JOIN
            devschema.teamplayers as tp on p.playerid = tp.playerid
        INNER JOIN
            devschema.teams as t on tp.teamid = t.teamid
        WHERE 
            t.teamid = (${teamID})
    `
    // p.currteamid = t.teamid and t.teamid = ${teamID}
    const returnedPlayers: Array<string> = []
    // console.log(teamPlayers)
    for (const i in teamPlayers) {
        // console.log(teamPlayers[i].playerusername)
        returnedPlayers.push(teamPlayers[i].playerusername)
    }
    console.log(returnedPlayers)
    return {
        teamid: teamInfo[0].teamid,
        teamplayers: returnedPlayers,
        teamname: teamInfo[0].teamname,
        teamdesc: teamInfo[0].teamdesc,
    }
}

async function updateTeamPlayers(teamID: string, rosterArray: Array<string>) {
    // delete all ids present with team
    await sql`
        DELETE FROM
            devschema.teamplayers
        WHERE
            teamid = ${teamID}
    `
    // add new ids present in the roster
    for (const id in rosterArray) {
        const pair = {
            teamid: teamID,
            playerid: rosterArray[id]
        }
        await sql`
            INSERT INTO
                devschema.teamplayers
            ${
                sql(pair, "teamid", "playerid")
            }
        `
    }
    
    return "Team Updated"
}

async function updateTeamInfo(teamID: string, teamArray: Team) {
    // delete all ids present with team
    await sql`
        UPDATE
            devschema.teams
        SET
            teamdesc = ${teamArray.teamdesc}, teamname = ${teamArray.teamname}
        WHERE
            teamid = ${teamID}
    `
    
    return "Team Updated"
}

export { addTeam, deleteTeam, getTeamInfo, updateTeamPlayers };