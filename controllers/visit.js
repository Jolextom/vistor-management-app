const getAllVisitors = (req, res) => {
    res.send('getting all visitors')
}
const getSingleVisitor = (req, res) => {
    res.send('get a visitor')
}
const createVisitor = (req, res) => {
    res.send('create a visitor')
}
const updateVistor = (req, res) => {
    res.send('update a visitor')
}
const deleteVisitor = (req, res) => {
    res.send('delete a visitor')
}

module.exports = {
    getAllVisitors,
    getSingleVisitor,
    createVisitor,
    updateVistor,
    deleteVisitor
}