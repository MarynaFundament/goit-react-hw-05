import axios  from "axios";

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'

const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRmYjAxNDMzZTQxYjI0MDAwYjI1ODA0YzIwNWZlOCIsInN1YiI6IjY1ZWY0MDhlYzJiOWRmMDE0NzVkNDcwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DX9CDRqy5yDxRpED5lvi1VxbcHUjJOR97GrWIdsffqU'
    }
  };


  
export const getFilms = async() => {
    const response = axios.get(url, options)
    .then(response => console.log(response))
    .catch(err => console.error(err));

    return response.data
}




export const getPaymentById = async(paymentId) => {
    const response = await axios.get(`/payments/${paymentId}`)
    return response.data

    console.log(response.data)
}


