const router = require('express').Router()

const {getAllVisitors,getSingleVisitor,createVisitor,updateVisitor, deleteVisitor } = require("../controllers/visit")

router.route('/').get(getAllVisitors).post(createVisitor)
router.route('/:id').get(getSingleVisitor).put(updateVisitor).delete(deleteVisitor)

module.exports = router