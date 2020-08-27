const API_KEY= "807ba2a3cf0352caf1d66354c4c053e6";




const request ={
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, 
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`, 
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`, 
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`, 
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`, 
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`, 
}

export default request;