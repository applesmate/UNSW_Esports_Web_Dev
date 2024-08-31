export type Player = {
    playerusername: string,
    playerdesc: string,
    playerrealname: string,
    playerid: string,
    currteamid: string,
    playerpassword: string
};

export type Team = {
    teamid: string,
    teamname: string,
    teamdesc: string,
}

export type TeamFull = {
    teamid: string,
    teamname: string,
    teamdesc: string,
    teamplayers: Array<string>
}

export type TeamPlayerPair = {
    teamid: string,
    playerid: string
}