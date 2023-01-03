import formLogo from '../../assets/formLogo.png';
import { useRef, useState, useEffect } from 'react';
import './Form.css';

export function Signup({ idUserName, idUserPass, value, setSignup, onChange, registerNewUser }) {
    let [errorName, setErrorName] = useState();
    let [errorPassword, setErrorPassword] = useState();
    let [errorEmail, setErrorEmail] = useState();
    let name = useRef(null);
    let email = useRef(null);
    let password = useRef(null)

    let patterns = {
        regexName: /^[a-z]{4,}$/i, // >4 letters
        regexPass: /^[A-Za-z0-9]\w{8,}$/, // >8 characters 
        regexEmail: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
    };

    let { regexName, regexPass, regexEmail } = patterns;

    function handleSignup(event){ 
        event.preventDefault();
        if (regexName.test(name.current.value) 
                && regexPass.test(password.current.value)
                    && regexEmail.test(email.current.value)) {
                        registerNewUser();
                        setSignup(false);
        }
    }

    useEffect(()=>{
        name.current.addEventListener('keyup', evt => {
            regexName.test(name.current.value) ? setErrorName(false) : setErrorName(true);
        })
        password.current.addEventListener('keyup', evt => {
            regexPass.test(password.current.value) ? setErrorPassword(false) : setErrorPassword(true); 
        })
        email.current.addEventListener('keyup', evt => {
            regexEmail.test(email.current.value) ? setErrorEmail(false) : setErrorEmail(true); 
        })
        
    },[]);

    return (
        <div className='modal__form'>
            <button 
                className='modal__btn__close' 
                onClick={() => setSignup(false)}
            >
                X
            </button>
            <img 
                className='modal__logo'
                src={formLogo} 
                alt="StarWars Logo"
            />
            <form onSubmit={handleSignup} className='inputs__wrapper'>
                <h2>SIGN UP</h2>
                <input 
                    className='input'   
                    type='text' 
                    ref={name}
                    id={idUserName}
                    name={idUserName} 
                    value={value.signupName} 
                    onChange={onChange}
                    placeholder='Username'
                    required
                    minLength='4'
                />

                {errorName && 
                    <p className='error'>  At least 4 letters long. </p>}

                <input 
                    className='input'
                    type='text'
                    ref={password}
                    id={idUserPass} 
                    name={idUserPass} 
                    value={value.signupPass} 
                    onChange={onChange}
                    placeholder='Password'
                    required
                    minLength='9'
                />

                {errorPassword && 
                    <p className='error'> At least 9 valid characters long. </p>}

                <input 
                    className='input'
                    type='email'
                    ref={email}
                    placeholder='Email Adress'
                    required
                />

                 {errorEmail && 
                    <p className='error'> Insert a valid email. </p>}

               <div className='checkbox__policy'>
                    <input type="checkbox"/>
                    <label>I would like to receive by email special offers and updates about Lucasfilm Ltd. The Walt Disney Companies.</label>
                </div>
                <button 
                    onClick={()=>handleSignup()}
                    type='submit'
                    className='modal__form__cta'
                    type='submit'
                >
                Create Account
                </button>
            </form>
        </div>
    );
}