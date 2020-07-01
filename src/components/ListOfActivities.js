import React from "react";

function ListOfActivities({ myActivities }) {
  const list = myActivities.map((OneActivity) => (
    <li className="list__OneOfActivity" key={OneActivity.id}>
      <div className="list__OneOfActivity__data">{OneActivity.date}</div>{" "}
      <div className="list__OneOfActivity__Tipe">
        {" "}
        {OneActivity.activityTipe}
      </div>{" "}
      <div className="list__OneOfActivity__distance">
        {" "}
        {OneActivity.distance} km
      </div>{" "}
      <div className="list__OneOfActivity__time">
        {OneActivity.amountOFTime} minutes
      </div>{" "}
      <div className="list__OneOfActivity__speed">
        {" "}
        {OneActivity.speed} km/hour
      </div>
    </li>
  ));

  return (
    <>
      <ul className="list">{list} </ul>
    </>
  );
}

export default ListOfActivities;
