export const loggedInUser = (name, email, preps) => {
    console.log('this is the logged in action')
    return {
        type: 'LOGGED_IN_USER',
        user: {
            name: name,
            email_address: email,
            preps: preps
        }
    }
}