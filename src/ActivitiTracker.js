import React from "react";

import "./ActivitiTracker.css";

function ActivitiTracker() {
  return (
    <div className="wrapper">
      <div className="wrapper__title">Activiti tracker</div>
      <form className="wrapper__form">
        <span>
          <b> Add new activity:</b>
        </span>
        <input placeholder="&#8194;Start time" />
        <input placeholder="&#8194;Finish time" />
        <input placeholder="&#8194;Distance" />
        <select size="1">
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
    </div>
  );
}

export default ActivitiTracker;
