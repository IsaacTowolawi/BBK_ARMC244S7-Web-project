import React from "react"
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom"
import { useState} from 'react'
import { Header } from "./components/Header"
import { AnimeBase } from './components/AnimeBase'
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { Forms} from "./components/forms/Forms"
import { About } from "./components/About"
import anime_relax from "./imgs/anime_relax.mp4"
import "./components/forms/Forms.css"
import "./css/App.css"
import "./css/Video.css"
import "./css/AnimeBase.css"
import "./css/About.css"

function App() {
	const [animeList, SetAnimeList] = useState ([])
	const [search, SetSearch] = useState ("")


	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search)
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());

		SetAnimeList(temp.results);
	}
	

	return (
		<div className="App">
			<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Router>
			<Navbar/>
			<Header/>
			<video
			id="background-video"
			autoPlay
			loop
			muted>
				<source src={anime_relax} type="video/mp4" />
			</video>
			<Switch>
			<Route exact path="/forms">
				<Forms />
			</Route>
			<Route exact path="/about">
				<About />
			</Route>
			<Route exact path="/">
				<Home />
			</Route>
			
			<div className="content-wrap">
				<Route>
				<AnimeBase
				HandleSearch={HandleSearch}
				search={search}
				SetSearch={SetSearch}
				animeList={animeList}/>
				</Route>
			</div>
			</Switch>	
			</Router>
			</BrowserRouter>
		</div>
		
	);
}

export default App;
