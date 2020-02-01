

const initialState = {key: 'initial state'}

const state = {
    loggedIn: false,
    user: {
        id: 0,
        name: '',
        email_address: '',
        preps: []
    },
    jwt: ''
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'LOGGED_IN_USER':
            console.log('updating state in reducer w/ logged in user, here is current state and what I am passing in...', state, action.user.name, action.user.email_address, action.user.preps)
            return { 
                loggedIn: true,
                jwt: action.jwt,
                user: {
                    id: action.user.id,
                    name: action.user.name,
                    email_address: action.user.email_address,
                    preps: [action.user.preps]
                }
            }
        case 'LOG_OUT':
            console.log('logging out in reducer')
            return {
                loggedIn: false,
                jwt: '',
                ...state, user: {
                    id: 0,
                    name: '',
                    email_address: '',
                    preps: []
                }
            }
        default:
            console.log('hitting default case statement..')
            return state
    }
}

export default reducer