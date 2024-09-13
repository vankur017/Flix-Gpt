import Login  from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';



const Body = () => {


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
 

  return (
    <div className='text-lg'>
       <RouterProvider router={AppRouter}/>
    </div>
  )


}




export default Body