

const initialState = {key: 'initial state'}

const state = {
    user: {
        name: '',
        email_address: '',
        preps: []
    }
}

const reducer = (state=initialState, action) => {
    console.log('log from reducer, here is state and action', state, action)
    switch(action.type){
        case 'LOGGED_IN_USER':
            console.log('updating state in reducer w/ logged in user...', action.user.name, action.user.email_address, action.user.preps)
            return { 
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