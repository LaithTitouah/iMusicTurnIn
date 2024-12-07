const titleStyle = {
  backgroundColor: "#A7BBCB",
  color: "white",
  padding: 0,
  marginTop: 0,
};
export default function Title({ title }) {
  return (
    <h1 id="header" style={titleStyle}>
      {title}
    </h1>
  );
}
