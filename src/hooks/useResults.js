import React, { useState, useEffect } from 'react';
import zomato from '../api/zomato';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await zomato.get('/search', {
        params: {
          start: 7,
          count: 20,
          entity_id: 6,
          entity_type: 'city',
          q: searchTerm
        }
      });
      setResults(response.data.restaurants);
    } catch (e) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('biryani');
  }, []);

  return [searchApi, results, errorMessage];
};
