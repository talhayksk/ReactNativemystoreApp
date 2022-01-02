import {useState, useEffect} from 'react';
import axios from 'axios';

function usePost() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const postData = async (url,apiData) => {
    try {
      setLoading(true);

      const {data: resposeData} = await axios.post(url,apiData);
      setData(resposeData);
      setLoading(false);

    } catch (err) {
      setError(err.messeage);
      setLoading(false);
    }
  };
 
  return {error, loading, data,postData};
}
export default usePost;