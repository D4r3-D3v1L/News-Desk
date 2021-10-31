import * as React from "react";
import "./Newscard.css";

const NewsCard = ({ article }) => {
	return (
		<div className="newscard">
			<img
				className="card_image"
				src={article.urlToImage}
				alt={article.title}
			/>
			<div className="card_style">
				<div>
					<span className="card_title">
						{article.title.split("-")[0]}
					</span>
					<br />
					<span className="datetime">{article.p}</span>
				</div>
				<div className="card_text">
					<div className="card_desc">{article.description}</div>
					<span className="original_link">
						Source{" "}
						<a href={article.url} target="_blank">
							{article.source.name}
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
