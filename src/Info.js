export default function Info({ data, selectedAlbum, songs, handleAlbumClick }) {
  const listingStyle = {
    textAlign: "center",
    listStyleType: "none",
    padding: 0,
    margin: "1rem 0",
  };

  return (
    <article>
      {data.results ? (
        <ul style={listingStyle}>
          {data.results.map((album) => (
            <li key={album.collectionId} style={{ cursor: "pointer" }}>
              <div onClick={() => handleAlbumClick(album)}>
                <img
                  src={album.artworkUrl100}
                  alt={`${album.collectionName} album cover`}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "10px",
                  }}
                />
                <br />
                {album.collectionName} by {album.artistName}
              </div>

              {/* Render the list of songs if this album is selected */}
              {selectedAlbum &&
                selectedAlbum.collectionId === album.collectionId && (
                  <ul style={{ marginLeft: "-40px" }}>
                    {songs.map((song) => (
                      <li key={song.trackId}>{song.trackName}</li>
                    ))}
                  </ul>
                )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data yet</p>
      )}
    </article>
  );
}
// kind
// artistName
//TrackName
// {item.trackName} ({item.kind}) by {item.artistName}//
