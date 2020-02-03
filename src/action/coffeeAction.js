
class CoffeeAction {

    
    static loggedInUser = (id, name, email, preps, jwt) => {
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

  static logOut = () => {
    console.log('logging out user...')
    return {
        type: 'LOG_OUT',
        payload: 'logging out user'
    }

}
    static addStepToPrep = () => {
        console.log('adding step to a prep...')
        return {
            type: 'ADD_STEP_TO_PREP',
            payload: 'adding step to prep, toggle addNewStep...'
        }
    }

}
export default CoffeeAction;