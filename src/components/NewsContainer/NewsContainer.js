import React from "react";
import Container from "@mui/material/Container";
import NewsCard from "../NewsCard";

const NewsContainer = ({ totalCount, totalResults }) => {
	return (
		<Container maxWidth="md">
			<div className="main_container">
				{totalResults.map((article) => (
					<NewsCard article={article} key={article.title} />
				))}
			</div>
		</Container>
	);
};

export default NewsContainer;
