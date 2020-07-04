import React from "react";
import { useState, useEffect } from "react";
import ListOfActivities from "./components/ListOfActivities";
import Longest from "./components/Longest";
import TotalDistance from "./components/TotalDistance";
import axios from "axios";
import "./ActivityTracker.css";

function ActivitiTracker() {
  const [listOfActivities, setList] = useState([
    {
      id: 1,
      date: "October 14",
      activityTipe: "Run",
      distance: 5,
      amountOFTime: 30,
      speed: 0,
    },
    {
      id: 2,
      date: "October 23",
      activityTipe: "Ride",
      distance: 10.2,
      amountOFTime: 28,
      speed: 0,
    },
    {
      id: 3,
      date: "September 12",
      activityTipe: "Run",
      distance: 3.4,
      amountOFTime: 35,
      speed: 0,
    },
    {
      id: 4,
      date: "September 30",
      activityTipe: "Ride",
      distance: 7,
      amountOFTime: 40,
      speed: 0,
    },
  ]);

  // Fetch all books on initial render

  // Fetch book called on mount
  useEffect(() => {
    fetchBooks();
  }, []);

  // Fetch all books
  const fetchBooks = async () => {
    // Send GET request to 'books/all' endpoint
    axios
      .get("http://localhost:4001/books/all")
      .then((response) => {
        // Update the books state
        // setBooks(response.data);
        // Update loading state
        // setLoading(false);
        console.log(response.data);
      })
      .catch((error) =>
        console.error(`There was an error retrieving the book list: ${error}`)
      );
  };

  const handleBookCreate = () => {
    // Send POST request to 'books/create' endpoint
    axios
      .post("http://localhost:4001/books/create", {
        author: 1,
        title: "title",
        pubDate: "pubDate",
        rating: 3,
      })
      .then((response) => {
        console.log(response.data);
        // Fetch all books to refresh
        // the books on the bookshelf list
        fetchBooks();
      })
      .catch((error) =>
        console.error(
          `There was an error creating the ${"title"} book: ${error}`
        )
      );
  };

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
    handleBookCreate();
    event.preventDefault();
    setList(
      listOfActivities.concat([
        {
          id: Date.now(),
          date: mountInLetters + date.getDate(),
          activityTipe: Activity,
          distance: Number(Distance),
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
          required
          value={StartTime}
          placeholder="&#8194;Start time"
          onChange={(event) => setStartTime(event.target.value)}
        />
        <input
          required
          value={FinishTime}
          placeholder="&#8194;Finish time"
          onChange={(event) => setFinishTime(event.target.value)}
        />
        <input
          required
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
