const Invite = require('../models/Invite')
const customError = require('http-errors')

const getAllInvites = async (req, res) => {
    const invite = await Invite.find({host:req.user.name})
    res.status(200).json({count:invite.length, invite})
}
const getSingleInvite = async (req, res) => {
    const {params:{id:inviteId}, user:{name}} = req

    const invite = await Invite.findOne({host:name, _id:inviteId})
    if(!invite){
        throw new customError.NotFound(`Invite with id ${inviteId} not found`)
    }
    res.status(200).json(invite)
}
const createInvite = async (req, res) => {
    req.body.host = req.user.name
    const invite = await Invite.create(req.body)
    res.status(201).json(invite)
}
const updateInvite = async (req, res) => {
    const {params:{id:inviteId}, user:{name}} = req

    const invite = await Invite.findOneAndUpdate({host:name, _id:inviteId}, req.body, {new:true, runValidators:true})
    if(!invite){
        throw new customError.NotFound(`Invite with id ${inviteId} not found`)
    }
    res.status(200).json(invite)
}
const deleteInvite = async (req, res) => {
    const {params:{id:inviteId}, user:{name}} = req

    const invite = await Invite.findOneAndDelete({host:name, _id:inviteId})
    if(!invite){
        throw new customError.NotFound(`Invite with id ${inviteId} not found`)
    }
    res.status(200).json("Done")
}

module.exports = {
    getAllInvites,
    getSingleInvite,
    createInvite,
    updateInvite,
    deleteInvite
}