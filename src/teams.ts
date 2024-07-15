import sql from '../db'

async function addTeam(teamName: string, teamPlayers: Array<string>) {
    if (teamPlayers.length == 0) {
        console.log("A team must have at least one player!")
        return "err"
    }
    
    let players = String(teamPlayers)
    let teamID : string = String("T-" + Date.now())

    const dupe = await sql`
        select
            teamName
        from teams
        where teamName like (${teamName})
    `
    if (dupe) {
        console.log("dupe is not empty")
        return "err"
    }
    const teams = await sql`
        insert into teams
            (TeamID, TeamName, TeamPlayers)
        values
            (${ teamID }, ${ teamName }, ${ players })
    `
    return teamID
}

async function deleteTeam(teamName: string) {

    const teams = await sql`
        delete from teams
        where teamName == ${teamName}
    `
}

// async function getTeamInfo(teamName) {
//     const teamInfo = await sql`
//         SELECT
//             info
//         FROM
//             Teams
//         WHERE
//             teamName like ${ teamName }
//     `
//     return teamInfo
// }

// async function getTeamPlayer(teamName, teamPlayerName) {
//     const teamPlayer = await sql`
//         SELECT
//             player
//         FROM
//             Teams
//         WHERE
//             teamName like ${ teamName }
//             and player like ${ teamPlayerName }
//     `
//     return teamPlayer
// }

// async function getTeamResults(teamName) {
//     // matches get added to team db as well as general match db
//     // simply list all results recorded
//     // pagination if results get too long?
//     const teamResults = await sql`
//         SELECT
//             results
//         FROM
//             Teams
//         WHERE
//             teamNames like ${ teamName }
//             ORDER by date DESC
//     `
//     return teamResults
// }

// async function updateTeamRoster(teamName, rosterArray) {
//     const teamResults = await sql`
//         INSERT
//             ...
//     `
//     return "Team Updated"
// }

// async function getTeamTournaments(teamName) {
//     const teamTournaments = await sql`
//         SELECT
//             tournaments
//         FROM
//             Teams
//         WHERE
//             teamNames like ${ teamName }
//             ORDER by date DESC
//     `
//     return teamTournaments
// }

export { addTeam, deleteTeam };