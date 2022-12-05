import {useState} from "react";

export default function SetGoals({page}) {
  const [writingTime, setWritingTime] = useState([]);

  if (page === "goals") {
    return (
      <>
        <label>How many words do you want to write each day?</label>
        <input type="text"></input>
        <ul>
          <li>
            {" "}
            Monday <input type="radio"></input>
            {writingTime.map(day => {
              if (day === "Mon") {
                return <button key={day.index}>that was easy!</button>;
              }
            })}
            <button onClick={() => setWritingTime([...writingTime, "Mon"])}>
              +
            </button>
            <button onClick={() => console.log(writingTime)}>show</button>
          </li>
        </ul>
      </>
    );
  } else {
    return;
  }
}
