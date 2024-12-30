import React,{useEffect, useState} from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false);
 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const langref = useRef()
 // console.log(langref);
  
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

  //console.log(config);
  
  return (
    <div className='flex absolute px-8 py-2 bg-gradient-to-b from-black z-40 w-full justify-between'>
      <img className="w-16 sm:w-24 md:w-32 lg:w-48 xl:w-64 h-16 sm:h-24 md:h-32 lg:h-36 xl:h-40 pl-2 sm:pl-4 md:pl-6 lg:pl-8" src={LOGO} alt="no render" />
      <div className='flex items-center'>
       
        {user && (
          <> <button className='text-white sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white' onClick={toggleMenu}>
          ☰
        </button>
        <div className={`flex-col sm:flex-row justify-center items-center p-4 sm:p-6 ${menuOpen ? 'flex' : 'hidden'} sm:flex`}>
            {config && (
              <select className='bg-gray-900 text-white mb-4 sm:mb-0 mr-0 sm:mr-4 px-3 sm:px-5 py-1 sm:py-2 rounded-2xl' onChange={handleLanguageChange}>
                {SUPPORTED_LANG.map(lang => (
                  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                ))}
              </select>
            )}
            <button
              className='bg-purple-900 text-white mb-4 sm:mb-0 mr-0 sm:mr-6 px-3 sm:px-5 py-1 sm:py-2 rounded-xl'
              onClick={handleGptSearchClick}
            >
              {config ? 'Homepage' : 'GPT Search'}
            </button>
            <img
              className='w-8 h-8 sm:w-11 sm:h-11 rounded-md mb-4 sm:mb-0'
              alt="usericon"
              src={AVATAR}
            />
            <button className='text-white font-bold opacity-100' onClick={handleSignout}>
              Sign Out
            </button>
          </div>
        </>
          
        )}
      </div>
    </div>
  );
};

export default Header;