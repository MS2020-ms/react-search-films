import React, { useState } from 'react'

import placeholderImg from './placeholder.png'
import { ReactComponent as ChevronLeft } from './chevron-left.svg'
import { ReactComponent as ChevronRight } from './chevron-right.svg'
import Header from "./components/Header";
import './App.css'

const BASE_URL = process.env.REACT_APP_IMDB_BASE_URL;
const API_KEY = process.env.REACT_APP_IMDB_API_KEY;

let count = 1;

export default function SearchMovies() {

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchResult, setSearchResult] = useState()


  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `${BASE_URL}${API_KEY}=${query}&page=${count}`;

    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data.Search)
      setMovies(data.Search)

      if (!searchResult) {
        setSearchResult(data)
      }

    } catch (err) {
      console.error(err)
    }

  }

  const handleNext = async () => {
    count++;

    const url = `${BASE_URL}${API_KEY}=${query}&page=${count}`;

    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.Search)

      if (!searchResult) {
        setSearchResult(data)
      }
    } catch (err) {
      console.error(err)
    }

    return count;
  }

  const handlePrev = async () => {
    while (count > 1) {
      count--;

      const url = `${BASE_URL}${API_KEY}=${query}&page=${count}`;

      try {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.Search)

        if (!searchResult) {
          setSearchResult(data)
        }
      } catch (err) {
        console.error(err)
      }
      return count;
    }
  }

  return (

    <div className="App">

      <Header text="BLAFILMS" />

      <div>
        <form className="form" onSubmit={searchMovies}>
          <div className="search">
            <input
              className="input"
              type="text"
              name="query"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)} />
            <button className="button" type="submit">Search</button>
          </div>
        </form>
      </div>

      {!searchResult ? (
        <p className="advice">No results yet</p>
      ) : (

          <div className="search-results">
            <div className="chevron" onClick={handlePrev}>
              <ChevronLeft />
            </div>
            <div className="search-results-list">
              {movies.map(movie => (
                <div className="search-item">
                  <img className="card-img"
                    src={movie.Poster === 'N/A' ? placeholderImg : movie.Poster}
                    alt={`The movie titled: ${movie.Title}`} />
                  <div className="search-item-data">
                    <div className="title">{movie.Title}</div>
                    <div className="meta">{`${movie.Type} | ${movie.Year}`}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="chevron" onClick={handleNext}>
              <ChevronRight />
            </div>
          </div>

        )}
    </div >
  )
}
