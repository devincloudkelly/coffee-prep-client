export const loggedInUser = (name, email, preps) => {
    return {
        type: 'LOGGED_IN_USER',
        name: name,
        email_address: email, 
        preps: preps
    }
}