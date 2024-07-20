import sql from '../db'

async function addMatch(team1ID: string, team2ID: string, team1Score: number, team2Score: number, winnerTeamID: string) {
    let matchID : string = String("M-" + Date.now())
    let matchDate : number = Date.now()

    const match = await sql`
        insert into matches
            (MatchID, Team1ID, Team2ID, MatchDate, Team1Score, Team2Score, WinnerTeamID)
        values
            (${ matchID }, ${ team1ID }, ${ team2ID }, ${ matchDate }, ${ team1Score }, ${ team2Score }, ${ winnerTeamID })
    `
    return 0
}

async function deleteMatch(matchID: string) {

    const teams = await sql`
        delete from matches
        where MatchID == ${matchID}
    `
}

// async function getMatchInfo(matchID) {
//     const matchInfo = await sql`
//         SELECT
//             info
//         FROM
//             Matches
//         WHERE
//             id = ${ matchID }
//     `
//     return matchInfo
// }

// async function getMatchTeams(matchID) {
//     const matchTeams = await sql`
//         SELECT
//             teams
//         FROM
//             Matches
//         WHERE
//             id = ${ matchID }
//     `
//     return matchTeams
// }

// async function getMatchMapPool(matchID) {
//     const matchMapPool = await sql`
//         SELECT
//             pool
//         FROM
//             Matches
//         WHERE
//             id = ${ matchID }
//     `
//     return matchMapPool
// }

// async function getMatchResults(matchID) {
//     const matchResutls = await sql`
//         SELECT
//             results
//         FROM
//             Matches
//         WHERE
//             id = ${ matchID }
//     `
//     return matchResutls
// }

export { addMatch, deleteMatch };