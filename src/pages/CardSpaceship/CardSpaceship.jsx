import axios from "axios";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../App.jsx";
import { ListPilots } from "../../components/CardItems/ListPilots.jsx";
import { ListFilms } from "../../components/CardItems/ListFilms.jsx";
import "./CardSpaceship.css";

export function CardSpaceship() {
  let { userAuth } = useContext(AuthContext);
  let navigate = useNavigate();
  const [pilots, setPilots] = useState([]);
  const [films, setFilms] = useState([]);

  let location = useLocation();
  let params = useParams();
  let baseUrlImages = "https://starwars-visualguide.com/assets/img/starships";
  let placeholderImage =
    "https://starwars-visualguide.com/assets/img/placeholder.jpg";

  const fetchPilots = () => {
    location.state.pilots.map((element) => {
      axios
        .get(element)
        .then((response) => setPilots((pilots) => [...pilots, response.data]))
        .catch((error) => console.log(error));
    });
  };

  const fetchFilms = () => {
    location.state.films.map((element) => {
      axios
        .get(element)
        .then((response) => setFilms((films) => [...films, response.data]))
        .catch((error) => console.log(error));
    });
  };

  useEffect(() => {
    fetchPilots();
    fetchFilms();
  }, []);

  useEffect(() => {
    !userAuth && navigate("/");
  }, [userAuth]);

  return (
    <main className="item__spaceship">
      <img
        className="item__img"
        src={`${baseUrlImages}/${params.id}.jpg`}
        alt={`Starship ${location.state.name}`}
        onError={({ target }) => {
          target.src = placeholderImage;
        }}
      />
      <h1>{location.state.name}</h1>
      <div className="card__description">
        <p>
          Heavy armor has resulted in formidable floating tanks known as AATs.
          These assault tanks form the frontline of Trade Federation armored
          infantry divisions, as well as Separatist forces during the Clone
          Wars. A crew of battle droids drives the battle tank and operates the
          array of laser and projectile weaponry carried by the vehicle.
        </p>
        <ul>
          <li>Class: {location.state.starship_class}</li>
          <li>Model: {location.state.model}</li>
          <li>Crew: {location.state.crew} tripulants</li>
          <li>Length: {location.state.length} m.</li>
          <li>MaxSpeed: {location.state.max_atmosphering_speed} km/h.</li>
          <li>Manufacturer: {location.state.manufacturer}</li>
        </ul>
      </div>
      <ListPilots data={pilots} />
      <ListFilms data={films} />
    </main>
  );
}
