/**
 * Created by T897060 on 07/05/2017.
 */
var express = require('express');
var controller = require("./user.controller");
var router = express.Router();

router.route('')
    .post(controller.authenticateCredentials);

module.exports = router;
