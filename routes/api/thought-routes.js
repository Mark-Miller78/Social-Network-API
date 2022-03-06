const router = require('express').Router();
const{
    getAllThoughts,
    getThoughtById,
    createNewThought}=require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts);

router
    .route('/:userId')
    .post(createNewThought);

router
    .route('/:thoughtId')
    .get(getThoughtById);

module.exports = router;