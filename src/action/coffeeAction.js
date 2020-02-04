
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
    static toggleStepToPrep = () => {
        console.log('toggline add step to a prep...')
        return {
            type: 'TOGGLE_STEP_TO_PREP',
            payload: 'toggling step to prep...'
        }
    }

    static addPrepToStore = (prep) => {
        console.log('adding prep to store', prep)
        return {
            type: 'ADD_PREP_TO_STORE',
            prep: prep
        }
    }

    static addStepToStore = (step) => {
        console.log('adding step to store..', step)
        return {
            type: 'ADD_STEP_TO_STORE',
            step: step
        }
    }
    static resetAddNewStep = () => {
        return {
            type: 'RESET_ADD_NEW_STEP',
            payload: 'reseting addNewStep...'
        }
    }
}
export default CoffeeAction;