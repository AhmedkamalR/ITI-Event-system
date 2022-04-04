const { validationResult } = require("express-validator");
const Doctor = require("./../models/doctorSchema");
// const bcrypt = require('bcrypt');

//get all doctors
exports.getAllDoctors = (request, response, next) => {


    // if (request.role == "admin" || request.role == "doctor") {
        Doctor.find({})
            .then(data => {
                response.status(200).json(data)
            })
            .catch(error => {
                next(error);
            })
    }
//     else {
//         throw new Error("Not Authorized. only doctor can do that");
//     }
// }

  //add doctor 
  exports.addDoctor = (request, response, next) => {

    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
    }

    // if (request.role == "admin" || request.role == "doctor") {

    let doctorObj = new Doctor({
        _id: request.body.id,
        name: request.body.name,
        image:"http://localhost:8080/images/"+ request.file.filename,
        age: request.body.age,
        spec: request.body.spec,
        phone: request.body.phone,
    })

    doctorObj.save()
        .then(data => {
            response.status(201).json({ message: "added", data })
        })
        .catch(error => next(error))


    }
//     else {
//         throw new Error("Not Authorized. only doctor can do that");
// }
// }

//update doctor information

exports.updateDoctor = (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;

    }
    // if (request.role == "admin" || request.role == "doctor") {

    Doctor.updateOne({ _id: request.body._id }, {
        $set: {
            // _id: request.body.id,
            name: request.body.name,
            image:request.body.image,
            age: request.body.age,
            spec: request.body.spec,
            // report:request.body.report,
            phone: request.body.phone,
        }
    }).then(data => {

        if (data == null) throw new Error("doctor not found");
        response.status(200).json({ message: "Updated", data })
    })
        .catch(error => next(error))
}
// else {
//     throw new Error("Not Authorized. only doctor can do that");
// }
// }

//delete doctor
exports.deleteDoctor = async (request, response, next) => {

    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
    }
    // if (request.role == "admin" || request.role == "doctor") {
    try {
        let data = await Doctor.findOneAndDelete({ _id: request.body._id });
        if (data == null) throw new Error("doctor not found");
        response.status(200).json({ message: "deleted" })
    }
    catch (error) {
        next(error)
    }
}
// else {
//     throw new Error("Not Authorized. only doctor can do that");
// }
// }


//get only one doctor
exports.getDoctor = (request, response,next) => {

    // if (request.role == "admin" || request.role == "doctor") {

    Doctor.findOne({ _id: request.params.id })
            .then(data => {
                response.status(200).json(data)
            })
            .catch(error => {
                next(error);
            })
        }
// else {
//     throw new Error("Not Authorized. only doctor can do that");
// }
// }