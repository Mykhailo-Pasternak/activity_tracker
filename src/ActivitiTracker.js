import React from "react";
import { useState } from "react";
import ListOfActivities from "./components/ListOfActivities";

import "./ActivitiTracker.css";

function ActivitiTracker() {
  const [listOfActivities, setList] = useState([
    {
      id: 1,
      date: "Octber 14",
      activityTipe: "Run",
      distance: 5,
      amountOFTime: 30,
      speed: 6,
    },
    {
      id: 2,
      date: "Octber 23",
      activityTipe: "Ride",
      distance: 10.2,
      amountOFTime: 28,
      speed: 21,
    },
    {
      id: 3,
      date: "September 30",
      activityTipe: "Run",
      distance: 3.4,
      amountOFTime: 35,
      speed: 6.4,
    },
  ]);

  return (
    <div className="wrapper">
      <div className="wrapper__title"> Activiti tracker</div>
      <form className="wrapper__form" action="URL">
        <span>
          <b> Add new activity:</b>
        </span>
        <input placeholder="&#8194;Start time" />
        <input placeholder="&#8194;Finish time" />
        <input placeholder="&#8194;Distance" />
        <select size="1" name="choice[]">
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
