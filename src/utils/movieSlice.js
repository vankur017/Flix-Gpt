import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        nowPlayingList:[],
        popularMovieList: []
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        // Fix: Swap the order of `state` and `action`
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload; // Correct way to handle the state
        },
        addNowPlayingList:(state,action)=>{
            state.nowPlayingList = action.payload
        },
        addPopularMovieList:(state,action)=>{
            state.popularMovieList = action.payload
        }
    }
});

export const { addNowPlayingMovies, addTrailerVideo, addNowPlayingList, addPopularMovieList } = movieSlice.actions;
export default movieSlice.reducer;
