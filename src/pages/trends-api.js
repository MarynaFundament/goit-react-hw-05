import axios  from "axios";


const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'


const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRmYjAxNDMzZTQxYjI0MDAwYjI1ODA0YzIwNWZlOCIsInN1YiI6IjY1ZWY0MDhlYzJiOWRmMDE0NzVkNDcwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DX9CDRqy5yDxRpED5lvi1VxbcHUjJOR97GrWIdsffqU'
    }
  };

  export const getTrends = async () => {
      const response = await axios.get(url, options);
      console.log(response.data.results);
      return response.data.results;
    } 

    export const getTrendsById = async (movieId) => {

      
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
      console.log(response.data);
      return response.data;
    }
  
    
