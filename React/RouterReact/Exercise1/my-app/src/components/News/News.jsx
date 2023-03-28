import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function News() {
  const NEWS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(NEWS_ENDPOINT)
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      {news.map((item) => {
        return (
          <div key={item.id}>
            <h5>{item.title}</h5>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}
