const ROOT = 'https://calm-spire-65182.herokuapp.com/api/v1'
// const ROOT = 'http://localhost:3000/api/v1'
const LOGIN = `${ROOT}/login`
const SIGNUP = `${ROOT}/users`
const PROFILE = `${ROOT}/users/`
const PREPARATION = `${ROOT}/preparations`
const STEP = `${ROOT}/steps`
let token = localStorage.getItem('jwt')

class Adapter {

    
    static isAuthenticated = () => {
        return localStorage.getItem('jwt')
    }

    static login = (email, pass) => {
        return fetch(LOGIN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    user: {
                    email_address: email,
                    password: pass
                    }
                })
            })
            .then(r => r.json())
            .then(data => {return data})
    }

    static signup = (name, email, pass) => {
        return fetch(SIGNUP, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    user: {
                    name: name,
                    email_address: email,
                    password: pass
                    }
                })
            })
            .then(r => r.json())
            .then(data => {return data})
    }

    static profile = (id) => {
        return fetch(PROFILE + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                current_user_id: id,
                jwt: token
            })
        })
    }

    static addPreparation = (prep, jwt) => {
        return fetch(PREPARATION, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user_id: prep.user_id,
                device: prep.device,
                coffee_brand: prep.coffee_brand,
                coffee_name: prep.coffee_name,
                coffee_amount: prep.coffee_amount,
                coffee_grind: prep.coffee_grind,
                total_time: prep.total_time,
                total_water: prep.total_water,
                water_temp: prep.water_temp,
                notes: prep.notes
            })
        })
        .then(resp => resp.json())
        .then(data => {return data})
    }

    static addStep = (step, jwt) => {
        return fetch(STEP, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(step)
        })
        .then(resp => resp.json())
        .then(data => {return data})
    }

    static editPreparation = (patchObj, id, jwt) => {
        return fetch(PREPARATION + '/' + id, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(patchObj)
        })
        .then(resp => resp.json())
        .then(data => {return data})
    }

    static fetchPreparation = (id, jwt) => {
        return fetch(PREPARATION + '/' + id, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {return data})
    }

    static deletePreparation = (id, jwt) => {
        return fetch(PREPARATION + '/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {return data})
    }

    static deleteStep = (id, jwt) => {
        return fetch(STEP + '/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {return data})
    }

    static updateStep = (step, jwt) => {
        return fetch(STEP + '/' + step.id, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(step)
        })
        .then(resp => resp.json())
        .then(data => {return data})
    }

    static fetchAllPreps = jwt => {
        return fetch(PREPARATION, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {return data})
    }
}
export default Adapter