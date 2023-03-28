import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  });

  return <div>PageNotFound</div>;
}
