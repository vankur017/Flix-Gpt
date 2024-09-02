import React, {useState} from 'react'
import Header from './Header';





const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true)

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
      <form className='w-3/12 absolute p-12 bg-black mx-auto left-0 right-0 my-44 rounded-lg text-white opacity-80'>
       <h1 className='font-bold text-3xl mt-6 py-4 px-8'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        { !isSignInForm &&
       <input type='text' placeholder='Name' className='p-5 my-4 w-full  bg-gray-500'/>
        }
        <input type='text' placeholder='Email' className='p-5 my-4  w-full bg-gray-500'/>
        
        <input type='text' placeholder='Password' className='p-5 my-4 w-full  bg-gray-500'/>
        <button className='p-4 my-6 rounded-2xl text-white bg-red-700 w-full'>{
            isSignInForm ? 'Sign In' : 'Sign Up'
          }</button>
        <p className='py-4 font-semibold hover:cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? 'New to Flix? Sign Up Now' : 'Already a User? Sign In Now'}
        </p>
      </form>
     
    </div>
  )
}


export default Login