const Api_key="?api_key=7e945e91ee18f3f5b8cbb54293dc7ded";
//const baseURL="https://api.themoviedb.org/3/"
const requests={
    fetchPopular:"movie/popular"+Api_key,
    fetchNowPlaying:"movie/now_playing"+Api_key,
    fetchTopRated:"movie/top_rated"+Api_key,
    fetchTrending:"trending/all/week"+Api_key


}
export default requests;