import { Link } from 'react-router-dom';
import './ErrorRoute.css';

export function ErrorRoute() {
    return (
        <div className='route__error'>
            <Link to="/"> Darth Vader did this, return Home</Link>
        </div>
    );
}