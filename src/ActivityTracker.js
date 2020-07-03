import React from "react";
import { useState } from "react";
import ListOfActivities from "./components/ListOfActivities";

import "./ActivityTracker.css";

function ActivitiTracker() {
  const [listOfActivities, setList] = useState([
    {
      id: 1,
      date: "Octber 14",
      activityTipe: "Run",
      distance: 5,
      amountOFTime: 30,
      speed: 0,
    },
    {
      id: 2,
      date: "Octber 23",
      activityTipe: "Ride",
      distance: 10.2,
      amountOFTime: 28,
      speed: 0,
    },
    {
      id: 3,
      date: "September 30",
      activityTipe: "Run",
      distance: 3.4,
      amountOFTime: 35,
      speed: 0,
    },
  ]);

  // --  Getting a real date  ---
  var date = new Date();
  let mounthInNumber = date.getMonth();
  let mountInLetters = "";
  mounthInNumber += 1;

  if (mounthInNumber === 1) {
    mountInLetters = "January";
  } else if (mounthInNumber === 2) {
    mountInLetters = "February";
  } else if (mounthInNumber === 3) {
    mountInLetters = "March";
  } else if (mounthInNumber === 4) {
    mountInLetters = "April";
  } else if (mounthInNumber === 5) {
    mountInLetters = "May ";
  } else if (mounthInNumber === 6) {
    mountInLetters = "June ";
  } else if (mounthInNumber === 7) {
    mountInLetters = "July ";
  } else if (mounthInNumber === 8) {
    mountInLetters = "August ";
  } else if (mounthInNumber === 9) {
    mountInLetters = "September";
  } else if (mounthInNumber === 10) {
    mountInLetters = "October";
  } else if (mounthInNumber === 11) {
    mountInLetters = "November";
  } else if (mounthInNumber === 12) {
    mountInLetters = "December";
  }
  //-------------------------------

  const [StartTime, setStartTime] = useState("");
  const [FinishTime, setFinishTime] = useState("");
  const [Distance, setDistance] = useState("");
  const [Activity, setActivity] = useState("not indicated");

  function addActivity(event) {
    event.preventDefault();
    setList(
      listOfActivities.concat([
        {
          id: Date.now(),
          date: mountInLetters + date.getDate(),
          activityTipe: Activity,
          distance: Distance,
          amountOFTime: resultTime,
          speed: 6.4,
        },
      ])
    );
  }

  //  ---   Activity time -----
  let parts = StartTime.split(":");
  let parts2 = FinishTime.split(":");

  let minuteItStart = Number(parts[0]) * 60 + Number(parts[1]);
  let minuteItFinish = Number(parts2[0]) * 60 + Number(parts2[1]);

  let resultTime = minuteItFinish - minuteItStart;
  // ------------------

  return (
    <div className="wrapper">
      <div className="wrapper__title"> Activiti tracker</div>
      <form className="wrapper__form" action="URL" onSubmit={addActivity}>
        <span>
          <b> Add new activity:</b>
        </span>
        <input
          value={StartTime}
          placeholder="&#8194;Start time"
          onChange={(event) => setStartTime(event.target.value)}
        />
        <input
          value={FinishTime}
          placeholder="&#8194;Finish time"
          onChange={(event) => setFinishTime(event.target.value)}
        />
        <input
          value={Distance}
          placeholder="&#8194;Distance"
          onChange={(event) => setDistance(event.target.value)}
        />
        <select
          size="1"
          name="choice[]"
          onChange={(event) => setActivity(event.target.value)}
        >
          <option selected disabled>
            Select activity type
          </option>
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
        <div className="boxOfResult__result">result</div>
      </div>
    </div>
  );
}

export default ActivitiTracker;
