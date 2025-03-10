const express = require('express');
const router = new express.Router();
const { signupController } = require('../../controllers/usersignup/signupController'); 

router.route('/checkapi').get((_req, res) => {
    res.send('hello world');
});

// console.log(signupController);

router.route('/userSignup').get(signupController);


module.exports = router;
