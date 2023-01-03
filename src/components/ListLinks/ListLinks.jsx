import { Link } from 'react-router-dom'; 
import './ListLinks.css';

export function ListLinks( { data, setElement } ) {
  let list = data.map((item, i) => {
      let id = item.url.replace(/[^0-9]/g, '');
      return( 
        (i === data.length-1) ? 
        <Link to={`/item/${id}`} state={item} key={id} ref={setElement}> 
            <li className="link__item"> 
                <p>{item.name}</p>
                <p>{item.model}</p>
            </li> 
        </Link>
        : 
        <Link to={`/item/${id}`} state={item} key={id}> 
            <li className="link__item"> 
                <p>{item.name}</p>
                <p>Model: {item.model}</p>
            </li> 
        </Link>
      )
  })
  return (
    <ul className="list__links">
        {list}
    </ul>
  );
}