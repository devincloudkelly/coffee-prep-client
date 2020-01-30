//

const initialState = {key: 'initial state'}

const state = {
    user: {
        name: '',
        email_address: '',
        preps: []
    },

}

export const reducer = (state={initialState}, action) => {
    switch (action.type) {
        case 'LOGGED_IN_USER':
            return {...state, user: {
                name: action.name,
                email_address: action.email_address,
                preps: [action.preps]
                    }
                }
        default:
            return state
    }
}

export default reducer