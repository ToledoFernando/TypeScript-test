import { useEffect, useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import Card from "../../components/card/Card";

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
  const [bebidas, setBebidas] = useState(Array);
  const [paginas, setPaginas] = useState(["a"]);

  const fechingSearch = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .then((response) => response.json())
      .then((json) => setBebidas(json.drinks));
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
          console.log(nuevo);
          setBebidas(nuevo);
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
      <NavBar reset={fechingSearch} set={setBebidas} />
      <h1>awodo</h1>
      {!bebidas.length ? (
        <h1>Cargando</h1>
      ) : (
        bebidas.map((e: any) => <Card key={e.idDrink} info={e} />)
      )}
      <button onClick={verMas}>Ver Mas</button>
    </>
  );
}

export default Home;
