import { useState, useEffect } from 'react';

export default function usePageinate() {
  const [pageInateData, setPageInateData] = useState([]);

  useEffect(() => {
    const pageCount = Math.ceil(arr.length / itemsPerPage);
    const pageInated = [];

    for (let i = 0; i < pageCount; i++) {
      const start = itemsPerPage * i;
      pageInated.push(arr.slice(start, start + itemsPerPage));
    }
  });
}
