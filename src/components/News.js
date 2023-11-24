import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Load from "./Load";

const News = (props) => {
  const { country, category, setProgress } = props;
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const pageSize = 15;

  const fetchData = async (page) => {
    setLoading(true);
    try {
      setProgress(0);
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&page=${page}&pageSize=${pageSize}&apiKey=612fee4b5a644752b7b2df4a98d2e8b5`
      );
      const json = await res.json();
      setProgress(30);
      if (json.articles && json.articles.length > 0) {
        setArticles((prevArticles) => [...prevArticles, ...json.articles]);
        setTotalResults(json.totalResults);
      } else {
        console.error("No articles found in the response");
      }
    } catch (error) {
      console.error("Error fetching news data:", error);
    } finally {
      setProgress(100);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, country, category, setProgress]);

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <div className="text-center">
      <h1 className="mb-4">{`Top ${category}`}</h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={handleNextClick}
        hasMore={currentPage < totalPages}
        loader={<Load />}
      >
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {articles.map((article, index) => (
            <NewsItem
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              content={article.content}
              imageURL={article.urlToImage}
              publishedAt={article.publishedAt}
              source={article.source.name}
              author={article.author}
            />
          ))}
        </div>
      </InfiniteScroll>

      <div className="container d-flex justify-content-between mb-4">
        {/* <button
          type="button"
          className="btn btn-danger"
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        >
          Previous
        </button> */}
        {/* <button
          type="button"
          className="btn btn-danger"
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
        >
          Next
        </button> */}
      </div>

      {/* <p>currentPage: {currentPage}</p>
      <p>Total Pages: {totalPages}</p> */}
      <p>Total Articles: {totalResults}</p>
    </div>
  );
};

export default News;
