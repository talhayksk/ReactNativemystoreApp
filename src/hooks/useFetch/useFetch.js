import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const {data: resposeData} = await axios.get(url);
      setData(resposeData);
      setLoading(false);
    } catch (err) {
      setError(err.messeage);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {error, loading, data};
}
export default useFetch;
