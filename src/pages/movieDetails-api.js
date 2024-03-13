import axios  from "axios";

const url = 'https://api.themoviedb.org/3/movie/763215?language=en-US'

const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRmYjAxNDMzZTQxYjI0MDAwYjI1ODA0YzIwNWZlOCIsInN1YiI6IjY1ZWY0MDhlYzJiOWRmMDE0NzVkNDcwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DX9CDRqy5yDxRpED5lvi1VxbcHUjJOR97GrWIdsffqU'
    }
  };

  export const getDetails = async () => {
    try {
      const response = await axios.get(url, options);
      console.log(response.data);
      return response.data;

      
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
    
  
    
