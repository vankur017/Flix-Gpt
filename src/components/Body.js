import React, { useEffect } from 'react'
import Login  from './Login'
import Browse from './Browse'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../utils/firebase' 
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {

  const dispatch = useDispatch();

 

  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
  ]);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid, email, displayName} = user;
        
        dispatch(addUser({
          uid:uid, 
          email:email, 
          displayName: displayName
        }))
        
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
    
      }
    });
  
  }, [])

  return (
    <div className='text-lg'>
       <RouterProvider router={AppRouter}/>
    </div>
  )


}




export default Body