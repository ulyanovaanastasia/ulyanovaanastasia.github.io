import React from 'react';

function Article(props) {
	const article = props.article;
	const body = <section>{article.text}</section>;
	return(
		<div className="article">
			<h2>{article.header}</h2>
			<button onClick={handleClick}>close</button>
			{body}
			<h3>Creation Date: {(new Date()).toDateString()}</h3>
		</div>
	);
}
function handleClick() {
	console.log("click");
}

export default Article;