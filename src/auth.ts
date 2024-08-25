/**
 * Logs in user given username and password
 * @param username 
 * @param password 
 * @returns sessionId string on success and errorCode number otherwise
 */
async function loginUser(username: string, password: string): Promise<string | number> {
    // check if username exits
    // check if hashed password matches the corresponding hash in the database
    return "sessionId";
}

/**
 * Logs out user from a specific session
 * @param sessionId - session that user is logging out of
 */
async function logoutUser(sessionId: string) {
    // closes user session
}

/**
 * Registers user given 
 * @param username - unique username
 * @param email - unique email
 * @param password
 * @returns sessionId string on success and errorCode number otherwise
 */
async function registerUser(username: string, email: string, password: string,
                            discord: string): Promise<string | number> {
    // check if email has been used and is valid
    // check if username fits requirements: less than 16 chars, only alphanumeric
    // check if password fits requirements: more than 8 chars, less than 32 chars, only alphanumeric and 
    // some special chars @?# etc.
    // check if discord has been used
    // authenticate user via discord and wait for response
    // add email, username and hashed password into database
    // logs in user and returns their sessionId on success 
    return "sessionId";
}

/**
 * Changes user's password
 * @param username 
 * @param currentPassword 
 * @param newPassword 
 * @returns true on success, false otherwise
 */
async function updatePassword(username: string, currentPassword: string, newPassword: string): Promise<boolean> {
     // check if hashed password matches the corresponding hash in the database
     // change password for that user if true
    return true;
}   

/**
 * Updates user's info
 * @param username 
 * @param password 
 * @param email 
 * @param discord 
 * @returns true on success, false otherwise
 */
async function updateInfo(username: string, password: string, newEmail: string, newDiscord: string): Promise<boolean> {
    // check if hashed password matches the corresponding hash in the database
    // check if new email has been used
    // check if new discord has been used
    // change user email and discord in database
    return true;
}