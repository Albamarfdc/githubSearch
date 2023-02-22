type SearchProps = {
  loadUser: (username: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";
import { BsSearch, BsX } from "react-icons/bs";
import styles from "./Search.module.css";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const clearInput = () => {
    setUserName("");
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
      clearInput();
    }
  };

  return (
    <div className={styles.search}>
      <p>Discover your best repositories</p>
      <div className={styles.search_box}>
        <input
          type="text"
          placeholder="Enter the username"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
          value={userName}
          onClick={() => clearInput()}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
