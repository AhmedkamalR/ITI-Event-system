const express = require("express");
const { body, query, param } = require("express-validator")
const router = express.Router();

const controller = require("./../controllers/speakerController");
const Speaker = require("./../models/speakerSchema");
let isAuth = require("./../middleware/authMW");

//removed isAuth
router.route("/speakers")
    .get(isAuth, [], controller.getAllSpeaker)

    .post(isAuth,[
        body("fullname").notEmpty().withMessage("fullname shouldn't be Empty."),
        body("email").notEmpty().withMessage("email shouldn't be Empty."),
        // body("image").notEmpty().withMessage("image shouldn't be Empty."),
        body("address").notEmpty().withMessage("address shouldn't be Empty."),
        body("age").notEmpty().withMessage("age shouldn't be Empty."),
        body("birthDate").notEmpty().withMessage("birthDate shouldn't be Empty."),
        body("hourRate").notEmpty().withMessage("hourRate shouldn't be Empty."),
        body("isMarried").notEmpty().withMessage("isMarried shouldn't be Empty."),
        body("rating").notEmpty().withMessage("rating shouldn't be Empty.")
        
    ], controller.addSpeaker)

    .delete(isAuth, [
        body("_id").notEmpty().withMessage("_id shouldn't be Empty.")
        // body("email").notEmpty().withMessage("email should not be empty")
    ], controller.deleteSpeaker)

    .put(isAuth,[
        body("fullname").notEmpty().withMessage("fullname shouldn't be Empty."),
        // body("image").notEmpty().withMessage("image shouldn't be Empty."),
        body("address").notEmpty().withMessage("address shouldn't be Empty."),
        body("age").notEmpty().withMessage("age shouldn't be Empty."),
        body("birthDate").notEmpty().withMessage("birthDate shouldn't be Empty."),
        body("hourRate").notEmpty().withMessage("hourRate shouldn't be Empty."),
        body("isMarried").notEmpty().withMessage("isMarried shouldn't be Empty."),
        body("rating").notEmpty().withMessage("rating shouldn't be Empty.")
    ], controller.updateSpeaker)



router.route("/speakers/:id?")
    .get([], controller.getSpeaker)

module.exports = router;