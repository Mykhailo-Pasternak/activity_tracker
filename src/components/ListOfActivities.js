import React from "react";

function ListOfActivities({ myActivities }) {
  let list = myActivities.map((OneActivity) => (
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
        {(OneActivity.speed =
          (OneActivity.distance / OneActivity.amountOFTime) * 60).toFixed(
          1
        )}{" "}
        km/hour
      </div>
    </li>
  ));
  console.log(list);

  return (
    <>
      <ul className="list">{list} </ul>
    </>
  );
}

export default ListOfActivities;
