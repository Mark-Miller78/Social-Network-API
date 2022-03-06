const res = require('express/lib/response');
const {Thought, User} = require('../models')

const thoughtController ={
    getAllThoughts (req, res){
        Thought.find({})
            .select('-__v')
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getThoughtById({params}, res){
        Thought.findOne({_id: params.thoughtId})
            .populate({
                path: 'reactions',
                select: ('-__v')
            })
            .select('-__v')
            .then(dbThoughtData =>{
                if(!dbThoughtData){
                    res.status(404).json({message: 'No thoughts found with that Id'});
                    return;
                }
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    createNewThought({params, body}, res){
        Thought.create(body)
            .then(({_id}) =>{
                return User.findOneAndUpdate(
                    {_id: params.userId},
                    {$push: {thoughts: _id}},
                    {new: true}
                );
            }) 
            .then(dbUserData =>{
                if(!dbUserData){
                    res.status(404).json({message: 'No User found with that id!'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err =>{
                console.log(err);
                res.status(400).json(err);
            })
    },

    updateThought({params, body}, res){
        Thought.findOneAndUpdate({_id: params.thoughtId}, body, {new: true, runValidators: true})
            .then(dbThoughtData =>{
                if(!dbThoughtData){
                    res.status(404).json({message: 'No Thought found with that id!'});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err =>{
                console.log(err);
                res.status(400).json(err);
            })
    },

    deleteThought({params}, res){
        Thought.findOneAndDelete({_id: params.thoughtId})
            .then(dbThoughtData =>{
                if(!dbThoughtData){
                    res.status(404).json({message: 'No Though found with that id!'});
                    return;
                }
                return User.findOneAndUpdate(
                    {_id: params.userId},
                    {$pull: {thoughts: params.thoughtId}},
                    {new: true}
                );
            })
            .then(dbUserData =>{
                if(!dbUserData){
                    res.status(404).json({message: 'No user found with that id!'});
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
};

module.exports = thoughtController;