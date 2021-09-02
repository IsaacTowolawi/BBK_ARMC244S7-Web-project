import React from 'react'
import AnimeProfile from './AnimeProfile';

export const AnimeBase = (props) => {
	return (
		<main>
			<header>
			<div className="main-head">
				<form 
					className="search-box"
					onSubmit={props.HandleSearch}>
                    <h4 className="hwrap">
                Search For your faviourte anime 😊
            		</h4>
					<input 
						type="search"
						placeholder="Search for an anime..."
						required
						value={props.search}
						onChange={e => props.SetSearch(e.target.value)}/>
				</form>
			</div>
			<section>
			<div className="anime-list">
				{props.animeList.map(anime => (
					<AnimeProfile
						anime={anime}
						key={anime.mal_id} />
				))}
			</div>
			</section>
			</header>
		
		</main>
		
	)
}

export default AnimeBase