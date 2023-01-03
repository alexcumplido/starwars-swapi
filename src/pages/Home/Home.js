import  { useNavigate } from 'react-router-dom'; 
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../App.js'
import { Login } from '../../components/Form/Login.js'
import { Signup } from '../../components/Form/Signup.js'
import homeBanner from '../../assets/homeBanner.webp'
import './Home.css';

export function Home({ login, signup, setLogin, setSignup }) {
    let {userAuth, setUserAuth } = useContext(AuthContext);
    let navigate = useNavigate();
    let [registeredUsers, setRegisteredUsers] = useState([]);

    const [userSignup, setUserSignup] = useState({
        signupName: '',
        signupPass: '',
    });

    const [userLogin, setUserLogin] = useState({
        loginName: '',
        loginPass: '',
    });
    
    const onChangeUserSignup = (event) => {
        setUserSignup({ 
            ...userSignup,
            [event.target.id]: event.target.value,
        });
    }

    const onChangeUserLogin = (event) => {
        setUserLogin({ 
            ...userLogin,
            [event.target.id]: event.target.value,
        });
    }

    const registerNewUser = () => {
        setRegisteredUsers([
            ...registeredUsers, 
            {...userSignup}
        ]);
    };

    const loginCurrentUser = () => {
        let verified = registeredUsers.some(e => {
           return e.signupName === userLogin.loginName && e.signupPass === userLogin.loginPass;
        });
        setUserAuth(verified);
        verified && window.localStorage.setItem('currentUser', JSON.stringify(userLogin));
        verified && setLogin(false);
        return verified;
    };

   useEffect(() => {
       localStorage.getItem(('currentUser')) ? setUserAuth(true) : setUserAuth(false);
    });

    useEffect(() => {
        if (localStorage.getItem(('registeredUsers'))) {
            setRegisteredUsers(JSON.parse(localStorage.getItem(('registeredUsers'))));
        } 
    }, []);

    useEffect(() => {
        window.localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    }, [registeredUsers]);

    useEffect(() => {
        setUserSignup({
            signupName: '',
            signupPass: '',
        });
        
        setUserLogin({
            loginName: '',
            loginPass: '',
        });

    }, [signup, login]);

    return (
        <div className='wrapper'>
            <button 
                className={userAuth? 'btn__spaceships' : 'btn__spaceships btn_spaceships__notAuth'}
                onClick={() => navigate("/spaceships")}
            >
                Starships database
            </button>
            {/* <img 
                className='home__banner' 
                src={homeBanner} 
                alt="Home Background"
            /> */}
            {signup && 
            <Signup 
                idUserName='signupName'
                idUserPass='signupPass' 
                value={userSignup} 
                setSignup={setSignup} 
                onChange={onChangeUserSignup} 
                registerNewUser={registerNewUser}
            />}
            {login && 
            <Login 
                idLoginName='loginName'
                idLoginPass='loginPass'
                value={userLogin} 
                setLogin={setLogin} 
                onChange={onChangeUserLogin} 
                loginCurrentUser={loginCurrentUser}
                setSignup={setSignup}
            />}
        </div>  
    )
}




