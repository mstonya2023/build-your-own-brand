import {useState} from 'react';
import AuthPage from '../AuthPage/AuthPage';
export default function HomePage({setUser, user}) {
    const [isAuth, setisAuth] = useState(false)
    return (
        <>
       { isAuth ? 
       <AuthPage setUser={setUser} />
       :
       <div>
        <h1>Welcome to B.Y.O.B.</h1>
        {!user && <button onClick={()=> setisAuth(true)}>Sign Up/Login</button>}
       </div> }
       </>
)
}

