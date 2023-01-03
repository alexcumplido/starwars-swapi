import formLogo from '../../assets/formLogo.png';
import { useState } from 'react';
import './Form.css';

export function Login({ idLoginName, idLoginPass, value, setLogin, setSignup, onChange, loginCurrentUser }) {
    let [ verified, setVerified ] = useState(true);

    function handleLogin(event){
        event.preventDefault();
        setVerified(loginCurrentUser()) ;
    }

    return (
        <div className='modal__form'>
            <button 
                className='modal__btn__close' 
                onClick={() => setLogin(false)}>
                X
            </button>
            <img 
                className='modal__logo' 
                src={formLogo} 
                alt="StarWars Logo"
            />
            
            <form onSubmit={handleLogin} className='inputs__wrapper'>
                <h2>LOGIN</h2>
                <input 
                    className='input'
                    type='text' 
                    id={idLoginName} 
                    name={idLoginName} 
                    value={value.loginName} 
                    onChange={onChange} 
                    placeholder='Username'
                    required
                    minLength='4'
                />
                <input 
                    className='input' 
                    type='password'  
                    id={idLoginPass} 
                    name={idLoginPass} 
                    value={value.loginPass}
                    onChange={onChange} 
                    placeholder='Password'
                    required
                    minLength='9'
                />
                <button 
                    className={!verified ? 'modal__form__cta notVerified' : 'modal__form__cta verified'}
                    type='submit'
                    onClick={() =>handleLogin()}
                >
                    Sign In
                </button>
                <button 
                    className='modal__form__cta cta__Signup'
                    onClick={() =>{
                        setLogin(false);
                        setSignup(true);
                      
                    }}>
                    Create an Acccount
                </button>
                
            </form>
        </div>
    );
}