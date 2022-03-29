import React, { useState } from 'react'
import style from './../style/style.module.css'
import axios from 'axios';

export default function Home() {
    const [movies, setMovies] = useState('')
    const [series, setSeries] = useState('')
    function fetch(e) {
        axios.get(`http://www.omdbapi.com/?s=${e.target.value}&apikey=b0b4bfb6&type=movie`)
            .then(res => {
                setMovies(res.data.Search)
            })
            .catch(err => {
                console.log(err)
            })
            axios.get(`http://www.omdbapi.com/?s=${e.target.value}&apikey=b0b4bfb6&type=series`)
            .then(res => {
                setSeries(res.data.Search)
            })
            .catch(err => {
                console.log(err)
            })
            console.log(movies, series)
    }
  return (
    <div>
        <header className={style.header}>
            <h2> MyTestApp</h2>
        </header>
        <div className={style.intro}>
           <p> Watch <br /> Something <br /> Incredible </p>
        </div>
        <div className={style.search}>
            <label htmlFor="">
                Search
            </label>
            <input type="text" onChange={fetch}/>
        </div>
        <div className={style.categories}>
            <h3>Movies</h3>
            <div>{
                (Array.isArray(movies)) &&
                movies.map((el) => {
                    return <nav style={{background: `url(${el.Poster})`}}> <p> {el.Title} </p></nav>
                })
                }
            </div>
        </div>
        <div className={style.categories}>
            <h3>Series</h3>
            <div>{
                (Array.isArray(series)) &&
                series.map((el) => {
                    return <nav style={{background: `url(${el.Poster})`}}> <p> {el.Title} </p> </nav>
                })
                }
            </div>
        </div>
    </div>
  )
}
