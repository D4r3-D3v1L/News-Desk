import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NewsContainer from "./components/NewsContainer/NewsContainer";

function App() {
	const [category, setCategory] = useState("general");
	const [totalResults, setTotalResults] = useState([]);
	const [totalCount, setTotalCount] = useState(0);

	console.log(category);

	const ReqApi = async () => {
		try {
			const news_response = await axios.get(
				`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`
			);
			console.log(news_response);
			setTotalResults(news_response.data.articles);
			setTotalCount(news_response.data.totalResults);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		ReqApi();
		// eslint-disable-next-line
	}, [category]);
	return (
		<div className="App">
			<Navbar setCategory={setCategory} />

			<NewsContainer
				totalCount={totalCount}
				totalResults={totalResults}
			/>
		</div>
	);
}

export default App;
