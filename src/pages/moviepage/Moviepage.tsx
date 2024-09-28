import React, { useEffect, useState } from "react";
import "./moviepage.scss";
import axios from "axios";
import { movieDTO } from "../../interfaces/movieDTO";
import MovieCard from "../../components/movieCard/MovieCard";
import { loadavg } from "os";
import MovieList from "../../components/movieList/MovieList";
import PageIndexSelector from "../../components/pageIndexSelector/PageIndexSelector";
import SearchAppBar from "../../components/searchAppBar/SearchAppBar";
import { url } from "inspector";

const Moviepage = () => {
  const [movieArray, setMovieArray] = useState<movieDTO[]>([]);
  const [genreArray, setGenreArray] = useState<{ id: number; name: string }[]>(
    []
  );
  const [url, setUrl] = useState<string>(
    "https://atrpi.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  );
  const [genreUrl] = useState<string>(
    "https://api.themoviedb.org/3/genre/movie/list?language=en"
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [includeAdult, setIncludeAdult] = useState<boolean>(true);
  const [year, setYear] = useState<number>(0);
  const handlePage = (index: number) => {
    setPageIndex(index);
  };
  const handleAdult = (bool: boolean) => {
    setIncludeAdult((prev) => prev);
    console.log("handle adult is: ", includeAdult);
  };

  const handleYear = (year: number) => {
    setYear(year);
    console.log("handle year is: ", year);
  };

  const requestGenerator = (defaultUrl?: string) => {
    const requestedUrl = `https://api.themoviedb.org/3/${
      searchQuery?.trim() !== ""
        ? `search/movie?query=${searchQuery}&page=${pageIndex}`
        : "movie/top_rated?"
    }/&include_adult=${includeAdult}&${
      year ? `primary_release_year=${year}` : ""
    }&language=en-US&page=${pageIndex}`;

    return {
      method: "GET",

      url: `https://api.themoviedb.org/3/${
        searchQuery?.trim() !== ""
          ? `search/movie?query=${searchQuery}&page=${pageIndex}`
          : "movie/top_rated?"
      }/&include_adult=false&language=en-US&page=${pageIndex}`,
      headers: {
        accept: "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2NjY2E4YTA5MTQ2ODFmNzMyZDRhZWRhMzM3N2EzYiIsIm5iZiI6MTcyNzAxOTk5OC45ODc0MTIsInN1YiI6IjY2ZWY2NWQyMGVhODBkMWZlMzhkNGVkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.45clSRd42BtwePRi9XYZLC9VpNTFivFbHluo1egeNPI",
      },
    };
  };
  const fetchMovies = async () => {
    try {
      const response = await axios(requestGenerator(genreUrl));
      console.log("response is: ", response);
      const { results } = response.data;
      console.log("results are: ", results);
      return results as movieDTO[];
    } catch (error) {
      console.log("youre error is: ", error);
    }
  };
  const fetchGenres = async () => {
    try {
      const response = await axios(requestGenerator(genreUrl));
      console.log("response of genres is: ", response);
      const { genres } = response.data;
      setGenreArray(genres);
      console.log("genres after fetch is: ", genres);
    } catch (error) {
      console.log("error in fetchGenres: ", error);
    }
  };
  useEffect(() => {
    const appendMovies = async () => {
      const movies = await fetchMovies();
      if (movies) {
        setMovieArray(movies);
        console.log("movie array is: ", movies);
      }
    };
    appendMovies();

    console.log("the movies are: ", movieArray);
  }, [pageIndex, searchQuery, year, includeAdult]);

  useEffect(() => {
    fetchGenres();
  });
  return (
    <div className="moviepage-container">
      <SearchAppBar
        setSearchQuery={setSearchQuery}
        handleAdult={() => handleAdult}
        handleYear={() => handleYear}
      />
      <div className="list-and-sidebar-container">
        <MovieList movieArray={movieArray} genreArray={genreArray} />
      </div>

      <PageIndexSelector pageIndex={pageIndex} handlePage={handlePage} />
    </div>
  );
};

export default Moviepage;
