
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
    editingId: null,
    editingStepId: null, 
    editingStep: {

    },
    browser: []
}

const reducer = (state={initialState}, action) => {
    switch(action.type){
        case 'LOGGED_IN_USER':
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
            return {
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
                editingId: null,
                editingStepId: null,
                editingStep: {},
                browser: []
            }
        case 'TOGGLE_STEP_TO_PREP':
            return {
                ...state,
                addNewStep: !state.addNewStep
            }
        case 'UPDATE_EDITING_PREP':
            return {
                ...state,
                showSteps: true,
                editingPrep: {
                    ...state.editingPrep, ...action.prep,
                    steps: [...action.prep.steps]
                }
            }
        case 'ADD_STEP_TO_EDITING_PREP':
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
            return {
                ...state,
                currentPrep: action.prep
            }
        case 'UPDATE_CURRENT_STEP':
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
        case 'PUSH_PREP_TO_STORE':
            return {
                ...state,
                user: {
                    ...state.user, preps: [
                        ...state.user.preps, action.prep
                    ]
                }
            }
        case 'REMOVE_STEP_FROM_STORE':
            return {
                ...state,
                user: {
                    ...state.user, preps: [
                        ...state.user.preps.map(prep => {
                            return (prep.id === action.step.preparation_id) ?
                            prep.steps.filter(step => {
                                return step.id !== action.step.id
                            }) :
                            prep
                        })
                    ]
                }
            }
        case 'REMOVE_STEP_FROM_EDITING_PREP':
            return {
                ...state, 
                editingPrep: {
                    ...state.editingPrep, steps: [
                            ...state.editingPrep.steps.filter(step => {
                                return step.id !== action.step.id
                            }) 
                    ]
                }
            }
        case 'ADD_EDITING_STEP_ID':
            return {
                ...state,
                editingStepId: action.id
            }
        case 'ADD_STEP_TO_PREP':
            return {
                ...state,
                user: {
                    ...state.user, preps: [
                        ...state.user.preps.map(prep => {
                            return (prep.id === action.step.preparation_id) ?
                            prep.steps.push(action.step) :
                            prep.steps
                        })
                    ]
                }
            }
        case 'REMOVE_EDITING_STEP_ID':
            return {
                ...state,
                editingStepId: null
            }
        case 'ADD_EDITING_STEP':
            return {
                ...state,
                editingStep: action.step
            }
        case 'UPDATE_STEP_IN_EDITING_PREP':
            return {
                ...state,
                editingPrep: {
                ...state.editingPrep, steps: [
                        ...state.editingPrep.steps.map(step => {
                            return (step.id === action.step.id) ?
                            action.step : step
                        }) 
                    ]
                }
            } 
        case 'ADD_PREPS_TO_BROWSER':
            return {
                ...state,
                browser: [...action.preps]
            }
        case 'REMOVE_EDITING_PREP':
            return {
                ...state,
                editingPrep: {
                    steps: []
                }
            }
        default:
            return state
    }
}

export default reducer