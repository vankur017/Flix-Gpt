import React, {useRef, useState} from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {BACKGROUND_IMG} from '../utils/constants'
const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
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
    
     
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  
       
     
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
    <Header />
    <div className='absolute h-screen w-full'>
      <img
        className='absolute top-0 left-0 object-cover w-full h-full'
        src={BACKGROUND_IMG}
        alt="Not rendered"
      />
    </div>
    <form 
      onSubmit={(e) => e.preventDefault()} 
      className='w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 absolute p-8 sm:p-12 md:p-16 bg-black mx-auto left-0 right-0 my-44 rounded-lg text-white opacity-85'>
      <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl mt-6 py-4 px-3 opacity-100'>
        {isSignInForm ? 'Sign In' : 'Sign Up'}
      </h1>
  
      {!isSignInForm && 
        <input
          ref={name}
          type='text'
          placeholder='Full Name'
          className='p-3 sm:p-5 my-2 sm:my-4 w-full bg-gray-500'
        />
      }
  
      <input
        ref={email}
        type='email'
        placeholder='Email'
        className='p-3 sm:p-5 my-2 sm:my-4 w-full bg-gray-500'
      />
  
      <input
        ref={password}
        type='password'
        placeholder='Password'
        className='p-3 sm:p-5 my-2 sm:my-4 w-full bg-gray-500'
      />
  
      <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
  
      <button
        className='p-3 sm:p-4 my-4 sm:my-6 rounded-2xl text-white bg-red-700 w-full'
        onClick={handleClick}>
        {isSignInForm ? 'Sign In' : 'Sign Up'}
      </button>
  
      <p
        className='py-4 font-semibold hover:cursor-pointer'
        onClick={toggleSignInForm}>
        {isSignInForm ? 'New to Flix? Sign Up Now' : 'Already a User? Sign In Now'}
      </p>
    </form>
  </div>
  
  )
}


export default Login