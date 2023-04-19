import React from 'react';

export default function Article({ article }) {
  return (
    <div>
      <p>Author: {article.author}</p>
      <h4>{article.title}</h4>
      <img src={article.urlToImage} alt='' />
      <p>{article.content}</p>
    </div>
  );
}
