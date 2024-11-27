import { useEffect, useState } from "react";

const useFreeDishes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/data/free-dishes.json`);
        const result = await res.json();

        setData(result?.data || []);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFreeDishes;