/**
 * Creates bracket system
 * @param teams 
 * @returns bracketId: string
 */
function createBracketSystem(teams: string[]): number {
  for (const team of teams) {
    // randomly insert each team into bracket
  }
  // return bracketId (used to identify each bracket)
  return 0;
}


/**
 * Updates bracket system 
 * @returns void
 */
function updateBracket(): void {
  // manipulate bracket
  // report match results then organises teams into their next respective position
  // e.g. WINNER OF MATCH A vs WINNER OF MATCH B
  // moving to lower brackets (s)
}


/**
 * Deletes bracket system
 * @param deleteBracketId 
 * @returns void
 */
function deleteBracketSystem(deleteBracketId: number): void {
  // idk probably have to remove from database
  // invoke a query? delete from brackets where bracket.bracketId = deleteBracketId
}
