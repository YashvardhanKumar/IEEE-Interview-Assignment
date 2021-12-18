const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();
const catchAsync = require('../utilis/catchAsync');
const {createUser, renderNewUserForm, showAllUsers, showUser,createMeeting,renderMeetingForm,showAllMeetings,showMeeting} = require('../controllers/datacontroller')

router.route('/').post(catchAsync(createUser))
router.route('/new').get(catchAsync(renderNewUserForm))
router.route('/all').get(catchAsync(showAllUsers))
router.route('/:id').get(catchAsync(showUser))

module.exports = router
