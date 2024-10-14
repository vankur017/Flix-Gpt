import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        nowPlayingList:[],
        popularMovieList: [],
        topRatedMoviesList : []
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
      
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addNowPlayingList:(state,action)=>{
            state.nowPlayingList = action.payload
        },
        addPopularMovieList:(state,action)=>{
            state.popularMovieList = action.payload
        },
        addTopRatedMovieList:(state, action)=>{
            state.topRatedMoviesList = action.payload
        }
    }
});

export const {  addNowPlayingMovies,
                addTrailerVideo,
                addNowPlayingList, 
                addPopularMovieList,
                addTopRatedMovieList 
             } = movieSlice.actions;
export default movieSlice.reducer;
