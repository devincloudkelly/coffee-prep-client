
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
    },
    currentPrep: {
        steps: []
    },
    currentStep: {},
    editingId: null
}

const reducer = (state={initialState}, action) => {
    switch(action.type){
        case 'LOGGED_IN_USER':
            console.log('updating state in reducer w/ logged in user, here is current state and what I am passing in...', action.user)
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
                showSteps: false,
                editingPrep: {
                    steps: []
                },
                currentPrep: {
                    steps: []
                },
                currentStep: {},
                editingId: null
            }
        case 'TOGGLE_STEP_TO_PREP':
            console.log('toggling step in reducer...')
            return {
                ...state,
                addNewStep: !state.addNewStep
            }
        case 'ADD_PREP_TO_STORE':
            console.log('adding prep in reducer', action.prep)
            return {
                ...state,
                showSteps: true,
                editingPrep: {
                    ...state.editingPrep, ...action.prep,
                    steps: [...action.prep.steps]
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
        case 'RESET_ADD_NEW_STEP':
            return {
                ...state,
                addNewStep: false
            }
        case 'UPDATE_CURRENT_PREP':
            console.log('updating current prep in reducer...', action.prep)
            return {
                ...state,
                currentPrep: action.prep
            }
        case 'UPDATE_CURRENT_STEP':
            console.log('updating current step in reducer...', action.step)
            return {
                ...state,
                currentStep: action.step
            }
        case 'UPDATING_PREPS':
            return {
                ...state, user: {
                    ...state.user, preps: action.preps
                }
            }
        case 'ADD_EDITING_ID':
            return {
                ...state, 
                editingId: action.id
            }
        case 'REMOVE_EDITING_ID':
            return {
                ...state,
                editingId: null
            }
        case 'EDIT_PREP_IN_STORE':
            console.log('prep being passed to edit prep in store...', action.prep)
            return {
                ...state,
                user: {
                    ...state.user, preps: [

                        ...state.user.preps.map(prep => {
                            return (prep.id === action.prep.id ? 
                                action.prep :
                                prep)
                            })
                            
                        ]
                }
            }
        default:
            console.log('hitting default case statement..')
            return state
    }
}

export default reducer