import "./List.css";

export function ListFilms({ data }) {
  let baseUrlImages = "https://starwars-visualguide.com/assets/img/films";
  let placeholderImage =
    "https://starwars-visualguide.com/assets/img/placeholder.jpg";

  let films = data.map((element, idx) => {
    let id = element.url.replace(/[^0-9]/g, "");
    return (
      <li className="card__film" key={idx}>
        <img
          src={`${baseUrlImages}/${id}.jpg`}
          alt={element.title}
          onError={({ target }) => {
            target.src = placeholderImage;
          }}
        />
        <a href={element.url} target="_blank">
          {element.title}
        </a>
      </li>
    );
  });

  return (
    <>
      <h2>Films</h2>
      <ul className="card__wrapper">{films}</ul>
    </>
  );
}
