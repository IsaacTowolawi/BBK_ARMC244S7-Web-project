
import React from 'react'

function AnimeProfile ({anime}) {
	return (
		<article className="anime-profile">
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img className="anime-profile-card"
						src={anime.image_url} 
						alt="Anime Profile" />
				</figure>
				<h3>{ anime.title }</h3>
			</a>
		</article>
	)
}

export default AnimeProfile