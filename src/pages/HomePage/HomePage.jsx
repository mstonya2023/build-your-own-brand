import {useState} from 'react';
import AuthPage from '../AuthPage/AuthPage';
export default function HomePage({setUser}) {
    const [isAuth, setisAuth] = useState(false)
    return (
        <>
       { isAuth ? 
       <AuthPage setUser={setUser} />
       :
       <div>
        <h1>Welcome to B.Y.O.B.</h1>
        <button onClick={()=> setisAuth(true)}>Sign Up/Login</button>
       </div> }
       </>
)
}

