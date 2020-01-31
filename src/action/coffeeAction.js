export const loggedInUser = (id, name, email, preps, jwt) => {
    console.log('this is the logged in action')
    return {
        type: 'LOGGED_IN_USER',
        user: {
            id: id,
            name: name,
            email_address: email,
            preps: preps
        },
        jwt: jwt
    }
}

export const logOut = () => {
    console.log('logging out user...')
    return {
        type: 'LOG_OUT',
        payload: 'logging out user'
    }
}