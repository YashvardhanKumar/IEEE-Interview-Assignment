const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();
const catchAsync = require('../utilis/catchAsync');

const {createUser, renderNewUserForm, showAllUsers, showUser,createMeeting,renderMeetingForm,showAllMeetings,showMeeting} = require('../controllers/datacontroller')


router.route('/').post(catchAsync(createMeeting))
router.route('/new').get(catchAsync(renderMeetingForm))
router.route('/all').get(catchAsync(showAllMeetings))
router.route('/:id').get(catchAsync(showMeeting))

module.exports = router
