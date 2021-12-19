const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();
const catchAsync = require('../utilis/catchAsync');
const {createUser, renderNewUserForm, showAllUsers, showUser,createMeeting,renderMeetingForm,showAllMeetings,showMeeting} = require('../controllers/datacontroller')
router.route('/users').post(catchAsync())

router.route('/').post(catchAsync(createUser))
router.route('/new').get(catchAsync(renderNewUserForm))
router.route('/all').get(catchAsync(showAllUsers))
router.route('/:id').get(catchAsync(showUser))

module.exports = router






// app.post("/users", async (req, res, next) => {
//     const user = new Users(req.body);
//     await user.save()
//     res.redirect(`/users/${user._id}`);
//   });
//   app.get("/users/new", (req, res) => {
//     res.render("newUser");
//   });
  
//   app.get("/users/all", async (req, res) => {
//       let userDetails = [];
//       const users = await Users.find({});
//       for (let i = 0; i < users.length; i++) {
//         const user = users[i];
    
//         userDetails.push({
//           uid: user._id,
//           username: user.username,
//         });
//         console.log(userDetails);
//       }
//       res.render("showUser", { userDetails });
//     });
  
//   app.get("/users/:id", async (req, res) => {
//     const { id } = req.params;
//     const user = await Users.findById(id);
//     let userDetails = [];
//     userDetails.push({
//       uid: user._id,
//       username: user.username,
//     });
//     console.log(userDetails);
//     res.render("showUser", { userDetails });
//   });
  
  
//   app.post("/meetings", async (req, res) => {
//     const meeting = new Meetings(req.body);
//     await meeting.save();
//     res.redirect(`/meetings/${meeting._id}`);
//   });
  
//   app.get("/meetings/new", async (req, res) => {
//     const user = await Users.find({});
//     console.log(user);
//     res.render("newMeeting", { user });
//   });
  
//   app.get("/meetings/all", async (req, res) => {
//     const meetings = await Meetings.find({});
//     let meetDetails = [];
//     for (let i = 0; i < meetings.length; i++) {
//       let meeting = meetings[i];
//       let user1 = await Users.findById(meeting.uid1);
//       let user2 = await Users.findById(meeting.uid2);
//       meetDetails.push({
//         meeting: {
//           meetid: meeting._id,
//           date: meeting.date,
//         },
//         user1: {
//           uid: meeting.uid1,
//           username: user1.username,
//         },
//         user2: {
//           uid: meeting.uid2,
//           username: user2.username,
//         },
//       });
//     }
//   //   console.log(meetDetails);
//     console.log(meetDetails);
//     if (meetDetails.length === 0){
//         res.send(`<h1> No Meetings Found </h1>`)
//       }
//       else{
//         res.render("showMeeting", { meetDetails });
//     }
//   });
  
//   app.get("/meetings/:id", async (req, res) => {
//     const { id } = req.params;
//     const meeting = await Meetings.findById(id);
//     if (!meeting){
//       res.send(`<h1> Meeting Details lost or deleted !</h1>`)
//     }
//     else{
  
//         const user1 = await Users.findById(meeting.uid1);
//         const user2 = await Users.findById(meeting.uid2);
        
//         const meetDetails = [];
//         meetDetails.push({
//             meeting: {
//                 meetid: meeting._id,
//                 date: meeting.date,
//               },
//               user1: {
//                   uid: meeting.uid1,
//                   username: user1.username,
//               },
//               user2: {
//                   uid: meeting.uid2,
//                   username: user2.username,
//               },
//           });
//           console.log(meetDetails);
          
//           res.render("showMeeting", { meetDetails });
          
//       }
//   });