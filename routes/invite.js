const router = require('express').Router()

const {getAllInvites,getSingleInvite,createInvite,updateInvite, deleteInvite } = require("../controllers/invite")

router.route('/').get(getAllInvites).post(createInvite)
router.route('/:id').get(getSingleInvite).put(updateInvite).delete(deleteInvite)

module.exports = router