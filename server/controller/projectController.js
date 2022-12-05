const Project = require("../model/projectModel")

// ADD PROJECT
exports.addProject = async (req, res, next) => {
    // const { title, description, link, language, image } = req.body
    let project;
    try {
        project = await Project.create(req.body)
    } catch (error) {

    }
    if (!project) {
        res.status(404).json({
            success: false,
            message: " something went wrong"
        })
    }

    res.status(201).json({
        success: true,
        message: "project created successfully",
        project
    })
}


exports.getProjects = async (req, res, next) => {
    try {
        let projects;
        projects = await Project.find()
        res.status(200).json({
            success: true,
            message: "projects found successfully",
            projects
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "projects not found"
        })
    }

}

exports.deleteProjects = async(req, res, next) => {
    const id = req.params.id;
    let project;
    try {
        project = await Project.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
    }

    if(!project){
        res.status(404).json({
            success:false,
            message:"project not found"
        })
    }

    res.status(200).json({
        success:true,
        message:"project Deleted successfully",
        project
    })
}


exports.getCategoryWiseData = async(req, res, next) => {
    const { category } = req.query
    let project;
    try {
        project = await Project.find({category})
    } catch (error) {
    }
    if(!project){
        res.status(404).json({
            success:false,
            message:"project not found"
        })
    }
    res.status(200).json({
        success:true,
        message:"projects found",
        project
    })

    
}