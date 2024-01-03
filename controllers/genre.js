const genreModel = require("../models/genre");


module.exports.getGenres = async function(req,res){
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 3;
        const skip = (page - 1) * limit;
        const genres = await genreModel.find({}).sort({name : -1}).skip(skip).limit(limit);
        res.status(200).json({
            message : "All Genres Retreived Successfully",
            data: genres
        });
    } catch (err) {
        res.status(500).json({
            message : "An error occured",
            error : err.message
        });
    }
};


module.exports.getGenre = async function(req,res){
    try {
        const id = req.params.id;
        const genre = await genreModel.findById(id);
        if (!genre){
            throw new Error("id not found");
        }else{
            res.status(200).json({
                message : "Genre retreived successfully",
                data : genre
            });
        }
    } catch (err) {
        res.status(500).json({
            message : "An error occured",
            error : err.message
        });
    }
};

module.exports.createGenre = async function(req, res){
    try {
        const {name} = req.body;
        const newGenre = await new genreModel({
            name,
            updatedAt : new Date()
        }).save();
        res.status(201).json({
            message : "Genre created successfully",
            data : newGenre
        });
    } catch (err) {
        res.status(500).json({
            message : "An error occured",
            error : err.message
        });
    }
};


module.exports.updateGenre = async function(req, res){
    try {
        const id = req.params.id;
        let updateDetails = req.body
        updateDetails.updatedAt = new Date();
        const genre = await genreModel.findById(id);
        if (!genre){
            throw new Error("id not found");
        }else{
            console.log("I got here");
            let updatedGenre = await genreModel.findByIdAndUpdate(id,updateDetails,{new : true})
            res.status(200).json({
                message : "Genre updated successfully",
                data : updatedGenre
            });
        }
    } catch (err) {
        res.status(500).json({
            message : "An error occured",
            error : err.message
        });
    }
};


module.exports.deleteGenre = async function(req, res){
    try {
        const id = req.params.id;
        const genre = await genreModel.findById(id);
        if (!genre){
            throw new Error("id not found");
        }else{
            await genreModel.findByIdAndDelete(id);
            res.status(200).json({
                message : "Genre deleted successfully"
            });
        }
    } catch (err) {
        res.status(500).json({
            message : "An error occured",
            error : err.message
        });
    }
};
