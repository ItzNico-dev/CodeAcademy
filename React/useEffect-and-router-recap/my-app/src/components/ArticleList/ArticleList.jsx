import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from '../Article/Article';

export default function ArticleList({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${category}&from=2023-03-18&sortBy=publishedAt&apiKey=3c205655ba6844a5bdf123d80d98de51`
      )
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {articles.map(() => (
        <Article />
      ))}
    </div>
  );
}
