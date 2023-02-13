import { useState } from "react";
import { Link } from "react-router-dom";

type props = {
  set: any;
  reset: any;
};

function NavBar({ set, reset }: props) {
  const [search, setSearch] = useState("");

  const fechingSearch = (e: any) => {
    e.preventDefault();
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((json) => set(json.drinks));
  };

  return (
    <nav>
      <form onSubmit={fechingSearch}>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <input type="submit" value="Buscar" />
      </form>
      <button onClick={() => reset()}>Reset</button>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
