const router = require('express').Router();
const{
    getAllThoughts,
    getThoughtById,
    createNewThought,
    updateThought,
    deleteThought}=require('../../controllers/thought-controller');

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

    
module.exports = router;