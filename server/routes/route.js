// Import express
const express = require("express");
// Import controller
const ActivityRoutes = require("./../controllers/controller.js");
// Create router
const router = express.Router();
// Add route for GET request to retrieve all Activity
// In server.js, Activity route is specified as '/Activity'
// this means that '/all' translates to '/Activity/all'
router.get("/all", ActivityRoutes.ActivityAll);
// Add route for POST request to create new Activity
// In server.js, Activity route is specified as '/Activity'
// this means that '/create' translates to '/Activity/create'
router.post("/create", ActivityRoutes.ActivityCreate);

module.exports = router;
