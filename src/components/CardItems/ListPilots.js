import './List.css';

export function ListPilots({ data }) {
    let baseUrlImages = "https://starwars-visualguide.com/assets/img/characters"
    let placeholderImage = "https://starwars-visualguide.com/assets/img/placeholder.jpg";

    let pilots = data.map((element, idx) => { 
        let id = element.url.replace(/[^0-9]/g, '');
        return (
            <li className='card__pilot' key={idx}>
                <img
                    src={`${baseUrlImages}/${id}.jpg`} 
                    alt={element.name} 
                    onError={({ target }) => {target.src=placeholderImage}}
                />
                <a href={element.url} target='_blank'>{element.name}</a>
                <ul>
                    <li>Born: {element.birth_year}</li>
                    <li>Height: {element.height}</li>
                    <li>Gender: {element.gender}</li>
                    <li>Mass kg: {element.mass}</li>
                </ul>
            </li>
        );
    });

    return (
        <>
            <h2>Pilots</h2>
            <ul className='card__wrapper'>
                {pilots}
            </ul>
        </>
    );
}
