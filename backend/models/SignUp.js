const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let signUpSchema = new Schema({
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    faveFeatures: {
        type: String
    },
},{
    collection: 'signUps'
})

module.exports = mongoose.model('SignUp', signUpSchema)