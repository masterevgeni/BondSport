import { useState, useEffect } from 'react';
import { SWAPIResponse } from '../types/swapiResponse';
import { FetchStateProps } from '../types/fetch';

const baseUrl = 'https://swapi.dev/api/';

const useFetch = <T>(prefix: string, params: string | null): FetchStateProps<SWAPIResponse<T>> => {

  const [data, setData] = useState<SWAPIResponse<T> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(baseUrl + prefix + params);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result: SWAPIResponse<T> = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return { data, loading, error };
};

export default useFetch;