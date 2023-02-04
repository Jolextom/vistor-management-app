const router = require('express').Router()

const {getAllVisitors,getSingleVisitor,createVisitor,updateVistor, deleteVisitor } = require("../controllers/visit")

router.route('/').get(getAllVisitors).post(createVisitor)
router.route('/:id').get(getSingleVisitor).put(updateVistor).delete(deleteVisitor)

module.exports = router