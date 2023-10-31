
import {useState} from 'react';
import AuthPage from '../AuthPage/AuthPage';
export default function HomePage({setUser, user}) {
    const [isAuth, setisAuth] = useState(false)
    return (
        <>
       { isAuth ? 
       <AuthPage setUser={setUser} />
       :
       
       <div className='home-body'>
        <h1 className='build'>BUILD YOUR OWN BRAND</h1>
        {!user && <button onClick={()=> setisAuth(true)}>Sign Up/Login</button>}
       </div> }
       
        <h2>WELCOME TO B.Y.O.B. </h2>
        <p> We give you the option to choose </p>
            <p>how you want to present your brand.</p>
            <p>Whether you have a new business venture</p>
            <p>or looking to upgrade, we have the solution!</p>
        
       <h2> OUR SERVICES</h2>
        <p className='mark-pack'>MARKETING PACKAGES</p>
        <p>Bronze</p>
        <p>Silver</p>
        <p>Gold</p>
        <p className='mark-ala-carte'>MARKETING ALA-CARTE SERVICES</p>
        <p>Logo Design</p>
        <p>Banner Design</p>
        <p>Digital Flyer Design</p>
        <p>Digital Business Card Design</p>
        <p>Social Media Set-Up</p>
       
       <p className='sign-up'>SIGN UP TO GET STARTED!</p>
       
       </>

       
)
}

