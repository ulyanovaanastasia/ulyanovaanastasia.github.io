import React from 'react';
import Article from './Article';
import articles from '../articles'

function App() {
	return(
		<div>
			<Article article = {articles[0]}/>
		</div>
	)
}

export default App;