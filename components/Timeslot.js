export default function Timeslot({handleDeleteTimeslot, keyForDeletion, day}) {
  return (
    <form>
      <input type="time" name="starting time"></input>
      <input type="time" name="ending time"></input>
      <button onClick={() => handleDeleteTimeslot(keyForDeletion, day)}>
        Delete
      </button>
    </form>
  );
}
