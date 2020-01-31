

const initialState = {key: 'initial state'}

const state = {
    loggedIn: false,
    user: {
        name: '',
        email_address: '',
        preps: []
    }
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'LOGGED_IN_USER':
            console.log('updating state in reducer w/ logged in user...', action.user.name, action.user.email_address, action.user.preps)
            return { 
                loggedIn: true,
                ...state, user: {
                name: action.user.name,
                email_address: action.user.email_address,
                preps: [action.user.preps]
                    }
                }
        default:
            console.log('hitting default case statement..')
            return state
    }
}

export default reducer