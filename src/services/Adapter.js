const ROOT = 'http://localhost:3000/api/v1'
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
        console.log('credentials being passed in the fetch to login', email, pass)
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
        console.log('credentials being passed in the fetch to signup', name, email, pass)
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
}
export default Adapter