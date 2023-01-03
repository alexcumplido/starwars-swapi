import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { ListLinks } from "../../components/ListLinks/ListLinks.jsx";

export function ListSpaceships() {
  const [dataApi, setDataApi] = useState([]);
  let [page, setPage] = useState(1);
  const [element, setElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setPage((page) => ++page);
    })
  );

  const fecthSwapi = () => {
    //Optional url in case original fails https://swapi.py4e.com/
    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then((response) =>
        setDataApi((dataApi) => [...dataApi, ...response.data.results])
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (page < 5) fecthSwapi();
  }, [page]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) currentObserver.observe(currentElement);

    return () => {
      if (currentElement) currentObserver.unobserve(currentElement);
    };
  }, [element]);

  return <ListLinks data={dataApi} setElement={setElement} />;
}
