const ROOT = 'http://localhost:3000/api/v1'
const LOGIN = `${ROOT}/login`
const SIGNUP = `${ROOT}/users`

class Adapter {


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
}
export default Adapter