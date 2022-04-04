const express = require("express");
const { body, query, param } = require("express-validator");
const router = express.Router();
const controller = require("./../controllers/doctorController");

router.route("/doctors")
    .get([], controller.getAllDoctors)

    .post( [
        //body("name").notEmpty().withMessage("name shouldn't be Empty."),
        // body("email").notEmpty().withMessage("email shouldn't be Empty."),
        // body("password").notEmpty().withMessage("password shouldn't be Empty."),
        // body("phone").notEmpty().withMessage("phone shouldn't be Empty."),
        // body("age").notEmpty().withMessage("age shouldn't be Empty."),       
        // body("spec").notEmpty().withMessage("spec shouldn't be Empty."),
        // body("availability").notEmpty().withMessage("availability shouldn't be Empty.")
    ], controller.addDoctor)

// router.route("/doctors/:id")
   .delete([
        body("_id").notEmpty().withMessage("_id shouldn't be Empty.")
    ], controller.deleteDoctor)

// router.route("/doctors/:id")
    .put( [
        // body("name").notEmpty().withMessage("name shouldn't be Empty."),
        // body("email").notEmpty().withMessage("email shouldn't be Empty."),
        // body("password").notEmpty().withMessage("password shouldn't be Empty."),
        // body("phone").notEmpty().withMessage("phone shouldn't be Empty."),
        // body("age").notEmpty().withMessage("age shouldn't be Empty."),       
        // body("spec").notEmpty().withMessage("spec shouldn't be Empty."),
        // body("availability").notEmpty().withMessage("availability shouldn't be Empty.")
    ], controller.updateDoctor)



router.route("/doctors/:id?")
    .get( [], controller.getDoctor)

module.exports = router;