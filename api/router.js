const router = require('express').Router();


const userRoute = require('../users/router.js');


router.use('/users', userRoute);

router.get('/', (req,res) => {
    res.status(200).json({ message: "As you wish"})
});

module.exports = router;