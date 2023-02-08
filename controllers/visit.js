const Visitor = require('../models/Visit')

const getAllVisitors = async (req, res) => {
    const visitor = await Visitor.find({host:req.user.name})
    res.status(200).json({count:visitor.length, visitor})
}
const getSingleVisitor = async (req, res) => {
    const {params:{id:visitorId}, user:{name}} = req

    const visitor = await Visitor.findOne({host:name, _id:visitorId})
    if(!visitor){
        throw new customError.NotFound(`visitor with id ${visitorId} not found`)
    }
    res.status(200).json(visitor)
}
const createVisitor = async (req, res) => {
    req.body.host = req.user.name
    const visitor = await Visitor.create(req.body)
    res.status(201).json(visitor)
}
const updateVisitor = async (req, res) => {
    const {params:{id:visitorId}, user:{name}} = req

    const visitor = await Visitor.findOneAndUpdate({host:name, _id:visitorId}, req.body, {new:true, runValidators:true})
    if(!visitor){
        throw new customError.NotFound(`visitor with id ${visitorId} not found`)
    }
    res.status(200).json(visitor)
}
const deleteVisitor = async (req, res) => {
    const {params:{id:visitorId}, user:{name}} = req

    const visitor = await Visitor.findOneAndDelete({host:name, _id:visitorId})
    if(!visitor){
        throw new customError.NotFound(`visitor with id ${visitorId} not found`)
    }
    res.status(200).json("Done")
}

module.exports = {
    getAllVisitors,
    getSingleVisitor,
    createVisitor,
    updateVisitor,
    deleteVisitor
}