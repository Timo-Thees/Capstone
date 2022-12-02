import {useState} from "react";

export default function SetGoals({page}) {
  const [writingTime, setWritingTime] = useState({
    Mon: 0,
    Tue: 0,
    Wen: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
    Sun: 0,
  });

  if (page === "goals") {
    return (
      <>
        <label>How many words do you want to write each day?</label>
        <input type="text"></input>
        <ul>
          <li>
            {" "}
            Monday <input type="radio"></input>
            <p>{writingTime.Mon}</p>
            <button
              onClick={() =>
                setWritingTime({...writingTime, Mon: writingTime.Mon + 1})
              }
            >
              +
            </button>
            <button onClick={() => console.log(writingTime.Mon)}>show</button>
          </li>
        </ul>
      </>
    );
  } else {
    return;
  }
}
