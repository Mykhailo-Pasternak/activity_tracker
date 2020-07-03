import React from "react";

function TotalDistance({ listOfActivities }) {
  let howRideKm = 0;
  let howRunKm = 0;
  for (let i = 0; i < listOfActivities.length; i++) {
    if (listOfActivities[i].activityTipe === "Ride") {
      howRideKm += listOfActivities[i].distance;
    }
    if (listOfActivities[i].activityTipe === "Run") {
      howRunKm += listOfActivities[i].distance;
    }
  }

  //   console.log(listOfActivities[1].activityTipe);

  return (
    <>
      {" "}
      <div className="boxOfResult__result__totalDistance__longestRide">
        <b> Total ride distance: </b>
        <span> {howRideKm} km</span>
      </div>
      <div className="boxOfResult__result__totalDistance__longestRun">
        <b> Total run distance:</b> <span> {howRunKm} km</span>
      </div>
    </>
  );
}

export default TotalDistance;
