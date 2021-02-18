import React from "react";
import { faSubway } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Traindetail = ({ item }) => {
  let localTime = new Date().getTime();
  let trainTime = new Date(item.projectedArrival);

  // let trainTimeString = trainTime.toLocaleTimeString();
  // console.log(trainTimeString);

  let countDown = trainTime - localTime;
  let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60) + 1);
  // console.log(minutes)

  return (
    <div>
      <div className="md-double-line">
        <div className="train">
          <FontAwesomeIcon className="trainIcon" icon={faSubway} />
          <p>To {item.lineName}</p>
        </div>

        {/* <p>{trainTimeString}</p> */}
        <p>{minutes} min</p>
      </div>
    </div>
  );
};

export default Traindetail;
