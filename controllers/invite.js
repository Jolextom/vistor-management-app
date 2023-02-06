const getAllInvites = (req, res) => {
    res.send('getting all Invites')
}
const getSingleInvite = (req, res) => {
    res.send('get a Invite')
}
const createInvite = (req, res) => {
    res.send('create a Invite')
}
const updateInvite = (req, res) => {
    res.send('update a Invite')
}
const deleteInvite = (req, res) => {
    res.send('delete a Invite')
}

module.exports = {
    getAllInvites,
    getSingleInvite,
    createInvite,
    updateInvite,
    deleteInvite
}