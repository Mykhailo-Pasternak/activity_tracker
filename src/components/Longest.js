import React from "react";

function Longest({ listOfActivities }) {
  let biggestKm = 0;
  let newArrBigestRide = [];
  let biggestKmRun = 0;
  let newArrBigestRun = [];
  for (let i = 0; i < listOfActivities.length; i++) {
    if (listOfActivities[i].activityTipe === "Ride") {
      let km = listOfActivities[i].distance;
      if (km > biggestKm) {
        biggestKm = km;
      }
      if (biggestKm === listOfActivities[i].distance) {
        newArrBigestRide = listOfActivities[i];
      }
    }
    if (listOfActivities[i].activityTipe === "Run") {
      let km2 = listOfActivities[i].distance;
      if (km2 > biggestKmRun) {
        biggestKmRun = km2;
      }
      if (biggestKmRun === listOfActivities[i].distance) {
        newArrBigestRun = listOfActivities[i];
      }
    }
  }

  return (
    <>
      {" "}
      <div className="boxOfResult__result__longest__longestRide">
        <b className="boxOfResult__result__longest__longestRide__Title">
          {" "}
          Longest Ride:{" "}
        </b>{" "}
        <p className="boxOfResult__result__longest__longestRide__result">
          <span>{newArrBigestRide.date}</span>{" "}
          <span>{newArrBigestRide.distance} km</span>
          <span>{newArrBigestRide.amountOFTime} minutes</span>
        </p>
      </div>
      <div className="boxOfResult__result__longest__longestRun">
        <b className="boxOfResult__result__longest__longestRun__Title">
          {" "}
          Longest Run:
        </b>{" "}
        <p className="boxOfResult__result__longest__longestRun__result">
          {" "}
          <span>{newArrBigestRun.date}</span>{" "}
          <span>{newArrBigestRun.distance} km</span>
          <span>{newArrBigestRun.amountOFTime} minutes</span>
        </p>
      </div>
    </>
  );
}

export default Longest;
