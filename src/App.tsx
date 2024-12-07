import { useState, useEffect } from "react";
import Title from "./Title";
import Entry from "./Entry";
import Info from "./Info";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState({});
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const term = encodeURIComponent(name.toLowerCase());
    const url = ` https://itunes.apple.com/search?term=${term}&entity=album`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(`${e}`));
  }, [name]);
  const albumClick = (album) => {
    if (selectedAlbum === album) {
      setSelectedAlbum(null);
      setSongs([]);
    } else {
      setSelectedAlbum(album);
      fetchSongsForAlbum(album.collectionId);
    }
  };

  const fetchSongsForAlbum = (albumId) => {
    const url = `https://itunes.apple.com/lookup?id=${albumId}&entity=song`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setSongs(r.results))
      .catch((e) => console.error(e));
  };

  return (
    <div className="App">
      <Title title="iMusic Search" />
      <Entry action={setName} />
      <br />
      <Info
        data={data}
        selectedAlbum={selectedAlbum}
        songs={songs}
        handleAlbumClick={albumClick}
      />
    </div>
  );
}
