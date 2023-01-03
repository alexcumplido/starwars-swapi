import  { Link, useNavigate } from 'react-router-dom'; 
import { useContext } from 'react';
import { AuthContext } from '../../App.js'
import { Social } from '../Social/Social.js'
import headerLogo from '../../assets/starWarsLogo.png'
import './Header.css';

export function Header( { showSignup, showLogin } ) {
    let { userAuth } = useContext(AuthContext);
    let navigate = useNavigate();
    return(
        <header>
            <div className="header__superior">
                <Social/>
                <img className='header__logo' src={headerLogo} alt="StarWars Logo" />
                {!userAuth ?
                    <div className='header__wrapper__btn'>
                        <button 
                            className='header__btn' 
                            onClick={() => showLogin()}>
                            Login
                        </button>
                        <button 
                            className='header__btn' 
                            onClick={() => showSignup()}>
                            Sign up
                        </button>
                    </div>
                    : 
                    <div className='header__wrapper__btn'>
                        <button 
                            className='header__btn' 
                            onClick={() => {
                            window.localStorage.removeItem('currentUser');
                            navigate('/');
                        }}> 
                        Logout </button> 
                    </div>
                }  
            </div>           
            <nav>
                <ul>
                    <li><Link className='header__link' to="/"> Home </Link></li>
                    <li><Link className={userAuth ? 'header__link' : 'header__link header__link__notAuth'} to="/spaceships"> SpaceShips </Link></li>
                    <li><a className='header__link' href="https://github.com/alexcumplido/sprint8/tree/develop#demo" target='_blank'>Code</a></li>
                </ul>
            </nav>      
        </header>
    );
}