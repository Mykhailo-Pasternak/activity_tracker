import React from "react";
import { useState, useEffect } from "react";
import ListOfActivities from "./components/ListOfActivities";
import Longest from "./components/Longest";
import TotalDistance from "./components/TotalDistance";
import axios from "axios";
import "./ActivityTracker.css";

function ActivitiTracker() {
  const [listOfActivities, setList] = useState([]);

  // Fetch all Activities on initial render

  // Fetch Activity called on mount
  useEffect(() => {
    fetchActivity();
  }, []);

  // Fetch all Activities
  const fetchActivity = async () => {
    // Send GET request to 'Activity/all' endpoint
    axios
      .get("http://localhost:4001/Activity/all")
      .then((response) => {
        // ----- firts
        setList(response.data);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the Activity list: ${error}`
        )
      );
  };

  const handleActivityCreate = () => {
    // Send POST request to 'Activity/create' endpoint
    axios
      .post("http://localhost:4001/Activity/create", {
        // second ---------------------

        date: mountInLetters + date.getDate(),
        activityTipe: activity,
        distance: Number(distance),
        amountOFTime: resultTime,
        speed: 6.4,
      })
      .then((response) => {
        // Fetch all Activities to refresh

        fetchActivity();
      })
      .catch((error) =>
        console.error(
          `There was an error creating the ${"in this place"} Activity: ${error}`
        )
      );
  };

  // --  Getting a real date  ---
  var date = new Date();

  var month = [];
  month[0] = "January ";
  month[1] = "February ";
  month[2] = "March ";
  month[3] = "April ";
  month[4] = "May ";
  month[5] = "June ";
  month[6] = "July ";
  month[7] = "August ";
  month[8] = "September ";
  month[9] = "October ";
  month[10] = "November ";
  month[11] = "December ";
  var mountInLetters = month[date.getMonth()];

  //-------------------------------

  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");
  const [distance, setDistance] = useState("");
  const [activity, setActivity] = useState("not indicated");

  function addActivity(event) {
    handleActivityCreate();
    event.preventDefault();
    setList(
      listOfActivities.concat([
        {
          date: mountInLetters + date.getDate(),
          activityTipe: activity,
          distance: Number(distance),
          amountOFTime: resultTime,
          speed: 6.4,
        },
      ])
    );
  }

  //  ---   Activity time -----
  let parts = startTime.split(":");
  let parts2 = finishTime.split(":");

  let minuteItStart = Number(parts[0]) * 60 + Number(parts[1]);
  let minuteItFinish = Number(parts2[0]) * 60 + Number(parts2[1]);

  let resultTime = minuteItFinish - minuteItStart;
  // ------------------

  return (
    <div className="wrapper">
      <div className="wrapper__title"> Activity tracker</div>
      <form className="wrapper__form" action="URL" onSubmit={addActivity}>
        <span>
          <b> Add new activity:</b>
        </span>
        <input
          required
          value={startTime}
          placeholder="&#8194;Start time mm:ss"
          onChange={(event) => setStartTime(event.target.value)}
        />
        <input
          required
          value={finishTime}
          placeholder="&#8194;Finish time mm:ss"
          onChange={(event) => setFinishTime(event.target.value)}
        />
        <input
          required
          value={distance}
          placeholder="&#8194;Distance"
          onChange={(event) => setDistance(event.target.value)}
        />
        <select
          size="1"
          name="choice[]"
          onChange={(event) => setActivity(event.target.value)}
        >
          <option>Select activity type</option>
          <option value="Ride">Ride</option>
          <option value="Run">Run</option>
        </select>
        <button className="wrapper__form__button" type="submit">
          Save
        </button>{" "}
      </form>

      <div className="boxOfResult">
        <div className="boxOfResult__activities">
          <ListOfActivities myActivities={listOfActivities} />
        </div>{" "}
        <div className="boxOfResult__result">
          <div className="boxOfResult__result__longest">
            <Longest listOfActivities={listOfActivities} />
          </div>
          <div className="boxOfResult__result__totalDistance">
            <TotalDistance listOfActivities={listOfActivities} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivitiTracker;
