import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Article from '../../Article/Article';

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef();

  const lastArticleRef = (element) => {
    observerRef.current = new IntersectionObserver((entries) => {
      if (loading) {
        return;
      }

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      if (entries[0].isIntersecting) {
        setPage((prev) => ++prev);
      }
    });
    if (element) {
      observerRef.current.observe(element);
    }
  };

  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}&pageSize=10&page=${page}`
      )
      .then((response) => {
        setArticles((prev) => [...prev, ...response.data.articles]);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [category, page]);

  return (
    <div>
      {articles.map((article, index) => {
        if (index + 1 === articles.length) {
          return (
            <div ref={lastArticleRef} key={index}>
              <Article article={article} key={index} />;
            </div>
          );
        } else {
          return (
            <div key={index}>
              <Article article={article} key={index} />;
            </div>
          );
        }
      })}
    </div>
  );
}
