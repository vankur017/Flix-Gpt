import React, {useRef, useState} from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()
    

  const handleClick = ()=>{
   
    const message = checkValidData(email.current.value, password.current.value)
   
    setErrorMessage(message)

    if(message) return;
    
    //Sign In / Sign Up User Logic

    if(!isSignInForm){
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        
       
      ).then((userCredential) => {
     // Signed up 
     const user = userCredential.user;
     updateProfile(user, {
      displayName: name.current.value,
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      // console.log(auth);
      
      const {uid, email, displayName} = auth.currentUser;
        
      dispatch(
        addUser({
        uid:uid, 
        email:email, 
        displayName: displayName
      }))
      navigate("/browse")
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
        console.log(userCredential);
       
     
    })
   .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+ '-' + errorMessage)
    // ..
   });

    }
    else{
      //Sign In Logic
 
      signInWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value)
      .then((userCredential) => {
        // Signed in 
        
      
        navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + ' - ' + errorMessage);
      });
    }
  }

  const toggleSignInForm= ()=>{
    setSignInForm(!isSignInForm)
 
    
}

 

  return (
    <div>
      <Header/>
      <div className='absolute h-screen w-full'>
          <img className='absolute top-0 left-0 object-cover w-full h-full'
            src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg 1800w"
             alt="Not rendered"
            />
            </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black mx-auto left-0 right-0 my-44 rounded-lg text-white opacity-80'>
       
       <h1 className='font-bold text-3xl mt-6 py-4 px-8'>
        {isSignInForm ? 'Sign In' : 'Sign Up'}
       </h1>
       
       {!isSignInForm && 
       <input ref={name}  type='text' placeholder='Full Name' className='p-5 my-4 w-full  bg-gray-500'/>
       }
        

        <input
         ref={email}
         type='email'
         placeholder='Email' 
         className='p-5 my-4  w-full bg-gray-500'
         />
        
        <input 
        ref={password} 
        type='password' 
        placeholder='Password' 
        className='p-5 my-4 w-full  bg-gray-500'
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

        <button 
        className='p-4 my-6 rounded-2xl text-white bg-red-700 w-full' 
        onClick={handleClick}>
          {
            isSignInForm ? 'Sign In' : 'Sign Up'
          }
          </button>
        <p 
        className='py-4 font-semibold hover:cursor-pointer' 
        onClick={toggleSignInForm}
        >
          {isSignInForm ? 'New to Flix? Sign Up Now' : 'Already a User? Sign In Now'}
        </p>
      </form>
     
    </div>
  )
}


export default Login