import React from "react";

function Longest({ listOfActivities }) {
  //   let LongestRide = listOfActivities.filter(LongestRide => {
  //       let km = 0;
  //       if (){

  //       }
  //   });

  //   let newList = [];
  let how = 1;
  let biggestKm = 0;
  for (let i = 0; i < listOfActivities.length; i++) {
    let km = listOfActivities[i].distance;
    if (listOfActivities[i].activityTipe === "Ride") {
      console.log("Ride", how++);
    }
  }

  //   console.log(listOfActivities[1].activityTipe);

  return (
    <>
      {" "}
      <div className="longestRide">
        Longest Ride <p className="result">result</p>
      </div>
      <div className="longestRun">
        Longest Run <p className="result">result</p>
      </div>
    </>
  );
}

export default Longest;
