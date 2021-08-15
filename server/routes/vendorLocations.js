//To start any of this you need to do the following:
//1. Go the the folder that this document is saved
//2. In terminal: npm init
//3. ipm install express -- save
//4. node <file name in this case its server.js>
//5. Confirm that all is working use postman to verify
//the paths that are set up are working

const express = require("express");
const router = express.Router();
// const videoDetails = require("../data/video-details.json");
// const videos = require("../data/videos.json");
const fs = require("fs");
const path = require("path");

module.exports = router;

// //Video Details
// const displayVideoDetails = () => {
//   const videoDetailsData = fs.readFileSync(
//     path.resolve(__dirname, "../data/video-details.json")
//   );
//   const parsedVideoDetails = JSON.parse(videoDetailsData);
//   console.log(parsedVideoDetails);
//   return parsedVideoDetails;
// };

// router.get("/video-details:id", (req, res) => {
//   const videoDetails = displayVideoDetails();
//   res.json(videoDetails);
//   console.log(videoDetails);
// });

// //Videos
// const videos = () => {
//   const videosData = fs.readFileSync(
//     path.resolve(__dirname, "../data/videos.json")
//   );
//   const parsedVideos = JSON.parse(videosData);
//   console.log(parsedVideos);
//   return parsedVideos;
// };

// router.get("/videos", (req, res) => {
//   const videoList = videos();
//   res.json(videoList);
// });

// router.post("/videos", (req, res) => {
//   const newVideo = displayVideoDetails();
//   let randomImage = Math.floor(Math.random() * 6) + 1;
//   const videoObj = {
//     id: uniqid(),
//     title: req.body.videoTitle,
//     channel: "Matt Gainer",
//     image: `https://source.unsplash.com/collection/${randomImage}/1600x900`,
//     description: req.body.videoDesc,
//     timestamp: +new Date(),
//     likes: 1500,
//     views: 3200,
//   };
//   console.log(videoObj);
//   newVideo.unshift(videoObj);
//   fs.writeFileSync("./data/videos.json", JSON.stringify(newVideo));
//   res.json(newVideo);
// });
