import { useState } from "react";
import { useDispatch } from "react-redux";
import searchPackage from "../../redux/packages/action";

const SearchPackages: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchPackage(searchValue));
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Search for packages</h3>
        <input
          placeholder="Search for packages..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchPackages;
