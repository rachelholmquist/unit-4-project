require('dotenv').config()
const {SECRET} = process.env

module.exports = {
    register: (req, res) => {
        console.log('register')
    },

    login: (req, res) => {
        console.log('login')
    },
}