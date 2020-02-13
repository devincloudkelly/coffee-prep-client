
class CoffeeAction {

    
    static loggedInUser = (id, name, email, preps, jwt) => {
        console.log('this is the logged in action', preps)
        let newPrep = []
        preps.map(prep => {
            let onlyPrep = prep.prep
            onlyPrep.steps = prep.steps
            newPrep.push(onlyPrep)
        })
        console.log('this is newprep', newPrep)
    return {
        type: 'LOGGED_IN_USER',
        user: {
            id: id,
            name: name,
            email_address: email,
            preps: newPrep
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

    static updateEditingPrep = (prep) => {
        console.log('updating editingPrep in action...', prep)
        return {
            type: 'UPDATE_EDITING_PREP',
            prep: prep
        }
    }

    static addStepToEditingPrep = (step) => {
        console.log('adding step to editingPrep..', step)
        return {
            type: 'ADD_STEP_TO_EDITING_PREP',
            step: step
        }
    }
    static resetAddNewStep = () => {
        return {
            type: 'RESET_ADD_NEW_STEP',
            payload: 'reseting addNewStep...'
        }
    }

    static updateCurrentPrep = (prep) => {
        console.log('updating current prep in action...', prep)
        return {
            type: 'UPDATE_CURRENT_PREP',
            prep: prep
        }
    }

    static updateCurrentStep = (step) => {
        console.log('updating current step in action...', step)
        return {
            type: 'UPDATE_CURRENT_STEP',
            step: step
        }
    }
    static updatePreps = preps => {
        console.log('updating preps in action...', preps)
        return {
            type: 'UPDATING_PREPS',
            preps: preps
        }
    }
    static addEditingId = id => {
        return {
            type: 'ADD_EDITING_ID',
            id: id
        }
    }

    static removeEditingId = () => {
        return {
            type: 'REMOVE_EDITING_ID',
            payload: 'removing editing id...'
        }
    }

    static editPrepInStore = prep => {
        console.log('editing prep in store action...', prep)
        return {
            type: 'EDIT_PREP_IN_STORE',
            prep: prep
        }
    }

    static pushPrepToStore = prep => {
        return {
            type: 'PUSH_PREP_TO_STORE',
            prep: prep
        }
    }

    static removeStepFromStore = step => {
        return {
            type: 'REMOVE_STEP_FROM_STORE',
            step: step
        }
    }
    static removeStepFromEditingPrep = step => {
        return {
            type: 'REMOVE_STEP_FROM_EDITING_PREP',
            step: step
        }
    }

    static addEditingStepId = id => {
        return {
            type: 'ADD_EDITING_STEP_ID',
            id: id
        }
    }

    static addStepToPrep = step => {
        return {
            type: 'ADD_STEP_T0_PREP',
            step: step
        }
    }

    static removeEditingStepId = () => {
        return {
            type: 'REMOVE_EDITING_STEP_ID',
            payload: 'removing editing step id'
        }
    }
    static addEditingStep = step => {
        return {
            type: 'ADD_EDITING_STEP',
            step: step
        }
    }
    static updateStepInEditingPrep = step => {
        return {
            type: 'UPDATE_STEP_IN_EDITING_PREP',
            step: step
        }
    }
    static addPrepsToBrowser = preps => {
        return {
            type: 'ADD_PREPS_TO_BROWSER',
            preps: preps
        }
    }
    static removeEditingPrep = () => {
        return {
            type: 'REMOVE_EDITING_PREP',
            payload: 'removing editing prep from store.'
        }
    }
}
export default CoffeeAction;