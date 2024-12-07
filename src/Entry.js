import { useState } from "react";

export default function Entry({ action }) {
  const [content, setContent] = useState("");
  const [artistName, setArtistName] = useState("");

  function submit(e) {
    e.preventDefault();
    action(content);
    setArtistName(content);
    setContent("");
  }
  function handleChange(e) {
    setContent(e.target.value);
  }
  return (
    <div id="inputEntry">
      <h2 id="inputCaption">Please put the artist's name here</h2>
      <input value={content} onChange={handleChange} />
      <form onSubmit={submit}>
        <button type="submit">Submit</button>
      </form>
      {artistName && <h3>Artist's Name: {artistName}</h3>}{" "}
      {/* Display the submitted artist's name */}
    </div>
  );
}
