import Login  from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import SearchErrorPage from './Error';
import GptSearchPage from "./GptSearchPage"


const Body = () => {


  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
      path: "/browse/gptSearch",
      element: <GptSearchPage/>
    },
    {
      path: "*", 
      element: <SearchErrorPage />
    }
  ]);

  return (
    <div className='text-lg bg-black'>
       <RouterProvider router={AppRouter}/>
    </div>
  )


}




export default Body