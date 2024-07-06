import sql from '../db.ts'

async function getTeamInfo(teamName) {
    const teamInfo = await sql`
        SELECT
            info
        FROM
            Teams
        WHERE
            teamName like ${ teamName }
    `
    return teamInfo
}

async function getTeamPlayer(teamName, teamPlayerName) {
    const teamPlayer = await sql`
        SELECT
            player
        FROM
            Teams
        WHERE
            teamName like ${ teamName }
            and player like ${ teamPlayerName }
    `
    return teamPlayer
}

async function getTeamResults(teamName) {
    // matches get added to team db as well as general match db
    // simply list all results recorded
    // pagination if results get too long?
    const teamResults = await sql`
        SELECT
            results
        FROM
            Teams
        WHERE
            teamNames like ${ teamName }
            ORDER by date DESC
    `
    return teamResults
}

async function updateTeamRoster(teamName, rosterArray) {
    const teamResults = await sql`
        INSERT
            ...
    `
    return "Team Updated"
}

async function getTeamTournaments(teamName) {
    const teamTournaments = await sql`
        SELECT
            tournaments
        FROM
            Teams
        WHERE
            teamNames like ${ teamName }
            ORDER by date DESC
    `
    return teamTournaments
}

async function getMatchInfo(matchID) {
    const matchInfo = await sql`
        SELECT
            info
        FROM
            Matches
        WHERE
            id = ${ matchID }
    `
    return matchInfo
}

async function getMatchTeams(matchID) {
    const matchTeams = await sql`
        SELECT
            teams
        FROM
            Matches
        WHERE
            id = ${ matchID }
    `
    return matchTeams
}

async function getMatchMapPool(matchID) {
    const matchMapPool = await sql`
        SELECT
            pool
        FROM
            Matches
        WHERE
            id = ${ matchID }
    `
    return matchMapPool
}

async function getMatchResults(matchID) {
    const matchResutls = await sql`
        SELECT
            results
        FROM
            Matches
        WHERE
            id = ${ matchID }
    `
    return matchResutls
}