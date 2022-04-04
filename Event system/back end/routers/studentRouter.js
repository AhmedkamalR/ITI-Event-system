const express = require("express");
const { body, query, param } = require("express-validator")
const router = express.Router();
const student = require("./../models/studentSchema");

const controller = require("./../controllers/studentController");
let isAuth = require("./../middleware/authMW");

router.route("/students")
    .get(isAuth,[], controller.getAllStudents)

    .post(isAuth, [
       body("fullname").notEmpty().withMessage("fullname shouldn't be Empty."),
        body("email").notEmpty().withMessage("email shouldn't be Empty."),
        body("address").notEmpty().withMessage("address shouldn't be Empty."),
        body("age").notEmpty().withMessage("age shouldn't be Empty."),       
        body("department").notEmpty().withMessage("isMarried shouldn't be Empty."),
        body("GBA").notEmpty().withMessage("rating shouldn't be Empty.")
    ], controller.addStudent)

    .delete(isAuth, [
        body("_id").notEmpty().withMessage("_id shouldn't be Empty.")
    ], controller.deleteStudent)

    .put(isAuth, [
       body("fullname").notEmpty().withMessage("fullname shouldn't be Empty."),
        // body("image").notEmpty().withMessage("image shouldn't be Empty."),
        body("address").notEmpty().withMessage("address shouldn't be Empty."),
        body("age").notEmpty().withMessage("age shouldn't be Empty."),
        body("birthDate").notEmpty().withMessage("birthDate shouldn't be Empty."),
        // body("hourRate").notEmpty().withMessage("hourRate shouldn't be Empty."),
        body("department").notEmpty().withMessage("department shouldn't be Empty."),
        body("GBA").notEmpty().withMessage("GBA shouldn't be Empty.")
    ], controller.updateStudent)



router.route("/students/:id?")
    .get(isAuth, [], controller.getStudent)

module.exports = router;