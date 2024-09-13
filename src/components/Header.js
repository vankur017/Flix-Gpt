import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  
  const navigate = useNavigate()
  
  const dispatch = useDispatch()

  const user = useSelector(store=>store.users)


  const handleSignout = ()=>{
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      // An error happened.
      navigate("/error")
    });

  
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid, email, displayName} = user;
        
        dispatch(addUser({
          uid:uid, 
          email:email, 
          displayName: displayName
        }))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
    
      }
    });
  
  }, [])


  return (
    <div className='flex absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full justify-between'>

      <img className="w-[250px] " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="no render"/>
    { 
       user==null ? '' : 
       
      <div className='flex justify-center align-middle p-2'>
        <img 
        className='w-11 h-11 rounded-md'
        alt="usericon" 
        src='https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201'
        />

        <button className=' text-white font-bold' onClick={handleSignout}>Sign Out</button>
      </div>
       }
      
      
    </div>
  )
}

export default Header