import { useEffect, useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import Card from "../../components/card/Card";
import cocktail from "/cocktail2.webp";
import { useDispatch, useSelector } from "react-redux";
import { setDrinks } from "../../store/action";
import Modal from "../../components/Modal/Modal";
import "./Home.scss";

let abc = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function Home() {
  const [paginas, setPaginas] = useState(["a"]);
  const dispatch = useDispatch();
  const bebidas = useSelector((state: any) => state.drinks);
  const [viewModal, setViewModal] = useState(false);

  const fechingSearch = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .then((response) => response.json())
      .then((json) => dispatch(setDrinks(json)));
  };

  const verMas = (): any => {
    const num = Math.round(Math.random() * 25);
    if (!paginas.includes(abc[num])) {
      setPaginas([...paginas, abc[num]]);
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${
          abc[num - 1]
        }`
      )
        .then((response) => response.json())
        .then((json) => {
          let nuevo = [...bebidas, ...json.drinks];
          dispatch(setDrinks({ drinks: nuevo }));
        });
    } else {
      if (paginas.length <= abc.length) {
        verMas();
      }
      return;
    }
  };

  useEffect(() => {
    fechingSearch();
  }, []);

  return (
    <>
      <NavBar reset={fechingSearch} />
      <main className="main">
        {viewModal ? <Modal set={setViewModal} /> : null}
        <div className="container-title">
          <div className="title">
            <img src={cocktail} alt="cocktail" />
            <h1>The Cocktail App</h1>
          </div>
          <div className="info">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              veritatis nemo mollitia doloremque ipsum cum aut ducimus
              distinctio. Sunt impedit eaque quasi ipsa voluptatibus fugiat, in
              voluptates distinctio, non, est cum cumque modi delectus. Eligendi
              officia excepturi rerum odit ipsam aut, aperiam quos sint minus
              repudiandae atque amet quia a harum vel asperiores beatae ab
              explicabo totam expedita dolor sequi. Magni saepe numquam
              voluptates nisi, nam quam voluptatum magnam voluptatem. Voluptates
              soluta officia aut necessitatibus, sint dolorum dignissimos. Quia
              inventore consequuntur, distinctio adipisci incidunt quis et
              praesentium itaque culpa ipsa!
            </p>
          </div>
        </div>
        <div className="linea"></div>

        {!bebidas.length ? (
          <h1>Cargando</h1>
        ) : (
          <div className="cocteils">
            {bebidas.map((e: any) => (
              <Card key={e.idDrink} info={e} set={setViewModal} />
            ))}
          </div>
        )}
        <div className="linea"></div>

        <div id="vermas">
          <button disabled={abc.length === paginas.length} onClick={verMas}>
            Ver Mas
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;
