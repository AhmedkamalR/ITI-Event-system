const { validationResult } = require("express-validator");
const Speaker = require("./../models/speakerSchema");
const bcrypt = require('bcrypt');

exports.getAllSpeaker = (request, response, next) => {

    // Speaker.find({})
    // .then(data => {
    //     response.status(200).json(data)
    // })
    // .catch(error => {
    //     next(error);
    // })

    if (request.role == "administrator" || request.role == "speaker") {
        Speaker.find({})
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

exports.getSpeaker = (request, response,next) => {
    // if (request.role == "administrator" || request.role == "speaker") {

    Speaker.findOne({ _id: request.params.id })
            .then(data => {
                response.status(200).json(data)
            })
            .catch(error => {
                next(error);
            })
        }
//                 else {
//         throw new Error("Not Authorized. A student can't do that");
//     }

// }
    // if (request.role == "administrator" || request.role == "speaker") {
    //     Speaker.find({ email: request.params.email })
    //         .then(data => {
    //             response.status(200).json(data)
    //         })
    //         .catch(error => {
    //             next(error);
    //         })
    // }
    // else {
    //     throw new Error("Not Authorized. A student can't do that");
    // }

// }

exports.addSpeaker = (request, response, next) => {

    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
    }

    if (request.role == "administrator" || request.role == "speaker") {
 
    let speakerObj = new Speaker({
        // _id: request.body.id,
        fullname: request.body.fullname,
        email: request.body.email,
        image:"http://localhost:8080/images/"+ request.file.filename,
        address: request.body.address,
        age: request.body.age,
        birthDate: request.body.birthDate,
        hourRate: request.body.hourRate,
        isMarried: request.body.isMarried,
        rating: request.body.rating
    })

    speakerObj.save()
        .then(data => {
            response.status(201).json({ message: "added", data })
        })
        .catch(error => next(error))


    }
    else {
throw new Error("Not Authorized. A student can't do that");
}

}

exports.updateSpeaker = (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;

    }

    Speaker.updateOne({ _id: request.body._id }, {
        $set: {
            fullname: request.body.fullname,
            email: request.body.email,
            image:request.body.image,
            address: request.body.address,
            age: request.body.age,
            birthDate: request.body.birthDate,
            hourRate: request.body.hourRate,
            isMarried: request.body.isMarried,
            rating: request.body.rating
        }
    }).then(data => {

        if (data == null) throw new Error("Speaker not found");
        response.status(200).json({ message: "Updated", data })
    })
        .catch(error => next(error))

}



exports.deleteSpeaker = async (request, response, next) => {

    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
    }
    try {
        let data = await Speaker.findOneAndDelete({ _id: request.body._id });
        if (data == null) throw new Error("Speaker not found");
        response.status(200).json({ message: "deleted" })
    }
    catch (error) {
        next(error)
    }
}

    // if (request.role == "administrator") {
    //     try {
    //         let data = await Speaker.findOneAndDelete({ email: request.body.email });
    //         if (data == null) throw new Error("Speaker not found");
    //         response.status(200).json({ message: "deleted" })
    //     }
    //     catch (error) {
    //         next(error)
    //     }
    // }
    // else {
    //     next(new Error("Not Authorized. Only admin can do that"));
    // }




