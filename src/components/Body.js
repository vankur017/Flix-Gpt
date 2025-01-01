import Login  from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import SearchErrorPage from './Error';
import GptSearchPage from "./GptSearchPage"
import  MoviereviewDetails from './MoviereviewDetails'
import ApiError from './ApiError';


const Body = () => {


  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/gptSearch",
      element: <GptSearchPage />,
    },
    {
      path: "/moviedetails/:id",
      element: <MoviereviewDetails />,
    },
    {
      path: "/apierror",
      element: <ApiError />,
    },
  ], {
    path: "/error",
    errorElement: <SearchErrorPage />, 
  });

  return (
    <div className='text-lg bg-white'>
       <RouterProvider router={AppRouter}/>
    </div>
  )


}




export default Body