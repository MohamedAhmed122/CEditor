import { useSelector } from "react-redux";
import SearchPackages from "./components/SearchPackages";
import SearchResult from "./components/SearchResults";
import { RootState } from "../src/redux/rootReducer";

function App() {
  const { error, loading } = useSelector((state: RootState) => state.packages);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <SearchPackages />
      {loading ? (
        <div>loading</div>
      ) : error ? (
        <div>Oops, that's an Error</div>
      ) : (
        <SearchResult />
      )}
    </div>
  );
}

export default App;
