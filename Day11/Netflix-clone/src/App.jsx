import MovieList from "./MovieList";

function App() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "black",
          color: "white",
          fontSize: "40px",
          textAlign: "center",
        }}>
        Netflix clone
      </h1>
      <MovieList />
    </div>
  );
}

export default App;
