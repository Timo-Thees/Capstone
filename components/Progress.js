export default function Progress({page}) {
  if (page === "progress") {
    return (
      <>
        <h1>Write now!</h1>
        <p>The app to help you develop a writing habit</p>
      </>
    );
  } else {
    return;
  }
}
