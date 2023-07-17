import { useState, useEffect } from 'react';

const useFetch = (url) => {
  //state to store data fetched from url
  const [data, setData] = useState([]);
  //state to store loading status
  const [loading, setLoading] = useState(true);

  //function to fetch data from url
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  //useEffect hook to fetch data when component is mounted
  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  //the useFetch function return an object that contains the data and loading state
  return { data, loading };
}

export default useFetch;