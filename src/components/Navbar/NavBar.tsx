import { useState } from "react";
import "./Navbar.scss";
import { useDispatch } from "react-redux";
import lupa from "/lupa.png";
import github from "/github.svg";
import linkedin from "/linkedin.svg";
import { setDrinks } from "../../store/action";

type props = {
  reset: any;
};

function NavBar({ reset }: props) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const fechingSearch = (e: any) => {
    e.preventDefault();
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((json) => dispatch(setDrinks(json)));
  };

  return (
    <nav>
      <img
        src={github}
        alt="github"
        onClick={() =>
          (window.location.href = "https://github.com/toledofernando")
        }
      />
      <div>
        <form onSubmit={fechingSearch}>
          <input
            type="text"
            placeholder="Buscar por Nombre"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <img src={lupa} alt="" />
          </button>
        </form>
        <button id="reset" onClick={() => reset()}>
          Reset
        </button>
      </div>
      <img
        src={linkedin}
        alt="LinkedIn"
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/toledo-fernando-266612245/")
        }
      />
    </nav>
  );
}

export default NavBar;
