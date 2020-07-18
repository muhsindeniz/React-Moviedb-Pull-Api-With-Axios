## Moviedb Api pull

We extracted data from Moviedb APIs using Hooks useState, useEffect, Axios, Map. We brought the data with the map loop.
<br><br>
<b>cd moviedbaxios</b><br>
<b>npm install</b><br>
<b>npm build</b><br>
<b>npm start</b><br><br>

<b>||<br><br>

<b>yarn install</b><br>
<b>yarn build</b><br>
<b>yarn start</b><br>

You can stand up the project with.<br><br>

    import React, { useEffect, useState } from 'react'
		import axios from 'axios';
		
		let PopularMovie = () => {
		
		let [films, setFilms] = useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=983f3e96180506efedcc399913bb2fab')
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
	export default PopularMovie;


		
