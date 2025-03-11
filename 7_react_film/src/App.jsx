import React from "react"
import Search from "./components/Search"
import Spinner from "./components/Spinner";
import { useState,useEffect } from "react"
import MovieCard from "./components/MovieCard";
import {useDebounce} from 'react-use'
import { getTrendingMovies, updateSearchCount } from "./appwrite";


const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method:'GET',
  headers: {
    accept: 'application/json',
    Authorization:`Bearer ${API_KEY}`
  }
}

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ debouncedSearchTerm, setDebounceSearchTerm] = useState('');
  const [trendingMovies,setTrendingMovies] = useState([]);
  
  //before fetching the resource using the searchTerm, it will wait for 500ms, avoiding to many fetches
  useDebounce(()=> setDebounceSearchTerm(searchTerm),500,[searchTerm])

  const fetchMovies = async (query='') => {
    setIsLoading(true);
    setErrorMessage('');

    try{
      const endpoint = query 
        ?`${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`:
        `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok){
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();
      
      if(data.Response === 'False'){
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      // [] = if there are no data found
      setMovieList(data.results || []);

      //for every search, update the count
      if(query && data.results.length > 0){
        await updateSearchCount(query, data.results[0]);
      }

    } catch (error) {
      console.error(`Error fetching movie: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later');
    } finally {
      setIsLoading(false);
    }
  }

  const loadingTrendingMovies = async () =>{
    try{
      const movies = await getTrendingMovies();

      setTrendingMovies(movies);

    } catch (error) {
      console.error(`Error fetching trending movies :${error}`);
      //setErrorMessage('Error fetching trending movies.');

    }
  }


  useEffect(()=>{
    fetchMovies(debouncedSearchTerm);
//every time the searchTerm change, the results will refresh
  },[debouncedSearchTerm])


  // for every time the page is refreshed we got all trending movies
  useEffect(() => {
    loadingTrendingMovies();
  },[]);

  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="/src/assets/hero.png" alt="Hero Banner"/>
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
          <Search searc hTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>

        {/* if we pass setSearchTerm() as parameter, it will execute immediately the function
            if we pass setSearchTerm as parameter, it will execute only once the component is rendered
        */}
        
        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2> Trending Movies</h2>

            <ul>
              {trendingMovies.map((movie,index)=> (
                <li key={movie.$id}>
                  <p>{index+1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>

        )}

        <section className="all-movies">
          <h2>All movies</h2>

          {isLoading ? <Spinner/> : 
            errorMessage ? (<p className="text-red-500">{errorMessage}</p>) : 
            (<ul>{movieList.map((movie) => (<MovieCard key={movie.id} movie={movie}/>))
              }</ul>)
          }
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        </section>
      </div>

    </main>

    
  )
}

export default App
