import React, { useEffect, useState } from 'react'
import axios from 'axios';

let TopList = () => {

    let [films, setFilms] = useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=983f3e96180506efedcc399913bb2fab&language=en-US&page=1')
            .then(res => {
                setFilms(res.data.results);
            })
    }, [])



    return (
        <div className="popular">

            {films && films.map(f => {
                return (
                    <div className="conn" key={f.id}>
                        <div className="name">Name: {f.title}</div>
                        <div className="name">Release Date: {f.release_date}</div>
                        <div className="name">Popularity: {f.popularity}</div>
                        <div className="name">Overview: {f.overview}</div>
                    </div>
                )
            })
            }




        </div>
    )
}

export default TopList;