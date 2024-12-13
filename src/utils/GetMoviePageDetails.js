// import React from 'react'
// import { API_OPTIONS, MOVIE_PAGE_URL } from './constants'
// import { useSelector } from 'react-redux'



// const GetMoviePageDetails = () => {
    
//     const moviedetails = useSelector((store)=>store.movies.nowPlayingList)
//     console.log(moviedetails);
    
    
//     const moviePageData = async(id)=>{
//         const data= await fetch(`https://api.themoviedb.org/3/movie/${id}`, API_OPTIONS)
//         const json = await data.json()

//         console.log(json);
        
//     }
 
//    const fetchallmoviedata = async()=>{
//     if(moviedetails && moviedetails.length>0){
//         for(let movie of moviedetails){
//             if(movie.id){
//           const allmoviedata=  await moviePageData(movie.id)
            
//                 console.log(allmoviedata);
//                 return allmoviedata
                
//         }
//         }
//     }

// }   

//     fetchallmoviedata()

//     return(
//         <>



//         </>
//     )
   
    
// }

// export default GetMoviePageDetails