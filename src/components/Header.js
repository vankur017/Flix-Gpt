import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, AVATAR, SUPPORTED_LANG } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { useRef } from 'react'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  
  const langref = useRef()
  console.log(langref);
  
  const navigate = useNavigate()
  
  const dispatch = useDispatch()

  const user = useSelector(store=>store.user)


  const handleSignout = ()=>{
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      // An error happened.
      navigate("/error")
    });

  
  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
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
    //Unsubscribe when the components unmounts
    return ()=> unsubscribe()
  }, [])

  const handleGptSearchClick = ()=>{
      dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (event)=>{
    
      dispatch(changeLanguage(event.target.value))
    
  }

  const config  = useSelector(store=>store.gpt.showGptSearch)

  console.log(config);
  
  return (
    <div className='flex absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full justify-between'>

      <img className="w-[250px] " src={LOGO} alt="no render"/>
      { 
  user && (
    <div className='flex justify-center align-middle p-6'>
     { config && <select className='bg-gray-900 text-white mr-4 px-5 rounded-2xl ' onChange={handleLanguageChange}>
        
        {SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
         
      </select>
}
      <button 
      className='bg-purple-900
                 text-white 
                  mr-6 
                  mb-6 
                  px-5 
                  rounded-xl 
                  py-1'
        onClick={handleGptSearchClick}  
        >
       {config? 'Homepage' : 'GPT Search'}
      </button>
      <img 
        className='w-11 h-11 rounded-md'
        alt="usericon" 
        src={AVATAR}
      />
      <button className='text-white font-bold opacity-100' onClick={handleSignout}>
        Sign Out
      </button>
    </div>
  )
}
      
    </div>
  )
}

export default Header