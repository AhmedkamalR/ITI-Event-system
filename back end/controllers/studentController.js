const { validationResult } = require("express-validator");
const Student = require("./../models/studentSchema");
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getAllStudents = (request, response,next) => {

    if (request.role == "administrator" || request.role == "student") {
        Student.find({})
            .then(data => {
                response.status(200).json(data)
            })
            .catch(error => {
                next(error);
            })

    }
    else {
        throw new Error("Not Authorized. A student can't do that");
    }
}

exports.getStudent = (request, response,next) => {
    if (request.role == "administrator" || request.role == "student") {
        Student.findOne({ _id: request.params.id })
            .then(data => {
                response.status(200).json(data)
            })
            .catch(error => {
                next(error);
            })
    }
    else {
        throw new Error("Not Authorized. A student can't do that");
    }


}

exports.addStudent = (request, response, next) => {

    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
    }


    if (request.role == "administrator" || request.role == "student") {

        const hash = bcrypt.hashSync(request.body.password, 10);

        let studentObj = new Student({
            // _id: request.body.id,
            fullname: request.body.fullname,
            email: request.body.email,
            image:"http://localhost:8080/images/"+ request.file.filename,
            address: request.body.address,
            age: request.body.age,
            birthDate: request.body.birthDate,
            department: request.body.department,
            // isMarried: request.body.isMarried,
            GBA: request.body.GBA

        })
        studentObj.save()
            .then(data => {
                response.status(201).json({ message: "added", data })
            })
            .catch(error => next(error))

    }
    else {

        throw new Error("Not Authorized.");
    }

}

exports.updateStudent = (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;

    }
Student.updateOne({ _id: request.body._id }, {
    $set: {
        fullname: request.body.fullname,
        email: request.body.email,
        image:request.body.image,
        address: request.body.address,
        age: request.body.age,
        birthDate: request.body.birthDate,
        department: request.body.department,
        GBA: request.body.GBA
    }
}).then(data => {

    if (data == null) throw new Error("Student not found");
    response.status(200).json({ message: "Updated", data })
})
    .catch(error => next(error))

}


    exports.deleteStudent = async (request, response, next) => {

        let errors = validationResult(request);
        if (!errors.isEmpty()) {
            let error = new Error();
            error.status = 422;
            error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
            throw error;
    
        }
    
        try {
            let data = await Student.findOneAndDelete({ _id: request.body._id });
            if (data == null) throw new Error("Student not found");
            response.status(200).json({ message: "deleted" })
        }
        catch (error) {
            next(error)
        }
    }   

