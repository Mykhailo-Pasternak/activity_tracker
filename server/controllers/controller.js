// Import database
const knex = require("./../db");
// Retrieve all Activity
exports.ActivityAll = async (req, res) => {
  // Get all Activity from database
  knex
    .select("*") // select all records
    .from("Activity") // from 'Activity' table
    .then((userData) => {
      // Send Activity extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving Activities: ${err}` });
    });
};
// Create new Activity
exports.ActivityCreate = async (req, res) => {
  // Add new Activity to database
  knex("Activity")
    .insert({
      // insert new record, a Activity
      date: req.body.date,
      activityTipe: req.body.activityTipe,
      distance: req.body.distance,
      amountOFTime: req.body.amountOFTime,
      speed: req.body.speed,
    })
    .then(() => {
      // Send a success message in response
      res.json({
        message: `Activity \'${req.body.activityTipe}\' by ${req.body.date} created.`,
      });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error creating ${req.body.activityTipe} Activity: ${err}`,
      });
    });
};
