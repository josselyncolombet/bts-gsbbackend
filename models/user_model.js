const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    bills: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Bills',
    },
    role: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        default: Date.now(),
    },
})

userSchema.pre('save', async function(next) {
    const existingUser = await User.findOne({ email: this.email })
    if (existingUser) {
        throw new Error('User already exists', { cause: 400 })
    }
    next()
})


const User = mongoose.model('User', userSchema)
module.exports = User