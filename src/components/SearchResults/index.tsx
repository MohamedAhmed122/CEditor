import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";


const SearchResult: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.packages);
  return (
    <div>
      {data.map((d: string) => (
        <div key={d}>{d}</div>
      ))}
    </div>
  );
};

export default SearchResult;
