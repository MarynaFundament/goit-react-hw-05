import axios  from "axios";


const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'

const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRmYjAxNDMzZTQxYjI0MDAwYjI1ODA0YzIwNWZlOCIsInN1YiI6IjY1ZWY0MDhlYzJiOWRmMDE0NzVkNDcwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DX9CDRqy5yDxRpED5lvi1VxbcHUjJOR97GrWIdsffqU'
    }
  };

  export const getTrends = async () => {
      const response = await axios.get(url, options);
      // console.log(response.data.results);
      return response.data.results;
    } 

  export const getTrendsById = async (movieId) => {

      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
      console.log(response.data);
      return response.data;
    }
    
    export const getMovieByQuery = async (query) => {

      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
      // console.log(response.data);
      return response.data;
    }

    export const getCastById = async (movieId) => {

      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options);
      // console.log(response.data.cast);
      return response.data.cast;
    }


    export const getReviewsById = async (movieId) => {

      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`, options);
      // console.log(response.data.results);
      return response.data.results;
    }

    
  
    
