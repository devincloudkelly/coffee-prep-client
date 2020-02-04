
const initialState = {
    loggedIn: false,
    user: {
        id: 0,
        name: '',
        email_address: '',
        preps: []
    },
    jwt: '',
    showSteps: false,
    addNewStep: false,
    editingPrep: {
        steps: []
    }
}

const reducer = (state={initialState}, action) => {
    switch(action.type){
        case 'LOGGED_IN_USER':
            console.log('updating state in reducer w/ logged in user, here is current state and what I am passing in...', state, action.user.name, action.user.email_address, action.user.preps)
            return { ...state,
                loggedIn: true,
                jwt: action.jwt,
                user: {
                    id: action.user.id,
                    name: action.user.name,
                    email_address: action.user.email_address,
                    preps: action.user.preps
                }
            }
        case 'LOG_OUT':
            console.log('logging out in reducer')
            return {...state,
                loggedIn: false,
                jwt: '',
                user: {
                    id: 0,
                    name: '',
                    email_address: '',
                    preps: []
                },
                addNewStep: false,
                showSteps: false
            }
        case 'TOGGLE_STEP_TO_PREP':
            console.log('toggling step in reducer...')
            return {
                ...state,
                addNewStep: !state.addNewStep
            }
        case 'ADD_PREP_TO_STORE':
            console.log('adding prep in reducer')
            return {
                ...state,
                showSteps: true,
                editingPrep: {
                    ...state.editingPrep, ...action.prep
                }
            }
        case 'ADD_STEP_TO_STORE':
            console.log('adding step to store in reducer...')
            return {
                ...state,
                editingPrep: {
                    ...state.editingPrep, steps: [...state.editingPrep.steps, action.step]
                }
            }
        default:
            console.log('hitting default case statement..')
            return state
    }
}

export default reducer