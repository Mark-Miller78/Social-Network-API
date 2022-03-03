const {Schema, model, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: 'Thought must be between 1 and 280 characters in length!',
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username:{
            type: String,
            required: true,
            ref: 'User'
        },
        reactions:[reactionSchema]
    },
    {
        toJSON:{
            virtuals: true,
            getters:true
        },
        id: false       
    }

)

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});