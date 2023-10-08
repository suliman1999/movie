import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import MoviesDetails from "./components/MoviesDetails";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import SplashScreen from "./components/SplashScreen";
import axios from 'axios'

function App() {

  const [movies , setMovies] = useState([])
  const [pagecount , setPageCount] = useState(0)
  
  /// Get All Movies by axios
  const GetAllMovies = async()=>{
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6946ca39aa7a86ac42d181373988a9f8&language=en-US')
    setMovies(res.data.results)
    setPageCount(500)
  }

  /// Get current page
  const GetPage = async(page)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6946ca39aa7a86ac42d181373988a9f8&language=en-US&page=${page}`)
    setMovies(res.data.results)
    
  }

  // to search in api
  const search = async(word)=>{
    if(word === ""){
      GetAllMovies();
    }
    else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6946ca39aa7a86ac42d181373988a9f8&query=${word}&language=en-US`);
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
    }

  }
  useEffect(()=>{
    GetAllMovies();
  } ,[])

  return (
    <div className="font color-body" style={{ height: '100%' }}>
      
      <NavBar search={search}/>
      <Container  style={{ backgroundColor: "#123", height: '100%' }}>
        
          <Routes>
            <Route path="/" element={<MoviesList movies ={movies} GetPage={GetPage} pagecount={pagecount}/>}/>
            <Route path="/movie/:id" element={<MoviesDetails/>}/>
            
          </Routes>
        
      </Container>
    </div>
    
  );
}

export default App;
