const {Schema, Types, model} = require('mongoose');

const userSchema = new Schema(
    {
        username:{
            type: String,
            unique: true,
            required: 'A username is required to make an account!',
            trim: true
        },
        email:{
            type: String,
            Required: 'Please enter a valid email address!',
            unique: true,
        },
        thoughts:[thoughtSchema],
        friends:[userSchema],
    },
    {
        toJSON:{
            virtuals:true,
        },
        id: false
    }
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;