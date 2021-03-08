import { useEffect, useState } from "react";

export default function useFetchData(url: any) {
  const [loading, setLoading] = useState<Boolean>(false);
  const [response, setReponse] = useState<any>([]);
  const [error, setError] = useState<any>("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const apiResponse = await fetch(url);
      if (apiResponse.ok) {
        setReponse(await apiResponse.json());
      } else {
        setError(await apiResponse.json());
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return { loading, response, error };
}
