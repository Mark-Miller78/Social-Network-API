const router = require('express').Router();
const{
    getAllThoughts,
    getThoughtById,
    createNewThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction}=require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts);

router
    .route('/:userId')
    .post(createNewThought);

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought);

router
    .route('/:thoughtId/:userId')
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;